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


export default function Debug() {
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
          
          <div class="container mx-auto lg:grid lg:grid-cols-3 lg:gap-2">
            <div class="w-full rounded">
               
            <iframe width="500" height="315" src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
            </div>
            <div class="w-full rounded">
                <a class="spotlight" href="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619__340.jpg"
                    data-src-800="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619__340.jpg"
                    data-src-1200="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619__340.jpg"
                    data-src-2400="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619__340.jpg"
                    data-src-3800="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619__340.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619__340.jpg" />
                </a>
            </div>
            <div class="w-full rounded">
            <iframe width="520" height="315" src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="w-full rounded">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="w-full rounded">
                <a class="spotlight" href="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-800="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-1200="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-2400="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-3800="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg" />
                </a>
            </div>
        </div>
          
        </>
      )}
    </div>
  );
}



