import axiosLib from "axios";
import { api_token_store_name, retrieve, store } from "./store";
import auth from "./auth";

export default function axios() {
  axiosLib.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;
  axiosLib.defaults.headers.common = {
    Authorization: `Bearer ${retrieve(api_token_store_name())}`,
    Accept: "application/json",
  };

  axiosLib.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        await auth().logout("/", true);
      } else {
        throw error;
      }
    }
  );

  return axiosLib;
}
