import React, { useEffect, useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import SimpleReactValidator from "simple-react-validator";
import Loading from "./Loading";
import FormLoader from "./FormLoader";
import FormNotFilled from "./FormNotFilled";

export default function TeamQuestions(props) {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const disabled = props.disabled;
  const [isFormFilled, setIsFormFilled] = useState(null);

  const [developmentStatus, setDevelopmentStatus] = useState();
  const [description, setDescription] = useState();
  const [micSupport, setMicSupport] = useState();
  const [fundStatus, setFundStatus] = useState();
  const [fundOrganisation, setFundOrganisation] = useState();
  const [fundAmount, setFundAmount] = useState();
  const [fundingDate, setFundingDate] = useState();
  const [fundingSupportNeeded, setFundingSupportNeeded] = useState();
  const [projectDeliveryStatus, setProjectDeliveryStatus] = useState();
  const [projectDeliveredStatus, setProjectDeliveredStatus] = useState();
  const [projectImplementedByMinistry, setProjectImplementedByMinistry] =
    useState();
  const [micSupportDeploy, setMicSupportDeploy] = useState();
  const [incubatorStatus, setIncubatorStatus] = useState();
  const [nameOfIncubator, setNameOfIncubator] = useState();
  const [trlLevel, setTrlLevel] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [ipStatus, setIpStatus] = useState();
  const [ipType, setIpType] = useState();
  const [isPatentRegistered, setIsPatentRegistered] = useState();
  const [ipNumber, setIpNumber] = useState();
  const [dateOfIpReg, setDateOfIpReg] = useState();
  const [noOfIpFiledTillDate, setNoOfIpFiledTillDate] = useState();
  const [startupStatus, setStartupStatus] = useState();
  const [startupName, setStartupName] = useState();
  const [companyRegistrationStatus, setCompanyRegistrationStatus] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyCin, setCompanyCin] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      axios()
        .get(
          process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
            `/projects/${props?.project.id}/status`
        )
        .then((response) => {
          if (response?.status == 200) {
            let data = response.data;

            if (Object.keys(data).length === 0) {
              setIsFormFilled(false);
            } else {
              setIsFormFilled(true);
              setDevelopmentStatus(data.development_status);
              setDescription(data.description);
              setMicSupport(data.mic_support);
              setFundStatus(data.fund_status);
              setFundOrganisation(data.fund_organisation);
              setFundAmount(data.fund_amount);
              setFundingDate(data.funding_date);
              setFundingSupportNeeded(data.funding_support_needed);
              setProjectDeliveryStatus(data.project_delivery_status);
              setProjectDeliveredStatus(data.project_delivered_status);
              setProjectImplementedByMinistry(
                  data.project_implemented_by_ministry
              );
              setMicSupportDeploy(data.mic_support_deploy);
              setIncubatorStatus(data.incubator_status);
              setNameOfIncubator(data.name_of_incubator);
              setTrlLevel(data.trl_level);
              setVideoUrl(data.video_url);
              setIpStatus(data.ip_status);
              setIpType(data.ip_type);
              setIsPatentRegistered(data.is_patent_registered);
              setIpNumber(data.ip_number);
              setDateOfIpReg(data.date_of_ip_reg);
              setNoOfIpFiledTillDate(data.number_of_ip_filed_till_date);
              setStartupStatus(data.startup_status);
              setStartupName(data.startup_name);
              setCompanyRegistrationStatus(data.company_registration_status);
              setCompanyName(data.company_name);
              setCompanyCin(data.company_cin);
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
      axios().post(
        process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
          `/projects/${props?.project.id}/status`,
        {
          development_status: developmentStatus,
          description: description,
          mic_support: micSupport,
          fund_status: fundStatus,
          fund_organisation: fundOrganisation,
          fund_amount: fundAmount,
          funding_date: fundingDate,
          funding_support_needed: fundingSupportNeeded,
          project_delivery_status: projectDeliveryStatus,
          project_delivered_status: projectDeliveredStatus,
          project_implemented_by_ministry: projectImplementedByMinistry,
          mic_support_deploy: micSupportDeploy,
          incubator_status: incubatorStatus,
          name_of_incubator: nameOfIncubator,
          trl_level: trlLevel,
          video_url: videoUrl,
          ip_status: ipStatus,
          ip_type: ipType,
          is_patent_registered: isPatentRegistered,
          ip_number: ipNumber,
          date_of_ip_reg: dateOfIpReg,
          number_of_ip_filed_till_date: noOfIpFiledTillDate,
          startup_status: startupStatus,
          startup_name: startupName,
          company_registration_status: companyRegistrationStatus,
          company_name: companyName,
          company_cin: companyCin,
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
            return "Project status updated successfully!";
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
          <FormNotFilled/>
      ) : (
        <div className="mb-20 min-h-screen  ml-20 mr-20">
          <div className="flex -mx-3 ">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Have you further developed the solution that you worked on
                during the Hackathon?
              </label>
              <div class="main flex overflow-hidden m-2 select-none">
                <label class="flex radio p-2 cursor-pointer">
                  <input
                    class="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={developmentStatus == true}
                    disabled={disabled}
                    onChange={(e) => {
                      setDevelopmentStatus(e.target.value);
                    }}
                  />
                  <div class="title px-2">Yes</div>
                </label>

                <label class="flex radio p-2 cursor-pointer">
                  <input
                    class="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    disabled={disabled}
                    checked={developmentStatus == false}
                    onChange={(e) => {
                      setDevelopmentStatus(e.target.value);
                    }}
                  />
                  <div class="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>
          {developmentStatus == true && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  If Yes, please elaborate a little with details. (Please also
                  include the product details of your SIH project, the current
                  status of it, if it has been implemented anywhere etc.)
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    disabled={disabled}
                    rows={5}
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue={description}
                  ></textarea>
                </div>
              </div>
            </div>
          )}
          {developmentStatus == false && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Do you want to further develop your SIH project?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      disabled={disabled}
                      checked={micSupport == true}
                      onChange={(e) => setMicSupport(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      disabled={disabled}
                      checked={micSupport == false}
                      onChange={(e) => setMicSupport(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Whether this SIH project development activity was
                supported/funded by any Ministry or AICTE or any Private
                Organization?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    disabled={disabled}
                    checked={fundStatus == true}
                    onChange={(e) => setFundStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    disabled={disabled}
                    checked={fundStatus == false}
                    onChange={(e) => setFundStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>
          {fundStatus == true && (
            <>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Organization</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      disabled={disabled}
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={fundOrganisation}
                      onChange={(e) => setFundOrganisation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Amount</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      disabled={disabled}
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Date of funding
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="date"
                      disabled={disabled}
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={fundingDate}
                      onChange={(e) => setFundingDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {fundStatus == false && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Do you need funding support to deploy your SIH project
                  further?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={fundingSupportNeeded == true}
                      onChange={(e) => setFundingSupportNeeded(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={fundingSupportNeeded == false}
                      onChange={(e) => setFundingSupportNeeded(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Whether the developed project was delivered to the concerned
                Ministry/Department ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={projectDeliveryStatus == true}
                    onChange={(e) => setProjectDeliveryStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={projectDeliveryStatus == false}
                    onChange={(e) => setProjectDeliveryStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {projectDeliveryStatus == true && (
            <div className="flex mb-5 -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Select an option
                </label>
                <div className="flex">
                  <select
                    disabled={disabled}
                    className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={(e) => {
                      setProjectDeliveredStatus(e.target.value);
                      setProjectImplementedByMinistry(
                        e.target.value ===
                          "Delivered and Implemented by Department/Ministry/Organisation"
                      );
                    }}
                  >
                    <option
                      value="Delivered and Implemented by Department/Ministry/Organisation"
                      selected={
                        projectDeliveredStatus ===
                        "Delivered and Implemented by Department/Ministry/Organisation"
                      }
                    >
                      (a) Delivered and Implemented by
                      Department/Ministry/Organisation
                    </option>
                    <option
                      value="Delivered to the Ministry but not implemented by the concerned Department/Ministry/Organisation"
                      selected={
                        projectDeliveredStatus ===
                        "Delivered to the Ministry but not implemented by the concerned Department/Ministry/Organisation"
                      }
                    >
                      (b) Delivered to the Ministry but not implemented by the
                      concerned Department/Ministry/Organisation
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {projectDeliveryStatus == false && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Do you need MIC support to deploy your SIH project further ?
                </label>
                <div className="main flex overflow-hidden m-2 select-none">
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={1}
                      checked={micSupportDeploy == true}
                      onChange={(e) => setMicSupportDeploy(e.target.value)}
                    />
                    <div className="title px-2">Yes</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      disabled={disabled}
                      className="my-auto transform scale-125"
                      type="radio"
                      value={0}
                      checked={micSupportDeploy == false}
                      onChange={(e) => setMicSupportDeploy(e.target.value)}
                    />
                    <div className="title px-2">No</div>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Have you incubated under any Incubator to deploy your project ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={incubatorStatus == true}
                    onChange={(e) => setIncubatorStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={incubatorStatus == false}
                    onChange={(e) => setIncubatorStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {incubatorStatus == true && (
            <div className="flex mb-5 -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Name of the Incubator
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    disabled={disabled}
                    type="text"
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={nameOfIncubator}
                    onChange={(e) => setNameOfIncubator(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

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
                    setTrlLevel(e.target.value);
                  }}
                >
                  <option
                    value="TRL 0 : Idea. Unproven concept, no testing has been performed."
                    selected={
                      trlLevel ===
                      "TRL 0 : Idea. Unproven concept, no testing has been performed."
                    }
                  >
                    TRL 0 : Idea. Unproven concept, no testing has been
                    performed.
                  </option>
                  <option
                    value="TRL 1 : Basic research. Principles postulated observed but no experimental proof available."
                    selected={
                      trlLevel ===
                      "TRL 1 : Basic research. Principles postulated observed but no experimental proof available."
                    }
                  >
                    TRL 1 : Basic research. Principles postulated observed but
                    no experimental proof available.
                  </option>
                  <option
                    value="TRL 2 : Technology formulation. Concept and application have been formulated."
                    selected={
                      trlLevel ===
                      "TRL 2 : Technology formulation. Concept and application have been formulated."
                    }
                  >
                    TRL 2 : Technology formulation. Concept and application have
                    been formulated.
                  </option>
                  <option
                    value="TRL 3 : Applied research. First laboratory tests completed; proof of concept."
                    selected={
                      trlLevel ===
                      "TRL 3 : Applied research. First laboratory tests completed; proof of concept."
                    }
                  >
                    TRL 3 : Applied research. First laboratory tests completed;
                    proof of concept.
                  </option>
                  <option
                    value="TRL 4 : Small scale prototype built in a laboratory environment ('ugly' prototype)."
                    selected={
                      trlLevel ===
                      "TRL 4 : Small scale prototype built in a laboratory environment ('ugly' prototype)."
                    }
                  >
                    TRL 4 : Small scale prototype built in a laboratory
                    environment ('ugly' prototype).
                  </option>
                  <option
                    value="TRL 5 : Large scale prototype tested in intended environment."
                    selected={
                      trlLevel ===
                      "TRL 5 : Large scale prototype tested in intended environment."
                    }
                  >
                    TRL 5 : Large scale prototype tested in intended
                    environment.
                  </option>
                  <option
                    value="TRL 6 : Prototype system tested in intended environment close to expected performance."
                    selected={
                      trlLevel ===
                      "TRL 6 : Prototype system tested in intended environment close to expected performance."
                    }
                  >
                    TRL 6 : Prototype system tested in intended environment
                    close to expected performance.
                  </option>
                  <option
                    value="TRL 7 : Demonstration system operating in operational environment at pre-commercial scale."
                    selected={
                      trlLevel ===
                      "TRL 7 : Demonstration system operating in operational environment at pre-commercial scale."
                    }
                  >
                    TRL 7 : Demonstration system operating in operational
                    environment at pre-commercial scale.
                  </option>
                  <option
                    value="TRL 8 : First of a kind commercial system. Manufacturing issues solved."
                    selected={
                      trlLevel ===
                      "TRL 8 : First of a kind commercial system. Manufacturing issues solved."
                    }
                  >
                    TRL 8 : First of a kind commercial system. Manufacturing
                    issues solved.
                  </option>
                  <option
                    value="TRL 9 : Full commercial application, technology available for consumers."
                    selected={
                      trlLevel ===
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
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Have you applied for any IP (Intellectual Property) against the
                challenge solved by you during Hackathon ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={ipStatus == true}
                    onChange={(e) => setIpStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={ipStatus == false}
                    onChange={(e) => setIpStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {ipStatus == true && (
            <>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">IP type:</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={ipType}
                      onChange={(e) => setIpType(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Is Patent Registered?
                  </label>
                  <div className="main flex overflow-hidden m-2 select-none">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={1}
                        checked={isPatentRegistered == true}
                        onChange={(e) => setIsPatentRegistered(e.target.value)}
                      />
                      <div className="title px-2">Yes</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={0}
                        checked={isPatentRegistered == false}
                        onChange={(e) => setIsPatentRegistered(e.target.value)}
                      />
                      <div className="title px-2">No</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">IP Number:</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={ipNumber}
                      onChange={(e) => setIpNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Date of IP Reg:
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="date"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={dateOfIpReg}
                      onChange={(e) => setDateOfIpReg(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Number of IP Filed Till Date:
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={noOfIpFiledTillDate}
                      onChange={(e) => setNoOfIpFiledTillDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Have you established your own start-up based on your hackathon
                project ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={startupStatus == true}
                    onChange={(e) => setStartupStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={startupStatus == false}
                    onChange={(e) => setStartupStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {startupStatus == true && (
            <div className="flex mb-5 -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Give the name of your start-up:
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    disabled={disabled}
                    type="text"
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={startupName}
                    onChange={(e) => setStartupName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Have you Registered Your Company ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={companyRegistrationStatus == true}
                    onChange={(e) =>
                      setCompanyRegistrationStatus(e.target.value)
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
                    checked={companyRegistrationStatus == false}
                    onChange={(e) =>
                      setCompanyRegistrationStatus(e.target.value)
                    }
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {companyRegistrationStatus == true && (
            <>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">Company Name:</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-5 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Company Identification Number:
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      disabled={disabled}
                      type="text"
                      className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      value={companyCin}
                      onChange={(e) => setCompanyCin(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <br />
          {!disabled && <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <button
                  style={{fontFamily: "Montserrat"}}
                  onClick={handleSubmit}
                  className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
              >
                {isLoading ? "Saving...." : "SAVE CHANGES"}
              </button>
            </div>
          </div>}
        </div>
      )}
    </>
  );
}
