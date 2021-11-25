import Head from "next/head";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import Featured from "../components/Featured";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Scroller from "../components/Marquee";
import { Nav } from "../components/Navbar";
import { useEffect, useState } from "react";
import authImport from "../utils/auth";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState({});

  useEffect(async () => {
    setAuth(authImport());
    if (authImport().isAuth) {
      let data = await authImport().fetchUser();

      setIsAuth(data.isAuth);
      setUser(data.user);
    }
  }, [""]);
  return (
    //Add svg with parallax scroll

    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div class="bg-lightblue">
        <Hero user={user} isAuth={isAuth} auth={auth} />
        <Feature />
        <Scroller />
        <Featured />
        <Footer />
      </div>
    </div>
  );
}
