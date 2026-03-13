export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, phone, email, dateNeeded, taskType, location, budget, message } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ error: 'Full name and email are required' });
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

  const projectId  = 'x0qx8kpt';
  const dataset    = 'production';
  const apiVersion = '2021-06-07';
  const token      = process.env.SANITY_WRITE_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'Server misconfiguration: missing token' });
  }

  const sanityRes = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`,
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
    return res.status(500).json({ error: 'Failed to save submission' });
  }

  return res.status(200).json({ success: true });
}
