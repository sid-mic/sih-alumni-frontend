import React, { useState } from "react";

export default function TeamQuestions() {
  const [hired, setHired] = useState();
  const [participatingOpportunity, setParticipatingOpportunity] = useState();
  const [recommendations, setRecommendations] = useState();
  const [socialResponsiblities, setSocialResponsiblities] = useState();

  return (
    <div className="mb-20 min-h-screen  ml-20 mr-20">
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Were you ever hired by your Problem Statement creator
            Ministry/Company
          </label>
          <div className="main flex overflow-hidden m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={hired == true}
                onChange={(e) => setHired(e.target.value)}
              />
              <div className="title px-2">Yes</div>
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={recommendations == true}
                onChange={(e) => setRecommendations(e.target.value)}
              />
              <div className="title px-2">Yes</div>{" "}
            </label>
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Did you get an opportunity to participate in any other
            State/National/International competition based on your achievement ?
          </label>
          <div className="main flex overflow-hidden m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={participatingOpportunity == true}
                onChange={(e) => setParticipatingOpportunity(e.target.value)}
              />
              <div className="title px-2">Yes</div>
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={recommendations == true}
                onChange={(e) => setRecommendations(e.target.value)}
              />
              <div className="title px-2">Yes</div>{" "}
            </label>
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Did you get any other recommendations or job opportunities on the
            basis of your success ?
          </label>
          <div className="main flex overflow-hidden m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={recommendations == true}
                onChange={(e) => setRecommendations(e.target.value)}
              />
              <div className="title px-2">Yes</div>
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={recommendations == true}
                onChange={(e) => setRecommendations(e.target.value)}
              />
              <div className="title px-2">Yes</div>{" "}
            </label>
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            How did the hackathon help in building your confidence
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <textarea
              rows={5}
              className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Would you recommend other students to participate in such future
            initiatives ?
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <textarea
              rows={5}
              className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Did participating in this hackathon make you more aware of your
            social responsibilities?
          </label>
          <div className="main flex overflow-hidden m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={socialResponsiblities == true}
                onChange={(e) => setSocialResponsiblities(e.target.value)}
              />
              <div className="title px-2">Yes</div>
              <div className="title px-2">No</div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Comments (May be a Thank You Note to Organizing Team or Feedback on
            improvement) ?
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <textarea
              rows={5}
              className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            ></textarea>
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
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}
