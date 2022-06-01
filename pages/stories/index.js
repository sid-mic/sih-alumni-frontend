import React, { useEffect, useState } from "react";
import styles from "../../components/Featured.module.css";

export default function Stories() {
	return (
  		<div>
	      <section>
	        <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
	          <div class="grid grid-cols-1">
	              <div class="relative">
	               
	                <h1 className={styles.mainHeading+" font-bold mb-16 mt-6 pb-2 sm:text-xl text-2xl md:text-3xl text-center"}>
	                  NOTABLE
	                  <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
	                    ALUMNI
	                  </span>
	                  <div className={styles.bottomLine}></div>
	                </h1>
	                <div class={styles.boxMentors+" flex flex-wrap -mx-3 mt-0 pt-0"}>

	                    <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>

	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>


	                      <div class="my-3 px-3 w-1/2 lg:w-1/3">
	                    <div className={styles.profileTop}></div>
	                    <a className={styles.outerImage+" relative block group"} href="">
	                    <img className={styles.roundedImage} src="/assets/student.jpg" alt="" style={{ height: 176, width: 176 }} />
	                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                           		<p class="text-sm text-left w-full font-bold text-white">
		                            Kaushik Roy
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Hack2skill Pvt. Ltd.
		                        </p>
		                        <p class="text-sm text-left w-full font-bold text-white">
		                            Lead Engineering Team
		                        </p>
	                        </div>
	                      </a>
	                    </div>



	                </div>
	              </div>
	          </div>
	        </div>
	      </section>
	    </div>
                       
  	);
}


