import { url } from "./url";

export const getData = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return await data;
    
  } catch (error) {
    console.log(error);
  }
};
