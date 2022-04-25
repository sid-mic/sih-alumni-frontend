import React, { useEffect } from "react";
import Router from "next/router";
import axios from "./axios";
import { api_token_store_name, retrieve, store } from "./store";

export default function auth() {
  let isAuth =
    retrieve(api_token_store_name()) != null &&
    retrieve(api_token_store_name()) != "" &&
    retrieve(api_token_store_name()) != "null";

  const fetchUser = async (id = null) => {
    let user;
    let projects = [];
    let own_projects = [];

    try {
      let data = await (await axios().get("/user" + (id ? `s/${id}` : "")))
        .data;
      user = data.user;
      projects = data.projects;
      own_projects = data.own_projects;
      isAuth = true;

      return { isAuth: isAuth, user, projects, own_projects };
    } catch (error) {
      store(api_token_store_name(), "");
      isAuth = false;
      user = null;

      return { isAuth, user, projects, own_projects };
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

  const logout = async (redirectUrl = "/", token_expired = false) => {
    try {
      if (!token_expired) {
        await axios().post("/logout");
      }
    } finally {
      store(api_token_store_name(), "");

      await Router.push(redirectUrl);
    }
  };

  return {
    login,
    setToken,
    logout,
    fetchUser,
    isAuth,
  };
}
