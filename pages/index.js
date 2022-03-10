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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Router from "next/router";
import Initiatives from "../components/Initiatives";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setAuth(authImport());
    if (authImport().isAuth) {
      await Router.push("/dashboard");
    }

    setIsLoading(false);
  }, [""]);
  return (
    //Add svg with parallax scroll

    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MIC Alumni Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Nav />
          <Hero user={user} isAuth={isAuth} auth={auth} />
          <div class="bg-lightblue">
            <Feature />
            <Initiatives />
            <Featured />
            <Scroller />
            <Footer />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </div>
  );
}
