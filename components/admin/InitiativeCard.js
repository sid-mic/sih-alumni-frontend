import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import FormLoader from "../FormLoader";

export default function InitiativeCard({ item, setSelected }) {
  const [stats, setStats] = useState(null);

  useEffect(async () => {
    if (stats == null) {
      await setStats((await axios().get(`initiatives/${item.id}/stats`)).data);
      console.log(stats);
    }
  });

  if (stats == null) {
    return <FormLoader />;
  }

  return (
    <>
      <div className="justify-center ml-10 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3
                style={{ fontFamily: "Montserrat" }}
                className="text-3xl font-semibold"
              >
                {item.hackathon} - {item.edition}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setSelected(null)}
              >
                <span className="bg-transparent text-black h-6 w-6 pl-3 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-1 px-5 flex-auto overflow-scroll max-h-72 mt-6">
              <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
                <thead className="block md:table-header-group rounded-2xl">
                  <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Projects:
                    </th>
                    <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Total
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.projects.projects_count}
                    </td>
                  </tr>

                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Updated Status
                    </td>{" "}
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.projects.updated_count}
                    </td>
                  </tr>
                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Requires Funding
                    </td>{" "}
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.projects.funding_count}
                    </td>{" "}
                  </tr>
                </tbody>
              </table>

              <table className="min-w-full mt-7 col-span-3 rounded-2xl border-collapse block md:table">
                <thead className="block md:table-header-group rounded-2xl">
                  <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                      Users
                    </th>
                    <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Total
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.users.users_count}
                    </td>
                  </tr>

                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Registered
                    </td>{" "}
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.users.registered_count}
                    </td>
                  </tr>
                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Updated Other Ideas
                    </td>{" "}
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.users.other_ideas_count}
                    </td>{" "}
                  </tr>
                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      Updated Stories
                    </td>{" "}
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {stats.users.stories_count}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-1 rounded-b">
              <button
                className="text-white bg-red-500 rounded font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
