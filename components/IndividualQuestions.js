import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";
import FormNotFilled from "./FormNotFilled";

export default function IndividualQuestions(props) {
  const disabled = props.view_only_mode ?? false;

  let s_no = 0;

  const [isFormFilled, setIsFormFilled] = useState(null);

  const [project, setProject] = useState(null);

  const [projectTitle, setProjectTitle] = useState();
  const [projectTheme, setProjectTheme] = useState();
  const [projectStatus, setProjectStatus] = useState();
  const [projectIpGenerated, setProjectIpGenerated] = useState();
  const [projectIpType, setProjectIpType] = useState();
  const [projectIpTypeOthers, setProjectIpTypeOthers] = useState();
  const [projectIpStatus, setProjectIpStatus] = useState();
  const [projectImage, setProjectImage] = useState();
  const [projectIncubated, setProjectIncubated] = useState();
  const [projectIncubatorName, setProjectIncubatorName] = useState();
  const [projectIncubatorCity, setProjectIncubatorCity] = useState();
  const [projectTrlLevel, setProjectTrlLevel] = useState();
  const [projectVideoUrl, setProjectVideoUrl] = useState();
  const [projectHackathonRelated, setProjectHackathonRelated] = useState();
  const [projectFundingSupport, setProjectFundingSupport] = useState();

  const [isLoading, setIsLoading] = useState(false);

  function handleProjectChange(project_id) {
    let data;

    if (project_id) {
      data = props.own_projects[project_id];
    } else {
      data = {};
    }

    if (props.own_projects.length > 0) {
      setIsFormFilled(false);
    } else {
      setIsFormFilled(true);
      setProjectTitle(data?.project_title);
      setProjectTheme(data?.project_theme);
      setProjectStatus(data?.project_status);
      setProjectIpGenerated(data?.project_ip_generated);
      if (
          data?.project_ip_type === "Patent" ||
          data?.project_ip_type === "Copyright" ||
          data?.project_ip_type === "Trademark"
      ) {
        setProjectIpType(data?.project_ip_type);
      } else {
        setProjectIpType("Others");
        setProjectIpTypeOthers(data?.project_ip_type);
      }
      setProjectIpStatus(data?.project_ip_status);
      setProjectIncubated(data?.project_incubated);
      setProjectIncubatorName(data?.project_incubator_name);
      setProjectIncubatorCity(data?.project_incubator_city);
      setProjectHackathonRelated(data?.project_hackathon_related);
      setProjectFundingSupport(data?.project_funding_support);
      setProjectTrlLevel(data?.project_trl_level);
      setProjectVideoUrl(data?.project_video_url);
    }

    setProject(project_id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled) {
      return;
    }

    let form_data = new FormData();

    form_data.append("project_title", projectTitle);
    form_data.append("project_theme", projectTheme);
    form_data.append("project_status", projectStatus);
    form_data.append("project_ip_generated", projectIpGenerated);
    form_data.append(
        "project_ip_type",
        projectIpType !== "Others" ? projectIpType : projectIpTypeOthers
    );
    form_data.append("project_ip_status", projectIpStatus);
    form_data.append("project_incubated", projectIncubated);
    form_data.append("project_incubator_name", projectIncubatorName);
    form_data.append("project_incubator_city", projectIncubatorCity);
    form_data.append("project_hackathon_related", projectHackathonRelated);
    form_data.append("project_funding_support", projectFundingSupport);
    form_data.append("project_trl_level", projectTrlLevel);
    form_data.append("project_video_url", projectVideoUrl);

    if (projectImage) {
      form_data.append("project_image", projectImage);
    }
    toast.promise(
        axios().post(`status${project ? "/" + project : ""}`, form_data),
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
              axios()
                  .get("status")
                  .then((resp) => {
                    props.setOwnProjects(resp.data);
                    s_no = 0;
                    setProject(null);
                  });
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

  if (project === null && Object.keys(props.own_projects).length > 0) {
    return (
        <div>
          <div className="ml-20 mr-20">
            <div className="grid grid-cols-3 mt-10 space-x-20">
              <div className="col-span-1"></div>
              <h3 className={"font-bold col-span-1 text-left mt-3"}>
                Please select the Project to enter:{" "}
              </h3>
              <div className={"pl-28"}>
                <button
                    hidden={disabled}
                    className={"bg-indblue p-4 rounded-xl text-white"}
                    onClick={() => handleProjectChange(false)}
                >
                  Add New Project
                </button>
              </div>
            </div>

            <table
                className="border-separate border border-slate-400 mt-6"
                style={{ width: "100%" }}
            >
              <tr className="border-collapse" style={{ textAlign: "center" }}>
                <td className="border-separate border border-black"> S.NO</td>
                <td className="border-separate border border-black">
                  Idea/innovation title
                </td>
                <td className="border-separate border border-black">Theme</td>
                <td className="border-separate border border-black">
                  EDIT button
                </td>
              </tr>
              {Object.entries(props.own_projects).map(([id, project]) => {
                s_no += 1;
                return (
                    <tr key={id} className={"text-center"}>
                      <td className="border-separate border border-black">
                        {s_no}
                      </td>
                      <td className="border-separate border border-black">
                        {project.project_title}
                      </td>
                      <td className="border-separate border border-black">
                        {project.project_theme}
                      </td>
                      <td className="border-separate border border-black text-center">
                        <button
                            className="block bg-indblue text-white p-5 py-3 my-2 rounded-xl ml-5 font-semibold"
                            key={id}
                            onClick={() => {
                              handleProjectChange(id);
                            }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                );
              })}
            </table>

            {/*<div className="flex -mx-3 justify-center my-5">*/}
            {/*  {Object.entries(props.own_projects).map(([id, project]) => {*/}
            {/*    return (*/}
            {/*      <button*/}
            {/*        className="block bg-indblue text-white p-5 rounded-xl ml-5 font-semibold"*/}
            {/*        key={id}*/}
            {/*        onClick={() => {*/}
            {/*          handleProjectChange(id);*/}
            {/*        }}*/}
            {/*      >*/}
            {/*        {project.project_title}*/}
            {/*      </button>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</div>*/}
          </div>
        </div>
    );
  }

  return (
      <>
        {disabled && !isFormFilled ? (
            <FormNotFilled />
        ) : (
            <div className="mt-10 mb-20 ml-20 mr-20">
              <div className="flex justify-between mb-7">
                {Object.keys(props.own_projects).length > 0 ? (
                    <button
                        className={"bg-indblue p-4 rounded-xl text-white"}
                        onClick={() => handleProjectChange(null)}
                    >
                      Back
                    </button>
                ) : (
                    <div></div>
                )}
                <h1 className={"text-center text-3xl -ml-4"}>{projectTitle}</h1>
                <div className="col-span-6"></div>
              </div>
              <>
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
                      <select
                          disabled={disabled}
                          className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                          onChange={(e) => {
                            setProjectTheme(e.target.value);
                          }}
                      >
                        <option
                            value="Healthcare & Biomedical devices"
                            selected={
                                projectTheme === "Healthcare & Biomedical devices"
                            }
                        >
                          Healthcare & Biomedical devices
                        </option>
                        <option
                            value="Agriculture & Rural Development"
                            selected={
                                projectTheme === "Agriculture & Rural Development"
                            }
                        >
                          Agriculture & Rural Development
                        </option>
                        <option
                            value="Smart Vehicles/ Electric vehicle/ Electric vehicle motor and battery technology"
                            selected={
                                projectTheme ===
                                "Smart Vehicles/ Electric vehicle/ Electric vehicle motor and battery technology"
                            }
                        >
                          Smart Vehicles/ Electric vehicle/ Electric vehicle motor
                          and battery technology
                        </option>
                        <option
                            value="Food Processing/Nutrition/Biotech"
                            selected={
                                projectTheme === "Food Processing/Nutrition/Biotech"
                            }
                        >
                          Food Processing/Nutrition/Biotech
                        </option>
                        <option
                            value="Robotics and Drones"
                            selected={projectTheme === "Robotics and Drones"}
                        >
                          Robotics and Drones
                        </option>
                        <option
                            value="Waste Management/Waste to Wealth Creation"
                            selected={
                                projectTheme ===
                                "Waste Management/Waste to Wealth Creation"
                            }
                        >
                          Waste Management/Waste to Wealth Creation
                        </option>
                        <option
                            value="Clean & Potable water"
                            selected={projectTheme === "Clean & Potable water"}
                        >
                          Clean & Potable water
                        </option>
                        <option
                            value="Renewable and affordable Energy"
                            selected={
                                projectTheme === "Renewable and affordable Energy"
                            }
                        >
                          Renewable and affordable Energy
                        </option>
                        <option
                            value="IoT based technologies (eg Security & Surveillance systems etc)"
                            selected={
                                projectTheme ===
                                "IoT based technologies (eg Security & Surveillance systems etc)"
                            }
                        >
                          IoT based technologies (eg Security & Surveillance systems
                          etc)
                        </option>
                        <option
                            value="Software - Mobile App Development"
                            selected={
                                projectTheme === "Software - Mobile App Development"
                            }
                        >
                          Software - Mobile App Development
                        </option>
                        <option
                            value="Software - Web App Development"
                            selected={
                                projectTheme === "Software - Web App Development"
                            }
                        >
                          Software - Web App Development
                        </option>
                        <option
                            value="Travel & Tourism"
                            selected={projectTheme === "Travel & Tourism"}
                        >
                          Travel & Tourism
                        </option>
                        <option
                            value="Finance Life Sciences"
                            selected={projectTheme === "Finance Life Sciences"}
                        >
                          Finance Life Sciences
                        </option>
                        <option
                            value="Smart Education"
                            selected={projectTheme === "Smart Education"}
                        >
                          Smart Education
                        </option>
                        <option
                            value="Smart Cities"
                            selected={projectTheme === "Smart Cities"}
                        >
                          Smart Cities
                        </option>
                        <option
                            value="Sports & Fitness"
                            selected={projectTheme === "Sports & Fitness"}
                        >
                          Sports & Fitness
                        </option>
                        <option
                            value="Smart Textiles"
                            selected={projectTheme === "Smart Textiles"}
                        >
                          Smart Textiles
                        </option>
                        <option
                            value="Sustainable Environment"
                            selected={projectTheme === "Sustainable Environment"}
                        >
                          Sustainable Environment
                        </option>
                        <option
                            value="Infrastructure"
                            selected={projectTheme === "Infrastructure"}
                        >
                          Infrastructure
                        </option>
                        <option
                            value="Manufacturing"
                            selected={projectTheme === "Manufacturing"}
                        >
                          Manufacturing
                        </option>
                        <option
                            value="Defence & Security"
                            selected={projectTheme === "Defence & Security"}
                        >
                          Defence & Security
                        </option>
                        <option
                            value="Mining, Metals, Materials"
                            selected={projectTheme === "Mining, Metals, Materials"}
                        >
                          Mining, Metals, Materials
                        </option>
                        <option
                            value="Consumer Goods and Retail"
                            selected={projectTheme === "Consumer Goods and Retail"}
                        >
                          Consumer Goods and Retail
                        </option>
                        <option
                            value="Fashion and Textiles"
                            selected={projectTheme === "Fashion and Textiles"}
                        >
                          Fashion and Textiles
                        </option>
                        <option
                            value="Education"
                            selected={projectTheme === "Education"}
                        >
                          Education
                        </option>
                      </select>
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
                      Any IP generated?
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
                            <select
                                disabled={disabled}
                                className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                                onChange={(e) => {
                                  setProjectIpType(e.target.value);
                                }}
                            >
                              <option
                                  value="Patent"
                                  selected={projectIpType === "Patent"}
                              >
                                Patent
                              </option>
                              <option
                                  value="Copyright"
                                  selected={projectIpType === "Copyright"}
                              >
                                Copyright
                              </option>
                              <option
                                  value="Trademark"
                                  selected={projectIpType === "Trademark"}
                              >
                                Trademark
                              </option>
                              <option
                                  value="Others"
                                  selected={projectIpType === "Others"}
                              >
                                Others
                              </option>
                            </select>
                          </div>
                          {projectIpType === "Others" && (
                              <div className={"mt-8"}>
                        <span className={"text-md font-semibold"}>
                          Please enter IP Registration Type:
                        </span>
                                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                                </div>
                                <input
                                    disabled={disabled}
                                    type="text"
                                    className="w-full mt-5 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    value={projectIpTypeOthers}
                                    onChange={(e) =>
                                        setProjectIpTypeOthers(e.target.value)
                                    }
                                />
                              </div>
                          )}
                        </div>
                      </div>
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                          <label className="text-md font-semibold">IP Status</label>
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
                      Is it currently incubated?
                    </label>
                    <div className="main flex overflow-hidden m-2 select-none">
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                            disabled={disabled}
                            className="my-auto transform scale-125"
                            type="radio"
                            value={1}
                            checked={projectIncubated == true}
                            onChange={(e) => setProjectIncubated(e.target.value)}
                        />
                        <div className="title px-2">Yes</div>
                      </label>

                      <label className="flex radio p-2 cursor-pointer">
                        <input
                            disabled={disabled}
                            className="my-auto transform scale-125"
                            type="radio"
                            value={0}
                            checked={projectIncubated == false}
                            onChange={(e) => setProjectIncubated(e.target.value)}
                        />
                        <div className="title px-2">No</div>
                      </label>
                    </div>
                  </div>
                </div>
                {console.log(projectIncubated)}
                {projectIncubated == 1 && (
                    <>
                      <div className="flex mb-5 -mx-3">
                        <div className="w-full px-3 mb-5">
                          <label className="text-md font-semibold">
                            Name of Incubation Centre
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                                disabled={disabled}
                                type="text"
                                className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                value={projectIncubatorName}
                                onChange={(e) =>
                                    setProjectIncubatorName(e.target.value)
                                }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex mb-5 -mx-3">
                        <div className="w-full px-3 mb-5">
                          <label className="text-md font-semibold">
                            City of Incubation Centre
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                                disabled={disabled}
                                type="text"
                                className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                value={projectIncubatorCity}
                                onChange={(e) =>
                                    setProjectIncubatorCity(e.target.value)
                                }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                )}

                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">
                      Upload Innovation Photograph:
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                          disabled={disabled}
                          type="file"
                          className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          onChange={(e) => setProjectImage(e.target.files[0])}
                      />
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
                          TRL 1 : Basic research. Principles postulated observed but
                          no experimental proof available.
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
                          TRL 9 : Full commercial application, technology available
                          for consumers.
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
                            onChange={(e) => setProjectFundingSupport(e.target.value)}
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
                            onChange={(e) => setProjectFundingSupport(e.target.value)}
                        />
                        <div className="title px-2">No</div>
                      </label>
                    </div>
                  </div>
                </div>
              </>

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
