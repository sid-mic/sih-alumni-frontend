import TextLoop from "react-text-loop";
import { useReducer, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

export const Hero = (props) => {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (simpleValidator.current.allValid()) {
      setIsLoading(true);

      toast.promise(props.auth.login(email), {
        pending: {
          render() {
            setIsLoading(true);
            return "Signing in......";
          },
        },
        success: {
          render() {
            setIsLoading(false);
            return "Email sent successfully!";
          },
        },
        error: {
          render({ data }) {
            setIsLoading(false);
            return data.message === "Request failed with status code 404"
              ? "Email not found!"
              : "Something went wrong!";
          },
        },
      });
    } else {
      simpleValidator.current.showMessages();
      forceUpdate();
    }
  }

  return (
    <div className="relative">
      <img
        src="https://www.sih.gov.in/img1/pastEvent-2017-bg.jpg"
        className=" absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-80 bg-indblue">
        <svg
          className="absolute mb-0 inset-x-0 bottom-0 text-lightblue"
          viewBox="0 -1 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  lineHeight: "1.3",
                }}
                className=" filter drop-shadow-xl max-w-lg mb-6  font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
              >
                <br className="hidden md:block" />
                HELPING STARTUPS IN
                <TextLoop>
                  <span className="mr-2  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    FUNDRAISING.
                  </span>
                  <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    MENTORSHIP.
                  </span>
                  <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    COLLABORATION.
                  </span>
                  <span className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    CONNECTING.
                  </span>
                </TextLoop>
              </h2>

              <br />

              <br />
              <br />
              <br />
            </div>
            {props.isAuth ? (
              <div className="bg-white shadow-2xl rounded-3xl p-3 sm:p-10">
                <a href={"/dashboard"}>Dashboard</a>{" "}
              </div>

                //TODO
            ) : (
              <div className="bg-white shadow-2xl rounded-3xl p-7 sm:p-10">
                <h3
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "1.3",
                  }}
                  className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl"
                >
                  ARE YOU AN SIH WINNER? <br />
                  SIGN IN TO GET STARTED
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="example@example.com"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        simpleValidator.current.fieldValid("email")
                          ? simpleValidator.current.hideMessageFor("email")
                          : simpleValidator.current.showMessageFor("email");
                      }}
                    />
                    {simpleValidator.current.message(
                      "email",
                      email,
                      "required|email",
                      { className: "text-red-800" }
                    )}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      style={{ fontFamily: "Montserrat" }}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indblue hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      onClick={handleSubmit}
                    >
                      {isLoading ? "Signing in..." : "SIGN IN"}
                    </button>
                  </div>
                  <p className="text-xs text-center text-gray-600 sm:text-sm">
                    Only accessible for Winners of MIC Hackathons
                  </p>
                </form>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
