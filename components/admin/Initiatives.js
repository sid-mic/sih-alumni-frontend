import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import FormLoader from "../FormLoader";
import InitiativePopup from "./InitiativeCard";
export default function Initiatives(props) {
  const [page, setpage] = useState(0);
  const [editpage, seteditform] = useState({});
  const [list_data, setList_data] = useState(props.data);

  const [selected, setSelected] = useState(null);

  function setlistdata(data) {
    if (data != list_data) {
      props.setInitiatives(data);
      setList_data(data);
    }
  }

  useEffect(() => {
    if (!list_data) {
      axios()
        .get("/initiatives")
        .then(function (response) {
          if (response.status == 200) {
            setlistdata(response.data);
          }
        });
    }
  }, [list_data]);

  if (page === 0) {
    // Main list page
    return (
      <>
        <div className={"flex justify-end mr-16"}>
          <button
            style={{ fontFamily: "Montserrat" }}
            className="button-active bg-indblue p-4 mr-3 text-white rounded-lg"
            onClick={() => setpage(1)}
          >
            <span>Add Initiative</span>
          </button>
        </div>

        <InitiativesList
          data={list_data}
          editform={seteditform}
          setpage={setpage}
          setlist={setlistdata}
          setSelected={setSelected}
        />

        {selected !== null && (
          <InitiativePopup
            item={list_data[selected]}
            setSelected={setSelected}
          />
        )}
      </>
    );
  }
  if (page === 1) {
    return (
      <InitiativesForm
        setpage={setpage}
        list={list_data}
        setlist={setlistdata}
      />
    );
  }
  if (page === 2) {
    return (
      <InitiativesForm
        data={editpage}
        setpage={setpage}
        list={list_data}
        setlist={setlistdata}
      />
    );
  }
}

function InitiativesList({ data, editform, setpage, setlist, setSelected }) {
  if (!data) {
    return <FormLoader></FormLoader>;
  } else if (data.length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className={"font-bold"}>No initiatives yet!</h1>
      </div>
    );
  } else {
    return (
      <div className="pt-6 p-5 lg:p-20 ml-0 lg:ml-10">
        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
        <div className="overflow-x-scroll lg:overflow-x-visible">
          <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
            <thead className="block md:table-header-group rounded-2xl">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Hackathon
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Edition
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Added at
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {data.map((row, index) => {
                return (
                  <InitiativeCard
                    data={row}
                    editform={editform}
                    setpage={setpage}
                    setlist={setlist}
                    setSelected={setSelected}
                    index={index}
                  />
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

function InitiativeCard({
  data,
  editform,
  setpage,
  setlist,
  setSelected,
  index,
}) {
  function handleDelete(id) {
    toast.promise(axios().post(`initiatives/${id}`, { _method: "delete" }), {
      pending: {
        render() {
          return "Deleting.....";
        },
      },
      success: {
        render() {
          setlist(false);
          return "Initiative deleted successfully!";
        },
      },
      error: {
        render() {
          return "Something went wrong!";
        },
      },
    });
  }

  return (
    <tr
      className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10"
      key={data.id}
    >
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.hackathon}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.edition}
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
            className={"block bg-yellow-500 rounded-lg p-3 mr-4"}
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg%22%3E"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              handleDelete(data.id);
            }}
            className={"block rounded-lg bg-red-600 p-3"}
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg%22%3E"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected(index);
            }}
            className={
              "block bg-blue-600 rounded-lg p-3 mr-4 col-span-2 ml-4 align-middle"
            }
          >
            Stats
          </button>
        </div>
      </td>
    </tr>
  );
}

function InitiativesForm(props) {
  let data = props.data;
  let setpage = props.setpage;
  let setlist = props.setlist;
  const [hackathon, setHackathon] = useState(data?.hackathon ?? "");
  const [edition, setEdition] = useState(data?.edition ?? "");

  const [isLoading, setIsLoading] = useState(false);

  function handleFormSubmit(id = null) {
    setIsLoading(true);

    const form_data = new FormData();
    form_data.append("hackathon", hackathon);
    form_data.append("edition", edition);

    const post_url = id == null ? "initiatives" : `initiatives/${id}`;
    if (id != null) {
      form_data.append("_method", "PUT");
    }
    toast.promise(axios().post(post_url, form_data), {
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
          setlist(false);
          return data?.id
            ? "Initiative updated successfully!"
            : "Initiatives added successfully!";
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
          <label className="text-xs font-semibold px-1">Hackathon</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              defaultValue={data?.hackathon}
              className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              onChange={(e) => setHackathon(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Edition</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              defaultValue={data?.edition}
              className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              onChange={(e) => setEdition(e.target.value)}
            />
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
            {data?.id ? "UPDATE INITIATIVE" : "ADD INITIATIVE"}
          </button>
        </div>
      </div>
    </div>
  );
}
