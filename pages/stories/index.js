import React from "react";
import { Nav } from "../../components/Navbar";

export default function Stories() {
  return (
    <div>
      <Nav />
      <div className="mx-10 my-10">
        <button
          style={{ fontFamily: "Montserrat" }}
          className="button-active bg-indblue p-5 m-3 text-white rounded-lg w-40 flex mb-10"
          onClick={() => this.setProject(null)}
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
        </button>
        <img
          className="rounded-2xl mb-20"
          src="https://mic.gov.in/assets/img/alumni-bg.jpg"
        />
        <h1
          style={{ fontFamily: "Montserrat" }}
          className="text-indblue text-3xl"
        >
          Hello, this is a title of whatever story
        </h1>
        <h3 style={{ fontFamily: "Montserrat" }} className="text-black text-xl">
          by Author Name
        </h3>
        <br />
        <div className="mt-4 ">
          <p>
            This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.This is a random story description which means nothing but a
            placeholder to fill up empty space.This is a random story
            description which means nothing but a placeholder to fill up empty
            space.
          </p>
        </div>
      </div>
    </div>
  );
}
