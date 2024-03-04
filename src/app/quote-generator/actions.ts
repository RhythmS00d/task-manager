import axios from "axios";

const URL = "/api/quote-generator";

export async function getQuote() {
  const res = await axios.post(URL);
  console.log(res.data)
  return res.data[0];
}
