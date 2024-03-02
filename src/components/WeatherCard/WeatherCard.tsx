import Image from "next/image";
import { Weather } from "@/lib/types/types";

export function WeatherCard({ weatherData }: { weatherData: Weather }) {
  return (
    <section>
      <Image
        src="/rain.jpg"
        alt="rain bg"
        width={2000}
        height={2000}
        loading="lazy"
        className="w-full h-[600px] opacity-90"
      />
      <ul><li>{weatherData.weather}</li></ul>
    </section>
  );
}
