/* eslint-disable @typescript-eslint/ban-types */
import axios from "axios";

export function getData(URL: string, APIKey: string): any {
  return axios.get(`https://api.unsplash.com/${URL}/?client_id=${APIKey}`);
}
