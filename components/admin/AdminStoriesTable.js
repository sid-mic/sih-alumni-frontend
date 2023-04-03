import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import FormLoader from "../FormLoader";
import { toast } from "react-toastify";
import StoryCard from "../StoryCard";
import Pagination from "rc-pagination";
import download from "js-file-download";

export default function AdminStoriesTable(props) {
  const [list_data, setlistdata] = useState(false);
  const [meta, setMeta] = useState({});
  const [counts, setCounts] = useState({});
  const [displayArchived, setDisplayArchived] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    handleRequest();
  }, [props.user]);

  function handleRequest(page = 1, displayArchived = false) {
    setlistdata(false);

    axios()
      .get(`stories${displayArchived ? "/archived" : ""}?page=${page}`)
      .then(function (response) {
        if (response.status == 200) {
          setlistdata(response.data.stories.data);
          setMeta(response.data.stories);
          setCounts(response.data.counts);
        }
      });
  }

  function handleDownload() {
    axios()
      .post(
        "stories/export",
        {},
        {
          responseType: "blob",
          headers: {
            Accept:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      )
      .then((response) => {
        download(response.data, "stories_mic_alumni_portal.xlsx");
      })
      .catch((error) => {
        alert("The file couldn't be downloaded");
      });
  }

  // Main list page
  return (
    <>
      <div className={"flex justify-end mb-3 mr-9"}>
        <button
          onClick={() => handleDownload()}
          className="bg-indblue hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-500 rounded"
        >
          Export as Excel
        </button>
        <button
          onClick={() => {
            handleRequest(1, !displayArchived);
            setDisplayArchived(!displayArchived);
          }}
          className="bg-indblue hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-500 rounded ml-2"
        >
          {displayArchived ? "Display non archived" : "Display archived"}
        </button>
      </div>
      <div className="px-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-3 lg:py-0">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-3 mx-40">
          <div className="p-5 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              {counts?.total}
            </h6>
            <p className="font-bold">TOTAL</p>
          </div>
          <div className="p-5 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              {counts?.published}
            </h6>
            <p className="font-bold">PUBLISHED</p>
          </div>
          <div className="p-5 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              {counts?.unpublished}
            </h6>
            <p className="font-bold">UNPUBLISHED</p>
          </div>
        </div>
      </div>
      <AdminAnnouncementList
        data={list_data}
        setlist={setlistdata}
        setSelected={setSelected}
        handleRequest={handleRequest}
        meta={meta}
        displayArchived={displayArchived}
        setDisplayArchived={setDisplayArchived}
      />
      {selected !== null && (
        <StoryCard item={list_data[selected]} setSelected={setSelected} />
      )}
    </>
  );
}

function AdminAnnouncementList({
  data,
  setlist,
  setSelected,
  meta,
  handleRequest,
  displayArchived,
  setDisplayArchived,
}) {
  if (!data) {
    return <FormLoader></FormLoader>;
  } else if (data.length == 0) {
    return (
      <div className="text-center mt-10">
        <h1 className={"font-bold"}>No stories yet!</h1>
      </div>
    );
  } else {
    return (
      <div className="pt-6 p-20">
        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
            <thead className="block md:table-header-group rounded-2xl">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Title
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  By
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Display
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {data.map((row, index) => {
                return (
                  <StoryRow
                    data={row}
                    setlist={setlist}
                    index={index}
                    setSelected={setSelected}
                  />
                );
              })}
            </tbody>
          </table>
          <div className={"mt-10 text-center mr-16"}>
            <Pagination
              total={meta.total}
              pageSize={15}
              onChange={(page) => handleRequest(page)}
              current={meta.current_page}
              hideOnSinglePage={false}
            ></Pagination>
          </div>
        </div>
      </div>
    );
  }
}

function StoryRow({ data, setlist, setSelected, index, displayArchived }) {
  function handleDisplayChange(id, display) {
    toast.promise(
      axios().post(`stories/${id}/update_display`, {
        display,
      }),
      {
        pending: {
          render() {
            return "Updating.....";
          },
        },
        success: {
          render({ data }) {
            setlist(data.data);
            return "Story updated successfully!";
          },
        },
        error: {
          render() {
            return "Something went wrong!";
          },
        },
      }
    );
  }

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
        {data.user.email}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.display}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <div className={"ml-3 flex content-center"}>
          {data.display !== "mentor" && (
            <button
              onClick={() => {
                handleDisplayChange(data.id, "mentor");
              }}
              className={"block bg-green-600 rounded-lg p-3 mr-4"}
            >
              Mentor
            </button>
          )}
          {data.display !== "alumni" && (
            <button
              onClick={() => {
                handleDisplayChange(data.id, "alumni");
              }}
              className={"block bg-yellow-500 rounded-lg p-3 mr-4 col-span-2"}
            >
              Alumni
            </button>
          )}
          {data.display !== "none" && (
            <button
              onClick={() => {
                handleDisplayChange(data.id, "none");
              }}
              className={"block bg-red-600 rounded-lg p-3 mr-4 col-span-2"}
            >
              None
            </button>
          )}
          {data.display !== "archived" && (
            <button
              onClick={(e) => {
                handleDisplayChange(data.id, "archived");
              }}
              className={
                "block bg-gray-400 rounded-lg p-3 mr-4 col-span-2 align-middle"
              }
            >
              Archive
            </button>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected(index);
            }}
            className={
              "block bg-blue-600 rounded-lg p-3 mr-4 col-span-2 align-middle"
            }
          >
            View
          </button>
        </div>
      </td>
    </tr>
  );
}
