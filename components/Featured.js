import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import styles from "./Featured.module.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

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

      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <FormLoader className="mb-10"></FormLoader>;
  }

  return (
    <div>
      <div>
        <section>
          <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
            <div class="grid grid-cols-1">
              {stories?.mentor?.length > 2 && (
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
                  <div
                    class={
                      styles.boxMentors + " flex flex-wrap -mx-3 mt-0 pt-0"
                    }
                  >
                    <OwlCarousel className="owl-theme" loop margin={10} nav>
                      {stories.mentor.map((alumni, index) => (
                        <div class="my-3 px-3  item" key={index}>
                          <div className={styles.profileTop}></div>
                          <a
                            className={
                              styles.outerImage + " relative block group"
                            }
                            href={`/stories/${alumni.id}`}
                          >
                            <img
                              className={styles.roundedImage}
                              src={alumni.user.picture}
                              alt={alumni.user.name}
                            />
                            <div
                              className={
                                styles.design +
                                " relative rounded-b-xl overflow-hidden p-3 "
                              }
                              style={{ position: "relative" }}
                            >
                              <p class="text-sm text-left w-full font-bold text-white">
                                {alumni.user.name}
                              </p>
                              <p class="text-sm text-left w-full font-bold text-white">
                                {alumni.user.organization_name}
                              </p>
                              <p class="text-sm text-left w-full font-bold text-white">
                                {alumni.user.designation}
                              </p>
                            </div>
                          </a>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
            <a href="/stories/mentor" className={styles.buttonLink}>
              View All{" "}
            </a>
          </div>
        </section>
      </div>
      <div>
        <section className={"mt-10"}>
          <div className="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
            <div className="">
              {stories?.alumni?.length > 2 && (
                <div className="relative">
                  {" "}
                  <h1
                    className={
                      styles.mainHeading +
                      " font-bold mb-16 mt-6 pb-2 sm:text-xl text-2xl md:text-3xl text-center"
                    }
                  >
                    NOTABLE
                    <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                      ALUMNI
                    </span>
                    <div className={styles.bottomLine}></div>
                  </h1>
                  <div
                    className={
                      styles.boxMentors + " flex flex-wrap -mx-3 mt-0 pt-0"
                    }
                  >
                    <OwlCarousel className="owl-theme" loop margin={10} nav>
                      {stories.alumni.map((alumni, index) => (
                        <div class="my-3 px-3  item" key={index}>
                          <div className={styles.profileTop}></div>
                          <a
                            className={
                              styles.outerImage + " relative block group"
                            }
                            href={`/stories/${alumni.id}`}
                          >
                            <img
                              className={styles.roundedImage}
                              src={alumni.user.picture}
                              alt={alumni.user.name}
                            />
                            <div
                              className={
                                styles.design +
                                " relative rounded-b-xl overflow-hidden p-3 "
                              }
                              style={{ position: "relative" }}
                            >
                              <p class="text-sm text-left w-full font-bold text-white">
                                {alumni.user.name}
                              </p>
                              <p class="text-sm text-left w-full font-bold text-white">
                                {alumni.user.organization_name}
                              </p>
                              <p class="text-sm text-left w-full font-bold text-white">
                                {alumni.user.designation}
                              </p>
                            </div>
                          </a>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
            <a href="/stories/alumni" className={styles.buttonLink}>
              View All
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
