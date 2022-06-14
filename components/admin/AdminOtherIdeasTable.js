import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import FormLoader from "../FormLoader";
import Pagination from "rc-pagination";

export default function AdminOtherIdeasTable(props) {
  const [list_data, setlistdata] = useState(false);
  const [meta, setMeta] = useState({});

  useEffect(() => {
    handleRequest();
  }, [props.user]);

  function handleRequest(page = 1) {
    setlistdata(false);

    axios()
      .get(`other-ideas?page=${page}`)
      .then(function (response) {
        if (response.status == 200) {
          setlistdata(response.data.data);
          setMeta(response.data);
        }
      });
  }

  if (!list_data) {
    return <FormLoader></FormLoader>;
  } else if (list_data.length == 0) {
    return (
      <div className="text-center mt-10">
        <h1 className={"font-bold"}>No ideas yet!</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="mb-10 mx-28">
          <div className="relative shadow-lg mt-10 mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-400">
              <thead className="font-sans uppercase bg-indblue opacity dark:bg-gray-700 dark:text-gray-400">
                <tr className="border border-1 border-gray-900 text-gray-200 opacity-100">
                  <th scope="col" className="text-center">
                    UserName
                  </th>
                  <th scope="col" className="text-center py-4">
                    Title
                  </th>
                  <th scope="col" className="text-center py-4">
                    Theme
                  </th>
                  <th scope="col" className="text-center py-4">
                    Email Id
                  </th>
                  <th scope="col" className="text-center py-4">
                    IP Generated 
                  </th>
                  <th scope="col" className="text-center py-4">
                    Currently Incubated
                  </th>
                  <th scope="col" className="text-center py-4">
                    Funding Support
                  </th>
                  <th scope="col" className="text-center py-4 mr-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {list_data.map((row, index) => (
                  <tr
                    key={row.id}
                    className="border border-1 border-gray-900 text-sm dark:bg-gray-900 font-medium dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                  >
                    
                    <th
                      scope="row"
                      className="px-6 py-4 text-center font-medium text-sm text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {row.user.name}
                    </th>
                    <td className="text-center py-4">{row.project_title}</td>
                    <td className="text-center py-4">{row.project_theme}</td>
                    <td className="text-center py-4">{row.user.email}</td>
                    <td className="text-center py-4">
                      {row.project_ip_registration ? "Yes" : "No"}
                    </td>
                    <td className="text-center py-4">
                      {row.project_incubated ? "Yes" : "No"}
                    </td>
                    <td className="text-center py-4">
                      {row.project_funding_support ? "Yes" : "No"}
                    </td>
                    <td className="py-4 text-center">
                      <a
                        href={`/admin/participant/${row.user.id}?tab=2`}
                        target={"_blank"}
                        className="p-5 py-2 mr-2 box-content rounded-xl w-20 h-10 text-lg font-normal text-white bg-indblue"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
      </>
    );
  }
}

function AdminFeedBacksList({ data, meta, handleRequest }) {
  if (!data) {
    return <FormLoader></FormLoader>;
  } else if (data.length == 0) {
    return (
      <div className="text-center mt-10">
        <h1 className={"font-bold"}>No feedbacks yet!</h1>
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
                  Name
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Registered IP
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Registered Startup
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Received Investment
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {data.map((row, index) => {
                return <StoryRow data={row} index={index} />;
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

function StoryRow({ data, index }) {
  return (
    <tr
      className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10"
      key={data.id}
    >
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.user.name}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.user.email}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.ip_registration}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.registered_startup}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.received_investment}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <div className={"ml-3 flex content-center"}>
          <a
            href={`/admin/participant/${data.user.id}?tab=feedback`}
            className={
              "block bg-blue-600 rounded-lg p-3 mr-4 col-span-2 align-middle"
            }
          >
            View
          </a>
        </div>
      </td>
    </tr>
  );
}
