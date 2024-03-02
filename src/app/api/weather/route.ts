import axios from "axios";

import { Weather } from "@/lib/types/types";
import { NextRequest, NextResponse } from "next/server";
import { weatherDataParser } from "@/lib/parser/parser";

let weatherData: Weather = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: "Rain",
  temp: {
    main: 0,
    min: 0,
    max: 0,
    humidity: 0,
    visibility: "",
  },
  wind: 0,
};

const api_url = "http://api.openweathermap.org/data/2.5/weather?";

export async function GET() {
  return Response.json(weatherData);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const params = await req.json();
  const API_KEY = process.env.weather_api_token;

  const param = `lat=${params.lat}&lon=${params.lon}&q=${params.q}&APPID=${API_KEY}`;

  const resp = await axios.get(api_url + param);

  weatherData = weatherDataParser(resp.data);
  console.log(weatherData);

  return Response.json({ success: "Weather updated!" });
}
