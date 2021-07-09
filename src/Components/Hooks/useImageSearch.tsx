import { useState, useEffect } from "react";
import axios, { Canceler } from "axios";

interface Params {
  searchValue: string;
  pageNumber: number;
  setPageNumber(value: number): void;
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
}

export const useImageSearch = ({
  searchValue,
  pageNumber,
  setPageNumber,
  setPhotos,
}: Params): [boolean, boolean] => {
  const [isLoading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [, setHasError] = useState(false);

  useEffect(() => {
    setPhotos([]);
    setPageNumber(1);
  }, [searchValue]);

  //get data from the api
  useEffect(() => {
    let cancel: Canceler;
    setLoading(true);
    setHasError(false);
    axios({
      method: "GET",
      baseURL: "https://api.unsplash.com",
      url: "/search/photos",
      maxRedirects: 10,
      params: {
        query: searchValue,
        page: pageNumber,
        per_page: 30,
        client_id: "CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        //process data

        //check if this is the last page
        if (res.data.total_pages === pageNumber) setHasMore(false);

        //update the state
        setPhotos((prev) => {
          return [
            ...new Set([
              ...prev,
              ...Object.keys(res.data.results).map(
                (results, key) => res.data.results[key].urls.regular
              ),
            ]),
          ];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setHasError(true);
      });
    return () => cancel();
  }, [searchValue, pageNumber]);
  return [isLoading, hasMore];
};
