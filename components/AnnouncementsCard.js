import styles from './AnnouncementsCard.module.css';

export default function AnnouncementsCard({ item, setSelected }) {
  return (
    <>
      <div className="justify-center ml-10 items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div 
            style={{
                  height: "400px",
                  overflowY: "scroll",
                }}
            className={styles.addScroll +" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"}>
            {/*header*/}
            <div className="flex items-start justify-between mb-4 p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3
                style={{ fontFamily: "Montserrat" }}
                className="text-3xl font-semibold"
              >
                {item.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setSelected(null)}
              >
                <span className="bg-transparent text-black h-6 w-6 pl-3 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {item.attachment && (
              <img
                alt="Announcement"
                className="max-h-60 px-10"
                src={item.attachment}
              />
            )}
            {/*body*/}
            {item.description && (
              <div className="relative p-1 px-5 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
            {/*footer*/}
            <div className="flex items-center justify-end p-1 rounded-b">
              <button
                className="text-white bg-red-500 rounded font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  className="bg-indblue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Know more
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}