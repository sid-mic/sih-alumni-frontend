import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import styles from './Featured.module.css';

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

      setIsLoading(false)
    }
  });

  if (isLoading) {
    return <FormLoader className="mb-10"></FormLoader>;
  }

  if (stories?.alumni?.length < 3 && !stories?.mentor?.length < 3) {
    return <div></div>;
  }

  return (
    <div>
      <section>
        <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
          <div class="grid grid-cols-1">
            {stories?.mentor?.length > 2 && (
              <div class="relative">
                {" "}
                <h1 className={styles.mainHeading+" font-bold mb-16 mt-6 pb-2 sm:text-xl text-2xl md:text-3xl text-center"}>
                  SUCCESS
                  <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    STORIES
                  </span>
                  <div className={styles.bottomLine}></div>
                </h1>
                
                <div class={styles.boxMentors+" flex flex-wrap -mx-3 mt-0 pt-0"}>
               
                  {stories.mentor.map((alumni, index) => (

                    <div
                      class="my-3 px-3 w-1/2 lg:w-1/3"
                      key={index}
                    >
                    <div className={styles.profileTop}></div>
                      <a
                        className={styles.outerImage+" relative block group"}
                        href={`/stories/${index + 4}`}
                      >
                      {/*<img className={styles.plusImageLeft} src="/assets/add.png" alt="img" />*/}
                        <img
                          className={styles.roundedImage}
                          src={alumni.user.picture}
                          alt={alumni.user.name}
                          style={{ height: 176, width: 176 }}
                        />
                        <div className={styles.design+" relative rounded-b-xl overflow-hidden p-3 "} style={{position:'relative'}}>
                         
                           
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
                        {/*TODO: FIX IMAGE HEIGHTS*/}
                      </a>
                    </div>
                    
                  ))}
                </div>
              </div>
            )}
          
          </div>
        </div>
        <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl pt-2">
          <a href="/stories" className={styles.buttonLink} >View All </a>
        </div>
      </section>
    </div>

  );
}
