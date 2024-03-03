import Image from "next/image";
import { Weather } from "@/lib/types/types";

//import icons
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaWind } from "react-icons/fa";

function StartingCard() {
  return (
    <section>
      <h1>Start</h1>
    </section>
  );
}

export function WeatherCard({ weatherData }: { weatherData: Weather }) {
  const images: { [key: string]: string } = {
    Rain: "/rain.jpg",
    Clouds: "/clouds.jpg",
  };

  if (weatherData.city === "") return <StartingCard />;

  return (
    <section className="relative text-white">
      <Image
        src={images[weatherData.weather]}
        alt={weatherData.weather + " pic"}
        width={2000}
        height={2000}
        loading="lazy"
        className="w-full h-[600px] opacity-90 bg-contain bg-no-repeat"
      />
      <ul className="absolute bottom-10 p-4 flex flex-col gap-2">
        <li className="text-4xl font-semibold">{weatherData.city}</li>
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
    </section>
  );
}
