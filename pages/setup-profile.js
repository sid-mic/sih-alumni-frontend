import Head from "next/head";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Navbar";
import SetupProfile from "../components/SetupProfile";
import { SmallHeader } from "../components/SmallHeader";
import authImport from "../utils/auth";
import { useEffect, useState } from "react";
import requireAuth from "../utils/requireAuth";
import Router from "next/router";

export default function Setup() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(async () => {
    let data = await requireAuth("/");

    if (data.user.signed_up_at != null) {
      Router.push("/dashboard");
    }

    setUser(data.user);
    setIsAuth(data.isAuth);
  }, [""]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <SetupProfile isAuth={isAuth} user={user} />
      <Footer />
    </div>
  );
}
