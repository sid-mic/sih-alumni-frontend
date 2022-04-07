import React from "react";

export default function Benefits() {
  return (
    <div className=" px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <div className="bg-hero-pattern mt-0 pt-4 ml-10 font-bold max-w-md mb-6 sm:text-xl text-xl xl:max-w-lg bg-cover bg-center">
            <h1 className=" font-bold max-w-md  mt-6 mb-6 sm:text-xl text-2xl md:text-4xl xl:max-w-lg">
              BENEFITS OF
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                MIC ALUMNI
              </span>
            </h1>
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            <ul>● Chance to get funding opportunity</ul>
            <ul>● Evaluation and funding support twice in a year</ul>
            <ul>
              ● Get mentoring support to develop your product/innovation further
            </ul>
            <ul>● Opportunity to connect with Investor & Incubation center</ul>
          </p>
        </div>
      </div>
    </div>
  );
}
