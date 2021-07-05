import React from "react";
import { useImageSearch } from "..";

interface Props {
  searchValue: string;
}

export const ImageGrid: React.FC<Props> = ({ searchValue }: Props) => {
  const [images, isLoading, isLastPage] = useImageSearch(searchValue, 1);

  return (
    <div>
      {isLoading
        ? "Loading..."
        : images.map((photo, key) => {
            return (
              <img
                src={photo}
                key={key}
                width={350}
                style={{ backgroundColor: "blue", margin: 15 }}
              />
            );
          })}
    </div>
  );
};
