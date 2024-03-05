import axios from "axios";

const URL = "/api/news";

export async function getNews(category: string, page: number) {
  const res = await axios.get(URL, {
    params: { category: category, page: page },
  });

  console.log(res.data);

  return res.data;
}
