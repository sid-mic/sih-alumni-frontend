import React, { useState } from "react";

export default function TeamQuestions() {
  const [prototypeDevOther, setPrototypeDevOther] = useState();

  const [fundStatus, setFundStatus] = useState();
  const [fundOrganisation, setFundOrganisation] = useState();
  const [fundAmount, setFundAmount] = useState();
  const [fundingDate, setFundingDate] = useState();
  const [fundingSupportNeeded, setFundingSupportNeeded] = useState();
  const [projectDeliveryStatus, setProjectDeliveryStatus] = useState();
  const [projectDeliveredStatus, setProjectDeliveredStatus] = useState();
  const [
    projectImplementedByMinistry,
    setProjectImplementedByMinistry,
  ] = useState();
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

  return (
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
              rows={5}
              className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Have you developed any prototype/innovation other than this project
            ?
          </label>
          <div className="main flex overflow-hidden m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={prototypeDevOther == true}
                onChange={(e) => setPrototypeDevOther(e.target.value)}
              />
              <div className="title px-2">Yes</div>
            </label>

            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={0}
                checked={prototypeDevOther == false}
                onChange={(e) => setPrototypeDevOther(e.target.value)}
              />
              <div className="title px-2">No</div>
            </label>
          </div>
        </div>
      </div>

      {prototypeDevOther == true && (
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-md font-semibold">
              If yes please elaborate the idea, current status of the project,
              other implementation of the project
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
      )}

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            Whether this SIH project development activity was supported/funded
            by any Ministry or AICTE or any Private Organization?
          </label>
          <div className="main flex overflow-hidden m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={1}
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
                  className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  value={fundAmount}
                  onChange={(e) => setFundAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex mb-5 -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">Date of funding</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="date"
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
              Do you need funding support to deploy your SIH project further?
            </label>
            <div className="main flex overflow-hidden m-2 select-none">
              <label className="flex radio p-2 cursor-pointer">
                <input
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
            <label className="text-md font-semibold">Select an option</label>
            <div className="flex">
              <select
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
                TRL 0 : Idea. Unproven concept, no testing has been performed.
              </option>
              <option
                value="TRL 1 : Basic research. Principles postulated observed but no experimental proof available."
                selected={
                  trlLevel ===
                  "TRL 1 : Basic research. Principles postulated observed but no experimental proof available."
                }
              >
                TRL 1 : Basic research. Principles postulated observed but no
                experimental proof available.
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
                  "'TRL 4 : Small scale prototype built in a laboratory environment ('ugly' prototype).'"
                }
              >
                TRL 4 : Small scale prototype built in a laboratory environment
                ('ugly' prototype).
              </option>
              <option
                value="TRL 5 : Large scale prototype tested in intended environment."
                selected={
                  trlLevel ===
                  "TRL 5 : Large scale prototype tested in intended environment."
                }
              >
                TRL 5 : Large scale prototype tested in intended environment.
              </option>
              <option
                value="TRL 6 : Prototype system tested in intended environment close to expected performance."
                selected={
                  trlLevel ===
                  "TRL 6 : Prototype system tested in intended environment close to expected performance."
                }
              >
                TRL 6 : Prototype system tested in intended environment close to
                expected performance.
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
                TRL 8 : First of a kind commercial system. Manufacturing issues
                solved.
              </option>
              <option
                value="TRL 9 : Full commercial application, technology available for consumers."
                selected={
                  trlLevel ===
                  "TRL 9 : Full commercial application, technology available for consumers."
                }
              >
                TRL 9 : Full commercial application, technology available for
                consumers.
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
              <label className="text-md font-semibold">Date of IP Reg:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
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
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                checked={companyRegistrationStatus == true}
                onChange={(e) => setCompanyRegistrationStatus(e.target.value)}
              />
              <div className="title px-2">Yes</div>
            </label>

            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                value={0}
                checked={companyRegistrationStatus == false}
                onChange={(e) => setCompanyRegistrationStatus(e.target.value)}
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
