import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";

export default function Featured() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios()
        .get("/stories/public")
        .then((response) => {
          setStories(response.data);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  });

  if (isLoading) {
    return <FormLoader></FormLoader>;
  }

  if (stories?.alumni.length < 3 && !stories?.mentor.length < 3) {
    return <div></div>;
  }

  return (
    <div>
      <section>
        <div class="px-4 mt-20 md:mt-0 py-0 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 lg:h-screen lg:items-center">
            {stories?.mentor?.length > 2 && (
              <div class="relative  sm:h-96  ">
                {" "}
                <h1
                  style={{ fontFamily: "Montserrat" }}
                  className="font-bold text-center items-center max-w-xl mb-14 sm:text-xl text-2xl md:text-4xl xl:max-w-full "
                >
                  FEATURED MENTORS
                </h1>
                <div class="flex flex-wrap -mx-3 overflow-hidden bg-indblue bg-opacity-20 rounded-xl">
                  {stories.mentor.map((mentor, index) =>
                  <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/3" key={index}>
                    <a class="relative block bg-black group" href="">
                      <img
                        class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
                        src={mentor.user.picture}
                        alt={mentor.user.name}
                      />
                      {/*TODO: FIX IMAGE HEIGHTS*/}
                      <div class="relative p-8">
                        <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                          {mentor.title}
                        </p>

                        <p class="text-2xl font-bold text-white">{mentor.user.name}</p>

                        <div class="mt-10">
                          <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <p class="text-sm text-white overflow-hidden">
                              {mentor.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>)}
                </div>
              </div>
            )}

            {stories.alumni.length > 2 && (
              <div class="relative  sm:h-96">
                {" "}
                <h1
                  style={{ fontFamily: "Montserrat" }}
                  className="font-bold text-center items-center max-w-xl mb-14 sm:text-xl text-2xl md:text-4xl xl:max-w-full  "
                >
                  FEATURED ALUMNI
                </h1>
                <div class="flex flex-wrap -mx-3 overflow-hidden bg-indblue bg-opacity-20 rounded-xl">
                  {stories.alumni.map((alumni, index) => <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/3" key={index}>
                    <a class="relative block bg-black group" href="">
                      <img
                          class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
                          src={alumni.user.picture}
                          alt={alumni.user.name}
                      />
                      {/*TODO: FIX IMAGE HEIGHTS*/}
                      <div class="relative p-8">
                        <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                          {alumni.title}
                        </p>

                        <p class="text-2xl font-bold text-white">{alumni.user.name}</p>

                        <div class="mt-10">
                          <div
                              class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <p class="text-sm text-white overflow-hidden">
                              {alumni.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
