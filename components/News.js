import React, { Component } from "react";

class News extends Component {
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
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <h2
          style={{ fontFamily: "Montserrat" }}
          className="max-w-3xl mb-6 font-sans text-1xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl mb-10"
        >
          NEWS AND UPCOMING EVENTS
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="flex bg-gray-200 p-5 rounded-xl shadow-xl">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                  title="Delevopment"
                >
                  Delevopment
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-lg font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Why I love Laravel
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-200 p-5 rounded-xl shadow-xl">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                  title="Delevopment"
                >
                  Delevopment
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-lg font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Why I love Laravel
                </a>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-200 p-5 rounded-xl shadow-xl">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                  title="Delevopment"
                >
                  Delevopment
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-lg font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Why I love Laravel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

// export const News = () => {
//   return (
//     <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
//       <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mb-10">
//         News and upcoming events
//       </h2>
//       <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
//         <div className="flex bg-gray-200 p-5 rounded-xl shadow-xl">
//           <div className="pt-1 mr-6 text-center">
//             <div className="px-2 pb-1 mb-1 border-b border-gray-400">
//               <p className="text-sm text-blue-gray-700">Jul</p>
//             </div>
//             <div className="px-2">
//               <p className="text-lg font-bold">18</p>
//             </div>
//           </div>
//           <div>
//             <div className="mb-2">
//               <a
//                 href="/"
//                 className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                 aria-label="Category"
//                 title="Delevopment"
//               >
//                 Delevopment
//               </a>
//             </div>
//             <div className="mb-2">
//               <a
//                 href="/"
//                 aria-label="Article"
//                 className="inline-block text-lg font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 Why I love Laravel
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="flex bg-gray-200 p-5 rounded-xl shadow-xl">
//           <div className="pt-1 mr-6 text-center">
//             <div className="px-2 pb-1 mb-1 border-b border-gray-400">
//               <p className="text-sm text-blue-gray-700">Jul</p>
//             </div>
//             <div className="px-2">
//               <p className="text-lg font-bold">18</p>
//             </div>
//           </div>
//           <div>
//             <div className="mb-2">
//               <a
//                 href="/"
//                 className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                 aria-label="Category"
//                 title="Delevopment"
//               >
//                 Delevopment
//               </a>
//             </div>
//             <div className="mb-2">
//               <a
//                 href="/"
//                 aria-label="Article"
//                 className="inline-block text-lg font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 Why I love Laravel
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="flex bg-gray-200 p-5 rounded-xl shadow-xl">
//           <div className="pt-1 mr-6 text-center">
//             <div className="px-2 pb-1 mb-1 border-b border-gray-400">
//               <p className="text-sm text-blue-gray-700">Jul</p>
//             </div>
//             <div className="px-2">
//               <p className="text-lg font-bold">18</p>
//             </div>
//           </div>
//           <div>
//             <div className="mb-2">
//               <a
//                 href="/"
//                 className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                 aria-label="Category"
//                 title="Delevopment"
//               >
//                 Delevopment
//               </a>
//             </div>
//             <div className="mb-2">
//               <a
//                 href="/"
//                 aria-label="Article"
//                 className="inline-block text-lg font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
//               >
//                 Why I love Laravel
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
