import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import FormLoader from "./FormLoader";
import AnnouncementsCard from "./AnnouncementsCard";

export default function News() {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log("USE", selected);
    if (!data) {
      axios()
        .get("announcements/public")
        .then((resp) => {
          setData(resp.data);
        });
    }
  }, [data, selected]);

  if (data == null) {
    return <FormLoader></FormLoader>;
  }

  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      <h2
        style={{ fontFamily: "Montserrat" }}
        className="max-w-3xl mb-6 font-sans text-1xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl mb-10"
      >
        NEWS AND UPCOMING EVENTS
      </h2>

      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {data.map((item, key) => {
          return <NewsCard item={item} index={key} setSelected={setSelected} />;
        })}
      </div>
      {selected !== null && (
        <AnnouncementsCard item={data[selected]} setSelected={setSelected} />
      )}
    </div>
  );
}

function NewsCard(props) {
  let key = props.index
  let item = props.item
  let setSelected = props.setSelected

  return (
    <a
      href={"#"}
      onClick={(e) => {
        setSelected(key);
        e.preventDefault();
      }}
      className="flex bg-gray-200 p-5 rounded-xl shadow-xl"
    >
      <div className="pt-1 mr-6 text-center">
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">{item.created_month}</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">{item.created_date}</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <div
            className="font-semibold tracking-wide text-xl uppercase transition-colors text-indblue duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
            title="Delevopment"
            style={{ fontFamily: "Montserrat" }}
          >
            {item.title}
          </div>
        </div>
      </div>
    </a>
  );
}

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
