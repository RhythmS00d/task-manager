"use server";

import { Params } from "@/lib/types/types";
import axios from "axios";

const URL = "http://localhost:3000/api/weather";

export async function postWeatherData(formData: FormData) {
  const params: Params = {
    lon: formData.get("longitude") as string,
    lat: formData.get("latitude") as string,
    q: formData.get("city") as string,
  };

  const res = await axios.post(URL, params);

  // revalidatePath("/weather");

  return res.data;
}

export async function fetchWeatherData() {
  const res = await axios.get(URL);

  return res.data;
}
