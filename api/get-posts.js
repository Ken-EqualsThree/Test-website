export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const projectId  = 'x0qx8kpt';
  const dataset    = 'production';
  const apiVersion = '2024-01-01';

  const query = encodeURIComponent(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, category, author, excerpt, publishedAt, featured,
      "thumbnailUrl": coverImage.asset->url
    }`
  );

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

  try {
    const sanityRes = await fetch(url);
    if (!sanityRes.ok) throw new Error(`Sanity responded with ${sanityRes.status}`);
    const data = await sanityRes.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(data.result || []);
  } catch (err) {
    console.error('get-posts error:', err);
    return res.status(500).json({ error: err.message });
  }
}
