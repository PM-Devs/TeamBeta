const Groq = require('groq-sdk');
require('dotenv').config(); // Make sure to install dotenv if not already done

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function summarizeAndImprove(userQuery) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an AI assistant that summarizes user queries, provides insights, and suggests improvements."
        },
        {
          role: "user",
          content: `Summarize the following query, provide insights, and suggest improvements: "${userQuery}"`
        }
      ],
      model: "llama3-70b-8192",
    });

    const response = chatCompletion.choices[0]?.message?.content || "";
    
    return {
      summary: extractSection(response, "Summary"),
      insights: extractSection(response, "Insights"),
      improvements: extractSection(response, "Improvements")
    };
  } catch (error) {
    console.error("Error in summarizeAndImprove:", error);
    throw error;
  }
}

function extractSection(text, sectionName) {
  const regex = new RegExp(`${sectionName}:\\s*(.+?)(?=\\n\\n|$)`, 's');
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

module.exports = {
  summarizeAndImprove
};