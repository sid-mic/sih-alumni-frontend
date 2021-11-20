import React, { Component } from "react";

class Stories extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //this.state = {selectedtype: event.target.value}
    alert(event.target.id);
    this.props.selectedtype.bind(this, event.target.id);
  }

  render() {
    return (
      <div className="px-4 mt-20  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <h2
          style={{ fontFamily: "Montserrat" }}
          className="max-w-3xl mb-6 font-sans text-1xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl mb-10"
        >
          POPULAR STORIES
        </h2>
        <div class="flex flex-wrap -mx-4 overflow-hidden">
          <div class="my-4 px-4 w-full overflow-hidden lg:w-1/3">
            <a class="mb-5 block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/code/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5 class="text-xl font-bold text-gray-900">
                  My first day at the campus
                </h5>

                <p class="hidden mt-0 text-gray-500 sm:block">by Sakshi</p>
                <p class="hidden mt-5 text-gray-500 sm:block">
                  After being stuck in enormous traffic for hours, finally you
                  manage to somehow find a blue colored board proclaiming 'IIT
                  Bombay, Gyanaarth Praveshan...!
                </p>

                <dl class="items-center mt-3 sm:flex">
                  <dl class="items-center sm:flex text-indblue font-bold">
                    Read more
                  </dl>
                </dl>
              </div>
            </a>
          </div>

          <div class="my-4 px-4 w-full overflow-hidden lg:w-1/3">
            <a class="mb-5 block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/code/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5 class="text-xl font-bold text-gray-900">
                  My first day at the campus
                </h5>

                <p class="hidden mt-0 text-gray-500 sm:block">by Sakshi</p>
                <p class="hidden mt-5 text-gray-500 sm:block">
                  After being stuck in enormous traffic for hours, finally you
                  manage to somehow find a blue colored board proclaiming 'IIT
                  Bombay, Gyanaarth Praveshan...!
                </p>

                <dl class="items-center mt-3 sm:flex">
                  <dl class="items-center sm:flex text-indblue font-bold">
                    Read more
                  </dl>
                </dl>
              </div>
            </a>
          </div>

          <div class="my-4 px-4 w-full overflow-hidden lg:w-1/3">
            <a class="mb-5 block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/code/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5 class="text-xl font-bold text-gray-900">
                  My first day at the campus
                </h5>

                <p class="hidden mt-0 text-gray-500 sm:block">by Sakshi</p>
                <p class="hidden mt-5 text-gray-500 sm:block">
                  After being stuck in enormous traffic for hours, finally you
                  manage to somehow find a blue colored board proclaiming 'IIT
                  Bombay, Gyanaarth Praveshan...!
                </p>

                <dl class="items-center mt-3 sm:flex">
                  <dl class="items-center sm:flex text-indblue font-bold">
                    Read more
                  </dl>
                </dl>
              </div>
            </a>
          </div>

          <div class="my-4 px-4 w-full overflow-hidden lg:w-1/3">
            <a class="mb-5 block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/code/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5 class="text-xl font-bold text-gray-900">
                  My first day at the campus
                </h5>

                <p class="hidden mt-0 text-gray-500 sm:block">by Sakshi</p>
                <p class="hidden mt-5 text-gray-500 sm:block">
                  After being stuck in enormous traffic for hours, finally you
                  manage to somehow find a blue colored board proclaiming 'IIT
                  Bombay, Gyanaarth Praveshan...!
                </p>

                <dl class="items-center mt-3 sm:flex">
                  <dl class="items-center sm:flex text-indblue font-bold">
                    Read more
                  </dl>
                </dl>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Stories;
