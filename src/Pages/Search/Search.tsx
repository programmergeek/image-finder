import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { NavBar } from "../../Components";
import { useSearch } from "../../Hooks";
import "./styles.css";

interface ProcessedData {
  photos: {
    id: string;
    description: string;
    photoUrl: string;
  }[];
}

const processData = (data: AxiosResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const processedData: ProcessedData = data.data.results.map(
    (photo: Record<string, any>) => {
      return {
        id: photo.id,
        description: photo.description,
        photoUrl: photo.urls.regular,
      };
    }
  );
  return processedData;
};

export const Search: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, setQuery, errorMessage } = useSearch({
    endpoint: "search/photo",
    query: "",
    page: currentPage,
  });

  return <div></div>;
};
