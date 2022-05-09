import React from "react";
import styles from "./Benefits.module.css"

export default function Benefits() {
  return (
    <div className=" px-4 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

      <div className="mb-6 md:mb-10">
        <div className="text-center">
          <div className="bg-hero-pattern mt-0 pt-4 font-bold mb-0 sm:text-xl text-xl bg-cover bg-center">
            <h1 className={styles['border123'] + " font-bold mt-6 mb-14 sm:text-xl text-2xl md:text-3xl"}>
              BENEFITS OF
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                MIC ALUMNI
              </span>
            </h1>
          </div>
        </div>
        <div className="ml-8">
          <p className="text-base text-gray-700 md:text-lg">
          <div className="grid md:grid-cols-2 grid-cols-1"><div>
            <ul>● Chance to get funding opportunity</ul>
            <ul>● Evaluation and funding support twice in a year</ul>
            </div>
            <div>
            <ul>
              ● Get mentoring support to develop your product/innovation further
            </ul>
            <ul>● Opportunity to connect with Investor & Incubation center</ul>
            </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
