import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";
import FormNotFilled from "./FormNotFilled";

export default function ParticipantStory(props) {
  const disabled = props.view_only_mode ?? false;

  let s_no = 0;

  const [isFormFilled, setIsFormFilled] = useState(null);

  const [stories, setStories] = useState({});
  const [story, setStory] = useState(null);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      axios()
        .get(disabled ? `/users/${props.user?.id}/stories` : "user/stories")
        .then((response) => {
          if (response?.status == 200) {
            let data = response.data;

            if (Object.keys(data).length === 0) {
              setIsFormFilled(false);
            } else {
              setIsFormFilled(true);
              setStories(data);
              s_no = 0;
            }
          }

          setIsInitialising(false);
        })
        .catch(() => {
          return;
        });
    }
  }, [props.user]);

  function handleStoryChange(story_id) {
    let data;

    if (story_id) {
      data = stories[story_id];
    } else {
      data = {};
    }

    setTitle(data?.title);
    setDescription(data?.description);

    setStory(story_id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (disabled) {
      return;
    }

    // if (simpleValidator.current.allValid() && props.user != null) {
    toast.promise(
      axios().post(`/user/stories${story ? "/" + story : ""}`, {
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
            axios()
                .get("user/stories")
                .then((resp) => {
                  setStories(resp.data);
                  setStory(null);
                });
            return "Your story updated successfully!";
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

  if (story === null && Object.keys(stories).length > 0) {
    return (
      <div>
        <div className="ml-20 mr-20">
          <div className="grid grid-cols-3 mt-10 space-x-20">
            <div className="col-span-1"></div>
            <h3 className={"font-bold col-span-1 text-left mt-3"}>
              Please select the Story to enter:{" "}
            </h3>
            <div className={"pl-28"}>
              <button
                className={"bg-indblue p-4 rounded-xl text-white"}
                onClick={() => handleStoryChange(false)}
                hidden={disabled}
              >
                Add New Story
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
                Title
              </td>
              <td className="border-separate border border-black">Status</td>
              <td className="border-separate border border-black">
                EDIT button
              </td>
            </tr>
            {Object.entries(stories).map(([id, story]) => {
              s_no += 1;
              return (
                  <tr key={id} className={"text-center"}>
                    <td className="border-separate border border-black">
                      {s_no}
                    </td>
                    <td className="border-separate border border-black">
                      {story.title}
                    </td>
                    <td className="border-separate border border-black">
                      {story.status === 'none' ? 'Not published' : "Published"}
                    </td>
                    <td className="border-separate border border-black text-center">
                      <button
                          className="block bg-indblue text-white p-5 py-3 my-2 rounded-xl ml-5 font-semibold"
                          key={id}
                          onClick={() => {
                            handleStoryChange(id);
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
          {/*  {Object.entries(stories).map(([id, story]) => {*/}
          {/*    return (*/}
          {/*      <button*/}
          {/*        className="block bg-indblue text-white p-5 rounded-xl ml-5 font-semibold"*/}
          {/*        key={id}*/}
          {/*        onClick={() => {*/}
          {/*          handleStoryChange(id);*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        {story.title}*/}
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
      {isInitialising ? (
        <FormLoader></FormLoader>
      ) : disabled && !isFormFilled ? (
        <FormNotFilled />
      ) : (
        <div className="mb-20 min-h-screen  ml-20 mr-20">
          <div className="flex justify-between mb-7 mt-10">
            {Object.keys(stories).length > 0 ? (
                <button
                    className={"bg-indblue p-4 rounded-xl text-white"}
                    onClick={() => handleStoryChange(null)}
                >
                  Back
                </button>
            ) : (
                <div></div>
            )}
            <h1 className={"text-center text-3xl -ml-4"}>{title}</h1>
            <div className="col-span-6"></div>
          </div>
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
