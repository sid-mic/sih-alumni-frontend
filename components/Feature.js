import "../styles/Feature.module.css";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <div className="bg-hero-pattern font-bold max-w-md mb-6 sm:text-4xl text-3xl xl:max-w-lg bg-cover bg-center">
            <h1 className="font-bold max-w-md bg-clip-content mb-6 sm:text-4xl text-3xl xl:max-w-lg mix-blend-lighten">
              REVOLUTIONIZING STARTUPS FOR
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                SELF-RELAINCE .
              </span>
            </h1>
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesettin.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
          <p className="mb-3 text-sm text-gray-900">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
          <p className="mb-3 text-sm text-gray-900">
            Rough pomfret lemon shark plownose chimaera southern sandfish
            kokanee northern sea robin Antarctic cod.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
          <p className="mb-3 text-sm text-gray-900">
            A slice of heaven. O for awesome, this chocka full cuzzie is as
            rip-off as a cracker.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
          <p className="mb-3 text-sm text-gray-900">
            Disrupt inspire and think tank, social entrepreneur but preliminary
            thinking think tank compelling.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
