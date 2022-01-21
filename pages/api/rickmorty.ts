import type { NextApiResponse } from "next";
import { fetchRickMorty } from "../../libs/rickMorty";
export default async (_, res: NextApiResponse) => {
  const response = await fetchRickMorty();
  const datas = response.data;
  res.status(200).json(datas);
};
