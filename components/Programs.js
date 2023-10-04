import React from "react";
import styles from "./Initiatives.module.css";

export default function Programs() {
    return (
        <div id={"initiatives"}>
            <section class="text-black mt-12">
                <div class="max-w-screen-xl px-4 py-15 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-lg mx-auto text-center">
                        <h1
                            className={
                                styles.mainHeading +
                                " mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center"
                            }
                        >
                            OUR
                            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                                ACTIVITIES
                            </span>
                            <div className={styles.bottomLine}></div>
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-14">
                    <div>
                        <div class="mx-auto">
                            <h1
                                className={
                                    styles.mainHeading +
                                    "mb-5 pb-2 font-semibold text-2xl text-indblue tracking-wide pl-5"
                                }
                            >
                                National Education Policy Exibition 2023
                                <hr class="w-auto h-0.5 my-1 bg-gray-200 border-0 rounded"></hr>
                            </h1>
                        </div>
                        <div>
                            <h1
                                className={
                                    styles.mainHeading +
                                    "mb-5 pb-4 px-5 font-semibold text-xl text-red-900 text-center"
                                }
                            >
                                AICTE, Ministry of Education pavilion at <br></br>
                                National Education Policy Exibition (29th-30th July) organized
                                at Pragati Maidan, New Delhi.
                            </h1>
                        </div>
                        <div
                            className={
                                styles.boxBorder1 +
                                " p-8 transition shadow-2xl rounded-2xl hover:shadow-pink-500/10 hover:border-pink-500/10 max-w-full flex"
                            }
                        >
                            <img src="/assets/NEP23.jpeg" class="max-w-3xl" alt="..." />
                            <p className="pl-7 font-medium tracking-wide text-black">
                            The prestigious National Education Policy (NEP) 2023 inaugurated by the Hon'ble Prime Minister of India was held from July 29th to July 30th, 2023, at Pragati Maidan, New Delhi. The mega event witnessed the presence of ministers from different ministries of the Central and State Governments, Foreign Embassies in India, industry leaders, and other esteemed guests. It featured over 12 thematic sessions, exhibitions, and cultural programs, providing an exceptional platform for networking, visibility, and recognition. The event attracted more than 40,000 viewers, ensuring a vibrant and enriching experience. This event celebrated the 3rd Anniversary of the National Education Policy (NEP) 2020 and the 2nd edition of the Akhil Bhartiya Shiksha Samagam.
                                <br></br>
                                {/* <a
                                    href="https://iic.mic.gov.in/national-technology-week"
                                    target="_blank"
                                    className="bg-indblue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Know more
                                </a> */}
                                <a
                                    href="/html/NEP-Feedback/index.html"
                                    target="_blank"
                                    className="bg-indblue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-16 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Feedbacks
                                </a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="mx-auto">
                            <h1
                                className={
                                    styles.mainHeading +
                                    "mb-5 pb-2 font-semibold text-2xl text-indblue tracking-wide pl-5"
                                }
                            >
                                National Technology Week 2023
                                <hr class="w-auto h-0.5 my-1 bg-gray-200 border-0 rounded"></hr>
                            </h1>
                        </div>
                        <div>
                            <h1
                                className={
                                    styles.mainHeading +
                                    "mb-5 pb-4 px-5 font-semibold text-xl text-red-900 text-center"
                                }
                            >
                                AICTE, Ministry of Education pavilion at <br></br>
                                National Technology Week (11th-14th May) organized
                                at Pragati Maidan, New Delhi.
                            </h1>
                        </div>
                        <div
                            className={
                                styles.boxBorder1 +
                                " p-8 transition shadow-2xl rounded-2xl hover:shadow-pink-500/10 hover:border-pink-500/10 max-w-full flex"
                            }
                        >
                            <img src="/assets/NTW23.jpeg" class="max-w-3xl" alt="..." />
                            <p className="pl-7 font-medium tracking-wide text-black">
                                National Technology Week was organised by 11 Government departments and Ministries having their own innovation pavilions where more than 500 technology start-ups and innovations were showcased. The theme of this National Technology Week was "SCHOOL TO STARTUP, IGNITING YOUNG MINDS TO INNOVATE" and was inaugurated by our Hon'ble PM Shri Narendra Modi on 11th May 2023 at Pragati Maidan, New Delhi. AICTE and Ministry of Education had its own pavilion where 8 tracks were organised for this 4 days' event.
                                <br></br>
                                <a
                                    href="https://iic.mic.gov.in/national-technology-week"
                                    target="_blank"
                                    className="bg-indblue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-16 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Know more
                                </a>
                                <a
                                    href="/html/NTW-Feedback/index.html"
                                    target="_blank"
                                    className="bg-indblue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-16 ml-5 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Feedbacks
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
