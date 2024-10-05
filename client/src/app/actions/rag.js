"use server";
import axios from "axios";

async function rag_query(text) {
  const requestBody = {
    query_text: text,
  };

  try {
    const response = await axios.post(`${process.env.LLM_API_URL}/rag`, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error making API call:", error);
    throw error;
  }
}

export { rag_query };
