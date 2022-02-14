import React from "react";

export default function Loading() {
  return (
    <>
      <div className="sm:hidden md:block md:w-screen lg:w-screen lg:h-screen md:h-screen">
        <img className="w-screen h-screen" src="/assets/loading.gif" />
      </div>
      <div className="md:hidden lg:hidden">
        <img
          className="w-screen h-screen"
          src="/assets/loadingmobile.gif"
        ></img>
      </div>
    </>
  );
}