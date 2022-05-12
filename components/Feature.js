import styles from "../styles/Feature.module.css";

export const Feature = () => {
  return (
    <div id="about" className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="">
        <div className="text-center">
          <div className="bg-hero-pattern font-bold mb-6 sm:text-xl text-xl bg-cover bg-center">
            <h1 className={styles.mainHeading+" font-bold mt-6 mb-14 pb-2 sm:text-xl text-2xl md:text-3xl"}>
              REVOLUTIONIZING STARTUPS FOR
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                A SELF-RELIANT INDIA.
              </span>
              <div className={styles.bottomLine}></div>
            </h1>
          </div>
        </div>
        <div className="">
          <p className="text-base text-gray-700 md:text-lg">
            MoE's Innovation Cell aims to support and nurture startups by
            providing funding, mentorship and collaboration opportunities.
            Through a number of hackathons and other innovation contests, we
            identify the nation's best ideas and help the young entrepreneurs in
            scaling their ideas into products.
          </p>
        </div>
      </div>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-4 rounded-full bg-white">
              <img className={styles.logoImage} src="/assets/fund-raising.png" alt="img" />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              FUND RAISING
            </h6>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-4 rounded-full bg-white">
              <img src="/assets/mentorship.png" alt="img" />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              MENTORSHIP
            </h6>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-4 rounded-full bg-white">
               <img src="/assets/collaboration.png" alt="img" />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              COLLABORATION
            </h6>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-4 rounded-full bg-white">
               <img src="/assets/resources.png" alt="img" />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              RESOURCES
            </h6>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-4 rounded-full bg-white ">
               <img src="/assets/event-updates.png" alt="img" />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              EVENT UPDATES
            </h6>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-4 rounded-full bg-white">
               <img src="/assets/networking.png" alt="img" />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              NETWORKING
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
