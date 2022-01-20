import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { Example } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<Example>(`/api/example`, fetcher);
  return <></>;
};

export default Home;
