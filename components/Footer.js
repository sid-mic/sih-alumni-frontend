export const Footer = () => {
  return (
    <div className="relative mt-28 bg-indblue">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-indblue"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-20 row-gap-10 mb-8 lg:grid-cols-6">
          <div id={"contact"} className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="https://mic.gov.in/assets/img/logo.png"></img>
            </a>
            <div className="mt-4 lg:max-w-xl">
              <p className="text-sm text-white">
                All India Council for Technical Education (AICTE), Nelson
                Mandela Marg, VasantKunj, New Delhi-110070.
              </p>
              <p className="mt-4 text-sm text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                micalumni@aicte-india.org
              </p>
              <p className="mt-4 text-sm text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                011-29581316
              </p>
            </div>
          </div>
          <div className="lg:pl-20 grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4">
            <div>
              <p className="font-bold tracking-wide text-white underline">
                Hackathons:
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://mic.gov.in/hackathon/sih"
                    target={"_blank"}
                    className="transition-colors duration-300 text-white"
                  >
                    Smart India Hackathon
                  </a>
                </li>
                <li>
                  <a
                    href="https://mic.gov.in/hackathon/singapore_india_hackathon_2019"
                    target={"_blank"}
                    className="transition-colors duration-300 text-white"
                  >
                    Singapore India Hackathon
                  </a>
                </li>
                <li>
                  <a
                    href="https://mic.gov.in/hackathon/samadhan"
                    target={"_blank"}
                    className="transition-colors duration-300 text-white"
                  >
                    Samadhan
                  </a>
                </li>
                <li>
                  <a
                    href="https://mic.gov.in/Hackathon/ddh2020"
                    target={"_blank"}
                    className="transition-colors duration-300 text-white"
                  >
                    Drug Discovery Hackathon
                  </a>
                </li>
                <li>
                  <a
                    href="https://mic.gov.in/hackathon/india-asean-hackathon"
                    target={"_blank"}
                    className="transition-colors duration-300 text-white"
                  >
                    ASEAN - India Hackathon
                  </a>
                </li>
                <li>
                  <a
                    href="https://mic.gov.in/hackathon/toycathon"
                    target={"_blank"}
                    className="transition-colors duration-300 text-white"
                  >
                    Toycathon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold tracking-wide text-white underline">
                Quick Links:
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                      href="https://ariia.gov.in/"
                      className="transition-colors duration-300 text-white"
                  >
                    ARIIA
                  </a>
                </li>
                <li>
                  <a
                      href="https://yukti.mic.gov.in/"
                      className="transition-colors duration-300 text-white"
                  >
                    Yukti 2.0
                  </a>
                </li>
                <li>
                  <a
                    href="https://mic.gov.in/"
                    className="transition-colors duration-300 text-white"
                  >
                    MoE’s Innovation Cell
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.aicte-india.org/"
                    className="transition-colors duration-300 text-white"
                  >
                    All India Council for Technical Education
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.education.gov.in/"
                    className="transition-colors duration-300 text-white"
                  >
                    Ministry of Education
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2022. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com/mhrd_innovation"
              target={"_blank"}
              className="transition-colors duration-300 text-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mhrd.innovationcell/"
              target={"_blank"}
              className="transition-colors duration-300 text-white hover:text-white"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/mhrdInnovation/"
              target={"_blank"}
              className="transition-colors duration-300 text-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/mhrdinnovationcell"
              target={"_blank"}
              className="transition-colors duration-300 text-white hover:text-white"
            >
              <svg className="h-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
