import React from "react";

const LoaderController = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back button */}
      <button
        className="bg-white text-slate-400 uppercase py-2 px-4
            rounded-xl font-semibold cursor-pointer border-2 border-slate-300
            hover:bg-red-500 hover:text-white transition duration-200 ease-in-out min-w-[80px]"
      >
        Back
      </button>

      {/* Next button */}
      
      <button
        className="bg-green-500 text-white uppercase py-2 px-4
            rounded-xl font-semibold cursor-pointer 
            hover:bg-[#394686] hover:text-white transition duration-200 ease-in-out min-w-[80px]"
      >
        Next
      </button>
    </div>
  );
};

export default LoaderController;
