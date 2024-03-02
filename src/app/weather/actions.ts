"use server";

const URL = "http://localhost:3000/api/weather";

export async function postWeatherData(formData: FormData) {
  //   await axios.post(URL);
}

export async function fetchWeatherData() {
  const res = await fetch(URL, {
    method: "GET",
  });

  return res.json();
}
