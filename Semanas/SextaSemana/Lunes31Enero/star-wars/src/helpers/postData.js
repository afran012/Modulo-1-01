import { url } from "./url";

export const postData = async (obj) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  });
};
