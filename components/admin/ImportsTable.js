import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import FormLoader from "../FormLoader";
import download from "js-file-download";
import Pagination from "rc-pagination";

export default function ImportsTable(props) {
  const [imports, setImports] = useState();
  const [meta, setMeta] = useState({});

  const [isInitialising, setIsInitialising] = useState(true);

  useEffect(() => {
    if (props.user?.id != null) {
      handleRequest();
    }
  }, [props.user]);

  async function handleRequest(page = 1) {
    setIsInitialising(true);
    await axios()
      .get(`imports?page=${page}`)
      .then((response) => {
        if (response?.status == 200) {
          setImports(response.data.data);
          setMeta(response.data.meta);
        }

        setIsInitialising(false);
      })
      .catch(() => {
        return;
      });
  }

  function renderStatus(status) {
    switch (status) {
      case "F":
        return <span>Completed</span>; //TODO: Change to Failed
      case "C":
        return <span>Completed</span>;
      case "P":
        return <span>Processing</span>;
      case "W":
        return <span>Waiting</span>;
    }
  }

  function handleDownload(route, file_name) {
    axios()
      .post(
        route,
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
        download(response.data, file_name);
      })
      .catch((error) => {
        alert("The file couldn't be downloaded");
      });
  }

  return (
    <>
      {isInitialising ? (
        <FormLoader></FormLoader>
      ) : (
        <div className={"mx-10 min-h-screen"}>
          <div className={"flex justify-end mb-3"}>
            <button
              onClick={() =>
                handleDownload("imports/sample/download", "sample.xlsx")
              }
              className="bg-indblue hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-500 rounded"
            >
              Download Sample
            </button>
          </div>
          <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
            <thead className="block md:table-header-group rounded-2xl">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  File name
                </th>
                <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Initiative
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Projects
                </th>
                <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Users
                </th>
                <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Status
                </th>
                <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Imported By
                </th>
                <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Added At
                </th>
                <th className="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {imports.map((i, index) => (
                <tr
                  className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10"
                  key={index}
                >
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      File name:
                    </span>
                    {i.file_name}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Hackathon:
                    </span>
                    {i.initiative}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Projects imported:
                    </span>
                    {i.projects}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Users imported:
                    </span>
                    {i.users}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Status:
                    </span>
                    {renderStatus(i.status)}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Imported By:
                    </span>
                    {i.imported_by}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Added At:
                    </span>
                    {i.created_at}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Download:
                    </span>
                    <button
                      onClick={() => handleDownload(i.download, i.file_name)}
                      className="bg-indblue hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={"mt-10 text-center mr-16"}>
            <Pagination
              total={meta.total}
              pageSize={meta.per_page}
              onChange={(page) => handleRequest(page)}
              current={meta.current_page}
              hideOnSinglePage={false}
            ></Pagination>
          </div>
        </div>
      )}
    </>
  );
}
