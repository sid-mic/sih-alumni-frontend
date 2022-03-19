import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";
import FormNotFilled from "./FormNotFilled";

export default function ParticipantStory(props) {
  const disabled = props.view_only_mode ?? false;
  const [isFormFilled, setIsFormFilled] = useState(null);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      axios()
        .get(`/users/${props.user?.id}/story`)
        .then((response) => {
          if (response?.status == 200) {
            let data = response.data;

            if (Object.keys(data).length === 0) {
              setIsFormFilled(false);
            } else {
              setIsFormFilled(true);
              setTitle(data.title);
              setDescription(data.description);
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
      axios().post(`/users/${props.user?.id}/story`, {
        title,
        description,
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
            return "Story updated successfully!";
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
        <div className="mb-20 min-h-screen  ml-20 mr-20">
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Please enter a suitable title for your story
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  disabled={disabled}
                  type="text"
                  className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  onChange={(e) => setTitle(e.target.value)}
                  defaultValue={title}
                ></input>
              </div>
            </div>
          </div>

          <div className="flex mb-5 -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                Describe your story here
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <textarea
                  disabled={disabled}
                  rows={5}
                  className="w-full mt-5 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
      )}
    </>
  );
}
