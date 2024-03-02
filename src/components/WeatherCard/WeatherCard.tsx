import Image from "next/image";

type WeatherData = {
  success: string;
}

export function WeatherCard({ weatherData }: { weatherData: WeatherData }) {
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
      <ul><li>{weatherData.success}</li></ul>
    </section>
  );
}
