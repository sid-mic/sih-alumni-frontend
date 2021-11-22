import React from "react";
import Marquee from "react-fast-marquee";

export default function Scroller() {
  return (
    <div className="md:mx-20 items-center">
      <h1
        style={{ fontFamily: "Montserrat" }}
        className="font-bold text-center items-center max-w-xl mb-14 sm:text-xl text-2xl md:text-4xl xl:max-w-full "
      >
        PARTNERED COMPETITIONS
      </h1>
      <Marquee>
        <div className="pr-12 md:pr-20">
          <img
            className="max-h-20"
            src="https://www.sih.gov.in/img/logo.png"
          ></img>
        </div>
        <div className="pr-12 md:pr-20">
          <img
            className="max-h-20"
            src="https://www.sxcce.edu.in/wp-content/uploads/2021/03/IIC_Logo.jpg"
          ></img>
        </div>
        <div className="pr-12 md:pr-20">
          <img
            className="max-h-20"
            src="https://toycathon.mic.gov.in/assets/extra/toycathon-final-logo.jpg"
          ></img>
        </div>
        <div className="pr-12 md:pr-20">
          <img
            className="max-h-20"
            src="https://manthan.mic.gov.in/assets/new_logo.png"
          ></img>
        </div>
        <div className="pr-12 md:pr-20">
          <img
            className="max-h-20"
            src="https://india-asean.mic.gov.in/img/ASEAN-India-Logo.png"
          ></img>
        </div>
        <div className="pr-12 md:pr-20">
          <img
            className="max-h-20"
            src="https://toycathon.mic.gov.in/assets/extra/toycathon-final-logo.jpg"
          ></img>
        </div>
      </Marquee>
    </div>
  );
}
