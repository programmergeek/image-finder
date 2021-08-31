/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from "axios";
import { useState } from "react";

interface Props {
  endpoint: string;
  query: string;
}

export const useSearch = (params: Props) => {
  const [data, setData] = useState<AxiosResponse>({} as AxiosResponse);
  const [query, setQuery] = useState(params.query);
  const [errorMessage, setErrorMessage] = useState("");

  return { data, setQuery, errorMessage };
};
