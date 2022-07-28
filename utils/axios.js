import axiosLib from "axios";
import { api_token_store_name, retrieve, store } from "./store";
import auth from "./auth";

export default function axios() {

  axiosLib.defaults.baseURL = "http://127.0.0.1:8000/api";
  axiosLib.defaults.headers.common = {
    Authorization: `Bearer ${retrieve(api_token_store_name())}`,
    Accept: "application/json",
  };

  axiosLib.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {
        await auth().logout("/", true);
      } else {
        throw error;
      }
    }
  );

  return axiosLib;
}
