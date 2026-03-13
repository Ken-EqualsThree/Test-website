/**
 * serve.mjs — Simple static file server
 * Usage: node serve.mjs [port]
 * Serves the project root at http://localhost:3000 (default)
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.argv[2] || '3000', 10);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

async function handleSubmitTask(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  let body = '';
  for await (const chunk of req) body += chunk;
  const { fullName, phone, email, dateNeeded, taskType, location, budget, message } = JSON.parse(body);

  if (!fullName || !email) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Full name and email are required' }));
    return;
  }

  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Server misconfiguration: missing SANITY_WRITE_TOKEN' }));
    return;
  }

  const doc = {
    _type: 'taskSubmission',
    fullName,
    phone:       phone       || null,
    email,
    dateNeeded:  dateNeeded  || null,
    taskType:    taskType    || null,
    location:    location    || null,
    budget:      budget      || null,
    message:     message     || null,
    submittedAt: new Date().toISOString(),
  };

  const sanityRes = await fetch(
    'https://x0qx8kpt.api.sanity.io/v2021-06-07/data/mutate/production',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations: [{ create: doc }] }),
    }
  );

  if (!sanityRes.ok) {
    const text = await sanityRes.text();
    console.error('Sanity error:', text);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to save submission' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ success: true }));
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  if (urlPath === '/api/submit-task') {
    handleSubmitTask(req, res).catch(err => {
      console.error('API error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    });
    return;
  }

  let filePath = urlPath === '/' ? '/index.html' : urlPath;
  filePath = path.join(__dirname, filePath);

  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Not found: ${urlPath}`);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
