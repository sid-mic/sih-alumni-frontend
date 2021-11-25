import React, { useEffect, useReducer, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "../utils/axios";
import Router from "next/router";

export default function SetupProfile(props) {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [name, setName] = useState(props.user?.name);
  const [phone, setPhone] = useState(props.user?.phone);
  const [gender, setGender] = useState(props.user?.gender);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setName(props.user?.name);
    setPhone(props.user?.phone);
    setGender(props.user?.gender);
  }, props.user);

  function handleSubmit(e) {
    e.preventDefault();

    if (simpleValidator.current.allValid() && props.user != null) {
      props.toast.promise(
        axios().patch(`/users/${props.user?.id}/update`, {
          _method: "PATCH",
          name: name,
          phone: phone,
          gender: gender,
        }),
        {
          pending: {
            render() {
              setIsLoading(true);
              return "Setting up profile....";
            },
          },
          success: {
            render() {
              setIsLoading(false);
              Router.push("/dashboard");
              return "Profile updated successfully!";
            },
          },
          error: {
            render() {
              setIsLoading(false);
              return "Something went wrong!";
            },
          },
        }
      );
    } else {
      simpleValidator.current.showMessages();
      forceUpdate();
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-indblue flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-white py-10 px-10">
            <img src="assets/namaste.gif" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1
                className="font-bold text-3xl text-gray-900"
                style={{ fontFamily: "Montserrat" }}
              >
                SETUP PROFILE
              </h1>
              <p className="mt-4">
                Please check if the below information is correct
              </p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      required={true}
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setName(e.target.value);
                        simpleValidator.current.fieldValid("name")
                          ? simpleValidator.current.hideMessageFor("name")
                          : simpleValidator.current.showMessageFor("name");
                      }}
                      value={name}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "name",
                    name,
                    "required|min:3",
                    { className: "text-red-600" }
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Phone number
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      required={true}
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setPhone(e.target.value);
                        simpleValidator.current.fieldValid("phone")
                          ? simpleValidator.current.hideMessageFor("phone")
                          : simpleValidator.current.showMessageFor("phone");
                      }}
                      value={phone}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "phone",
                    phone,
                    "required|min:10|max:25",
                    { className: "text-red-600" }
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Gender</label>
                  <div className="flex">
                    <select
                      required={true}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => {
                        setGender(e.target.value);
                        simpleValidator.current.fieldValid("gender")
                          ? simpleValidator.current.hideMessageFor("gender")
                          : simpleValidator.current.showMessageFor("gender");
                      }}
                    >
                      <option value="male" selected={gender === "male"}>
                        Male
                      </option>
                      <option value="female" selected={gender === "female"}>
                        Female
                      </option>
                      <option value="other" selected={gender === "other"}>
                        Other
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {simpleValidator.current.message(
                    "gender",
                    gender,
                    "required|in:male,female,other",
                    { className: "text-red-600" }
                  )}
                </div>
              </div>
              <br />
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    style={{ fontFamily: "Montserrat" }}
                    className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={handleSubmit}
                  >
                    {isLoading ? 'Setting up.....' : 'CONFIRM AND CONTINUE'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
