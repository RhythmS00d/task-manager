import { Weather } from "../types/types";

export function weatherDataParser(data: any): Weather {
  return {
    city: data.name,
    weather: data.weather[0].main,
    temp: {
      main: data.main.temp,
      min: data.main.temp_min,
      max: data.main.temp_max,
      humidity: data.main.humidity,
      visibility: data.visibility,
    },
    wind: data.wind.speed,
  };
}
