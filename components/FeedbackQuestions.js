import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";
import FormNotFilled from "./FormNotFilled";

export default function FeedbackQuestions(props) {
  const disabled = props.view_only_mode;
  const [isFormFilled, setIsFormFilled] = useState(null);

  const [mic_confidence, set_mic_confidence] = useState();
  const [hired_by_ministry, set_hired_by_ministry] = useState();
  const [hired_by_name, set_hired_by_name] = useState();
  const [helped_placement, set_helped_placement] = useState();
  const [placement_country, set_placement_country] = useState();
  const [placement_name, set_placement_name] = useState();
  const [ministry_internship, set_ministry_internship] = useState();
  const [ministry_internship_name, set_ministry_internship_name] = useState();
  const [helped_internship, set_helped_internship] = useState();
  const [helped_internship_name, set_helped_internship_name] = useState();
  const [higher_studies, set_higher_studies] = useState();
  const [higher_studies_degree, set_higher_studies_degree] = useState();
  const [higher_studies_stream, set_higher_studies_stream] = useState();
  const [higher_studies_country, set_higher_studies_country] = useState();
  const [helped_higher_studies, set_helped_higher_studies] = useState();
  const [received_award, set_received_award] = useState();
  const [award_name, set_award_name] = useState();
  const [award_level, set_award_level] = useState();
  const [award_state, set_award_state] = useState();
  const [award_country, set_award_country] = useState();
  const [ip_registration, set_ip_registration] = useState();
  const [ip_type, set_ip_type] = useState();
  const [ip_country, set_ip_country] = useState();
  const [ip_status, set_ip_status] = useState();
  const [registered_startup, set_registered_startup] = useState();
  const [registered_startups_count, set_registered_startups_count] = useState();
  const [received_investment, set_received_investment] = useState();
  const [investment_level, set_investment_level] = useState();
  const [recommend_others, set_recommend_others] = useState();
  const [
    participation_social_awareness,
    set_participation_social_awareness,
  ] = useState();
  const [comments, set_comments] = useState();
  const [improvements, set_improvements] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      axios()
        .get(
          process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
            "/users/" +
            (disabled ? `${props.user.id}/feedback` : "feedback")
        )
        .then((response) => {
          if (response?.status == 200) {
            let data = response.data;

            if (Object.keys(data).length === 0 && disabled == true) {
              setIsFormFilled(false);
            } else {
              setIsFormFilled(true);
              set_mic_confidence(data.mic_confidence);
              set_hired_by_ministry(data.hired_by_ministry);
              set_hired_by_name(data.hired_by_name);
              set_helped_placement(data.helped_placement);
              set_placement_country(data?.placement_country ?? "India");
              set_placement_name(data.placement_name);
              set_ministry_internship(data.ministry_internship);
              set_ministry_internship_name(data.ministry_internship_name);
              set_helped_internship(data.helped_internship);
              set_helped_internship_name(data.helped_internship_name);
              set_higher_studies(data.higher_studies);
              set_higher_studies_degree(
                data?.higher_studies_degree ?? "Master"
              );
              set_higher_studies_stream(
                data?.higher_studies_stream ?? "Engineering"
              );
              set_higher_studies_country(data.higher_studies_country);
              set_helped_higher_studies(data.helped_higher_studies);
              set_received_award(data.received_award);
              set_award_name(data.award_name);
              set_award_level(data?.award_level ?? "State Level");
              set_award_state(data.award_state);
              set_award_country(data.award_country);
              set_ip_registration(data.ip_registration);
              set_ip_type(data?.ip_type ?? "Patent");
              set_ip_country(data?.ip_country ?? "India");
              set_ip_status(data?.ip_status ?? "Applied");
              set_registered_startup(data.registered_startup);
              set_registered_startups_count(data.registered_startups_count);
              set_received_investment(data.received_investment);
              set_investment_level(data?.investment_level ?? "Up to 10 Lakh");
              set_recommend_others(data.recommend_others);
              set_participation_social_awareness(
                data.participation_social_awareness
              );
              set_comments(data.comments);
              set_improvements(data.improvements);
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

    // if (simpleValidator.current.allValid() && props.user != null) {
    toast.promise(
      axios().post(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + `/users/feedback`, {
        mic_confidence,
        hired_by_ministry,
        hired_by_name,
        helped_placement,
        placement_country,
        placement_name,
        ministry_internship,
        ministry_internship_name,
        helped_internship,
        helped_internship_name,
        higher_studies,
        higher_studies_degree,
        higher_studies_stream,
        higher_studies_country,
        helped_higher_studies,
        received_award,
        award_name,
        award_level,
        award_state,
        award_country,
        ip_registration,
        ip_type,
        ip_country,
        ip_status,
        registered_startup,
        registered_startups_count,
        received_investment,
        investment_level,
        recommend_others,
        participation_social_awareness,
        comments,
        improvements,
      }),
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
            return "Feedback updated successfully!";
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
    // } else {
    //   simpleValidator.current.showMessages();
    //   forceUpdate();
    // }
  }

  return (
    <>
      {isInitialising ? (
        <FormLoader></FormLoader>
      ) : disabled && !isFormFilled ? (
        <FormNotFilled />
      ) : (
        <>
          <div className="mb-20 min-h-screen  ml-20 mr-20">
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  1] Whether SIH helped in building your confidence ?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Agree"}
                      checked={mic_confidence == "Strongly Agree"}
                      onChange={(e) => set_mic_confidence(e.target.value)}
                    />
                    <div className="title px-2">Strongly Agree</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Agree"}
                      checked={mic_confidence == "Agree"}
                      onChange={(e) => set_mic_confidence(e.target.value)}
                    />
                    <div className="title px-2">Agree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"May be"}
                      checked={mic_confidence == "May be"}
                      onChange={(e) => set_mic_confidence(e.target.value)}
                    />
                    <div className="title px-2">May be</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Disagree"}
                      checked={mic_confidence == "Disagree"}
                      onChange={(e) => set_mic_confidence(e.target.value)}
                    />
                    <div className="title px-2">Disagree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Disagree"}
                      checked={mic_confidence == "Strongly Disagree"}
                      onChange={(e) => set_mic_confidence(e.target.value)}
                    />
                    <div className="title px-2">Strongly Disagree</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  2] Were you ever hired by your Problem Statement creator
                  Ministry/Company
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={hired_by_ministry == true}
                      onChange={(e) => set_hired_by_ministry(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={hired_by_ministry == false}
                      onChange={(e) => set_hired_by_ministry(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>

            {hired_by_ministry == true && (
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Company/Organization Name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      defaultValue={hired_by_name}
                      onChange={(e) => set_hired_by_name(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  3] Hackathon experience helped you in getting placed within in
                  India or abroad?
                </label>

                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={helped_placement == true}
                      onChange={(e) => set_helped_placement(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={helped_placement == false}
                      onChange={(e) => set_helped_placement(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
            {helped_placement == true && (
              <div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">Country</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        onChange={(e) => set_placement_country(e.target.value)}
                        defaultValue={placement_country ?? "India"}
                      >
                        <option value="India"> India</option>
                        <option value="Abroad"> Abroad </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">
                      Company/Organization Name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        disabled={disabled}
                        type="text"
                        className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        defaultValue={placement_name}
                        onChange={(e) => set_placement_name(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  4] Were you ever hired for internship by your Problem
                  Statement creator Ministry/Company?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={ministry_internship == true}
                      onChange={(e) => set_ministry_internship(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={ministry_internship == false}
                      onChange={(e) => set_ministry_internship(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>

            {ministry_internship == true && (
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Company/Organization Name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      defaultValue={ministry_internship_name}
                      onChange={(e) =>
                        set_ministry_internship_name(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  5] Hackathon experience helped you in getting internship
                  within India or Abroad
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={helped_internship == true}
                      onChange={(e) => set_helped_internship(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={helped_internship == false}
                      onChange={(e) => set_helped_internship(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>

            {helped_internship == true && (
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Company/Organization Name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      defaultValue={helped_internship_name}
                      onChange={(e) =>
                        set_helped_internship_name(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  6] Have you perceived higher studies after your bachelor
                  degree?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={higher_studies == true}
                      onChange={(e) => set_higher_studies(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={higher_studies == false}
                      onChange={(e) => set_higher_studies(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>

            {higher_studies == true && (
              <div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">Degree</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        defaultValue={higher_studies_degree ?? "Master"}
                        onChange={(e) =>
                          set_higher_studies_degree(e.target.value)
                        }
                      >
                        <option value="Master"> Master</option>
                        <option value="PhD"> PhD</option>
                        <option value="Others"> Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">Stream</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        defaultValue={higher_studies_stream ?? "Engineering"}
                        onChange={(e) =>
                          set_higher_studies_stream(e.target.value)
                        }
                      >
                        <option value="Engineering"> Engineering</option>
                        <option value="Management"> Management</option>
                        <option value="Science"> Science</option>
                        <option value="Medical"> Medical</option>
                        <option value="Pharmacy"> Pharmacy</option>
                        <option value="Arts"> Arts</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <div className="main flex overflow-hidden m-2 select-none">
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          disabled={disabled}
                          className="my-auto transform scale-125"
                          type="radio"
                          value={"India"}
                          checked={higher_studies_country == "India"}
                          onChange={(e) =>
                            set_higher_studies_country(e.target.value)
                          }
                        />
                        <div className="title px-2">India</div>
                      </label>

                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          disabled={disabled}
                          className="my-auto transform scale-125"
                          type="radio"
                          value={"Abroad"}
                          checked={higher_studies_country == "Abroad"}
                          onChange={(e) =>
                            set_higher_studies_country(e.target.value)
                          }
                        />
                        <div className="title px-2">Abroad</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  7] Did your success in SIH helped for your admission in higher
                  studies?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Agree"}
                      checked={helped_higher_studies == "Strongly Agree"}
                      onChange={(e) =>
                        set_helped_higher_studies(e.target.value)
                      }
                    />
                    <div className="title px-2">Strongly Agree</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Agree"}
                      checked={helped_higher_studies == "Agree"}
                      onChange={(e) =>
                        set_helped_higher_studies(e.target.value)
                      }
                    />
                    <div className="title px-2">Agree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"May be"}
                      checked={helped_higher_studies == "May be"}
                      onChange={(e) =>
                        set_helped_higher_studies(e.target.value)
                      }
                    />
                    <div className="title px-2">May be</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Disagree"}
                      checked={helped_higher_studies == "Disagree"}
                      onChange={(e) =>
                        set_helped_higher_studies(e.target.value)
                      }
                    />
                    <div className="title px-2">Disagree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Disagree"}
                      checked={helped_higher_studies == "Strongly Disagree"}
                      onChange={(e) =>
                        set_helped_higher_studies(e.target.value)
                      }
                    />
                    <div className="title px-2">Strongly Disagree</div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  8] Have you received any award at State/National
                  level/International level?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={received_award == true}
                      onChange={(e) => set_received_award(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={received_award == false}
                      onChange={(e) => set_received_award(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
            {received_award == true && (
              <div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">
                      Name of the award:
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        disabled={disabled}
                        type="text"
                        className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        defaultValue={award_name}
                        onChange={(e) => set_award_name(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">Level</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        defaultValue={award_level ?? "State Level"}
                        onChange={(e) => set_award_level(e.target.value)}
                      >
                        <option value="State Level"> State Level</option>
                        <option value="National Level"> National Level </option>
                        <option value="International Level">
                          {" "}
                          International Level{" "}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {award_level === "State Level" && (
                  <div className="flex mb-5 -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-md font-semibold">
                        State Name:{" "}
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          disabled={disabled}
                          type="text"
                          className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          defaultValue={award_state}
                          onChange={(e) => set_award_state(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {award_level === "International Level" && (
                  <div className="flex mb-5 -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-md font-semibold">
                        Name of the Country:{" "}
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          disabled={disabled}
                          type="text"
                          className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          defaultValue={award_country}
                          onChange={(e) => set_award_country(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  9] Have you registered Intellectual Property (IP)?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={ip_registration == true}
                      onChange={(e) => set_ip_registration(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={ip_registration == false}
                      onChange={(e) => set_ip_registration(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
            {ip_registration == true && (
              <div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">IP Type</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        defaultValue={ip_type ?? "Patent"}
                        onChange={(e) => set_ip_type(e.target.value)}
                      >
                        <option value="Patent"> Patent</option>
                        <option value="Copy Right"> Copy Right</option>
                        <option value="Trademark"> Trademark </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">IP Filed In</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        defaultValue={ip_country ?? "India"}
                        onChange={(e) => set_ip_country(e.target.value)}
                      >
                        <option value="India"> India</option>
                        <option value="Foreign"> Foreign</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex mb-5 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-md font-semibold">Status</label>
                    <div className="flex">
                      <select
                        disabled={disabled}
                        className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        defaultValue={ip_status ?? "Applied"}
                        onChange={(e) => set_ip_status(e.target.value)}
                      >
                        <option value="Applied"> Applied</option>
                        <option value="Filed"> Filed</option>
                        <option value="Granted"> Granted</option>
                        <option value="Register"> Register</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  10] Have you registered any startup/company?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={registered_startup == true}
                      onChange={(e) => set_registered_startup(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={registered_startup == false}
                      onChange={(e) => set_registered_startup(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
            {registered_startup == true && (
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    No. of startups/Company{" "}
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="number"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      defaultValue={registered_startups_count}
                      onChange={(e) =>
                        set_registered_startups_count(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  11] Have you received any investment?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={received_investment == true}
                      onChange={(e) => set_received_investment(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={received_investment == false}
                      onChange={(e) => set_received_investment(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
            {received_investment == true && (
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Level</label>
                  <div className="flex">
                    <select
                      disabled={disabled}
                      className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      defaultValue={investment_level ?? "Up to 10 Lakh"}
                      onChange={(e) => set_investment_level(e.target.value)}
                    >
                      <option value="Up to 10 Lakh"> Up to 10 Lakh</option>
                      <option value="Up to 25 Lakh"> Up to 25 Lakh </option>
                      <option value="Up to 50 Lakh"> Up to 50 Lakh </option>
                      <option value="1 Crore"> 1 Crore </option>
                      <option value="Greater than 1 Crore">
                        {" "}
                        Greater than 1 Crore{" "}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  12] Would you recommend other students to participate in such
                  future initiatives?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Agree"}
                      checked={recommend_others == "Strongly Agree"}
                      onChange={(e) => set_recommend_others(e.target.value)}
                    />
                    <div className="title px-2">Strongly Agree</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Agree"}
                      checked={recommend_others == "Agree"}
                      onChange={(e) => set_recommend_others(e.target.value)}
                    />
                    <div className="title px-2">Agree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"May be"}
                      checked={recommend_others == "May be"}
                      onChange={(e) => set_recommend_others(e.target.value)}
                    />
                    <div className="title px-2">May be</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Disagree"}
                      checked={recommend_others == "Disagree"}
                      onChange={(e) => set_recommend_others(e.target.value)}
                    />
                    <div className="title px-2">Disagree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Disagree"}
                      checked={recommend_others == "Strongly Disagree"}
                      onChange={(e) => set_recommend_others(e.target.value)}
                    />
                    <div className="title px-2">Strongly Disagree</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  13] Did participating in this hackathon make you more aware of
                  your social?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Agree"}
                      checked={
                        participation_social_awareness == "Strongly Agree"
                      }
                      onChange={(e) =>
                        set_participation_social_awareness(e.target.value)
                      }
                    />
                    <div className="title px-2">Strongly Agree</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Agree"}
                      checked={participation_social_awareness == "Agree"}
                      onChange={(e) =>
                        set_participation_social_awareness(e.target.value)
                      }
                    />
                    <div className="title px-2">Agree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"May be"}
                      checked={participation_social_awareness == "May be"}
                      onChange={(e) =>
                        set_participation_social_awareness(e.target.value)
                      }
                    />
                    <div className="title px-2">May be</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Disagree"}
                      checked={participation_social_awareness == "Disagree"}
                      onChange={(e) =>
                        set_participation_social_awareness(e.target.value)
                      }
                    />
                    <div className="title px-2">Disagree</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={"Strongly Disagree"}
                      checked={
                        participation_social_awareness == "Strongly Disagree"
                      }
                      onChange={(e) =>
                        set_participation_social_awareness(e.target.value)
                      }
                    />
                    <div className="title px-2">Strongly Disagree</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  14] Comments (May be a thank you note to Organization team or
                  feedback on improvement)?
                </label>
              </div>
            </div>
            <div className="flex mb-5 -mx-3">
              <div className="w-full px-3 mb-5">
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    disabled={disabled}
                    rows={5}
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(e) => set_comments(e.target.value)}
                    defaultValue={comments}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  15] Where/What can we improve?
                </label>
              </div>
            </div>
            <div className="flex mb-5 -mx-3">
              <div className="w-full px-3 mb-5">
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    disabled={disabled}
                    rows={5}
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(e) => set_improvements(e.target.value)}
                    defaultValue={improvements}
                  ></textarea>
                </div>
              </div>
            </div>
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
        </>
      )}
    </>
  );
}
