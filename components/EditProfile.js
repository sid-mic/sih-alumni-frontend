import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "../utils/axios";
import Router from "next/router";
import { toast } from "react-toastify";
import FormLoader from "./FormLoader";

let editProfileObj = null;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: this.props.user?.name,
      alternate_email: this.props.user?.alternate_email,
      phone: this.props.user?.phone,
      gender: this.props.user?.gender,
      picture: this.props.user?.picture,
      uploadPicture: null,
      isLoading: false,
    };
  }
  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.setState({
      name: this.props.user?.name,
      alternate_email: this.props.user?.alternate_email,
      phone: this.props.user?.phone,
      gender: this.props.user?.gender,
      picture: this.props.user?.picture,
    });

    editProfileObj = this;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.view_only_mode) {
      return;
    }

    this.setState({ isLoading: true });

    if (this.validator.allValid() && this.props.user != null) {
      const form_data = new FormData();
      form_data.append("name", this.state.name);
      form_data.append("alternate_email", this.state.alternate_email);
      form_data.append("phone", this.state.phone);
      form_data.append("gender", this.state.gender);

      if (this.state.uploadPicture) {
        form_data.append("picture", this.state.uploadPicture);
      }

      this.props.toast.promise(
        axios().post(`/users/${this.props.user.id}/update`, form_data),
        {
          pending: {
            render() {
              return "Setting up profile....";
            },
          },
          success: {
            render({ data }) {
              editProfileObj.setState({ isLoading: false, picture: data.data.user.picture });

              editProfileObj.props.parentObj.setState({user:
                    {
                      ...editProfileObj.props.user,
                      name: data.data.user.name,
                      alternate_email: data.data.user.alternate_email,
                      phone: data.data.user.phone,
                      gender: data.data.user.gender,
                      picture: data.data.user.picture
                    }
              });

              return "Profile updated successfully!";
            },
          },
          error: {
            render({ data }) {
              editProfileObj.setState({ isLoading: false });

              let status = data.response.status;
              data = data.response.data;
              if (status == 422) {
                Object.entries(data.errors).forEach(([key, value]) => {
                  toast.error(value.toString(), {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });

                return "There were errors in some fields";
              } else {
                return "Something went wrong!";
              }
            },
          },
        }
      );
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    const disabled = this.props.view_only_mode ?? false;

    if (this.state.isLoading) {
      return <FormLoader></FormLoader>;
    }

    return (
      <div className=" min-h-screen  ml-20 mr-20 mb-20">
        <div className="flex rounded-full h-30 w-30 justify-center text-center mb-10 mt-10">
          <img
            className="inline-block h-60 w-60 rounded-full ring-2 ring-indblue"
            src={this.state.picture}
            alt="Profile picture"
          />
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Name</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                  disabled={disabled}
                type="text"
                required={true}
                className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                  this.validator.fieldValid("name")
                    ? this.validator.hideMessageFor("name")
                    : this.validator.showMessageFor("name");
                }}
                defaultValue={this.state.name}
              />
            </div>
            {this.validator.message("name", this.state.name, "required|min:3", {
              className: "text-red-600",
            })}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Alternate Email</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                  disabled={disabled}
                  type="email"
                  required={true}
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  onChange={(e) => {
                    this.setState({ alternate_email: e.target.value });
                    this.validator.fieldValid("alternate_email")
                        ? this.validator.hideMessageFor("alternate_email")
                        : this.validator.showMessageFor("alternate_email");
                  }}
                  defaultValue={this.state.alternate_email}
              />
            </div>
            {this.validator.message("alternate_email", this.state.alternate_email, "email", {
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
                  disabled={disabled}
                type="text"
                required={true}
                className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                  this.validator.fieldValid("phone")
                    ? this.validator.hideMessageFor("phone")
                    : this.validator.showMessageFor("phone");
                }}
                defaultValue={this.state.phone}
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
                  disabled={disabled}
                required={true}
                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue={this.state.gender}
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
            </div>
            {this.validator.message(
              "gender",
              this.state.gender,
              "required|in:male,female,other",
              { className: "text-red-600" }
            )}
          </div>
        </div>
        {!disabled && <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Profile Picture
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
              <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  className="w-full -ml-10 pl-5 pr-3 py-2 bg-white rounded-lg border-2"
                  onChange={(e) =>
                      this.setState({uploadPicture: e.target.files[0]})
                  }
              />
            </div>
          </div>
        </div>}
        <br />
        {!disabled && <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
                style={{fontFamily: "Montserrat"}}
                className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
                onClick={this.handleSubmit}
            >
              {this.state.isLoading ? "Updating profile...." : "Update profile"}
            </button>
          </div>
        </div>}
      </div>
    );
  }
}

export default EditProfile;
