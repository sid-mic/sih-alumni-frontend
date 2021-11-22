import React, { Component } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
} from "@chakra-ui/react";
import EditProfile from "./EditProfile";
import TeamQuestions from "./TeamQuestions";
import ProjectComponentTabs from "./ProjectComponentTabs";


class ProjectComponent extends Component {
  constructor(props){
    super(props);
    this.setCategoryType = this.setCategoryType.bind(this);
  }

  state = {
    categorytypes: [
      {
        id: 1,
        type: "Team Questions"
      },
      {
        id: 2,
        type: "Individual Questions"
      },
      {
        id: 3,
        type: "Feedback"
      },
    ],
    selectedcategorytype: 1,
  };

  setCategoryType(selectedtype) {
    this.setState({ selectedcategorytype: selectedtype })
  }

  render(){

    if (this.state.selectedcategorytype === 1) {
      return (
        <>
        <ProjectComponentTabs 
          categorytypes = {this.state.categorytypes}
          selectedtype  = {this.setCategoryType}
        />   
        <TeamQuestions/>
        </>
      );
      
    }
    if (this.state.selectedcategorytype === 2) {
      return (
        <>
        <ProjectComponentTabs 
          categorytypes = {this.state.categorytypes}
          selectedtype  = {this.setCategoryType}
        />   
        </>
      )
    }
    if (this.state.selectedcategorytype === 3) {
      return (
        <>
        <ProjectComponentTabs 
          categorytypes = {this.state.categorytypes}
          selectedtype  = {this.setCategoryType}
        />   
        </>
      )
    }
    else{
      return(
        <>
        <ProjectComponentTabs 
          categorytypes = {this.state.categorytypes}
          selectedtype  = {this.setCategoryType}
          // default = {this.state.selectedcategorytype}
        />   
        </>
      );
    }
  }
}

export default ProjectComponent;
