import React from "react";
import Slider from "./slider";
import { WelcomeHero } from "./WelcomeHero";
import News from "./News";
import Stories from "./Stories";

export default function HomeHero() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex  flex-wrap">
        <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
          <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />

          <News />
          <Stories />
        </div>
      </div>
    </div>
  );
}
