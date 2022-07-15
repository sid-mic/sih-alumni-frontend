import React, { useEffect, useRef, useState } from "react";
import axios from "../../utils/axios";
import FormLoader from "../FormLoader";
import download from "js-file-download";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function DataComponent(props) {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const [registered, setRegistered] = useState(false);
  const [unregistered, setUnregistered] = useState(false);
  const [bootstrapped, setBootstrapped] = useState(false);
  const [funding, setFunding] = useState(false);
  const [initiatives, setInitiatives] = useState([]);

  useEffect(async () => {
    if (!isInitialized) {
      await handleRequest();
      setIsInitialized(true);
      setIsLoading(false);
    }
  }, [isInitialized]);

  function onInitiativesChanged(e) {
    let i = initiatives;
    let index;

    if (e.target.checked) {
      i.push(+e.target.value);
    } else {
      index = i.indexOf(+e.target.value);
      i.splice(index, 1);
    }

    setInitiatives(i);
  }

  async function handleRequest(page = 1) {
    setIsLoading(true);

    let response = await axios().post(`users?page=${page}`, {
      registered:
        registered && unregistered
          ? null
          : registered
          ? true
          : unregistered
          ? false
          : null,
      bootstrapped,
      funding,
      initiatives,
    });

    setData(response.data.data);
    setMeta(response.data);

    setIsLoading(false);
  }

  function handleReset() {
    setRegistered(false);
    setUnregistered(false);
    setBootstrapped(false);
    setFunding(false);
    setInitiatives([]);

    setIsInitialized(false);
  }

  function handleDownload() {
    axios()
      .post(
        "users/export",
        {
          registered:
            registered && unregistered
              ? null
              : registered
              ? true
              : unregistered
              ? false
              : null,
          bootstrapped,
          funding,
          initiatives,
        },
        {
          responseType: "blob",
          headers: {
            Accept:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      )
      .then((response) => {
        download(response.data, "users.xlsx");
      })
      .catch((error) => {
        alert("The file couldn't be downloaded");
      });
  }

  if (isLoading) {
    return <FormLoader></FormLoader>;
  }

  return (
    <div>
      <div className={"flex justify-end mb-3 mr-9"}>
        <button
          onClick={() => handleDownload()}
          className="bg-indblue hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-500 rounded"
        >
          Export as Excel
        </button>
      </div>
      <section className="mb-20">
        <div className="px-4 mx-auto grid grid-cols-1 gap-4 max-w-screen-2xl sm:px-6 lg:px-8 lg:grid-cols-4 lg:items-start">
          <div>
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 text-xs font-medium tracking-wide uppercase bg-gray-200 border border-gray-200 lg:hidden"
            >
              Show Filters
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <form className="hidden border bg-gray-200 border-gray-200 divide-y divide-gray-200 lg:block">
              <div>
                <fieldset>
                  <legend className="w-full p-3 text-xs font-medium tracking-wide text-center uppercase bg-gray-100 border-b border-gray-200">
                    FILTERING OPTIONS
                  </legend>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="toy"
                        className="w-6 h-6 border-gray-300"
                        defaultChecked={registered}
                        onChange={(e) => setRegistered(e.target.checked)}
                      />
                      <label for="toy" className="ml-3 text-sm font-medium">
                        Registered
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="game"
                        className="w-6 h-6 border-gray-300"
                        defaultChecked={unregistered}
                        onChange={(e) => setUnregistered(e.target.checked)}
                      />
                      <label for="game" className="ml-3 text-sm font-medium">
                        Non-registered
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="download"
                        className="w-6 h-6 border-gray-300"
                        defaultChecked={bootstrapped}
                        onChange={(e) => setBootstrapped(e.target.checked)}
                      />
                      <label
                        for="download"
                        className="ml-3 text-sm font-medium"
                      >
                        Bootstrapped
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="outdoors"
                        className="w-6 h-6 border-gray-300"
                        defaultChecked={funding}
                        onChange={(e) => setFunding(e.target.checked)}
                      />
                      <label
                        for="outdoors"
                        className="ml-3 text-sm font-medium"
                      >
                        Looking for investment
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <legend className="w-full p-3 text-xs font-medium tracking-wide text-center uppercase bg-gray-100 border-b border-gray-200">
                    FILTER BY Initiative
                  </legend>

                  <div className="p-4 space-y-2">
                    {props.initiatives.map((initiative, index) => (
                      <div className="flex items-center" key={index}>
                        <input
                          type="checkbox"
                          className="w-6 h-6 border-gray-300"
                          value={initiative.id}
                          onChange={onInitiativesChanged}
                          id={"initiative_" + initiative.id.toString()}
                          defaultChecked={
                            initiatives.indexOf(initiative.id) !== -1
                          }
                        />
                        <label
                          htmlFor={"initiative_" + initiative.id.toString()}
                          className="ml-3 text-sm font-medium"
                        >
                          {initiative.hackathon} - {initiative.edition}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-between p-3">
                <button
                  type="button"
                  name="reset"
                  className="p-2 text-xs font-medium text-gray-500 uppercase"
                  onClick={() => handleReset()}
                >
                  Reset All
                </button>

                <button
                  type="button"
                  name="commit"
                  className="p-2 text-xs font-medium text-white uppercase bg-indblue"
                  onClick={() => handleRequest()}
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
          <div className="overflow-x-scroll lg:overflow-x-visible">
            <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
              <thead className="block md:table-header-group rounded-2xl">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Name
                  </th>
                  <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Email Address
                  </th>
                  <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Mobile
                  </th>
                  <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Registered
                  </th>
                  <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Detailed info
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {data.map((item, index) => (
                  <tr
                    className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                    key={index}
                  >
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Name
                      </span>
                      {item.name}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Team Leader
                      </span>
                      {item.email}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Mobile
                      </span>
                      {item.phone}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Signed_up
                      </span>
                      {item.signed_up_at ? "Yes" : "No"}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Detailed info
                      </span>
                      <a
                        href={"/admin/participant/" + item.id}
                        target={"_blank"}
                        className="bg-indblue hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                      >
                        View Response
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={"mt-10 text-center mr-16"}>
          <Pagination
            total={meta.total}
            pageSize={meta.per_page}
            current={meta.current_page}
            hideOnSinglePage={false}
            onChange={(page) => handleRequest(page)}
          ></Pagination>
        </div>
      </section>
    </div>
  );
}
