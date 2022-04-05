import React, { useEffect, useState } from "react";
import { Nav } from "../../components/Navbar";
import Router, { useRouter } from "next/router";
import axios from "../../utils/axios";
import Loading from "../../components/Loading";

export default function Stories() {
  const { id } = useRouter().query;

  const [isLoading, setIsLoading] = useState(true);
  const [story, setStory] = useState(null);

  useEffect(async () => {
    if (isLoading && id) {
      if (id < 1 || id > 6) {
        await Router.push("/");
        return;
      }

      axios()
        .get(`stories/public/${id}`)
        .then((response) => {
          setStory(response.data);
        })
        .catch(async () => await Router.push("/"))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Nav />
      <div className="mx-10 my-10">
        <a
          href={"/"}
          style={{ fontFamily: "Montserrat" }}
          className="button-active bg-indblue p-5 m-3 text-white rounded-lg w-40 flex mb-10"
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
        <div className={"flex justify-center mr-20"}>
          <div className="mx-16">
            <h1
              style={{ fontFamily: "Montserrat" }}
              className="text-indblue text-3xl"
            >
              {story.title}
            </h1>
            <br />
            <div className="mt-4">
              {story.description
                .replace(/(?:\r\n|\r|\n)/g, "<br/>")
                .split("<br/>")
                .map((para, index) => (
                    <p key={index}>{para} {para ? <div><br/></div> : ""} </p>
                ))}
            </div>
          </div>
          <div className={"col-span-10"}>
            <img className="rounded-2xl w-80 h-80" src={story.user.picture} />
            <h3
              style={{ fontFamily: "Montserrat" }}
              className="text-black text-xl mt-10"
            >
              by {story.user.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
