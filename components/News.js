import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import FormLoader from "./FormLoader";
import AnnouncementsCard from "./AnnouncementsCard";
import styles from './News.module.css'

export default function News() {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
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
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      
    <h1 className={styles.mainHeading+" font-bold mt-2 pb-2 mb-16 sm:text-xl text-2xl md:text-3xl text-center"}>
         NEWS AND
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          UPCOMING EVENTS
        </span>
        <div className={styles.bottomLine}></div>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-6 xl:px-6 2xl:px-6">
            <div className="grid lg:grid-cols-1 md:w-full">
            <div className={styles.announcementOuter}>
              
                <div className={styles.annInner}>

                  {data.map((item, key) => {
                    return <NewsCard item={item} index={key} setSelected={setSelected} />;
                  })}
                </div>
                
            </div>
            </div>
            <div>
        <div className={styles.announcementNewsOuter}>
        <div className={styles.newsOuter}>
        
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>18th</p>
                    <p className={styles.annDate}>May</p>
                    <p className={styles.annYear}>2022</p>
                </div>
                <div className={styles.newsText}>
                  <p>Launch of School Innovation Council</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>18th</p>
                    <p className={styles.annDate}>May</p>
                    <p className={styles.annYear}>2022</p>
                </div>
                <div className={styles.newsText}>
                  <p>SIH Alumni Connect: Interaction with Dr. Abhay Jere</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>24th, 25th</p>
                    <p className={styles.annDate}>May</p>
                    <p className={styles.annYear}>2022</p>
                </div>
                <div className={styles.newsText}>
                  <p>Grand Final of Toycathon Physical Edition</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>&nbsp;</p>
                    <p className={styles.annDate}>Upcoming </p>
                    <p className={styles.annYear}>&nbsp;</p>
                </div>
                <div className={styles.newsText}>
                  <p>Smart India Hackathon 2022</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>&nbsp;</p>
                    <p className={styles.annDate}>Upcoming </p>
                    <p className={styles.annYear}>&nbsp;</p>
                </div>
                <div className={styles.newsText}>
                  <p>National Innovation and Entrepreneurship Promotion Policy for Schools</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>&nbsp;</p>
                    <p className={styles.annDate}>Upcoming </p>
                    <p className={styles.annYear}>&nbsp; </p>
                </div>
                <div className={styles.newsText}>
                  <p>UNESCO-India-Africa Hackathon 2022</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>&nbsp;</p>
                    <p className={styles.annDate}>Upcoming </p>
                    <p className={styles.annYear}>&nbsp; </p>
                </div>
                <div className={styles.newsText}>
                  <p>Design Thinking & Innovation as skill modules in schools</p>
                </div>
          </div>
          

        </div>
        </div>

      </div>
      </div>
      {selected !== null && (
        <AnnouncementsCard item={data[selected]} setSelected={setSelected} />
      )}
    </div>
  );
}
function Start(e) {

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

      className={styles.annoLink +" flex p-3 mb-6 rounded-xl"}>
      <div className={styles.annoLeft +" pt-1 mr-6 text-center"}>
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">{item.created_month}</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">{item.created_date}</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <div title="Delevopment"
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
