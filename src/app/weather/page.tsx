'use server'

import { WeatherCard } from "@/components/WeatherCard";
import { WeatherSearch } from "@/components/WeatherSearch";

import { postWeatherData, fetchWeatherData } from "./actions";

export default async function Weather() {
  const data = await fetchWeatherData()
  
  return (
    <>
      <section className="flex p-4 h-full">
        <aside className="min-h-full bg-red-300">
          <WeatherSearch handleSearch={postWeatherData}/>
        </aside>
        <WeatherCard weatherData={data}/>
      </section>
    </>
  );
}
