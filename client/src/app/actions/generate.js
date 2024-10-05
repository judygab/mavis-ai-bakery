"use server";
import axios from "axios";

async function generate(text) {
  const requestBody = {
    clinical_note_summary: text,
  };

  try {
    const response = await axios.post(`${process.env.LLM_API_URL}/generate`, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error making API call:", error);
    throw error;
  }
}

export { generate };
