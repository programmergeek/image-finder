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
  const [photos, setPhotos] = useState<ProcessedData>({
    photos: [],
  } as ProcessedData);
  const { data, setQuery, isLoading, setCurrentPage } = useSearch({
    endpoint: "search/photos",
    query: "people",
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const observerCallback = useCallback(
    (node) => {
      if (isLoading) return;
      console.log(observer);
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entities) => {
        if (entities[0].isIntersecting) {
          setCurrentPage((current) => {
            const next = current + 1;
            return next;
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [observer, isLoading]
  );

  useEffect(() => {
    if (isLoading === false) {
      setPhotos(() => processData(data));
    }
  }, [data, isLoading]);

  return (
    <div>
      <div id="nav">
        <NavBar
          onChange={(input) => setQuery(input.length > 0 ? input : "people")}
        />
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
          photos.photos.map((photo, index) => {
            if (index + 1 === photos.photos.length)
              return (
                <div ref={observerCallback} key={photo.id}>
                  <ImageCard
                    src={photo.photoUrl}
                    alt={photo.description}
                    username={photo.username}
                    profileImage={photo.profileImage}
                  />
                </div>
              );
            else {
              return (
                <ImageCard
                  key={photo.id}
                  src={photo.photoUrl}
                  alt={photo.description}
                  username={photo.username}
                  profileImage={photo.profileImage}
                />
              );
            }
          })}
      </Masonry>
      {isLoading && <h5 style={{ textAlign: "center" }}>Loading...</h5>}
    </div>
  );
};
