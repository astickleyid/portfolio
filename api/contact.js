module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, project, message } = req.body || {};

  if (!name || !email || !project || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const projectLabels = {
    'ai-integration': 'AI Integration / Claude API',
    'full-stack': 'Full-Stack Web or Mobile App',
    'automation': 'Business Automation',
    'saas': 'SaaS Product',
    'other': 'Other',
  };

  const emailBody = {
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'astickleyid@gmail.com',
    reply_to: email,
    subject: `New inquiry from ${name} — ${projectLabels[project] || project}`,
    text: [`Name: ${name}`, `Email: ${email}`, `Project type: ${projectLabels[project] || project}`, '', message].join('\n'),
    html: `
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
      <p><strong>Project type:</strong> ${esc(projectLabels[project] || project)}</p>
      <hr>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    `,
  };

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailBody),
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err.message);
    return res.status(500).json({ error: 'Internal error' });
  }
};

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
