/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export const useSearch = (path: string, search: string) => {
  const [data, setData] = useState<AxiosResponse>();
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState(search);

  axios({
    method: "get",
    baseURL: "https://api.unsplash.com/",
    url: path,
    params: {
      query: searchTerm,
      per_page: 30,
      client_id: "CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0",
      page: 1,
    },
  })
    .then((res) => {
      setData(res);
    })
    .catch((e) => {
      setError(true);
      console.log(e);
    });

  return { data, error, setSearchTerm };
};
