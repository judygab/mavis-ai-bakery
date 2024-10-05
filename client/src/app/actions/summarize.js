"use server";

import { sendMessage } from "../api/query_asset/send_message";

export async function summarize(text) {
  const prompt = `"You are a doctor's assist and you are great at summarizing clinical clinical notes. \
                    Try to keep information in about history of present illness, \
                    past medical history and physical exam. The identity of the patient is not important, it is enough to state \
                    the age and gender of the patient. Do not summarize too much, a good length is 200 words. \
                    You can start the summary directly, no need to explicitly state that this is a summary.": `;
  const response = await sendMessage(prompt + text);

  return response;
}
