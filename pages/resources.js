import Head from "next/head";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Navbar";
import { News } from "../components/News";
import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import { SmallHeader } from "../components/SmallHeader";
import { Steps } from "../components/Steps";
import { WelcomeHero } from "../components/WelcomeHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  flex-wrap">
        <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
          <WelcomeHero h1="RESOURCES" />
        </div>
        <SidebarMobile />
      </div>
    </div>
  );
}
