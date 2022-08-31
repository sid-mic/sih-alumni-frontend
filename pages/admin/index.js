import Head from "next/head";
import { Component } from "react";
import AdminUser from "../../components/admin/AdminUsers";
import AdminAnnouncements from "../../components/admin/AdminAnnouncements";
import DataComponent from "../../components/admin/DataComponent";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { AdminStats } from "../../components/admin/AdminStats";
import { ChartStats } from "../../components/admin/ChartStats";
import { WelcomeHero } from "../../components/WelcomeHero";
import {
  faCogs,
  faCommentDots,
  faFolderPlus,
  faHome,
  faLightbulb,
  faPenAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faFileImport, faTable } from "@fortawesome/free-solid-svg-icons";
import requireAuth from "../../utils/requireAuth";
import Router from "next/router";
import auth from "../../utils/auth";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImportsTable from "../../components/admin/ImportsTable";
import Initiatives from "../../components/admin/Initiatives";
import AdminStoriesTable from "../../components/admin/AdminStoriesTable";
import axios from "../../utils/axios";
import AdminFeedbacksTable from "../../components/admin/AdminFeedbacksTable";
import AdminOtherIdeasTable from "../../components/admin/AdminOtherIdeasTable";
import AdminHackathonIdeasTable from "../../components/admin/AdminHackathonIdeasTable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.setModuleType = this.setModuleType.bind(this);
    this.setInitiativesData = this.setInitiativesData.bind(this);
  }

  state = {
    moduletypes: [
      {
        id: 1,
        type: "Home",
        icon: faHome,
      },
      {
        id: 2,
        type: "Data",
        icon: faDatabase,
      },
      {
        id: 3,
        type: "Initiatives",
        icon: faFolderPlus,
      },
      {
        id: 4,
        type: "ANNOUNCEMENTS",
        icon: faBullhorn,
      },
      {
        id: 9,
        type: "Other Ideas",
        icon: faLightbulb,
      },
      {
        id: 10,
        type: "Hackathon Ideas",
        icon: faCogs,
      },
      {
        id: 7,
        type: "Stories",
        icon: faPenAlt,
      },
      {
        id: 8,
        type: "Feedbacks",
        icon: faCommentDots,
      },
      {
        id: 5,
        type: "Imports",
        icon: faTable,
      },
      {
        id: 6,
        type: "New Import",
        icon: faFileImport,
      },
      
    ],
    selectedmoduletype: 1,
    user: null,
    isAuth: false,
    userId: 0,
    isLoading: true,
    initiatives: [],
  };

  async componentDidMount() {
    let data = await requireAuth("/");

    if (data.isAuth) {
      if (data.user.role !== "admin") {
        await Router.push("/dashboard");
      } else {
        // let stats = await axios().get("stats");
        let stats = {};
        let initiatives = await axios().get("initiatives");

        this.setState({
          user: data.user,
          isAuth: data.isAuth,
          userId: data.user.id,
          logout: auth().logout,
          stats: stats.data,
          initiatives: initiatives.data,
        });
      }
    }

    this.setState({ isLoading: false });
  }

  setInitiativesData(data) {
    this.setState({ initiatives: data });
  }

  setModuleType(selectedtype) {
    this.setState({ selectedmoduletype: selectedtype });
  }
  render() {
    if (this.state.isLoading) {
      return <Loading> </Loading>;
    }

    if (this.state.selectedmoduletype === 1) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="Welcome, " h2="Admin." />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 2) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="User data" />
                    <DataComponent initiatives={this.state.initiatives} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
        </>
      );
    }
    if (this.state.selectedmoduletype === 3) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="INITIATIVES" />
                    <Initiatives
                      data={this.state.initiatives}
                      setInitiatives={this.setInitiativesData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      );
    }
    if (this.state.selectedmoduletype === 4) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="ANNOUNCEMENTS" />
                    <AdminAnnouncements />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      );
    }
    if (this.state.selectedmoduletype === 7) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="Stories" />
                    <AdminStoriesTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      );
    }
    if (this.state.selectedmoduletype === 8) {
      return (
          <>
            <Head>
              <title key={"title"}>Admin | MIC Alumni Portal</title>
              <link key={"link"} rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen">
              <div className="flex  flex-wrap">
                <AdminSidebar
                    moduletypes={this.state.moduletypes}
                    selectedtype={this.setModuleType}
                />
                <div className="flex flex-col bg-indblue min-h-full min-w-full">
                  <div className="flex  flex-wrap">
                    <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                      <WelcomeHero h1="Feedbacks" />
                    <AdminFeedbacksTable test2={"hello2"}/>
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
              />
            </div>
          </>
      );
    }
    if (this.state.selectedmoduletype === 9) {
      return (
          <>
            <Head>
              <title key={"title"}>Admin | MIC Alumni Portal</title>
              <link key={"link"} rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen">
              <div className="flex  flex-wrap">
                <AdminSidebar
                    moduletypes={this.state.moduletypes}
                    selectedtype={this.setModuleType}
                />
                <div className="flex flex-col bg-indblue min-h-full min-w-full">
                  <div className="flex  flex-wrap">
                    <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                      <WelcomeHero h1="Other Ideas" />
                    <AdminOtherIdeasTable />
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
              />
            </div>
          </>
      );
    }
    if (this.state.selectedmoduletype === 10) {
      return (
          <>
            <Head>
              <title key={"title"}>Admin | MIC Alumni Portal</title>
              <link key={"link"} rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen">
              <div className="flex  flex-wrap">
                <AdminSidebar
                    moduletypes={this.state.moduletypes}
                    selectedtype={this.setModuleType}
                />
                <div className="flex flex-col bg-indblue min-h-full min-w-full">
                  <div className="flex  flex-wrap">
                    <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                      <WelcomeHero h1="Hackathon Ideas" />
                    <AdminHackathonIdeasTable/>
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
              />
            </div>
          </>
      );
    }
    if (this.state.selectedmoduletype === 5) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="Imports" />
                    <ImportsTable user={this.state.user}></ImportsTable>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 6) {
      return (
        <>
          <Head>
            <title key={"title"}>Admin | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="New Import" />
                    <AdminUser
                      toast={toast}
                      user={this.state.user}
                      initiatives={this.state.initiatives}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </>
      );
    }
  }
}

export default Home;
