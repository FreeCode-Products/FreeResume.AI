"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const fetchDeepSeekResponse = async () => {
    console.log(process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY);
    try {
      // const response = await fetch(
      //   "https://api.deepseek.com/v1/chat/completions",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
      //     },
      //     body: JSON.stringify({
      //       model: "deepseek-chat",
      //       messages: [{ role: "user", content: input }],
      //       max_tokens: 500,
      //     }),
      //   }
      // );

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTERAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o',
          messages: [
            {
              role: 'user',
              content: input,
            },
          ],
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      console.log(data);
      setResponse(
        data?.choices?.[0]?.message?.content || "No response received."
      );
    } catch (error) {
      console.error("DeepSeek API Error:", error);
      setResponse("Error fetching response.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">DeepSeek API with Next.js</h1>
      <textarea
        className="border p-2 w-80 h-20"
        placeholder="Enter your prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={fetchDeepSeekResponse}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Get Response
      </button>
      {response && (
        <div className="mt-4 p-4 border rounded w-80 bg-gray-100">
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}
