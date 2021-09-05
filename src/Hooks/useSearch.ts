/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Props {
  endpoint: string;
  query: string;
}

export const useSearch = (params: Props) => {
  const [data, setData] = useState<AxiosResponse>({} as AxiosResponse);
  const [query, setQuery] = useState(params.query);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios({
        method: "get",
        baseURL: "https://api.unsplash.com/",
        url: params.endpoint,
        params: {
          query: query,
          page: currentPage,
          per_page: 30,
          client_id: "CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0",
        },
      })
        .then((res) => {
          if (res.data.total_pages < currentPage) {
            setData({
              data: {
                results: [],
              },
            } as AxiosResponse);
          } else {
            setData(res);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error);
        });
    }, 500);
  }, [query, currentPage]);
  console.log(currentPage);

  return {
    data,
    setQuery,
    errorMessage,
    isLoading,
    setCurrentPage,
  };
};
