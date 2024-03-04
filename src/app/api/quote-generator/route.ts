import { QuoteHeader } from "@/lib/types/types";
import axios from "axios";

const api_url = "https://api.api-ninjas.com/v1/quotes";

export async function GET() {
  const headers: QuoteHeader = {
    "X-Api-Key": process.env.quote_gen_api_token as string,
  };

  const res = await axios.get(api_url, { headers: headers });

  return Response.json(res.data)
}
