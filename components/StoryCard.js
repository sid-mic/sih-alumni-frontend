import React from "react";

export default function StoryCard({ item, setSelected }) {
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
                {item.title}
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
            <div className={"flex justify-center"}>
              <img
                alt="Announcement"
                className="max-h-60 px-10"
                height={300}
                width={250}
                src={item.user.picture}
              />
            </div>
            {/*body*/}
            {item.description && (
              <div className="relative p-1 px-5 flex-auto overflow-scroll max-h-72 mt-6">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {item.description
                    .replace(/(?:\r\n|\r|\n)/g, "<br/>")
                    .split("<br/>")
                    .map((para, index) => (
                      <p key={index}>
                        {para}
                        {para ? (
                          <div>
                            <br />
                          </div>
                        ) : (
                          ""
                        )}{" "}
                      </p>
                    ))}
                </p>
              </div>
            )}
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
