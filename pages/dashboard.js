import React, { Component } from "react";
import EditProfile from "../components/EditProfile";
import SidebarMobile from "../components/SidebarMobile";
import { WelcomeHero } from "../components/WelcomeHero";
import ProjectComponent from "../components/ProjectComponent";
import HomeHero from "../components/HomeHero";
import {
  faBook,
  faHome,
  faPen,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import requireAuth from "../utils/requireAuth";
import auth from "../utils/auth";
import Router from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Head from "next/head";
import IndividualQuestions from "../components/IndividualQuestions";
import ParticipantStory from "../components/ParticipantStory";
import FeedbackQuestions from "../components/FeedbackQuestions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.setModuleType = this.setModuleType.bind(this);
    this.setOwnProjects = this.setOwnProjects.bind(this);
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
        type: "Hackathon Ideas",
        icon: faBars,
      },
      {
        id: 3,
        type: "MY IDEAS",
        icon: faUser,
      },
      {
        id: 4,
        type: "My success stories",
        icon: faPen,
      },
      {
        id: 5,
        type: "Feedback",
        icon: faBook,
      },
      {
        id: 6,
        type: "Profile",
        icon: faUserEdit,
      },
    ],
    selectedmoduletype: 1,
    user: null,
    isAuth: false,
    projects: [],
    own_projects: [],
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
        own_projects: data.own_projects,
        logout: auth().logout,
      });
    }

    this.setState({ isLoading: false });
  }

  setModuleType(selectedtype) {
    this.setState({ selectedmoduletype: selectedtype });
  }

  setOwnProjects(new_projects) {
    this.setState({ own_projects: new_projects });
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
          <div className="flex flex-col bg-indblue min-h-full">
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-80 mt-14">
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
          <div
            style={{ fontFamily: "Montserrat" }}
            className="flex flex-col bg-indblue rounded-xl min-h-full min-w-full"
          >
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-80 mt-14">
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
          <div
            style={{ fontFamily: "Montserrat" }}
            className="flex flex-col bg-indblue min-h-full min-w-full"
          >
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
                <IndividualQuestions
                  user={this.state.user}
                  own_projects={this.state.own_projects}
                  setOwnProjects={this.setOwnProjects}
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
                  <div
                      style={{ fontFamily: "Montserrat" }}
                      className="flex flex-col bg-indblue min-h-full min-w-full"
                  >
                      <div className="flex  flex-wrap">
                          <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
                              <ParticipantStory user={this.state.user} />
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
    if (this.state.selectedmoduletype === 5) {
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
          <div
            style={{ fontFamily: "Montserrat" }}
            className="flex flex-col bg-indblue min-h-full min-w-full"
          >
            <div className="flex  flex-wrap">
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
                  <WelcomeHero h1="Feedback" />
                  <FeedbackQuestions user={this.state.user} />
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
    if (this.state.selectedmoduletype === 6) {
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
              <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
                <WelcomeHero h1="PROFILE" />
                <EditProfile
                  user={this.state.user}
                  isAuth={this.state.isAuth}
                  userId={this.state.userId}
                  key={this.state.userId}
                  toast={toast}
                  parentObj={this}
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
