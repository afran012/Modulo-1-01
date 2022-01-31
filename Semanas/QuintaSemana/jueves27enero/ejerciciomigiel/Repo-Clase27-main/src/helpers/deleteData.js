import { url } from "./url";

export const deleteData = async (id) => {
  await fetch(url + id, {
    method: "DELETE",
  });
};
