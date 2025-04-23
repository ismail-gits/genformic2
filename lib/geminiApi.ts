// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
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
        text: `INSERT_INPUT_HERE`,
      },
    ],
  },
];

export default async function fetchAiResponse(prompt: string) {
  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  if (!response.text) {
    console.error("No text in gemini response");
    return null;
  }

  return JSON.parse(response.text);
}
