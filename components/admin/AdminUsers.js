import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "../../utils/axios";
import Router from "next/router";
import SimpleReactValidator from "simple-react-validator";
import FormLoader from "../FormLoader";

export default function AdminUser(props) {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [isLoading, setIsLoading] = useState(false);
  const [initiative, setInitiative] = useState("");
  const [file, setFile] = useState();
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    if (!initiatives.length) {
      axios()
        .get("initiatives")
        .then((response) => {
          setInitiatives(response.data);
          setInitiative(response.data[0].id);
        });
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (simpleValidator.current.allValid() && props.user != null) {
      const data = new FormData();
      data.append("file", file);
      data.append("initiative", initiative);
      props.toast.promise(axios().post(`/imports`, data), {
        pending: {
          render() {
            setIsLoading(true);
            return "Importing users";
          },
        },
        success: {
          render() {
            setIsLoading(false);
            return "Users imported successfully!";
          },
        },
        error: {
          render() {
            setIsLoading(false);
            return "Something went wrong!";
          },
        },
      });
    } else {
      simpleValidator.current.showMessages();
      forceUpdate();
    }
  }

  if (!initiatives.length) {
    return <FormLoader></FormLoader>;
  }

  return (
    <div className="ml-20 mr-20">
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label htmlFor="initiative" className="text-xs font-semibold px-1">
            Initiative
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <select
              defaultValue={initiatives[0].id}
              onChange={(e) => {
                setInitiative(e.target.value);
                simpleValidator.current.fieldValid("initiative")
                  ? simpleValidator.current.hideMessageFor("initiative")
                  : simpleValidator.current.showMessageFor("initiative");
              }}
              className="w-full pl-5 -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            >
              {initiatives.map((i) => {
                return (
                  <option value={i.id}>
                    {i.hackathon} - {i.edition}
                  </option>
                );
              })}
            </select>
          </div>
          {simpleValidator.current.message(
            "initiative",
            initiative,
            "required",
            {
              className: "text-red-600",
            }
          )}
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label htmlFor="file" className="text-xs font-semibold px-1">
            Excel file
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              onChange={(e) => {
                setFile(e.target.files[0]);
                simpleValidator.current.fieldValid("file")
                  ? simpleValidator.current.hideMessageFor("file")
                  : simpleValidator.current.showMessageFor("file");
              }}
              type="file"
              accept=".xlsx, .csv, .xls"
              className="w-full mt-2 -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            />
          </div>
          {simpleValidator.current.message("file", file, "required", {
            className: "text-red-600",
          })}
        </div>
      </div>
      <br />
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            style={{ fontFamily: "Montserrat" }}
            className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
            onClick={(e) => handleSubmit(e)}
          >
            {isLoading ? "Importing......" : "Import data"}
          </button>
        </div>
      </div>
    </div>
  );
}
