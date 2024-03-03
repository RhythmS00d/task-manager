export type Weather = {
  city: string;
  weather: string;
  icon: string;
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