import React from "react";

export default function Banner() {
  return (
    <div>
      <aside className="p-3 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <p className="text-sm font-medium text-white">
          Smart India Hackathon 2021 is announced.
          <a href="" className="ml-5 inline-flex items-center underline">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 ml-1.5 flex-shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </p>
      </aside>
    </div>
  );
}
