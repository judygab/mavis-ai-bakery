import { NextResponse } from "next/server";
import { Settings, Client } from "bagelml";
import { sendMessage } from "./send_message";

// Settings config
const settings = new Settings({
  bagel_api_impl: "rest",
  bagel_server_host: "api.bageldb.ai",
});

export async function POST(req) {
  const data = await req.json();
  // Create Bagel client
  const client = new Client(settings);
  const api_key = process.env.API_KEY;
  const asset_id = process.env.BAGEL_ASSET_ID;
  const payload = {
    where: {
      // category: "Cat2",
    },
    where_document: {
      // is_published: true,
    },
    // query_embeddings: [em],
    n_results: 1,
    include: ["metadatas", "documents", "distances"],
    query_texts: ["enteritis"],
    padding: false,
  };
  const res = await client.query_asset(asset_id, payload, api_key);
  const documents = res.documents;
  const document = documents[0];
  const prompt = "indentify the right code";

  // Send message to OpenAI
  // const response = await sendMessage(prompt + JSON.stringify(document));

  return NextResponse.json({ data: document });
}
