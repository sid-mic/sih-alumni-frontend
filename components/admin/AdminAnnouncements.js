import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";



export default function AdminAnnouncements() {
  var data = [{title:"lorem",description:"ipsum"},{title:"bar",description:"foo"}];
  const [page,setpage] = useState(0);
  const [editpage,seteditform] = useState({});
  const [announcement_list_data,setlistdata] = useState(false);

  axios().get("/announcements").then(function (response) {
    if(response.status == 200)
    {
      setlistdata(response.data);
    }
  })

  if(page === 0) // Main list page
  {
  return (
    <>
    <button className="bg-slate-400" onClick={()=>setpage(1)}>Create New Announcement</button>
    <AdminAnnouncementList data={announcement_list_data} editform={seteditform} setpage={setpage}/>
    </>
  );
 
  }
  if(page===1)
  {
    return <AdminAnnouncementForm/>
  }
  if(page===2)
  {
    return <AdminAnnouncementForm data={editpage}/>
  }


}

function AdminAnnouncementList({data,editform,setpage})
{
  if(!data)
  {
    return <div>Loading...</div>
  }
  else{
  return (
    <table>
      <tbody>
      {data.map(row => {
        return <AnnouncementCard data={row} editform={editform} setpage={setpage}/>
      })}
      
      </tbody>
    </table>
  )
}
}

function AnnouncementCard({data,editform,setpage})
{  return (
    <tr>
      <td>
        {data.title}
      </td>
      <td>
        {data.desc}
      </td>
      <td>
        <button onClick={()=>{editform(data);setpage(2)}}>Edit button</button>
      </td>
      <td>
        <button>Delete button</button>
      </td>
    </tr>
  )
}
function AdminAnnouncementForm({data,editform,setpage}){
  return (<div className=" min-h-screen  ml-20 mr-20">
  <div className="flex -mx-3">
    <div className="w-full px-3 mb-5">
      <label for="" className="text-xs font-semibold px-1">
        TITLE
      </label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
        </div>
        <input
          type="text"
          value={data?.title}
          className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
        />
      </div>
    </div>
  </div>
  <div className="flex -mx-3">
    <div className="w-full px-3 mb-5">
      <label for="" className="text-xs font-semibold px-1">
        DESCRIPTION
      </label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
        </div>
        <textarea
          rows={10}
          value={data?.description}
          className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
        />
        
      </div>
    </div>
  </div>
  <div className="flex -mx-3">
    <div className="w-full px-3 mb-5">
    <label for="" className="text-xs font-semibold px-1">
        IMAGE
      </label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
        </div>
        <input
          type="file"
          value={data?.attachment}
          className="w-full -ml-10 pl-5 pr-3 py-2 bg-white rounded-lg border-2"
        />
      </div>
    </div>
  </div>
  <div className="flex -mx-3">
    <div className="w-full px-3 mb-5">
      <label for="" className="text-xs font-semibold px-1">
        URL
      </label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
        </div>
        <input
          type="text"
          value={data?.url}
          className="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
        />
        
      </div>
    </div>
  </div>
  <br />
  <div className="flex -mx-3">
    <div className="w-full px-3 mb-5">
      <button
        style={{ fontFamily: "Montserrat" }}
        className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
      >
        ADD ANNOUNCEMENT
      </button>
    </div>
  </div>
</div>)
}