import React from "react";
import Marquee from "react-fast-marquee";
import styles from './Marquee.module.css'


export default function Scroller() {
  return (
    <div className="md:mx-20 items-center mt-12">
      
      <h1 className={styles.mainHeading+" font-bold mt-14 mb-6 pt-2 pb-2 sm:text-xl text-2xl md:text-3xl text-center"}>
        HACKATHONS
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          ORGANISED BY MIC
        </span>
        <div className={styles.bottomLine}></div>
      </h1>
      <Marquee gradient="true" gradientColor="[224, 236, 255]" className={styles.imageWidth}>
        <div className="pr-12 md:pr-20">
          <a href="https://www.sih.gov.in" target="_blank">
          <img src="https://www.sih.gov.in/img/logo.png" alt="img" className={styles.imgHeightWidth +" img-fluid"} />
          </a>
        </div>
        <div className="pr-12 md:pr-20">
        <a href="https://india-asean.mic.gov.in" target="_blank">
          <img src="https://india-asean.mic.gov.in/img/ASEAN-India-Logo.png" className={styles.imgHeightWidth +" img-fluid"} />
        </a>
        </div>
         <div className="pr-12 md:pr-20">
        <a href="https://uia.mic.gov.in" target="_blank">
          <img src="assets/uia-logo.png" className={styles.imgHeightWidth +" img-fluid"} style={{width:'250px'}} />
          </a>
        </div>
        <div className="pr-12 md:pr-20">
        <a href="https://toycathon.mic.gov.in" target="_blank">
          <img src="https://toycathon.mic.gov.in/assets/extra/toycathon-final-logo.jpg" className={styles.imgHeightWidth +" img-fluid"} />
        </a>
        </div>

        
      </Marquee>
    </div>
  );
}
