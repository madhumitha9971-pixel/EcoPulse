module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(503).json({
      error: "AI model is not configured"
    });
  }

  const body = req.body || {};

  const question =
    typeof body.question === "string"
      ? body.question.slice(0, 1200)
      : "";

  const context =
    body.context && typeof body.context === "object"
      ? body.context
      : {};

  if (!question.trim()) {
    return res.status(400).json({
      error: "A question is required"
    });
  }

  const systemPrompt = `
You are EcoPulse's energy decision-support assistant.

EcoPulse is a simulated Indian neighbourhood microgrid.

Explain the energy situation clearly.
Use only the supplied context.
Give one practical recommendation.
Keep the answer below 100 words.

Never claim real sensors, utility control, payments
or physical energy transfers are connected.

Clearly distinguish estimates from real measurements.

Current simulated context:
${JSON.stringify(context)}
`;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.25,
          max_tokens: 220,
          messages: [
            {
              role: "system",
              content: systemPrompt
            },
            {
              role: "user",
              content: question
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        error: "AI provider request failed"
      });
    }

    return res.status(200).json({
      reply:
        data.choices?.[0]?.message?.content ||
        "No response returned."
    });

  } catch (error) {
    return res.status(500).json({
      error: "Unable to reach AI provider"
    });
  }
};