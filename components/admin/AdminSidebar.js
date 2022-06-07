import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import auth from "../../utils/auth";

class AdminSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { ClickedButton: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState({ ClickedButton: id });
    this.props.selectedtype.bind(this, id)();
  }

  render() {
    return (
      <div class="bg-indblue static uppercase font-semibold  flex h-16 md:flex-col  shadow-lg  justify-around md:h-screen md:w-60 fixed w-screen bottom-0 items-center">
        <img
          className="hidden h-10 md:block"
          src="https://mic.gov.in/assets/img/logo.png"
        ></img>
        {this.props.moduletypes.map(
          (moduletype, selectedtype) => (
            <div
              className={
                moduletype.id === this.state.ClickedButton
                  ? "bg-white mt-6 md:p-3  md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center text-indblue rounded-xl"
                  : "transparent md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center text-white"
              }
              id={moduletype.id}
              key={moduletype.id}
              onClick={() => this.handleChange(moduletype.id)}
            >
              <FontAwesomeIcon  icon={ moduletype.icon } className="mr-3"/>
              <span
                style={{ fontFamily: "Montserrat" }}
                className="hidden  md:block text-sm"
              >
                {moduletype.type}
              </span>
            </div>
          )

        )}
         <div className="hidden md:block md:h-20"></div>
      <div
          onClick={() => auth().logout()}
          class="hidden md:flex md:flex-wrap hover:shadow-md p-3 rounded-xl duration-1000 ease-in-out transform hover:scale-125 delay-200  text-3xl font-bold text-center bg-red-500 md:p-4 mb-6 ">
      <svg
          class="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
        <span
          style={{ fontFamily: "Montserrat" }}
          className="hidden md:block text-sm"
        >
          Log Out
        </span>
      </div>
      </div>
    );
    // return (
    //   <div class="bg-indblue static uppercase font-semibold  flex md:flex-col  shadow-lg  justify-around md:h-screen md:w-60 fixed w-screen bottom-0 items-center">
    //   <img
    //     className="hidden h-10 md:block"
    //     src="https://mic.gov.in/assets/img/logo.png"
    //   ></img>
    //   {this.props.moduletypes.map(
    //     (moduletype , selectedtype) => (
    //       <div className={
    //         moduletype.id === this.state.ClickedButton
    //           ? "bg-white  md:p-5  md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center rounded-xl text-indblue"
    //           : "transparent md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center text-white"
    //       }
    //       id={moduletype.id}
    //       key={moduletype.id}
    //       onClick={() => this.handleChange(moduletype.id)}>

    //      <FontAwesomeIcon  icon={ moduletype.icon } className="m-2"/>
    //     <span
    //       style={{ fontFamily: "Montserrat" }}
    //       className="hidden text-white md:block text-sm"
    //     >
    //       {moduletype.type}
    //     </span>
    //   </div>

    //     )
    //   )}
      
      

 

    //   <div className="hidden md:block md:h-20"></div>
    //   <div class="hidden md:flex md:flex-wrap hover:shadow-md p-4 rounded-xl duration-1000 ease-in-out transform hover:scale-125 delay-200  text-3xl font-bold text-center bg-red-500 md:p-5 ">
    //     <svg
    //       class="w-6 h-6 mr-3"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    //       ></path>
    //     </svg>
    //     <span
    //       style={{ fontFamily: "Montserrat" }}
    //       className="hidden md:block text-sm"
    //     >
    //       Log Out
    //     </span>
    //   </div>
    // </div>

    // );
  }



}
export default AdminSidebar;