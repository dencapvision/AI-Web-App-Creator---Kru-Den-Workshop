
import { GoogleGenAI, Type } from "@google/genai";

// Always use the recommended initialization with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPromptAdvice = async (userIdea: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are "Kru Den", a fun and supportive AI Workshop Facilitator for Grade 9 students (M.3). 
      The student group has this web app idea: "${userIdea}".
      
      Your goal is to help them create a "Magic Prompt" that they can copy and paste into AI Studio to generate the code for their web app.
      
      Requirements for the Prompt you generate:
      1. Must specify "Vite.js + React + Tailwind CSS".
      2. Must request a modern, clean, and mobile-responsive UI.
      3. Must use Lucide-React for icons.
      4. The code should be contained mostly in App.tsx for simplicity for beginners.
      
      In your JSON response:
      - 'message': An encouraging message in Thai specifically for M.3 students.
      - 'suggestedPrompt': The technical prompt in English (e.g., "Create a Vite.js React application with Tailwind CSS for...").
      - 'features': 3 key features that will be included.
      - 'proTips': 2 quick tips on how to handle the code in Vite.
      
      Respond strictly in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            message: { type: Type.STRING },
            suggestedPrompt: { type: Type.STRING },
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            proTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["message", "suggestedPrompt", "features", "proTips"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
