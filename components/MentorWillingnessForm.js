import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import { toast } from "react-toastify";

export default function MentorWillingnessForm(props) {
  let disabled = props.disabled ?? false;

  const [mentor, setMentor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios()
      .get(
        props.user?.id
          ? "mentor_willingness/" + props.user?.id
          : "/mentor_willingness"
      )
      .then((response) => {
        setMentor(response.data);
        setIsLoading(false);
      });
  }, []);

  if (!mentor || mentor?.interested == 0) {
    return <h5 className="mt-12 text-center">Not interested</h5>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled) {
      return;
    }

    let data = new FormData(e.target);

    toast.promise(axios().post(`/mentor_willingness`, data), {
      pending: {
        render() {
          return "Updating....";
        },
      },
      success: {
        render({ data }) {
          setMentor(data.data);
          return "Data updated successfully!";
        },
      },
      error: {
        render({ data }) {
          let status = data.response.status;
          data = data.response.data;
          if (status == 422) {
            Object.entries(data.errors).forEach(([key, value]) => {
              toast.error(value.toString(), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });

            return "There were errors in some fields";
          } else {
            return "Something went wrong!";
          }
        },
      },
    });
  }

  if (isLoading) {
    return <FormLoader />;
  }

  return (
    <div className="text-xl font-bold">
      <form
        onSubmit={handleSubmit}
        className="ml:0 md:ml-20 mr-0 md:mr-18 lg:mr-20 mt-3 mx-4"
      >
        <div>
          <div className="flex mb-5 ">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                1] Interested Theme:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-2 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.theme}
                  name="theme"
                >
                  <option value="Education">Education</option>
                  <option value="Energy">Energy</option>
                  <option value="Drinking Water and Sanitation">
                    Drinking Water and Sanitation
                  </option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Health and Hygiene">Health and Hygiene</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex mb-5 ">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                2] Area of Expertise:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-2 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.expertise}
                  name="expertise"
                >
                  <option value="AI">AI</option>
                  <option value="ML">ML</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Remote sensing/GIS">Remote sensing/GIS</option>
                  <option value="Programming: python, Java">
                    Programming: python, Java
                  </option>
                  <option value="Database: MySQL, Oracle etc">
                    Database: MySQL, Oracle etc
                  </option>
                  <option value="Image Processing">Image Processing</option>
                  <option value="Subject Matter Expert">
                    Subject Matter Expert
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex mb-5">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                3] Current Designation:
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  disabled={disabled}
                  type="text"
                  className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                  defaultValue={mentor?.designation ?? props.user.designation}
                  name={"designation"}
                />
              </div>
            </div>
          </div>

          <div className="flex mb-5">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                4] Current Organization/Company:
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  disabled={disabled}
                  type="text"
                  className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                  defaultValue={
                    mentor?.organization_name ?? props.user.organization_name
                  }
                  name={"organization_name"}
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <span className="text-base font-semibold">
              5] Will travel from:
            </span>{" "}
            <br />
            <div className="flex flex-row mt-2">
              <div className="w-full px-3 mb-5">
                <label className="text-base font-semibold">City:</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    disabled={disabled}
                    type="text"
                    className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                    defaultValue={mentor?.city}
                    name={"city"}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5">
                <label className="text-base font-semibold">State:</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    disabled={disabled}
                    type="text"
                    className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                    defaultValue={mentor?.state}
                    name={"state"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mb-5 text-base font-semibold">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                6] Upload your CV/Resume:
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  disabled={disabled}
                  type="file"
                  className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                  name={"cv"}
                  accept={".pdf,.doc,.docx"}
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                7] Participated as Mentor/evaluator/design expert in Toycathon
                or SIH 2022?
              </label>
              <div className="main xl:flex m-2 select-none">
                <label
                  className="flex radio p-2 cursor-pointer"
                  htmlFor="attended_yes"
                >
                  <input
                    required={true}
                    name="participated_in_previous"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    id="attended_yes"
                    defaultChecked={mentor.participated_in_previous == 1}
                  />
                  <div className="title px-2 text-base font-semibold">
                    Attended
                  </div>
                </label>

                <label
                  className="flex radio p-2 cursor-pointer"
                  htmlFor="attended_no"
                >
                  <input
                    required={true}
                    name="participated_in_previous"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    id="attended_no"
                    defaultChecked={mentor.participated_in_previous == 0}
                  />
                  <div className="title px-2 text-base font-semibold">
                    Not Attended
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {!disabled && (
          <div className="flex  mb-16 md:mb-2">
            <div className="w-full px-3 mb-5">
              <button
                style={{ fontFamily: "Montserrat" }}
                className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
              >
                {isLoading ? "Saving...." : "SAVE CHANGES"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
