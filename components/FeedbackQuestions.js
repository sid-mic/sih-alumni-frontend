import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";

export default function FeedbackQuestions(props) {
  const [hiredByMinistry, setHiredByMinistry] = useState();
  const [hiredByMinistryElaborate, setHiredByMinistryElaborate] = useState();
  const [opportunityStatus, setOpportunityStatus] = useState();
  const [opportunityDetails, setOpportunityDetails] = useState();
  const [recommendationStatus, setRecommendationStatus] = useState();
  const [recommendationDetails, setRecommendationDetails] = useState();
  const [micHelp, setMicHelp] = useState();
  const [recommendToStudent, setRecommendToStudent] = useState();
  const [micParticipation, setMicParticipation] = useState();
  const [comments, setComments] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      axios()
        .get(
          process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
            `/projects/${props?.project.id}/feedback`
        )
        .then((response) => {
          if (response?.status == 200) {
            let data = response.data;

            setHiredByMinistry(data.hired_by_ministry);
            setHiredByMinistryElaborate(data.hired_by_ministry_elaborate);
            setOpportunityStatus(data.opportunity_status);
            setOpportunityDetails(data.opportunity_details);
            setRecommendationStatus(data.recommendation_status);
            setRecommendationDetails(data.recommendation_details);
            setMicHelp(data.mic_help);
            setRecommendToStudent(data.recommend_to_student);
            setMicParticipation(data.mic_participation);
            setComments(data.comments);
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

    // if (simpleValidator.current.allValid() && props.user != null) {
    toast.promise(
      axios().post(
        process.env.NEXT_PUBLIC_BACKEND_DOMAIN +
          `/projects/${props?.project.id}/feedback`,
        {
          hired_by_ministry: hiredByMinistry,
          hired_by_ministry_elaborate: hiredByMinistryElaborate,
          opportunity_status: opportunityStatus,
          opportunity_details: opportunityDetails,
          recommendation_status: recommendationStatus,
          recommendation_details: recommendationDetails,
          mic_help: micHelp,
          recommend_to_student: recommendToStudent,
          mic_participation: micParticipation,
          comments: comments,
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
      ) : (
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
                    checked={hiredByMinistry == true}
                    onChange={(e) => setHiredByMinistry(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={hiredByMinistry == false}
                    onChange={(e) => setHiredByMinistry(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {hiredByMinistry == true && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">
                  Please elaborate
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    rows={5}
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(e) =>
                      setHiredByMinistryElaborate(e.target.value)
                    }
                    defaultValue={hiredByMinistryElaborate}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Did you get an opportunity to participate in any other
                State/National/International competition based on your
                achievement ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={opportunityStatus == true}
                    onChange={(e) => setOpportunityStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={opportunityStatus == false}
                    onChange={(e) => setOpportunityStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {opportunityStatus == true && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">Give details</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    rows={5}
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(e) => setOpportunityDetails(e.target.value)}
                    defaultValue={opportunityDetails}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Did you get any other recommendations or job opportunities on
                the basis of your success ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={recommendationStatus == true}
                    onChange={(e) => setRecommendationStatus(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={recommendationStatus == false}
                    onChange={(e) => setRecommendationStatus(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          {recommendationStatus == true && (
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-md font-semibold">Give Details</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    rows={5}
                    className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(e) => setRecommendationDetails(e.target.value)}
                    defaultValue={recommendationDetails}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Whether SIH helped in building your confidence ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={micHelp == true}
                    onChange={(e) => setMicHelp(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={micHelp == false}
                    onChange={(e) => setMicHelp(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Would you recommend other students to participate in such future
                initiatives ?
              </label>
              <div className="main flex overflow-hidden m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    checked={recommendToStudent == true}
                    onChange={(e) => setRecommendToStudent(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={recommendToStudent == false}
                    onChange={(e) => setRecommendToStudent(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
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
                    checked={micParticipation == true}
                    onChange={(e) => setMicParticipation(e.target.value)}
                  />
                  <div className="title px-2">Yes</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    checked={micParticipation == false}
                    onChange={(e) => setMicParticipation(e.target.value)}
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Comments (May be a Thank You Note to Organizing Team or Feedback
                on improvement) ?
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <textarea
                  rows={5}
                  className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  onChange={(e) => setComments(e.target.value)}
                  defaultValue={comments}
                ></textarea>
              </div>
            </div>
          </div>

          <br />
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
        </div>
      )}
    </>
  );
}
