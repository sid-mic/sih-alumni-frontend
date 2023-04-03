import Head from "next/head";

import { FaUserAlt, FaCode } from "react-icons/fa";
import {
  RiMailCloseFill,
  RiMailCheckFill,
  RiFileUploadFill,
} from "react-icons/ri";

export default function LostEmail(props) {
  console.log(props);

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
            <form className="pt-0 pb-10">
              <h2 className="text-3xl font-bold text-indblue mb-2">
                Fill Your Details
              </h2>
              <div className="border-2 w-10 border-indblue inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="text-xs w-72 mb-3 text-red-700">
                  Fill This Form Only if you have lost your <br /> SIH Email and
                  wish to Update it.
                </div>
                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                  <FaUserAlt className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your Full Name*"
                    className="bg-gray-100 outline-none text-sm flex-1 box-content"
                    required
                  />
                </div>

                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                  <RiMailCloseFill className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="oldemail"
                    placeholder="Enter Your Old SIH Email*"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>

                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                  <RiMailCheckFill className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="newemail"
                    placeholder="Enter Your New Curent Email*"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>

                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                  <FaCode className="text-gray-400 m-2" />
                  <select
                    name="hackname"
                    id="hack-name"
                    required
                    className="w-64 bg-gray-100 text-sm outline-none"
                  >
                    <option value="" disabled selected>
                      Participated in :*
                    </option>
                    <option value="sih17">SIH 2017</option>
                    <option value="sih18">SIH 2018</option>
                    <option value="sih19">SIH 2019</option>
                    <option value="sih20">SIH 2020</option>
                    <option value="sih22">SIH 2022</option>
                    <option value="singapore19">
                      SINGAPORE HACKATHON 2019
                    </option>
                    <option value="asean21">ASEAN HACKATHON 2021</option>
                    <option value="uia22">UNESCO HACKATHON 2022</option>
                  </select>
                </div>
                <label className= "z-10 text-xs -mb-8 text-gray-400">
                  Upload Your SIH Certificate*
                </label>

                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3 h-20 mt-3">
                  <RiFileUploadFill className="text-gray-400 m-2 mt-5" />

                  <input
                    type="file"
                    name="newemail"
                    placeholder="Upload Your SIH Certificate*"
                    className="custom-file-upload mt-3 bg-gray-100 outline-none text-sm flex-1 file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-blue-100 file:text-indblue
                                        hover:file:bg-blue-200"
                    accept="application/pdf, image/jpg, image/jpeg, image/png, image/heic"
                    required
                  />
                </div>

                <div className="flex w-64 mb-5 justify-between">
                  <label className="flex items-center text-xs"></label>
                  <a
                    href="#"
                    className="text-xs text-indblue"
                    onClick={() => props.setMenu(0)}
                  >
                    Forgot Your Old SIH Email ?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-indblue text-indblue rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white hover:border-green-600"
                >
                  Submit
                </a>
              </div>
            </form>
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
