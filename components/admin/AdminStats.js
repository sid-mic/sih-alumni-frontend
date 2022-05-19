export const AdminStats = ({stats, initiatives_count}) => {
  return (
    <div className="px-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-3 lg:py-0">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-3 mx-40">
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {stats.users}
          </h6>
          <p className="font-bold">USERS</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {stats.projects}
          </h6>
          <p className="font-bold">PROJECTS</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {stats.users_registered}
          </h6>
          <p className="font-bold">REGISTERED USERS</p>
        </div>
      </div>
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-3 mx-40">
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {initiatives_count}
          </h6>
          <p className="font-bold">INITIATIVES</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {stats.startups}
          </h6>
          <p className="font-bold">REGISTERED STARTUPS</p>
        </div>
        <div className="p-7 mr-7 shadow-2xl rounded-xl text-white text-center bg-indblue mb-5">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {stats.patents}
          </h6>
          <p className="font-bold">IPs REGISTERED</p>
        </div>
      </div>
    </div>
  );
};
