import Image from "next/image";
import { Weather } from "@/lib/types/types";

//import icons
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { Suspense } from "react";

export function WeatherCard({ weatherData }: { weatherData: Weather }) {
  const images: { [key: string]: string } = {
    Rain: "/rain.jpg",
    Clouds: "/clouds.jpg",
    Clear: "/clear.jpg",
    Thunder: "/thunder.jpg",
    Hail: "/hail.jpg",
    Smoke: "/smoke.jpg",
    Mist: "/mist.jpg",
    Fog: "/fog.jpg",
  };

  return (
    <section className="relative text-white">
      <Suspense fallback={<h1>Loading....</h1>}>
        <Image
          src={images[weatherData.weather]}
          alt={weatherData.weather + " pic"}
          width={2000}
          height={2000}
          className="min-w-full h-[600px] opacity-85 bg-contain bg-no-repeat"
        />
        <ul className="absolute bottom-10 p-4 flex flex-col gap-2">
          <li className="text-4xl font-semibold flex gap-2 items-center justify-center">
            {weatherData.city}
            <figure>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
                alt=""
                width={50}
                height={50}
                className="bg-center"
              ></Image>
            </figure>
          </li>
          <li className="text-2xl font-semibold">
            {weatherData.weather} <span>{weatherData.temp.main}</span>
            <sup>&deg;</sup>
          </li>
          <li>
            <dl className="flex items-center gap-3">
              <dd className="flex items-center">
                <FaLongArrowAltDown />{" "}
                <span>
                  {weatherData.temp.min}
                  <sup>&deg;</sup>
                </span>
              </dd>
              <dd className="flex items-center">
                <FaLongArrowAltUp />{" "}
                <span>
                  {weatherData.temp.max}
                  <sup>&deg;</sup>
                </span>
              </dd>
              <dd className="flex items-center">
                <MdOutlineWaterDrop /> <span>{weatherData.temp.humidity}</span>
              </dd>
            </dl>
          </li>
          <li>
            Visibility: <span>{weatherData.temp.visibility}</span>
          </li>
          <li className="flex items-center gap-2">
            <FaWind /> {weatherData.wind}
          </li>
        </ul>
      </Suspense>
    </section>
  );
}
