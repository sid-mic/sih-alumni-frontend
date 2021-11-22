import Head from "next/head";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import Featured from "../components/Featured";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Scroller from "../components/Marquee";
import { Nav } from "../components/Navbar";

export default function Home() {
  return (
    //Add svg with parallax scroll

    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <Feature />
      <Scroller />
      <Featured />
      <Footer />
    </div>
  );
}
