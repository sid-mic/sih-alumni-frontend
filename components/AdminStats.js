export const AdminStats = () => {
  return (
    <div className="px-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-3 lg:py-0">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">USERS</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">PROJECTS</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">PATENTS</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">REGISTERED STARTUPS</p>
        </div>
      </div>
    </div>
  );
};
