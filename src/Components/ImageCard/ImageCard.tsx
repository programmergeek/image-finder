import React from "react";
import "styles.css";

interface Props {
  src: string;
  description: string;
  username: string;
  profileImage: string;
}

export const ImageCard: React.FC<Props & JSX.Element> = ({
  ...props
}: Props & JSX.Element) => {
  return <div></div>;
};
