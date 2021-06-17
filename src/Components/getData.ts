/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosResponse } from "axios";

export async function getData(URL: string): Promise<AxiosResponse<any>> {
  return await axios.get(
    `https://api.unsplash.com/${URL}/?client_id=CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0`
  );
}
