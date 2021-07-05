import { useState, useEffect } from "react";
import axios, { Canceler } from "axios";

export const useImageSearch = (
  searchValue: string,
  pageNumber: number
): [string[], boolean, boolean] => {
  const [isLoading, setLoading] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setPhotos([]);
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
        if (res.data.total_pages === pageNumber) setIsLastPage(true);

        //update the state
        Object.keys(res.data.results).map((results, key) => {
          setPhotos((prev) => {
            prev.push(res.data.results[key].urls.regular);
            return Array.from(new Set(prev));
          });
        });
        console.log(photos);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setHasError(true);
      });
    return () => cancel();
  }, [searchValue, pageNumber]);
  return [photos, isLoading, isLastPage];
};
