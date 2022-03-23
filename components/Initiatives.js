import React from "react";

export default function Initiatives() {
  return (
    <div>
      <section class="text-black">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto text-center">
            <h2
              class="text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: "Montserrat" }}
            >
              Our initiatives
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indblue hover:border-indblue"
              href="/services/digital-campaigns"
            >
              <img src="https://www.mic.gov.in/assets/img/ariia-logo.png" className="h-26" />

              <h3 class="mt-4 text-xl font-bold text-indblue">
                Atal Ranking of Institutions on Innovation Achievements(ARIIA)
              </h3>

              <p class="mt-1 text-sm text-black">
                The buzzword across the globe for the 21st century is ‘Innovation’. In the simplest term, Innovation could be defined as converting ideas into new or improved products, processes and services
              </p>
              <a className={"bg-indblue mx-10 mt-3 block p-2"} href="https://ariia.gov.in/" target="_blank">Know more!</a>
              {/*TODO: ADD STYLING*/}
            </div>

            <div
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img src="https://www.sih.gov.in/img/logo.png" className="h-26" />

              <h3 class="mt-4 text-xl font-bold text-indblue">
                Smart India Hackathon
              </h3>

              <p class="mt-1 text-sm text-black">
                Smart India Hackathon 2020 is a nationwide initiative to provide
                students a platform to solve some of the pressing problems we
                face in our daily lives, and thus inculcate a culture of product
                innovation
              </p>
            </div>

            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img src="https://www.sih.gov.in/img/logo.png" className="h-26" />

              <h3 class="mt-4 text-xl font-bold text-indblue">
                Smart India Hackathon
              </h3>

              <p class="mt-1 text-sm text-black">
                Smart India Hackathon 2020 is a nationwide initiative to provide
                students a platform to solve some of the pressing problems we
                face in our daily lives, and thus inculcate a culture of product
                innovation
              </p>
            </a>

            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img src="https://www.sih.gov.in/img/logo.png" className="h-26" />

              <h3 class="mt-4 text-xl font-bold text-indblue">
                Smart India Hackathon
              </h3>

              <p class="mt-1 text-sm text-black">
                Smart India Hackathon 2020 is a nationwide initiative to provide
                students a platform to solve some of the pressing problems we
                face in our daily lives, and thus inculcate a culture of product
                innovation
              </p>
            </a>

            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img src="https://www.sih.gov.in/img/logo.png" className="h-26" />

              <h3 class="mt-4 text-xl font-bold text-indblue">
                Smart India Hackathon
              </h3>

              <p class="mt-1 text-sm text-black">
                Smart India Hackathon 2020 is a nationwide initiative to provide
                students a platform to solve some of the pressing problems we
                face in our daily lives, and thus inculcate a culture of product
                innovation
              </p>
            </a>

            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img src="https://www.sih.gov.in/img/logo.png" className="h-26" />

              <h3 class="mt-4 text-xl font-bold text-indblue">
                Smart India Hackathon
              </h3>

              <p class="mt-1 text-sm text-black">
                Smart India Hackathon 2020 is a nationwide initiative to provide
                students a platform to solve some of the pressing problems we
                face in our daily lives, and thus inculcate a culture of product
                innovation
              </p>
            </a>
          </div>

          <div class="mt-12 text-center">
            <a
              class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indblue rounded-xl"
              href="/get-started"
            >
              <span
                class="text-sm font-medium"
                style={{ fontFamily: "Montserrat" }}
              >
                View More
              </span>

              <svg
                class="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
