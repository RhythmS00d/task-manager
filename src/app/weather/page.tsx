"use client";

import { useEffect, useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherSearch } from "@/components/WeatherSearch";
import { postWeatherData, fetchWeatherData } from "./actions";
import { Weather } from "@/lib/types/types";

export default function Weather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchInitialData = async () => {
    let weatherData = await fetchWeatherData();

    if (weatherData.city === "") {
      const initialWeather = new FormData();
      initialWeather.set("city", "Sydney"); // Default to Sydney
      weatherData = await postWeatherData(initialWeather);
    }
    setData(weatherData);
  };

  const fetchLocationAndWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const formData = new FormData();
          formData.set("latitude", latitude.toString());
          formData.set("longitude", longitude.toString());
          formData.set("city", "");
          const weatherData = await postWeatherData(formData);
          setData(weatherData);
        },
        () => {
          // If user denies location access or an error occurs, fetch default data
          fetchInitialData();
        }
      );
    } else {
      // Geolocation is not supported by this browser, fetch default data
      fetchInitialData();
    }
  };

  useEffect(() => {
    fetchLocationAndWeather();
  }, []);

  const handleSearch = async (formData: FormData) => {
    const weatherData = await postWeatherData(formData);

    if (weatherData.error) {
      setError(weatherData.error);
      fetchInitialData();
    } else {
      setError(null)
      setData(weatherData);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="flex p-4 h-full rounded-md">
        <aside className="bg-gray-800 text-white">
          <WeatherSearch handleSearch={handleSearch} error={error} />
        </aside>
        <WeatherCard weatherData={data} />
      </section>
    </>
  );
}
