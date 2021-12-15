import axiosLib from "axios";
import { api_token_store_name, retrieve } from "./store";

export default function axiosFunction() {
  axiosLib.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;
  axiosLib.defaults.headers.common = {
    Authorization: `Bearer ${retrieve(api_token_store_name())}`,
    Accept: "application/json",
  };
  return axiosLib;
};