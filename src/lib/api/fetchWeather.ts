import axios from "axios";

const api_url = "http://api.openweathermap.org/data/2.5/weather?";

type Params = {
  lat?: string;
  lon?: string;
  q?: string;
};

export async function fetchWeather({ lat, lon, q }: Params) {
  const API_KEY = process.env.weather_api_token;
  const params = `lat=${lat}&lon=${lon}&q=${q}&APPID=${API_KEY}`;

  const resp = await axios.get(api_url + params);

  return resp.data;
}
