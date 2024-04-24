import { OpenAI } from "openai";
export async function callDallE(prompt: string) {
  "use sever";
  console.log(process.env.OPENAI_API_KEY);
  const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });
  try {
    const response = await openai.images.generate({
      prompt: prompt,
      model: "dall-e-3",
      size: "1024x1024",
    });
    const image = response.data[0].url;
    return image;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
  }
}
