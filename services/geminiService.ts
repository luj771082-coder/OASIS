import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: The API key is assumed to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview'; 
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: `You are a world-class expert researcher in Ecology, specifically focusing on "Oasis Desertification". 
        Your goal is to explain complex scientific concepts to a general audience in a professional, insightful, and "high-end" academic tone.
        Keep your answers concise (under 200 words unless asked for more), optimistic but realistic, and formatted with clear paragraphs.
        If asked about trends, mention global warming, water resource management, and remote sensing technology.
        `,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, but I could not generate a response at this time.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to fetch response from AI service.");
  }
};