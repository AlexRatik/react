export interface IRickAndMorty {
  info?: IRickAndMortyInfo;
  results?: IRickAndMortyResult[];
  error?: string;
}
export interface IRickAndMortyInfo {
  count: number;
  pages: number;
  prev: string | null;
  next: string | null;
}
export interface IRickAndMortyResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
