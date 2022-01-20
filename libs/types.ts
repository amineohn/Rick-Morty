export type RickMorty = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: RickMortyCharacter[];
};

export type RickMortyCharacter = {
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
};
