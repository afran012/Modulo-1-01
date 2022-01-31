import { url } from "./url";

export const getData = async () => {
  try {
    const resp = await fetch(url);
    const data = resp.json();
    return data;
    
  } catch (error) {
    
  }
  
};
