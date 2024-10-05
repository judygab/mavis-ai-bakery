import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

export const sendMessage = async (prompt, message) => {
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0,
  });

  const response = await model.invoke([new HumanMessage({ content: prompt + message })]);

  return response.content;
};
