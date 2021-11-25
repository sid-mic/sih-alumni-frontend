import React, {
  Component,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "../utils/axios";
import Router from "next/router";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: this.props.user?.name,
      phone: this.props.user?.phone,
      gender: this.props.user?.gender,
      isLoading: false
    };
  }

  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.setState({
      name: this.props.user?.name,
      phone: this.props.user?.phone,
      gender: this.props.user?.gender,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validator.allValid() && this.props.user != null) {
      this.props.toast.promise(
        axios().patch(`/users/${this.props.user.id}/update`, {
            _method: "PATCH",
          name: this.state.name,
          phone: this.state.phone,
          gender: this.state.gender,
          }),
          {
            pending: {
              render() {
                return "Setting up profile....";
              },
            },
            success: {
              render() {
                Router.push("/dashboard");
                return "Profile updated successfully!";
              },
            },
            error: {
              render() {
                return "Something went wrong!";
              },
            },
          }
      );
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  handleChange(event) {
    //this.state = {selectedtype: event.target.value}
    console.log(event.target.id);
    alert(event.target.id);
    this.props.selectedtype.bind(this, event.target.id);
  }
  render() {
    return (
      <div className=" min-h-screen  ml-20 mr-20">
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Name</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                required={true}
                className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                  this.validator.fieldValid("name")
                    ? this.validator.hideMessageFor("name")
                    : this.validator.showMessageFor("name");
                }}
                value={this.state.name}
              />
            </div>
            {this.validator.message("name", this.state.name, "required|min:3", {
              className: "text-red-600",
            })}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Phone number</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                required={true}
                className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                  this.validator.fieldValid("phone")
                    ? this.validator.hideMessageFor("phone")
                    : this.validator.showMessageFor("phone");
                }}
                value={this.state.phone}
              />
            </div>
            {this.validator.message(
              "phone",
              this.state.phone,
              "required|min:10|max:25",
              { className: "text-red-600" }
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Gender</label>
            <div className="flex">
              <select
                required={true}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  this.setState({ gender: e.target.value });
                  this.validator.fieldValid("gender")
                    ? this.validator.hideMessageFor("gender")
                    : this.validator.showMessageFor("gender");
                }}
              >
                <option value="male" selected={this.state.gender === "male"}>
                  Male
                </option>
                <option
                  value="female"
                  selected={this.state.gender === "female"}
                >
                  Female
                </option>
                <option value="other" selected={this.state.gender === "other"}>
                  Other
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {this.validator.message(
              "gender",
              this.state.gender,
              "required|in:male,female,other",
              { className: "text-red-600" }
            )}
          </div>
        </div>
        <br />
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              style={{ fontFamily: "Montserrat" }}
              className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
              onClick={this.handleSubmit}
            >
              {this.state.isLoading ? 'Updating profile....' : 'Update profile'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
