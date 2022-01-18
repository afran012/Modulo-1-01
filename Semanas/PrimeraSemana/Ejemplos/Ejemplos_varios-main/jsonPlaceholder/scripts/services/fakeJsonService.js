import { CONFIG_DEV as CONFIG } from "../configs/config.js";
import fakeJsonPayload from "../configs/fakeJsonPayload.js";

const getFakeJson = async () => {
  const response = await fetch(`${CONFIG.FAKE_JSON_URL}`, {
    method: "POST", // GET, PUT, DELETE
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fakeJsonPayload),
  });
  const fakeJson = await response.json();
  return fakeJson || {};
};

export { getFakeJson };
