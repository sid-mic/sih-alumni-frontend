import React, { useEffect } from "react";
import Router from "next/router";
import axios from "./axios";
import { api_token_store_name, retrieve, store } from "./store";

export default function auth() {
  let isAuth =
    retrieve(api_token_store_name()) != null &&
    retrieve(api_token_store_name()) != "" &&
    retrieve(api_token_store_name()) != "null";

  const fetchUser = async () => {
    let user;

    try {
      user = await (await axios().get("/user")).data.user;
      isAuth = true;

      return { isAuth: isAuth, user: user };
    } catch (error) {
      store(api_token_store_name(), '');
      isAuth = false;
      user = null;

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

  const logout = async (redirectUrl = "/") => {
    await axios().post("/logout");

    store(api_token_store_name(), '');

    await Router.push(redirectUrl);
  };

  return {
    login,
    setToken,
    logout,
    fetchUser,
    isAuth,
  };
}
