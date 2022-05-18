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
      // axios()
      //   .get("announcements/public")
      //   .then((resp) => {
      //     setData(resp.data);
      //   });

        setData([{"id":3,"title":"Grand SIH Alumni interaction with Dr. Abhay Jere, CIO, Ministry of Education\u2019s Innovation Cell","description":"Greetings from the Ministry of Educations Innovation Cell!\r\nThe Ministry of Education\u2019s Innovation Cell and All India Council for Technical Education (AICTE) successfully organized four editions of the massive scale nationwide Smart India Hackathon.\r\nAs you are one of the grand finale participants of past editions of the nationwide hackathon therefore you are cordially invited to the Grand SIH Alumni interaction with Dr. Abhay Jere, CIO, Ministry of Education\u2019s Innovation Cell!\r\nDate:18th May 2022\r\nTime: 4.00 PM\r\nMode: Online\r\nAlumni are an institution\u2019s brand ambassadors, carrying their core values of excellence, lifelong learning of inclusiveness, and diversity all around the world.\r\n\r\nThe purposes of the alumni association of Smart India Hackathon are:\r\n\u2022 To share your experience with Dr. Abhay Jere, CIO Ministry of Education\u2019s Innovation Cell.\r\n\u2022 To introduce a platform to identify the distinguished alumni and share their success stories with the budding innovators.\r\n\u2022 To get support from MIC for your entrepreneurship journey.\r\nNote: Selected success stories will be published on the MIC official website and if approved will also be published in various national\/international entrepreneurial\/Business magazines and broadcasted on national TV channels.\r\nPlease fill out the google form to confirm your participation.\r\nhttps:\/\/forms.gle\/Z7vqMB4Qephyy7pJ8\r\nSpread the word around. Do forward this invite to all your students who have participated in the grand finale of any SIH Edition.\r\nGoogle Docs\r\nSmart India Hackathon Alumni Connect\r\nDear SIH Participant\/Winner,\r\nAs you are one of the grand finale participants of past editions of nationwide hackathon therefore you are cordially in...","url":"https:\/\/forms.gle\/Z7vqMB4Qephyy7pJ8","attachment":"https:\/\/alumniapi.mic.gov.in\/storage\/images\/announcements\/\/jAErEkc9Dqn6g9HauZicYSU3Z29vFCo3yfd8jxvb.jpg","created_month":"May","created_date":"18"}])
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
                    <p className={styles.annMonth}>May</p>
                    <p className={styles.annDate}>31 </p>
                    <p className={styles.annYear}>2021 </p>
                </div>
                <div className={styles.newsText}>
                  <p>Final Nodal center allocation is live, View Digital</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>May</p>
                    <p className={styles.annDate}>31 </p>
                    <p className={styles.annYear}>2021 </p>
                </div>
                <div className={styles.newsText}>
                  <p>Final Nodal center allocation is live, View Digital</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>May</p>
                    <p className={styles.annDate}>31 </p>
                    <p className={styles.annYear}>2021 </p>
                </div>
                <div className={styles.newsText}>
                  <p>Final Nodal center allocation is live, View Digital</p>
                </div>
          </div>
          <div className={styles.newsInner}>
                <div className={styles.newsDate}>
                    <p className={styles.annMonth}>May</p>
                    <p className={styles.annDate}>31 </p>
                    <p className={styles.annYear}>2021 </p>
                </div>
                <div className={styles.newsText}>
                  <p>Final Nodal center allocation is live, View Digital</p>
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
