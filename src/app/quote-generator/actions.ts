import axios from "axios";

const URL = "/api/quote-generator";

export async function getQuote() {
  const res = await axios.get(URL);

  return res.data[0];
}
