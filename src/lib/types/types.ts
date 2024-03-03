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

export type Data = {
  error: string;
};

export type NewsReqParams = {
  country: string;
  category: string;
  pageSize: number;
};

type Article = {
  title: string;
  url: string;
  description: string;
  urlToImage: string;
};

export type NewsResp = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Task = {
  id: string;
  title: string;
  completed: boolean;
}