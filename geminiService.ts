
import { GoogleGenAI, Type } from "@google/genai";

// Always use the recommended initialization with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPromptAdvice = async (userIdea: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are "Kru Den", a fun and inspiring AI Workshop Facilitator for Grade 9 students (M.3). 
      The student has this web app idea: "${userIdea}".
      
      Your goal is to help them create a "Magic Prompt" to use in AI Studio/Gemini that will generate high-quality, 
      SINGLE-FILE HTML/CSS/JS code that is less likely to have errors for a beginner.
      
      In your response:
      1. Provide a "Magic Prompt" that is extremely detailed, asking for a professional-looking, mobile-responsive single index.html file. 
      2. Instruct the AI to use internal CSS/JS and reliable CDNs (like Tailwind CSS) so the student doesn't need to manage multiple files.
      3. Give a short, encouraging message in Thai.
      4. List 3 key features that will make their app look "pro".
      
      Respond in JSON format as specified in the schema. Use Thai for 'message' and 'features'. The 'suggestedPrompt' should be in English (to get better code from LLMs) but explained simply.`,
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
              items: { type: Type.STRING },
              description: "Tips to avoid errors when using this prompt."
            }
          },
          required: ["message", "suggestedPrompt", "features", "proTips"]
        }
      }
    });

    // Directly access .text property from the response object
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
