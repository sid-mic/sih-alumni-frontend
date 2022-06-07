import React, { Component, useEffect, useState } from "react";
import {
  faBars,
  faBook,
  faPen,
  faUser,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import requireAuth from "../../../utils/requireAuth";
import Router, { useRouter } from "next/router";
import auth from "../../../utils/auth";
import Loading from "../../../components/Loading";
import Head from "next/head";
import SidebarMobile from "../../../components/SidebarMobile";
import ProjectComponent from "../../../components/ProjectComponent";
import { toast, ToastContainer } from "react-toastify";
import { WelcomeHero } from "../../../components/WelcomeHero";
import IndividualQuestions from "../../../components/IndividualQuestions";
import ParticipantStory from "../../../components/ParticipantStory";
import EditProfile from "../../../components/EditProfile";
import FeedbackQuestions from "../../../components/FeedbackQuestions";

export default function Participant1() {
  const { id, tab } = useRouter().query;

  const moduleTypes = [
    {
      id: 1,
      type: "Hackathon Ideas",
      icon: faBars,
    },
    {
      id: 2,
      type: "Individual Ideas",
      icon: faUser,
    },
    {
      id: 3,
      type: "Success stories",
      icon: faPen,
    },
    {
      id: 4,
      type: "Feedback",
      icon: faBook,
    },
    {
      id: 5,
      type: "Profile",
      icon: faUserEdit,
    },
  ];

  const [selectedModule, setSelectedModule] = useState(1);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
  const [projects, setProjects] = useState([]);
  const [ownProjects, setOwnProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (isLoading && id) {
      setSelectedModule(parseInt(tab ?? "1"));
      console.log(parseInt(tab ?? "1"))
      let data = await requireAuth("/");

      if (data.isAuth) {
        if (data.user?.signed_up_at == null) {
          await Router.push("/setup-profile");
        } else if (data.user.role !== "admin") {
          await Router.push("/dashboard");
        } else {
          let user_data = await auth().fetchUser(id);

          setIsAuth(user_data.isAuth);
          setUser(user_data.user);
          setProjects(user_data.projects);
          setOwnProjects(user_data.own_projects);
          setIsLoading(false);
        }
      }
    }
  }, [id]);

  function setModuleType(selectedtype) {
    setSelectedModule(selectedtype);
  }

  if (isLoading) {
    return <Loading> </Loading>;
  }

  if (selectedModule === 1) {
    return (
      <>
        <Head>
          <title key={"title"}>Participant Dashboard | MIC Alumni Portal</title>
          <link key={"link"} rel="icon" href="/favicon.ico" />
        </Head>
        <SidebarMobile
          moduletypes={moduleTypes}
          selectedtype={setModuleType}
          view_only_mode={true}
          selectedModule={selectedModule}
        />
        <div
          style={{ fontFamily: "Montserrat" }}
          className="flex flex-col bg-indblue rounded-xl min-h-full min-w-full"
        >
          <div className="flex  flex-wrap">
            <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-80 mt-14">
              <ProjectComponent
                view_only_mode={true}
                user={user}
                projects={projects}
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
  if (selectedModule === 2) {
    return (
      <>
        <Head>
          <title key={"title"}>Participant Dashboard | MIC Alumni Portal</title>
          <link key={"link"} rel="icon" href="/favicon.ico" />
        </Head>
        <SidebarMobile
          moduletypes={moduleTypes}
          selectedtype={setModuleType}
          view_only_mode={true}
          selectedModule={selectedModule}
        />
        <div
          className="flex flex-col bg-indblue min-h-full min-w-full"
          style={{ fontFamily: "Montserrat" }}
        >
          <div className="flex  flex-wrap">
            <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-80 mt-14">
              <IndividualQuestions
                user={user}
                view_only_mode={true}
                own_projects={ownProjects}
                setOwnProjects={setOwnProjects}
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
  if (selectedModule === 3) {
    return (
      <>
        <Head>
          <title key={"title"}>Participant Dashboard | MIC Alumni Portal</title>
          <link key={"link"} rel="icon" href="/favicon.ico" />
        </Head>
        <SidebarMobile
          moduletypes={moduleTypes}
          selectedtype={setModuleType}
          view_only_mode={true}
          selectedModule={selectedModule}
        />
        <div
          className="flex flex-col bg-indblue min-h-full min-w-full"
          style={{ fontFamily: "Montserrat" }}
        >
          <div className="flex  flex-wrap">
            <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
              <ParticipantStory user={user} view_only_mode={true} />
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
  if (selectedModule === 4) {
    return (
      <>
        <Head>
          <title key={"title"}>Dashboard | MIC Alumni Portal</title>
          <link key={"link"} rel="icon" href="/favicon.ico" />
        </Head>
        <SidebarMobile
          moduletypes={moduleTypes}
          selectedtype={setModuleType}
          view_only_mode={true}
          selectedModule={selectedModule}
        />
        <div
          style={{ fontFamily: "Montserrat" }}
          className="flex flex-col bg-indblue min-h-full min-w-full"
        >
          <div className="flex  flex-wrap">
            <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
              <WelcomeHero h1="Feedback" />
              <FeedbackQuestions user={user} view_only_mode={true} />
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
  if (selectedModule === 5) {
    return (
      <>
        <Head>
          <title key={"title"}>Participant Dashboard | MIC Alumni Portal</title>
          <link key={"link"} rel="icon" href="/favicon.ico" />
        </Head>
        <SidebarMobile
          moduletypes={moduleTypes}
          selectedtype={setModuleType}
          view_only_mode={true}
          selectedModule={selectedModule}
        />
        <div className="flex flex-col bg-indblue min-h-full min-w-full ">
          <div className="flex  flex-wrap">
            <div className="container md:rounded-tl-2xl min-h-screen bg-lightblue md:ml-60 lg:ml-72 mt-14">
              <WelcomeHero h1="PROFILE" />
              <EditProfile
                user={user}
                isAuth={isAuth}
                userId={id}
                toast={toast}
                parentObj={this}
                view_only_mode={true}
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
