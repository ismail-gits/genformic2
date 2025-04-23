"use server";

import { GoogleGenAI } from "@google/genai";

export async function fetchAiResponse(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!,
  });
  const config = {
    responseMimeType: "application/json",
  };
  const model = "gemini-2.5-flash-preview-04-17";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  try {
    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    if (!response.text) {
      throw new Error("No text in Gemini response");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini Server Action Error:", error);
    throw new Error("Failed to fetch AI response");
  }
}
