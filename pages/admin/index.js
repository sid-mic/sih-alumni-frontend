import Head from "next/head";
import { Component } from "react";
import AdminUser from "../../components/admin/AdminUsers";
import AdminAnnouncements from "../../components/admin/AdminAnnouncements";
import AdminResources from "../../components/admin/AdminResources";
import AdminResourceCard from "../../components/admin/AdminResourceCard";
import DataComponent from "../../components/admin/DataComponent";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { AdminStats } from "../../components/admin/AdminStats";
import { ChartStats } from "../../components/ChartStats";
import { WelcomeHero } from "../../components/WelcomeHero";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


class Home extends Component{
  constructor(props) {
    super(props);
    this.setModuleType = this.setModuleType.bind(this);
  }

  state = {
    moduletypes: [
      {
        id: 1,
        type: "Home",
        icon: faHome
      },
      {
        id: 2,
        type: "Data",
        icon: faDatabase
      },
      {
        id: 3,
        type: "Resources",
        icon: faBookReader
      },
      {
        id: 4,
        type: "ANNOUNCEMENTS",
        icon: faBullhorn
      },
      {
        id: 5,
        type: "ADD USERS",
        icon: faUser
      }

    ],
    selectedmoduletype: 1,
  };

  setModuleType(selectedtype) {
    this.setState({ selectedmoduletype: selectedtype });
  }
  render() {
    if (this.state.selectedmoduletype === 1) {
      return (
        <>
       
       
       <div className="flex flex-col min-h-screen">
       
       <div className="flex  flex-wrap">
        
         
       <AdminSidebar moduletypes={this.state.moduletypes} 
          selectedtype={this.setModuleType}
        />
        <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
              <WelcomeHero h1="Welcome, " h2="Admin." />
           <AdminStats />
           <ChartStats />
              </div>
            </div>
          </div>
         {/* <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
           <WelcomeHero h1="Welcome, " h2="Admin." />
           <AdminStats />
           <ChartStats />
         </div> */}
       </div>
   </div>


       
        </>
      );
    }
    if (this.state.selectedmoduletype === 2) {
      return (
       
           <>
           
           
             <div className="flex flex-col min-h-screen">
       
       <div className="flex  flex-wrap">
        
         
       <AdminSidebar moduletypes={this.state.moduletypes} 
          selectedtype={this.setModuleType}
        />
        <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
              <WelcomeHero h1="User data" />
          <DataComponent />
              </div>
            </div>
          </div>
        
       </div>
   </div>


       
        </>
        
        
      );
    }
    if (this.state.selectedmoduletype === 3) {
      return (
        <>
              <div className="flex flex-col min-h-screen">
       
       <div className="flex  flex-wrap">
        
         
       <AdminSidebar moduletypes={this.state.moduletypes} 
          selectedtype={this.setModuleType}
        />
         <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
              <WelcomeHero h1="ADD RESOURCES" />
          <AdminResources />
          <AdminResourceCard />
              </div>
            </div>
          </div>
         
       </div>
   </div>

       
        </>
      );
    }
    if (this.state.selectedmoduletype === 4) {
      return (
        <>
            <div className="flex flex-col min-h-screen">
       
       <div className="flex  flex-wrap">
        
         
       <AdminSidebar moduletypes={this.state.moduletypes} 
          selectedtype={this.setModuleType}
        />
        <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
              <WelcomeHero h1="ADD ANNOUNCEMENTS" />
          <AdminAnnouncements />
          <AdminResourceCard />
              </div>
            </div>
          </div>
       </div>
   </div>


       
        </>
      );
    }
    if (this.state.selectedmoduletype === 5) {
      return (
        <>
              <div className="flex flex-col min-h-screen">
       
       <div className="flex  flex-wrap">
        
         
       <AdminSidebar moduletypes={this.state.moduletypes} 
          selectedtype={this.setModuleType}
        />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
              <WelcomeHero h1="ADD USERS" />
          <AdminUser />
          <AdminResourceCard />
              </div>
            </div>
          </div>
         
       </div>
   </div>


       
        </>
      );
    }
    else {
      return (
        <>
          
       
          <div className="flex flex-col min-h-screen">
       
       <div className="flex  flex-wrap">
        
         
       <AdminSidebar moduletypes={this.state.moduletypes} 
          selectedtype={this.setModuleType}
        />
        <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
              <WelcomeHero h1="Welcome, " h2="Admin." />
           <AdminStats />
           <ChartStats />
              </div>
            </div>
          </div>
       </div>
   </div>
       
        </>
      );
    }
  }

}
export default Home;
// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="flex  flex-wrap">
//         <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
//           <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />
//           <AdminStats />
//           <ChartStats />
//         </div>
//         <AdminSidebar />
//       </div>
//     </div>
//   );
// }
