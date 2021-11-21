import React, { useEffect } from "react";
import Router from "next/router";
import axios from "./axios";
import { api_token_store_name, retrieve, store } from "./store";

export default function auth() {

  const fetchUser = async () => {
    let isAuth =
        retrieve(api_token_store_name()) != null &&
        retrieve(api_token_store_name()) != "";
    let user = null;

    try {
      user = await (await axios().get("/user")).data.user;
      isAuth = true;

      return { isAuth: isAuth, user: user };
    } catch (error) {
      store(api_token_store_name(), null);
      isAuth = false;
      user = null; //TODO maybe show token expired popup or login again popup

      return { isAuth: isAuth, user: user };
    }
  };

  const login = (email) => {
    return axios().post(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + "/login", {
      email: email,
    });
  };

  const setToken = async (token) => {
    await store(api_token_store_name(), token);

    await Router.push("/dashboard");
  };

  const logout = (email, password) =>
    axios().post("/logout").then((data) => {

      Router.push("/");
    });

  return {
    login,
    setToken,
    logout,
    fetchUser,
  };
}
