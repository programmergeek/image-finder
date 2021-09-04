import { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { ImageCard, NavBar } from "../../Components";
import { useSearch } from "../../Hooks";
import "./styles.css";

interface ProcessedData {
  photos: {
    id: string;
    description: string;
    photoUrl: string;
    username: string;
    profileImage: string;
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
        username: photo.user.username,
        profileImage: photo.user.profile_image.small,
      };
    }
  );
  return processedData;
};

export const Search: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const bottomPage = useRef<HTMLElement | null>();
  const observer = useCallback((node) => {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("meep");
      }
    }).observe(node);
  }, []);
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

  useEffect(() => {
    if (bottomPage.current) {
      observer(bottomPage.current);
    }
  });

  return (
    <div>
      <div id="nav">
        <NavBar onChange={(input) => setQuery(input)} />
      </div>

      <Masonry
        breakpointCols={{
          default: 4,
          1200: 3,
          950: 2,
          500: 1,
        }}
        className="masonry"
        columnClassName="masonry-col"
      >
        {!isLoading &&
          photos.photos.map((photo) => {
            console.log(photo.photoUrl);
            return (
              <ImageCard
                key={photo.id}
                src={photo.photoUrl}
                alt={photo.description}
                username={photo.username}
                profileImage={photo.profileImage}
              />
            );
          })}
      </Masonry>
      {isLoading && <h5 style={{ textAlign: "center" }}>Loading...</h5>}
      <div
        ref={observer}
        style={{ width: "90%", height: 30, border: "1px solid black" }}
      ></div>
    </div>
  );
};
