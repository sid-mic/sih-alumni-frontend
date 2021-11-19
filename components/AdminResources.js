import React from "react";

export default function AdminResources() {
  return (
    <div className=" min-h-screen  ml-20 mr-20">
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label for="" className="text-xs font-semibold px-1">
            TITLE
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label for="" className="text-xs font-semibold px-1">
            DATE
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="date"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label for="" className="text-xs font-semibold px-1">
            LINK
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            style={{ fontFamily: "Montserrat" }}
            className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
          >
            ADD RESOURCE
          </button>
        </div>
      </div>
    </div>
  );
}
