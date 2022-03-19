import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";
import FormNotFilled from "./FormNotFilled";

export default function IndividualQuestions(props) {
  const disabled = props.view_only_mode ?? false;
  const [isFormFilled, setIsFormFilled] = useState(null);

  const [currentStatus, setCurrentStatus] = useState();
  const [projectPrototype, setProjectPrototype] = useState();
  const [projectTitle, setProjectTitle] = useState();
  const [projectTheme, setProjectTheme] = useState();
  const [projectStatus, setProjectStatus] = useState();
  const [projectIpGenerated, setProjectIpGenerated] = useState();
  const [projectIpType, setProjectIpType] = useState();
  const [projectIpStatus, setProjectIpStatus] = useState();
  const [projectHackathonRelated, setProjectHackathonRelated] = useState();
  const [projectFundingSupport, setProjectFundingSupport] = useState();
  const [projectTrlLevel, setProjectTrlLevel] = useState();
  const [projectVideoUrl, setProjectVideoUrl] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      axios()
        .get(
          process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
            `/users/${props.user?.id}/status`
        )
        .then((response) => {
          if (response?.status == 200) {
            let data = response.data;

            if (Object.keys(data).length === 0) {
              setIsFormFilled(false);
            } else {
              setIsFormFilled(true);
              setCurrentStatus(data.current_status);
              setProjectPrototype(data.project_prototype);
              setProjectTitle(data.project_title);
              setProjectTheme(data.project_theme);
              setProjectStatus(data.project_status);
              setProjectIpGenerated(data.project_ip_generated);
              setProjectIpType(data.project_ip_type);
              setProjectIpStatus(data.project_ip_status);
              setProjectHackathonRelated(data.project_hackathon_related);
              setProjectFundingSupport(data.project_funding_support);
              setProjectTrlLevel(data.project_trl_level);
              setProjectVideoUrl(data.project_video_url);
            }
          }

          setIsInitialising(false);
        })
        .catch(() => {
          return;
        });
    }
  }, [props.user]);

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled) {
      return;
    }

    toast.promise(
      axios().post(
        process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
          `/users/${props.user?.id}/status`,
        {
          current_status: currentStatus,
          project_prototype: projectPrototype,
          project_title: projectTitle,
          project_theme: projectTheme,
          project_status: projectStatus,
          project_ip_generated: projectIpGenerated,
          project_ip_type: projectIpType,
          project_ip_status: projectIpStatus,
          project_hackathon_related: projectHackathonRelated,
          project_funding_support: projectFundingSupport,
          project_trl_level: projectTrlLevel,
          project_video_url: projectVideoUrl,
        }
      ),
      {
        pending: {
          render() {
            setIsLoading(true);
            return "Updating....";
          },
        },
        success: {
          render() {
            setIsLoading(false);
            return "Your status updated successfully!";
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
      }
    );
  }

  return (
    <>
      {isInitialising ? (
        <FormLoader></FormLoader>
      ) : disabled && !isFormFilled ? (
        <FormNotFilled/>
      ) : (
        <div className="mb-20 min-h-screen  ml-20 mr-20">
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                What is your current status? Please elaborate
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <textarea
                  disabled={disabled}
                  rows={5}
                  className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  defaultValue={currentStatus}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Have you developed any prototype/innovation other than this
                project ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={projectPrototype == true}
                    onChange={(e) => setProjectPrototype(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={projectPrototype == false}
                    onChange={(e) => setProjectPrototype(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {projectPrototype == true && (
            <>
              <h1>
                <strong>Project Details:</strong>
              </h1>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Title</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Theme</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={projectTheme}
                      onChange={(e) => setProjectTheme(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Status</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <textarea
                      disabled={disabled}
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => setProjectStatus(e.target.value)}
                      rows={5}
                      defaultValue={projectStatus}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Any IP generated? ?
                  </label>
                  <div className="main flex overflow-hidden m-2 select-none">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={1}
                        checked={projectIpGenerated == true}
                        onChange={(e) => setProjectIpGenerated(e.target.value)}
                      />
                      <div className="title px-2">Yes</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={0}
                        checked={projectIpGenerated == false}
                        onChange={(e) => setProjectIpGenerated(e.target.value)}
                      />
                      <div className="title px-2">No</div>
                    </label>
                  </div>
                </div>
              </div>

              {projectIpGenerated == true && (
                <>
                  <div className="flex mb-5 -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-md font-semibold">IP Type</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          disabled={disabled}
                          type="text"
                          className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          value={projectIpType}
                          onChange={(e) => setProjectIpType(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-md font-semibold">
                        IP Status ?
                      </label>
                      <div className="main flex overflow-hidden m-2 select-none">
                        <label className="flex radio p-2 cursor-pointer">
                          <input
                            disabled={disabled}
                            className="my-auto transform scale-125"
                            type="radio"
                            value={0}
                            checked={projectIpStatus == false}
                            onChange={(e) => setProjectIpStatus(e.target.value)}
                          />
                          <div className="title px-2">Filed</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                          <input
                            disabled={disabled}
                            className="my-auto transform scale-125"
                            type="radio"
                            value={1}
                            checked={projectIpStatus == true}
                            onChange={(e) => setProjectIpStatus(e.target.value)}
                          />
                          <div className="title px-2">Granted</div>
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Is your current project related to the challenge that you
                    solved in the Hackathon ?
                  </label>
                  <div className="main flex overflow-hidden m-2 select-none">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={1}
                        checked={projectHackathonRelated == true}
                        onChange={(e) =>
                          setProjectHackathonRelated(e.target.value)
                        }
                      />
                      <div className="title px-2">Yes</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={0}
                        checked={projectHackathonRelated == false}
                        onChange={(e) =>
                          setProjectHackathonRelated(e.target.value)
                        }
                      />
                      <div className="title px-2">No</div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Do you need funding support to develop your
                    innovation/prototype further ?
                  </label>
                  <div className="main flex overflow-hidden m-2 select-none">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={1}
                        checked={projectFundingSupport == true}
                        onChange={(e) =>
                          setProjectFundingSupport(e.target.value)
                        }
                      />
                      <div className="title px-2">Yes</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={0}
                        checked={projectFundingSupport == false}
                        onChange={(e) =>
                          setProjectFundingSupport(e.target.value)
                        }
                      />
                      <div className="title px-2">No</div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Select Your Project's current TRL level
                  </label>
                  <div className="flex">
                    <select
                      disabled={disabled}
                      className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => {
                        setProjectTrlLevel(e.target.value);
                      }}
                    >
                      <option
                        value="TRL 0 : Idea. Unproven concept, no testing has been performed."
                        selected={
                          projectTrlLevel ===
                          "TRL 0 : Idea. Unproven concept, no testing has been performed."
                        }
                      >
                        TRL 0 : Idea. Unproven concept, no testing has been
                        performed.
                      </option>
                      <option
                        value="TRL 1 : Basic research. Principles postulated observed but no experimental proof available."
                        selected={
                          projectTrlLevel ===
                          "TRL 1 : Basic research. Principles postulated observed but no experimental proof available."
                        }
                      >
                        TRL 1 : Basic research. Principles postulated observed
                        but no experimental proof available.
                      </option>
                      <option
                        value="TRL 2 : Technology formulation. Concept and application have been formulated."
                        selected={
                          projectTrlLevel ===
                          "TRL 2 : Technology formulation. Concept and application have been formulated."
                        }
                      >
                        TRL 2 : Technology formulation. Concept and application
                        have been formulated.
                      </option>
                      <option
                        value="TRL 3 : Applied research. First laboratory tests completed; proof of concept."
                        selected={
                          projectTrlLevel ===
                          "TRL 3 : Applied research. First laboratory tests completed; proof of concept."
                        }
                      >
                        TRL 3 : Applied research. First laboratory tests
                        completed; proof of concept.
                      </option>
                      <option
                        value="TRL 4 : Small scale prototype built in a laboratory environment ('ugly' prototype)."
                        selected={
                          projectTrlLevel ===
                          "'TRL 4 : Small scale prototype built in a laboratory environment ('ugly' prototype).'"
                        }
                      >
                        TRL 4 : Small scale prototype built in a laboratory
                        environment ('ugly' prototype).
                      </option>
                      <option
                        value="TRL 5 : Large scale prototype tested in intended environment."
                        selected={
                          projectTrlLevel ===
                          "TRL 5 : Large scale prototype tested in intended environment."
                        }
                      >
                        TRL 5 : Large scale prototype tested in intended
                        environment.
                      </option>
                      <option
                        value="TRL 6 : Prototype system tested in intended environment close to expected performance."
                        selected={
                          projectTrlLevel ===
                          "TRL 6 : Prototype system tested in intended environment close to expected performance."
                        }
                      >
                        TRL 6 : Prototype system tested in intended environment
                        close to expected performance.
                      </option>
                      <option
                        value="TRL 7 : Demonstration system operating in operational environment at pre-commercial scale."
                        selected={
                          projectTrlLevel ===
                          "TRL 7 : Demonstration system operating in operational environment at pre-commercial scale."
                        }
                      >
                        TRL 7 : Demonstration system operating in operational
                        environment at pre-commercial scale.
                      </option>
                      <option
                        value="TRL 8 : First of a kind commercial system. Manufacturing issues solved."
                        selected={
                          projectTrlLevel ===
                          "TRL 8 : First of a kind commercial system. Manufacturing issues solved."
                        }
                      >
                        TRL 8 : First of a kind commercial system. Manufacturing
                        issues solved.
                      </option>
                      <option
                        value="TRL 9 : Full commercial application, technology available for consumers."
                        selected={
                          projectTrlLevel ===
                          "TRL 9 : Full commercial application, technology available for consumers."
                        }
                      >
                        TRL 9 : Full commercial application, technology
                        available for consumers.
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Video URL:</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={projectVideoUrl}
                      onChange={(e) => setProjectVideoUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <br />
          {!disabled && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  style={{ fontFamily: "Montserrat" }}
                  onClick={handleSubmit}
                  className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
                >
                  {isLoading ? "Saving...." : "SAVE CHANGES"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
