import config from "@payload-config";
import { getPayload } from "payload";

export const initPayload = async () => {
  const payload = await getPayload({
    config,
  });

  return payload;
};
