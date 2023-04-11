import React, { Component } from "react";
import TeamQuestions from "./TeamQuestions";
import ProjectComponentTabs from "./ProjectComponentTabs";
import FeedbackQuestions from "./FeedbackQuestions";

class ProjectComponent extends Component {
  constructor(props) {
    super(props);
    this.setCategoryType = this.setCategoryType.bind(this);
  }

  state = {
    categorytypes: [
      {
        id: 1,
        type: "Status of the Idea",
      },
      {
        id: 2,
        type: "Feedback",
      },
    ],
    selectedcategorytype: 1,
    selected_project: false,
  };

  setProject(project) {
    this.setState({ selected_project: project });
  }

  setCategoryType(selectedtype) {
    this.setState({ selectedcategorytype: selectedtype });
  }

  render() {
    const disabled = this.props.view_only_mode ?? false;

    if (!this.state.selected_project) {
      return (
        <div>
          <div className="min-h-screen ml-4 md:ml-20 mr-4 md:mr-20">
            <div className="flex -mx-3 justify-center mt-10 ">
              {" "}
              <h2
                style={{ fontFamily: "Montserrat", paddingLeft: "20px" }}
                className="max-w-lg mb-1 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto"
              >
                Please select the Hackathon to enter:{" "}
              </h2>
              <br />
              <br />
            </div>

            <div
              className="block lg:flex -mx-3 justify-center my-5"
              style={{ fontFamily: "Montserrat" }}
            >
              {Object.entries(this.props.projects).map(([id, project]) => {
                return (
                  <button
                    style={{ fontFamily: "Montserrat" }}
                    className="block bg-indblue text-white p-5 rounded-xl ml-5 mb-4 lg:mb-0"
                    key={id}
                    onClick={() => {
                      this.setProject(id);
                    }}
                  >
                    Initiative :{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                      {project.initiative.hackathon} -{" "}
                      {project.initiative.edition}
                    </span>
                    <br />
                    PS :{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                      {project.ps_title !== "NA" ? `${project.ps_title}` : ""}
                    </span>
                    <br />
                    Title :{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">{`${project.title}`}</span>
                    <br />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.selectedcategorytype === 1) {
      return (
        <>
          <div className="flex justify-between">
            <button
              style={{ fontFamily: "Montserrat" }}
              className="button-active bg-indblue p-5 m-3 mb-16 text-white rounded-lg w-40 flex"
              onClick={() => this.setProject(null)}
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              <span className="ml-6">Back</span>
            </button>
            <div
              style={{ fontFamily: "Montserrat" }}
              className="p-3 rounded-xl m-3 -ml-20 mr-20 rounded-xl"
            >
              Team :
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {` ${
                  this.props.projects[this.state.selected_project].team_name
                }`}
              </span>
              <br />
              Title :
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {` ${this.props.projects[this.state.selected_project].title}`}
              </span>
              <br />
              College :
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {` ${this.props.projects[this.state.selected_project].college}`}
              </span>
              <br />
              Role :
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {` ${
                  this.props.projects[this.state.selected_project].leader_id ==
                  this.props.user.id
                    ? "Leader"
                    : "Member"
                }`}
              </span>{" "}
              <br />
            </div>
            <a
              style={{ fontFamily: "Montserrat" }}
              target={"_blank"}
              className="button-active bg-indblue p-3 m-3 mb-16 text-white rounded-lg w-40 flex"
              href={`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/certificates/${
                this.props.projects[this.state.selected_project].id
              }/${this.props.user.id}/download`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-12 h-12 text-white"
                viewBox="0 0 24 24"
              >
                <title />
                <g id="Complete">
                  <g id="download">
                    <g>
                      <path
                          fill="none"
                        d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <g>
                        <polyline
                          data-name="Right"
                          fill="none"
                          id="Right-2"
                          points="7.9 12.3 12 16.3 16.1 12.3"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="12"
                          x2="12"
                          y1="2.7"
                          y2="14.2"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="ml-6">Download Certificate</span>
            </a>
          </div>
          <TeamQuestions
            user={this.props.user}
            project={this.props.projects[this.state.selected_project]}
            disabled={disabled}
          />
        </>
      );
    } else {
      return (
        <>
          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
          />
        </>
      );
    }
  }
}

export default ProjectComponent;
