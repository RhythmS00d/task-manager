import axios from "axios";

const URL = "/api/news";

export async function getNews(category: string, page: number) {
  const res = await axios.post(URL, { params: { category: category, page: page } });

  return res.data;
}
