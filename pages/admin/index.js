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
import { faFileImport, faTable } from "@fortawesome/free-solid-svg-icons";
import requireAuth from "../../utils/requireAuth";
import Router from "next/router";
import auth from "../../utils/auth";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImportsTable from "../../components/admin/ImportsTable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.setModuleType = this.setModuleType.bind(this);
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
        type: "Resources",
        icon: faBookReader,
      },
      {
        id: 4,
        type: "ANNOUNCEMENTS",
        icon: faBullhorn,
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
  };

  async componentDidMount() {
    let data = await requireAuth("/");

    if (data.isAuth) {
      if (data.user.role !== "admin") {
        await Router.push("/dashboard");
      }

      this.setState({
        user: data.user,
        isAuth: data.isAuth,
        userId: data.user.id,
        logout: auth().logout,
      });
    }

    this.setState({ isLoading: false });
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
          <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
              <AdminSidebar
                moduletypes={this.state.moduletypes}
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
    if (this.state.selectedmoduletype === 2) {
      return (
        <>
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
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="ADD RESOURCES" />
                    <AdminResources />
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
              <AdminSidebar
                moduletypes={this.state.moduletypes}
                selectedtype={this.setModuleType}
              />
              <div className="flex flex-col bg-indblue min-h-full min-w-full">
                <div className="flex  flex-wrap">
                  <div className="container md:rounded-tl-2xl min-h-screen bg-gray-100 md:ml-60 mt-14">
                    <WelcomeHero h1="ADD ANNOUNCEMENTS" />
                    <AdminAnnouncements />
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
                    <AdminUser toast={toast} user={this.state.user}/>
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
