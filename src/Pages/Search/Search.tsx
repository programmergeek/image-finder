import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
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
  const processedData = {} as ProcessedData;
  processedData.photos = data.data.results.map(
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

export const Search: React.FC = () => {
  const [currentPage] = useState(1);
  const [photos, setPhotos] = useState<ProcessedData>({
    photos: [],
  } as ProcessedData);
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
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="masonry"
        columnClassName="masonry-col"
      >
        {!isLoading &&
          photos.photos.map((photo) => {
            console.log(photo.photoUrl);
            return (
              <img
                className="images"
                key={photo.id}
                src={photo.photoUrl}
                alt={photo.description}
              />
            );
          })}
      </Masonry>
      {isLoading && <h5 style={{ textAlign: "center" }}>Loading...</h5>}
    </div>
  );
};
