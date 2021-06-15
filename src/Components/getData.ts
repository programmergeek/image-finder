/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import axios from "axios";

export async function getData(URL: string, APIKey: string): Promise<any> {
  const data = await axios.get(
    `https://api.unsplash.com/${URL}/?client_id=${APIKey}`
  );
  return data;
}
