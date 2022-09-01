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
    <div className="text-xl font-bold">
      {!mentor.is_selected ? (
        <h5 className="mt-12 text-center">
          Thanks for your interest in participating SIH 2022. <br/> But unfortunately,
          due to limited vacancies, your application is not selected.
        </h5>
      ) : (
        <div>
          <h3 className="mt-4 text-center">
            Congratulations! You have been selected as {mentor.associate} in
            {mentor.category === "sw" ? "Software" : "Hardware"} category in SIH
            2022. <br /> Nodal center alloted to you is {mentor.nodal_center}.
             <br/><br/>{mentor.category === 'sw' ? "SIH 2022 Software edition is scheduled between 25th and 26th August 2022." : "SIH 2022 Hardware edition is scheduled between 25 to 29th August 2022."}
            <br/>

          </h3>
          {mentor.is_accepted === null ? (
            <form
              onSubmit={handleSubmit}
              className="ml:0 md:ml-20 mr-0 md:mr-18 lg:mr-20 mt-10 text-center"
            >
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-md font-semibold">
                    Do you confirm your presence in SIH 2022?{" "}
                    <span className="text-red-600">
                      (This form can be submitted only once)<sup>*</sup>
                    </span>
                  </label>
                  <div className="main xl:flex m-2 select-none justify-center">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        required={true}
                        name="is_accepted"
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={1}
                      />
                      <div className="title px-2">Confirm my presence</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        required={true}
                        name="is_accepted"
                        disabled={disabled}
                        className="my-auto transform scale-125"
                        type="radio"
                        value={0}
                      />
                      <div className="title px-2">Not Interested</div>
                    </label>
                  </div>
                </div>
              </div>

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
          ) : (
            <h5 className="mt-4 text-center">
              You {mentor.is_accepted  != "0" ? "have accepted" : "are not interested"}{" "}
              to participate.
            </h5>
          )}
        </div>
      )}
    </div>
  );
}
