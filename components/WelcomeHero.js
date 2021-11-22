export const WelcomeHero = (props) => {
  return (
    <div className="  mt-10 px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
        <div className="text-center">
          <div className="max-w-xl mb-1 md:mx-auto sm:text-center lg:max-w-2xl md:mb-0">
            <h2
              style={{ fontFamily: "Montserrat" }}
              className="max-w-lg mb-1 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            >
              {props.h1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {props.h2}
              </span>
            </h2>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
