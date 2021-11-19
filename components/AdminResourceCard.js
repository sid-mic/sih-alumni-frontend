import React from "react";

export default function AdminResourceCard() {
  return (
    <div>
      <a
        href=""
        class="relative block p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl"
      >
        <h5 class="text-4xl font-bold">100+</h5>
        <p class="mt-4 text-lg font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          provident.
        </p>

        <span class="absolute bottom-8 right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
