import Head from "next/head";
import { Feature } from "../components/Feature";
import Featured from "../components/Featured";
import { Footer } from "../components/Footer";
import {Hero} from "../components/Hero";
import Scroller from "../components/Marquee";
import { Nav } from "../components/Navbar";
import { useEffect, useState } from "react";
import authImport from "../utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Router from "next/router";
import Initiatives from "../components/Initiatives";
import Who from "../components/Who";
import Benefits from "../components/Benefits";
import News from "../components/News";
import Gallery from "../components/gallery";
import ChangeMakers from "../components/ChangeMakers";
import axios from "../utils/axios";
export default function Home() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ announcements: null, changemakers: null });

  useEffect(async () => {
    setAuth(authImport());
    if (authImport().isAuth) {
      await Router.push("/dashboard");
    }

    axios()
      .get("announcements/public")
      .then((resp) => {
        setData(resp.data);
      });

    setIsLoading(false);
  }, [""]);
  return (
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
          <div className="main-outer" style={{ width: "100%" }}>
            <div className="container" style={{ margin: "0 auto" }}>
              <Feature />
              <Who />
              {data?.changemakers && <ChangeMakers changemakers={data.changemakers}/>}
              <Benefits />
              <News announcements={data.announcements} />
              <Featured />
              <Scroller />
              <Initiatives />
              <Gallery />
            </div>
          </div>
          <Footer />
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
