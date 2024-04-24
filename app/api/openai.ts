import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    if (req.body.model === "dall-e-3") {
      const { prompt, model, size } = req.body;
      try {
        const response = await openai.images.generate({
          prompt: prompt,
          model: model,
          size: size,
        });
        res.status(200).json(response.data);
      } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: "Failed to fetch response" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
