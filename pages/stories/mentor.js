import React, { useEffect, useState } from "react";
import styles from "../../components/Featured.module.css";
import axios from "../../utils/axios";
import FormLoader from "../../components/FormLoader";

export default function MentorStories() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios()
        .get("/stories/public/index/mentor")
        .then((response) => {
          setStories(response.data.stories);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));

      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <FormLoader className="mb-10"></FormLoader>;
  }

  return (
    <div>
      <section>
        <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
          <div class="grid grid-cols-1">
            <div class="relative">
              <h1
                className={
                  styles.mainHeading +
                  " font-bold mb-16 mt-6 pb-2 sm:text-xl text-2xl md:text-3xl text-center"
                }
              >
                SUCCESS
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  STORIES
                </span>
                <div className={styles.bottomLine}></div>
              </h1>
              <div className="">
                <a
                  href={"/"}
                  style={{ fontFamily: "Montserrat" }}
                  className={styles.buttonLink1 +" button-active bg-indblue p-3 text-white w-40 flex mb-10"}
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  <span className="ml-6">Back</span>
                </a>
                </div>
              <div
                class={styles.boxMentors + " flex flex-wrap -mx-3 mt-0 pt-0"}
              >
                {stories.map((story, index) => (
                  <div class="my-3 px-3 w-1/2 lg:w-1/3" key={index}>
                    <div className={styles.profileTop}></div>
                    <a
                      className={styles.outerImage + " relative block group"}
                      href={`/stories/${story.id}`}
                    >
                      <img
                        className={styles.roundedImage}
                        src={story.user.picture}
                        alt={story.user.name}
                        style={{ height: 176, width: 176 }}
                      />
                      <div
                        className={
                          styles.design +
                          " relative rounded-b-xl overflow-hidden p-3 "
                        }
                        style={{ position: "relative" }}
                      >
                        <p class="text-sm text-left w-full font-bold text-white">
                          {story.user.name}
                        </p>
                        <p class="text-sm text-left w-full font-bold text-white">
                          {story.user.organization_name}
                        </p>
                        <p class="text-sm text-left w-full font-bold text-white">
                          {story.user.designation}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
