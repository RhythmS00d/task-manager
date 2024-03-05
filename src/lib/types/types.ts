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
  category: string;
  page: number | string;
};

export type NewsAPIParams = {
  apiKey: string;
  country: string;
  category: string;
  pageSize: string;
  page: string;
}

type Article = {
  title: string;
  url: string;
  description: string;
  urlToImage: string;
};

export type NewsResp = {
  status: string;
  totalResults?: number;
  articles?: Article[];
  code?: string;
  message?: string;
};

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type Quote = {
  quote: string
  author: string;
  category: string;
}

export type QuoteHeader = {
  "X-Api-Key": string;
};
