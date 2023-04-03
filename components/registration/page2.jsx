// import type { NextPage } from "next";
import Head from "next/head";

import { FaCode } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

import { AiOutlineSelect, AiTwotoneCrown } from "react-icons/ai";
import React from "react";


export default function Page2(props) {
    console.log(props)
    const options = [
        { value: "sih19", label: "SIH 2019" },
        { value: "sih20", label: "SIH 2020" },
        { value: "asean21", label: "India ASEAN 2021" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>MIC Alumni Portal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    {/* Register section  */}
                    <div className="w-3/5 p-5">
                        <img className="h-16" src="/assets/sihlogo.png"></img>
                        <div className="pt-0 pb-10">
                            <h2 className="text-3xl font-bold text-indblue mb-2">
                                Fill Your Details
                            </h2>
                            <div className="border-2 w-10 border-indblue inline-block mb-2"></div>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                                    <AiOutlineSelect className="text-gray-400 m-2" />
                                    <select
                                        name="hackname"
                                        id="hack-name"
                                        required
                                        className="w-64 bg-gray-100 text-sm outline-none"
                                    >
                                        <option value="" disabled selected>
                                            Select Hackathon
                                        </option>
                                        <option value="sih19">SIH 2019</option>
                                        <option value="sih20">SIH 2020</option>
                                        <option value="asean2021">India ASEAN 2021</option>
                                    </select>
                                </div>

                                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                                    <RiTeamFill className="text-gray-400 m-2" />
                                    <input
                                        type="text"
                                        name="teamname"
                                        placeholder="Team Name"
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                                    <AiTwotoneCrown className="text-gray-400 m-2" />
                                    <input
                                        type="text"
                                        name="teamleader"
                                        placeholder="Team Leader Name"
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                    />
                                </div>

                                <div className="flex w-64 mb-5 justify-between">
                                    <label className="flex items-center text-xs"></label>
                                    <a href="#" className="text-xs text-indblue" onClick={() => props.setMenu(5)}>
                                        Lost Your SIH Email ?
                                    </a>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="border-2 border-indblue text-indblue rounded-full px-10 py-2 inline-block font-semibold hover:bg-indblue hover:text-white"
                                        onClick={() => props.setMenu(0)}
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="border-2 border-green-600 text-green-700 rounded-full px-10 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white"
                                    >
                                        Search
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Login section  */}
                    <div className="w-2/5 bg-indblue text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2 ">Hello, SIH Alumni!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10 ">
                            Now you know your Email Address! Login Here
                        </p>
                        <a
                            href="#"
                            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-indblue "
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

