import axios from "axios";
import { NextRequest } from "next/server";

const api_url = "https://newsapi.org/v2/top-headlines";

export async function POST(req: NextRequest) {
  const reqParams = await req.json();
  const api_key = process.env.news_api_token;
  const params = {
    apiKey: api_key,
    country: "au",
    category: reqParams.params.category,
    pageSize: 10,
    page: reqParams.params.page
  };

  const resp = await axios.get(api_url, { params: params });

  return Response.json(resp.data);
}
