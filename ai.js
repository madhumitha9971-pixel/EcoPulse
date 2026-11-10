// Vercel serverless function: proxies to Groq (open-source Llama). Key stays server-side.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const key = process.env.GROQ_API_KEY;
  if (!key) return res.status(500).json({ error: 'GROQ_API_KEY missing' });
  const { messages = [], context = {}, lang = 'English' } = req.body || {};
  const system = `You are EcoPulse AI, an energy advisor for an Indian neighbourhood solar microgrid with peer-to-peer trading. Use ONLY the live data below. Answer in under 70 words, give one concrete action with the hour and the rupee impact. Always reply in ${lang}.\nLIVE DATA: ${JSON.stringify(context)}`;
  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({ model: 'llama-3.3-70b-versatile', temperature: 0.3, max_tokens: 220,
        messages: [{ role: 'system', content: system }, ...messages.slice(-6)] })
    });
    const j = await r.json();
    res.status(200).json({ reply: j.choices?.[0]?.message?.content || 'No reply' });
  } catch (e) { res.status(500).json({ error: String(e) }); }
};
