import React from "react";

export default function Sidebar() {
  return (
    <div class="bg-gray-100 font-sans leading-normal tracking-normal">
      <div class="flex md:flex-row-reverse flex-wrap">
        <div class="w-full md:w-4/5 bg-gray-100">
          <div class="container bg-gray-100 pt-16 px-6"></div>
        </div>

        <div class="w-full md:w-1/6 bg-indblue md:bg-indblue px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
          <div class="md:relative mx-auto  lg:px-6">
            <ul class="list-reset flex flex-row md:flex-col text-center md:text-left gap-5">
              <img
                className="hidden md:block md:h-10 md:mb-10 "
                src="https://mic.gov.in/assets/img/logo.png"
              ></img>
              <li class="mr-3 flex-1">
                <a
                  href="#"
                  class="flex flex-wrap  py-1 md:py-3 pl-1 align-middle text-white no-underline ml-10"
                >
                  <svg
                    class="w-6 h-6 mr-2 sm:mt-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  <span
                    style={{ fontFamily: "Montserrat" }}
                    class="hidden pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-white"
                  >
                    Home
                  </span>
                </a>
              </li>
              <li class="mr-3 flex-1">
                <a
                  href="#"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ml-10"
                >
                  <span
                    style={{ fontFamily: "Montserrat" }}
                    class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block"
                  >
                    Project
                  </span>
                </a>
              </li>
              <li class="mr-3 flex-1">
                <a
                  href="#"
                  class="block py-1 md:py-3 pl-1 align-middle  no-underline ml-10"
                >
                  <span
                    style={{ fontFamily: "Montserrat" }}
                    class="pb-1 md:pb-0 text-xs md:text-base  text-gray-600 md:text-gray-400 block md:inline-block"
                  >
                    Resources
                  </span>
                </a>
              </li>
              <li class="mr-0 flex-1 bg-white rounded-xl">
                <a
                  href="#"
                  class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ml-10"
                >
                  <span
                    style={{ fontFamily: "Montserrat" }}
                    class="pb-1 md:pb-0 text-xs md:text-base text-indblue font-bold md:text-indblue block md:inline-block"
                  >
                    Profile
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
