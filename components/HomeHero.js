import { React, useEffect, useState } from "react";
import Slider from "./slider";
import { WelcomeHero } from "./WelcomeHero";
import News from "./News";
import Stories from "./Stories";
import Carousel from "./Carousel";
import { Transition } from "@headlessui/react";

export default function HomeHero() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowing(true), 50);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex  flex-wrap">
        <div className="container min-h-screen bg-lightblue pt-0 overflow-auto">
          <Transition
            show={isShowing}
            enter="transform duration-700 transition ease-in-out"
            enterFrom="opacity-0 rotate-0 translate-x-4"
            enterTo="opacity-100"
          >
            <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />
            <Carousel />
            <News />
            <Stories />
          </Transition>
        </div>
      </div>
    </div>
  );
}
