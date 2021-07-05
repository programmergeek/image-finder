import React, { useCallback, useRef, useState } from "react";
import { useImageSearch } from "..";

interface Props {
  searchValue: string;
}

export const ImageGrid: React.FC<Props> = ({ searchValue }: Props) => {
  const [counter, setCounter] = useState(1);
  const [images, isLoading, hasMore] = useImageSearch(searchValue, counter);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const observer = useRef<any>();
  const lastPhotoRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCounter((prevValue) => prevValue + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <div>
      {isLoading
        ? "Loading..."
        : images.map((photo, key) => {
            if (key === images.length - 1) {
              return (
                <img
                  ref={lastPhotoRef}
                  src={photo}
                  key={key}
                  width={350}
                  style={{ backgroundColor: "blue", margin: 15 }}
                />
              );
            } else {
              return (
                <img
                  src={photo}
                  key={key}
                  width={350}
                  style={{ backgroundColor: "blue", margin: 15 }}
                />
              );
            }
          })}
    </div>
  );
};
