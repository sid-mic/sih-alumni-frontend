import React from "react";
import styles from './Who.module.css';

export default function Who() {
  return (
    <div className=" px-4 pb-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="mb-6 md:mb-10">
        <div className="text-center">
          <div className="bg-hero-pattern mt-0 pt-0 font-bold mb-6 sm:text-xl text-xl bg-cover bg-center">
            <h1 className={styles.mainHeading+" font-bold  mt-0 mb-14 pb-2 sm:text-xl text-2xl md:text-3xl"}>
              WHO CAN BE
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                MIC ALUMNI
              </span>
              <div className={styles.bottomLine}></div>
            </h1>
          </div>
        </div>
        <div className="ml-8">
          <p className="text-base text-gray-700 md:text-lg">
            Participants of Ministry of Education’s Innovation Cell initiatives
            like,
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2"><div>
            <ul>● Smart India Hackathon</ul>
            <ul>● Ideathon</ul>
            <ul>● Samadhan</ul>
            <ul>● Asia India Hackathon</ul>
            </div>
            <div>
            <ul>● Toycathon</ul>
            <ul>● Singapore India Hackathon</ul>
            <ul>● Manthan</ul>
            </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
