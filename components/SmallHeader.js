export const SmallHeader = (props) => {
  return (
    <div className="relative">
      <img
        src="https://www.sih.gov.in/img1/pastEvent-2017-bg.jpg"
        className=" absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-80 bg-indblue">
        <svg
          className="absolute mb-0 inset-x-0 bottom-0 text-white"
          viewBox="0 -1 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  lineHeight: "1.3",
                }}
                className=" filter drop-shadow-xl max-w-lg mb-6  font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
              >
                {props.heading}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
