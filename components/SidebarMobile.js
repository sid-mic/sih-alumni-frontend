import { Button } from "@chakra-ui/button";
import React from "react";
import { Component } from "react";
import "./test.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SidebarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { ClickedButton: "" };
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
                  ? "bg-white md:p-5  md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center text-indblue rounded-xl"
                  : "transparent md:flex md:flex-wrap md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 items-center text-white"
              }
              id={moduletype.id}
              key={moduletype.id}
              onClick={() => this.handleChange(moduletype.id)}
            >
              <FontAwesomeIcon icon="fa-house" />
              {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-white h-6 w-6 md:mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg> */}
              <span
                style={{ fontFamily: "Montserrat" }}
                className="hidden  md:block text-sm"
              >
                {moduletype.type}
              </span>
            </div>
          )

          //   <input type="button"
          //   className= {moduletype.id === this.state.ClickedButton ? "bg-indblue" : "bg-black"}
          //   style={{width: '25%', border: "none"}}
          //   id={moduletype.id}
          //   key={moduletype.id}
          //   value={ moduletype.type}
          //   onClick={ () => this.handleChange(moduletype.id)}
          //  />
        )}
      </div>
    );
  }
}

export default SidebarMobile;
