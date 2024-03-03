"use server";

import { WeatherCard } from "@/components/WeatherCard";
import { WeatherSearch } from "@/components/WeatherSearch";

import { postWeatherData, fetchWeatherData } from "./actions";

export default async function Weather() {
  const data = await fetchWeatherData();

  return (
    <>
      <section className="flex p-4 h-full rounded-md">
        <aside className="bg-gray-800 text-white">
          <WeatherSearch handleSearch={postWeatherData} />
        </aside>
        <WeatherCard weatherData={data} />
      </section>
    </>
  );
}
