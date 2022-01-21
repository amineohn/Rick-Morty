import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { RickMorty } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<RickMorty>(`/api/rickmorty`, fetcher);
  return (
    <>
      <div className="flex justify-center items-center overflow-y-auto">
        <div className="max-w-7xl">
          {data && (
            <>
              <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 space-x-2 space-y-2 mx-5 my-10">
                {data.results.map(
                  ({
                    name,
                    status,
                    gender,
                    location,
                    image,
                    origin,
                    created,
                  }) => (
                    <>
                      <div className="flex justify-center flex-col" key={name}>
                        <div className="bg-slate-800 px-5 py-5 rounded-3xl transition hover:scale-105 space-y-2">
                          <img src={image} className="rounded-3xl bg-cover" />
                          <div className="text-slate-50">
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <div className="grid grid-cols-2">
                              <div>
                                <p className="text-sm">{status}</p>
                                <p className="text-sm">{origin.name}</p>
                              </div>
                              <div>
                                <p className="text-sm">{gender}</p>
                                <p className="text-sm truncate">
                                  {location.name}
                                </p>
                                <p className="text-sm truncate hidden">
                                  {created}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
