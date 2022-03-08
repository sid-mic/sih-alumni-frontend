import React, { Component } from "react";
import EditProfile from "../components/EditProfile";
import News from "../components/News";
import SidebarMobile from "../components/SidebarMobile";
import { WelcomeHero } from "../components/WelcomeHero";
import ProjectComponent from "../components/ProjectComponent";
import HomeHero from "../components/HomeHero";
import Resources from "../components/Resources";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/Banner";
import requireAuth from "../utils/requireAuth";
import auth from "../utils/auth";
import Router from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Head from "next/head";

class Dashboard extends Component {
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
        type: "Project",
        icon: faBars,
      },
      {
        id: 3,
        type: "Resources",
        icon: faBookReader,
      },
      {
        id: 4,
        type: "Profile",
        icon: faUser,
      },
    ],
    selectedmoduletype: 1,
    user: null,
    isAuth: false,
      projects: [],
    userId: 0,
    isLoading: true,
  };

  async componentDidMount() {
    let data = await requireAuth("/");

    if (data.isAuth) {
      if (data.user?.signed_up_at == null) {
        await Router.push("/setup-profile");
      }

      this.setState({
        user: data.user,
        isAuth: data.isAuth,
        userId: data.user.id,
        projects: data.projects,
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
          <Head>
            <title key={"title"}>Dashboard | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
            logout={this.state.logout}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <HomeHero name={this.state.user?.name} />
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
            <title key={"title"}>Dashboard | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <ProjectComponent
                  user={this.state.user}
                  projects={this.state.projects}
                />
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
            <title key={"title"}>Dashboard | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <WelcomeHero h1="RESOURCES" />
                <Resources />
              </div>
            </div>
          </div>
        </>
      );
    }
    if (this.state.selectedmoduletype === 4) {
      return (
        <>
          <Head>
            <title key={"title"}>Dashboard | MIC Alumni Portal</title>
            <link key={"link"} rel="icon" href="/favicon.ico" />
          </Head>
          <SidebarMobile
            moduletypes={this.state.moduletypes}
            selectedtype={this.setModuleType}
          />
          <div className="flex flex-col bg-indblue min-h-full min-w-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 mt-14">
                <WelcomeHero h1="PROFILE" />
                <EditProfile
                  user={this.state.user}
                  isAuth={this.state.isAuth}
                  userId={this.state.userId}
                  key={this.state.userId}
                  toast={toast}
                />
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
  }
}

export default Dashboard;
