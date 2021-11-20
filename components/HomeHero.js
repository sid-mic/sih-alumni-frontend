import React from "react";
import Slider from "./slider";
import { WelcomeHero } from "./WelcomeHero";
import News from "./News";
import Stories from "./Stories";
import Carousel from "./Carousel";

export default function HomeHero() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex  flex-wrap">
        <div className="container min-h-screen pt-0">
          <WelcomeHero h1="HEY THERE, " h2="BHUVANESH." />
          <News />
          <Stories />
        </div>
      </div>
    </div>
  );
}
