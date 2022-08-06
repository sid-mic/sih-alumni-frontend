import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import { toast } from "react-toastify";

export default function MentorWillingnessForm(props) {
  let disabled = props.disabled ?? false;

  let sw_nodal_centers = [
    "Birla Institute of Technology Mesra Ranchi Jharkhand Ranchi",
    "IES College of Technology Madhya Pradesh Bhopal",
    "Maharastra Institute of Technology, (MIT Aurangabad) Maharashtra Aurangabad",
  ];

  let hw_nodal_centers = [
    "Bhilai Institute of Technology Chhattisgarh Durg",
    "Indian Institute of Technology Roorkee Uttarakhand Roorkee",
    "MIT PUNE Maharashtra PUNE",
  ];

  const [mentor, setMentor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [interested, setInterested] = useState(true);
  const [category, setCategory] = useState("sw");

  useEffect(() => {
    axios()
      .get(
        props.user?.id
          ? "mentor_willingness/" + props.user?.id
          : "/mentor_willingness"
      )
      .then((response) => {
        setMentor(response.data);
        setInterested(response.data?.interested);
        setCategory(response.data?.category);
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled) {
      return;
    }

    let data = new FormData(e.target);

    toast.promise(axios().post(`/mentor_willingness`, data), {
      pending: {
        render() {
          setIsLoading(true);
          return "Updating....";
        },
      },
      success: {
        render({ data }) {
          setMentor(data.data);
          setIsLoading(false);
          return "Willingness updated successfully!";
        },
      },
      error: {
        render({ data }) {
          setIsLoading(false);
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
    <form
      onSubmit={handleSubmit}
      className="ml:0 md:ml-20 mr-0 md:mr-18 lg:mr-20 mt-3"
    >
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            1] Are you interested in mentoring for Smart India Hackathon 2022?
          </label>
          <div className="main xl:flex m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                required={true}
                name="interested"
                disabled={disabled}
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                defaultChecked={interested === 1}
                onClick={(e) => setInterested(1)}
              />
              <div className="title px-2">Interested</div>
            </label>

            <label className="flex radio p-2 cursor-pointer">
              <input
                required={true}
                name="interested"
                disabled={disabled}
                className="my-auto transform scale-125"
                type="radio"
                value={0}
                defaultChecked={interested === 0}
                onClick={(e) => setInterested(0)}
              />
              <div className="title px-2">Not Interested</div>
            </label>
          </div>
        </div>
      </div>

      {interested === 1 && (
        <div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                2] Select your preferred category:
              </label>
              <div className="main xl:flex m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    required={true}
                    name="category"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={"sw"}
                    defaultChecked={category === "sw"}
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <div className="title px-2">Software</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    required={true}
                    name="category"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={"hw"}
                    defaultChecked={category === "hw"}
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <div className="title px-2">Hardware</div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex mb-5 -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                3] Select your preferred nodal center:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.nodal_center}
                  name="nodal_center"
                >
                  {category === "sw"
                    ? sw_nodal_centers.map((n, index) => (
                        <option value={n} key={index}>
                          {n}
                        </option>
                      ))
                    : hw_nodal_centers.map((n, index) => (
                        <option value={n} key={index}>
                          {n}
                        </option>
                      ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex mb-5 -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                4] Associate yourself as:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.associate}
                  name="associate"
                >
                  <option value="Evaluator">Evaluator</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Design Expert">Design Expert</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {!disabled && (
        <div className="flex -mx-3">
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
  );
}
