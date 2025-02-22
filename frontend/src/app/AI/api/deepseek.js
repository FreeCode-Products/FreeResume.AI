export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }
  console.log(process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY)
    try {
        const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("DeepSeek API error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
