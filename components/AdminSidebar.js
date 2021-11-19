import React from "react";

export default function AdminSidebar() {
  return (
    <div class="bg-indblue static uppercase font-semibold  flex md:flex-col  shadow-lg  justify-around md:h-screen md:w-60 fixed w-screen bottom-0 items-center">
      <img
        className="hidden h-10 md:block"
        src="https://mic.gov.in/assets/img/logo.png"
      ></img>
      <div class="md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-white h-6 w-6 md:mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="hidden text-white md:block text-sm"
        >
          Home
        </span>
      </div>
      <div class="md:flex md:flex-wrap hover:shadow-md p-4  md:rounded-xl duration-1000 ease-in-out transform hover:scale-125 delay-200  text-3xl font-bold text-center bg-white md:p-5 ">
        <svg
          class="w-6 h-6 md:mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="hidden md:block text-sm"
        >
          Data
        </span>
      </div>
      <div class="text-white md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center">
        <svg
          class="w-6 h-6 md:mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="text-white hidden md:block text-sm"
        >
          Resources
        </span>
      </div>
      <div class="text-white md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center">
        <svg
          class="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          ></path>
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="hidden md:block text-sm"
        >
          ANNOUNCEMENTS
        </span>
      </div>
      <div class="text-white md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center">
        <svg
          class="w-6 h-6 md:mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="hidden md:block text-sm"
        >
          ADD USERS
        </span>
      </div>
      <div className="hidden md:block md:h-20"></div>
      <div class="hidden md:flex md:flex-wrap hover:shadow-md p-4 rounded-xl duration-1000 ease-in-out transform hover:scale-125 delay-200  text-3xl font-bold text-center bg-red-500 md:p-5 ">
        <svg
          class="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="hidden md:block text-sm"
        >
          Log Out
        </span>
      </div>
    </div>
  );
}
