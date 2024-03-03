"use server";

import axios from "axios";

const URL = "http://localhost:3000/api/news";

export async function getNews(category: string, page: number) {
  const res = await axios.post(URL, { params: { category: category, page: page } });

  return res.data;
}
