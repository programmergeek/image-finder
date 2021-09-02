/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Props {
  endpoint: string;
  query: string;
  page?: number;
}

export const useSearch = (params: Props) => {
  const [data, setData] = useState<AxiosResponse>({} as AxiosResponse);
  const [query, setQuery] = useState(params.query);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios({
        method: "get",
        baseURL: "https://api.unsplash.com/",
        url: params.endpoint,
        params: {
          query: query,
          page: params.page ? params.page : 1,
          per_page: 30,
          client_id: "CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0",
        },
      })
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error);
        });
    }, 500);
  }, [query]);

  return { data, setQuery, errorMessage, isLoading };
};
