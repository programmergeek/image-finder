import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
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
  const processedData: ProcessedData = data.data.results.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const Images = (photos: ProcessedData) => {
  const output = photos.photos.map((photo) => {
    return (
      <img
        className="photos"
        src={photo.photoUrl}
        alt={photo.description}
        key={photo.id}
      />
    );
  });
  return output;
};

export const Search: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState<ProcessedData>();
  const { data, setQuery, isLoading } = useSearch({
    endpoint: "search/photos",
    query: "people",
    page: currentPage,
  });

  useEffect(() => {
    if (isLoading === false) {
      setPhotos(() => processData(data));
    }
  }, [data, isLoading]);

  return (
    <div>
      <NavBar onChange={(input) => setQuery(input)} />
      <pre> {JSON.stringify(photos)} </pre>
    </div>
  );
};
