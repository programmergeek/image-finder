import React, { useCallback, useRef, useState } from "react";
import { useImageSearch } from "..";

interface Props {
  searchValue: string;
}

export const ImageGrid: React.FC<Props> = ({ searchValue }: Props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [photos, setPhotos] = useState<string[]>([]);
  const [isLoading, hasMore] = useImageSearch({
    searchValue,
    pageNumber,
    setPageNumber,
    setPhotos,
  });

  const observer = useRef<IntersectionObserver>();

  const lastPhotoRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevValue) => prevValue + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <div>
      {photos.map((photo, key) => {
        if (key === photos.length - 1) {
          return (
            <img
              ref={lastPhotoRef}
              src={photo}
              key={photo}
              width={350}
              style={{ margin: 15 }}
            />
          );
        } else {
          return (
            <img src={photo} key={photo} width={350} style={{ margin: 15 }} />
          );
        }
      })}
      <div className="secondary-text">{isLoading ? "Loading..." : null}</div>
      <div className="secondary-text">{hasMore ? null : "End."}</div>
    </div>
  );
};
