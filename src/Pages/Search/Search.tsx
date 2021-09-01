import React, { useState } from "react";
import { NavBar } from "../../Components";
import { useSearch } from "../../Hooks";
import "./styles.css";

export const Search: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, setQuery, errorMessage } = useSearch({
    endpoint: "search/photo",
    query: "",
    page: currentPage,
  });

  return <div></div>;
};
