import React, { Component } from "react";
import TeamQuestions from "./TeamQuestions";
import ProjectComponentTabs from "./ProjectComponentTabs";
import IndividualQuestions from "./IndividualQuestions";
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
        type: "Team Questions",
      },
      {
        id: 2,
        type: "Individual Questions",
      },
      {
        id: 3,
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
    if (!this.state.selected_project) {
      return (
        <div>
          <div className="min-h-screen ml-20 mr-20">
            <div className="flex -mx-3 justify-center my-10">
              {Object.entries(this.props.projects).map(([id, project]) => {
                return (
                  <button
                    className="block bg-indblue p-5 "
                    key={id}
                    onClick={() => {
                      this.setProject(id);
                    }}
                  >
                    {project.hackathon} - {project.year}
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
              className="button-active bg-indblue p-5 m-3"
              onClick={() => this.setProject(null)}
            >
              BACK
            </button>
            <div className="bg-indblue p-5 m-3 mr-14 -ml-10">
              {this.props.projects[this.state.selected_project].hackathon} -{" "}
              {this.props.projects[this.state.selected_project].year}
            </div>
            <div className="col-span-4" />
          </div>

          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
            currentTab={this.state.selectedcategorytype}
          />
          <TeamQuestions
            user={this.props.user}
            project={this.props.projects[this.state.selected_project]}
          />
        </>
      );
    }
    if (this.state.selectedcategorytype === 2) {
      return (
        <>
          <div className="flex justify-between">
            <button
              className="button-active bg-indblue p-5 m-3"
              onClick={() => this.setProject(null)}
            >
              BACK
            </button>
            <div className="bg-indblue p-5 m-3 mr-14 -ml-10">
              {this.props.projects[this.state.selected_project].hackathon} -{" "}
              {this.props.projects[this.state.selected_project].year}
            </div>
            <div className="col-span-4" />
          </div>

          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
          />
          <IndividualQuestions
            user={this.props.user}
            project_id={this.props.project_id}
          />
        </>
      );
    }
    if (this.state.selectedcategorytype === 3) {
      return (
        <>
          <div className="flex justify-between">
            <button
              className="button-active bg-indblue p-5 m-3"
              onClick={() => this.setProject(null)}
            >
              BACK
            </button>
            <div className="bg-indblue p-5 m-3 mr-14 -ml-10">
              {this.props.projects[this.state.selected_project].hackathon} -{" "}
              {this.props.projects[this.state.selected_project].year}
            </div>
            <div className="col-span-4" />
          </div>

          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
          />
          <FeedbackQuestions
            user={this.props.user}
            project={this.props.projects[this.state.selected_project]}
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
