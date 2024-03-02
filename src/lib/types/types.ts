export type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: string;
  temp: {
    main: number;
    min: number;
    max: number;
    humidity: number;
    visibility: string;
  };
  wind: number;
};

export type Params = {
  lat?: string;
  lon?: string;
  q?: string;
};