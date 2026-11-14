export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, gridContext } = req.body || {};
  const userQuestion = prompt || "Summarize current neighbourhood energy status.";
  const apiKey = process.env.GROQ_API_KEY;

  const contextSummary = gridContext
    ? `Live Microgrid State: Scenario=${gridContext.scenario}, SolarGen=${gridContext.totalGenKw}kW, Demand=${gridContext.totalDemandKw}kW, LifelineLocked=${gridContext.totalLockedLifelineKwh}kWh, P2PCleared=${gridContext.clearedP2PKw}kW, Savings=₹${gridContext.hourlySavingsINR}/hr.`
    : "Live Microgrid State: Lifeline-First Routing active, 100% critical medical backup protected.";

  // Fallback response if GROQ_API_KEY is not configured or rate-limited
  const fallbackReply = `⚡ EcoPulse Grid Intelligence (${gridContext?.scenario || 'ACTIVE'}): Currently generating ${gridContext?.totalGenKw || '18.4'} kW against ${gridContext?.totalDemandKw || '15.3'} kW neighbourhood demand. Lifeline-First Protocol has locked ${gridContext?.totalLockedLifelineKwh || '14.0'} kWh in non-negotiable battery reserves for critical care households before clearing ${gridContext?.clearedP2PKw || '4.2'} kW in local P2P trades (saving ₹${gridContext?.hourlySavingsINR || '13.86'}/hr vs utility tariffs).`;

  if (!apiKey) {
    return res.status(200).json({ reply: fallbackReply, source: "edge-fallback" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `You are the EcoPulse AI Energy Advisor. Answer concisely in 2-3 sharp, data-backed sentences. Always prioritize "People Before Price" (Lifeline-First Routing). Current Telemetry: ${contextSummary}`
          },
          { role: "user", content: userQuestion }
        ],
        temperature: 0.3,
        max_tokens: 180
      })
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || fallbackReply;
    return res.status(200).json({ reply, source: "groq-llama3" });
  } catch (error) {
    return res.status(200).json({ reply: fallbackReply, source: "resilient-fallback" });
  }
}
