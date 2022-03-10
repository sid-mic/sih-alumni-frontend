import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import Loading from "../Loading";
import FormLoader from "../FormLoader";

export default function AdminAnnouncements() {
  const [page, setpage] = useState(0);
  const [editpage, seteditform] = useState({});
  const [announcement_list_data, setlistdata] = useState(false);

  useState(() => {
    axios()
      .get("/announcements")
      .then(function (response) {
        if (response.status == 200) {
          setlistdata(response.data);
          console.log(response.data);
        }
      });
  }, [announcement_list_data]);

  if (page === 0) {
    // Main list page
    return (
      <>
        <div className={"flex justify-end"}>
          <button
            style={{ fontFamily: "Montserrat" }}
            className="button-active bg-indblue p-4 mr-3 text-white rounded-lg"
            onClick={() => setpage(1)}
          >
            <span>Create New Announcement</span>
          </button>
        </div>

        <AdminAnnouncementList
          data={announcement_list_data}
          editform={seteditform}
          setpage={setpage}
        />
      </>
    );
  }
  if (page === 1) {
    return <AdminAnnouncementForm setpage={setpage} />;
  }
  if (page === 2) {
    return (
      <AdminAnnouncementForm
        data={editpage}
        setpage={setpage}
        setlist={setlistdata}
      />
    );
  }
}

function AdminAnnouncementList({ data, editform, setpage }) {
  if (!data) {
    return <FormLoader></FormLoader>;
  } else if (data.length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className={"font-bold"}>No announcements yet!</h1>
      </div>
    );
  } else {
    return (
      <div className="pt-10 p-20">
        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
            <thead className="block md:table-header-group rounded-2xl">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Title
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Created by
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Created at
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {data.live?.map((row) => {
                return (
                  <AnnouncementCard
                    data={row}
                    editform={editform}
                    setpage={setpage}
                  />
                );
              })}
              {data.archived?.map((row) => {
                return (
                  <AnnouncementCard
                    data={row}
                    editform={editform}
                    setpage={setpage}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function handleDelete(id) {
  toast.promise(axios().post(`announcements/${id}`, { _method: "delete" }), {
    pending: {
      render() {
        return "Deleting.....";
      },
    },
    success: {
      render() {
        return "Announcement deleted successfully!";
      },
    },
    error: {
      render() {
        return "Something went wrong!";
      },
    },
  });
}

function AnnouncementCard({ data, editform, setpage }) {
  return (
    <tr
      className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10"
      key={data.id}
    >
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.title}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.user.name}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.created_at}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <div className={"ml-3 flex content-center"}>
          <button
              onClick={() => {
                editform(data);
                setpage(2);
              }}
              className={"block bg-yellow-500 p-3 mr-4"}
          >
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg%22%3E"
            >
              <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </button>
          <button className={"block bg-red-600 p-3"}>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg%22%3E">
              <path fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

function AdminAnnouncementForm(props) {
  let data = props.data;
  let setpage = props.setpage;
  let setlist = props.setlist;
  const [title, setTitle] = useState(data?.title ?? "");
  const [description, setDescription] = useState(data?.description ?? "");
  const [attachment, setAttachment] = useState("");
  const [url, setUrl] = useState(data?.url ?? "");
  const [status, setStatus] = useState(data?.status ?? "live");

  const [isLoading, setIsLoading] = useState(false);

  function handleFormSubmit(id = null) {
    setIsLoading(true);
    const form_data = new FormData();
    form_data.append("title", title);
    form_data.append("description", description);
    form_data.append("attachment", attachment);
    form_data.append("url", url);
    form_data.append("status", status);

    const post_url = id == null ? "announcements" : `announcements/${id}`;
    if (id != null) {
      form_data.append("_method", "PUT");
    }
    toast.promise(
      axios()
        .post(post_url, form_data)
        .then((response) => console.log(response, response.data)),
      {
        pending: {
          render() {
            setIsLoading(true);
            return data?.id ? "Updating...." : "Saving.....";
          },
        },
        success: {
          render() {
            setIsLoading(false);
            setpage(0);
            setlist(null);
            return data?.id
              ? "Announcement updated successfully!"
              : "Announcement added successfully!";
          },
        },
        error: {
          render({ data }) {
            setIsLoading(false);
            setpage(0);
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

  if (isLoading) {
    return <FormLoader></FormLoader>;
  }

  return (
    <div className=" min-h-screen  ml-20 mr-20">
      <div className={"flex justify-start"}>
        <button
          style={{ fontFamily: "Montserrat" }}
          className="button-active bg-indblue p-4 mr-3 text-white rounded-lg"
          onClick={() => setpage(0)}
        >
          <span>Back</span>
        </button>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5 mt-10">
          <label for="" className="text-xs font-semibold px-1">
            TITLE
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              defaultValue={data?.title}
              className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label for="" className="text-xs font-semibold px-1">
            DESCRIPTION
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <textarea
              rows={10}
              defaultValue={data?.description}
              className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label for="" className="text-xs font-semibold px-1">
            IMAGE
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
            <input
              type="file"
              className="w-full -ml-10 pl-5 pr-3 py-2 bg-white rounded-lg border-2"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label for="" className="text-xs font-semibold px-1">
            URL
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              defaultValue={data?.url}
              className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label htmlFor="status" className="text-xs font-semibold px-1">
            Status
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <select
              defaultValue={data?.status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              className="w-full pl-5 -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            >
              <option value={"live"}>Live</option>
              <option value={"archived"}>Archived</option>
            </select>
          </div>
        </div>
      </div>
      <br />

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            style={{ fontFamily: "Montserrat" }}
            className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
            onClick={() => handleFormSubmit(data?.id)}
          >
            {data?.id ? "UPDATE ANNOUNCEMENT" : "ADD ANNOUNCEMENT"}
          </button>
        </div>
      </div>
    </div>
  );
}
