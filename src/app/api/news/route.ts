import { NextRequest } from "next/server";

const api_url = "https://newsapi.org/v2/top-headlines";

export async function GET(req: NextRequest) {
  const api_key = process.env.news_api_token;
  const params = new URLSearchParams({
    apiKey: api_key as string,
    country: "au",
    category: req.nextUrl.searchParams.get("category") as string,
    pageSize: "10",
    page: req.nextUrl.searchParams.get("page") as string,
  });

  const url = api_url + `?${params.toString()}`;

  const resp = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  return Response.json(resp);
}
