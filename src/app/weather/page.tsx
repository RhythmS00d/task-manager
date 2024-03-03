// import { WeatherCard } from "@/components/WeatherCard";
// import { WeatherSearch } from "@/components/WeatherSearch";

// import { postWeatherData, fetchWeatherData } from "./actions";

// export default async function Weather() {
//   // ask user location, else return Sydney weather
//   // if(navigator.geolocation) {
//   //   console.log('granted')
//   // }
//   let data = await fetchWeatherData();

//   if (data.city === "") {
//     const initialWeather: FormData = new FormData();
//     initialWeather.set("lon", "");
//     initialWeather.set("lat", "");
//     initialWeather.set("city", "Sydney");
//     data = await postWeatherData(initialWeather);
//   }

//   return (
//     <>
//       <section className="flex p-4 h-full rounded-md">
//         <aside className="bg-gray-800 text-white">
//           <WeatherSearch handleSearch={postWeatherData} />
//         </aside>
//         <WeatherCard weatherData={data} />
//       </section>
//     </>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherSearch } from "@/components/WeatherSearch";
import { postWeatherData, fetchWeatherData } from "./actions";

export default function Weather() {
  const [data, setData] = useState(null);

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
    setData(weatherData); // Update state with new data
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="flex p-4 h-full rounded-md">
        <aside className="bg-gray-800 text-white">
          <WeatherSearch handleSearch={handleSearch} />
        </aside>
        <WeatherCard weatherData={data} />
      </section>
    </>
  );
}
