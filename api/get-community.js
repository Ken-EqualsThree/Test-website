export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const projectId  = 'x0qx8kpt';
  const dataset    = 'production';
  const apiVersion = '2024-01-01';

  const query = encodeURIComponent(`
    *[_type == "communityPage" && _id == "communityPage"][0]{
      heroHeadline,
      heroSubheadline,
      heroStats,
      "neighborhoods": neighborhoods[]->{
        _id, name, city, memberCount, taskCount, badge
      },
      "testimonials": testimonials[]->{
        _id, quote, author, role, tag, initials,
        "avatarUrl": avatar.asset->url
      },
      "ambassadors": ambassadors[]->{
        _id, name, area, bio, initials, membersOnboarded, yearsWithEtion,
        "avatarUrl": avatar.asset->url
      },
      ctaHeadline,
      ctaSubheadline
    }
  `);

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

  try {
    const sanityRes = await fetch(url);
    if (!sanityRes.ok) throw new Error(`Sanity responded with ${sanityRes.status}`);
    const data = await sanityRes.json();
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.status(200).json(data.result || null);
  } catch (err) {
    console.error('get-community error:', err);
    return res.status(500).json({ error: err.message });
  }
}
