import { url } from "./url";

export const getData = async () => {
  const resp = await fetch(url);
  const data = resp.json();
  return data;
};
