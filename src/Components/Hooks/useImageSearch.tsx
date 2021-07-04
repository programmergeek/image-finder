import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios, { Canceler } from "axios";

type hookType = [
  string,
  Dispatch<SetStateAction<string>>,
  boolean,
  boolean,
  string[]
];

export const useImageSearch = (
  searchFor: string,
  pageNumber: number
): hookType => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setSearchTerm(searchFor);
    setLoading(true);
    let cancel: Canceler;
    axios({
      method: "GET",
      url: "/search/photos",
      baseURL: "https://api.unsplash.com",
      params: {
        query: searchTerm,
        page: pageNumber,
        per_page: 30,
        client_id: "CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
      maxRedirects: 30,
    })
      .then((res) => {
        Object.keys(res.data.results).map((result, key) => {
          setImages((prevImages) => {
            prevImages.push(res.data.results[key].urls.full);
            return prevImages;
          });
        });
        if (res.data.total_pages === pageNumber) setHasMore(false);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [searchTerm, pageNumber]);

  return [searchTerm, setSearchTerm, loading, hasMore, images];
};
