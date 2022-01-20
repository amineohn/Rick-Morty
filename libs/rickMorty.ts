import axios from "axios";

export const fetchRickMorty = async () => {
  return await axios.get("https://rickandmortyapi.com/api/character");
};
