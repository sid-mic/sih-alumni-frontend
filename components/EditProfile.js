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
    this.handleRolesChange = this.handleRolesChange.bind(this);
    this.handleExpertiseChange = this.handleExpertiseChange.bind(this);

    this.state = {
      name: this.props.user?.name,
      alternate_email: this.props.user?.alternate_email,
      phone: this.props.user?.phone,
      gender: this.props.user?.gender,
      roles: this.props.user?.roles ?? [],
      expertise: this.props.user?.expertise ?? [],
      employment_status: this.props.user?.employment_status,
      degree: this.props.user?.degree,
      organization_name: this.props.user?.organization_name,
      designation: this.props.user?.designation,
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
      roles: this.props.user?.roles ?? [],
      expertise: this.props.user?.expertise ?? [],
      employment_status: this.props.user?.employment_status,
      degree: this.props.user?.degree,
      organization_name: this.props.user?.organization_name,
      designation: this.props.user?.designation,
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

    // if (this.validator.allValid() && this.props.user != null) {
    if (true) {
      const form_data = new FormData();
      form_data.append("name", this.state.name);
      form_data.append("alternate_email", this.state.alternate_email);
      form_data.append("phone", this.state.phone);
      form_data.append("gender", this.state.gender);
      form_data.append("employment_status", this.state.employment_status);
      form_data.append("degree", this.state.degree);
      form_data.append("organization_name", this.state.organization_name);
      form_data.append("designation", this.state.designation);
      form_data.append("roles", this.state.roles);
      form_data.append("expertise", this.state.expertise);

      if (this.state.uploadPicture) {
        form_data.append("picture", this.state.uploadPicture);
      }

      this.props.toast.promise(axios().post(`/user/update`, form_data), {
        pending: {
          render() {
            return "Setting up profile....";
          },
        },
        success: {
          render({ data }) {
            editProfileObj.setState({
              isLoading: false,
              picture: data.data.user.picture,
            });

            editProfileObj.props.parentObj.setState({
              user: {
                ...editProfileObj.props.user,
                name: data.data.user.name,
                alternate_email: data.data.user.alternate_email,
                phone: data.data.user.phone,
                gender: data.data.user.gender,
                picture: data.data.user.picture,
                roles: data.data.user.roles ?? [],
                expertise: data.data.user.expertise ?? [],
                employment_status: data.data.user.employment_status,
                degree: data.data.user.degree,
                organization_name: data.data.user.organization_name,
                designation: data.data.user.designation,
              },
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
      });
    } else {
      this.setState({ isLoading: false });
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  handleRolesChange(value) {
    if (this.state.roles.indexOf(value) !== -1) {
      this.setState({
        roles: this.state.roles.filter((r) => r !== value),
      });
    } else {
      let roles = this.state.roles;
      roles.push(value);
      this.setState({ roles });
    }
  }

  handleExpertiseChange(value) {
    if (this.state.expertise.indexOf(value) !== -1) {
      this.setState({
        expertise: this.state.expertise.filter((r) => r !== value),
      });
    } else {
      let expertise = this.state.expertise;
      expertise.push(value);
      this.setState({ expertise });
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
            <label className="text-xs font-semibold px-1">
              Alternate Email
            </label>
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
            {this.validator.message(
              "alternate_email",
              this.state.alternate_email,
              "email",
              {
                className: "text-red-600",
              }
            )}
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
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">
              Current Employment Status
            </label>
            <div className="flex">
              <select
                disabled={disabled}
                required={true}
                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue={this.state.employment_status}
                onChange={(e) => {
                  this.setState({ employment_status: e.target.value });
                  this.validator.fieldValid("employment_status")
                    ? this.validator.hideMessageFor("employment_status")
                    : this.validator.showMessageFor("employment_status");
                }}
              >
                <option
                  value="Self employed"
                >
                  Self employed
                </option>
                <option
                  value="Salaried Individual"
                >
                  Salaried Individual
                </option>
              </select>
            </div>
            {this.validator.message(
              "employment_status",
              this.state.employment_status,
              "required",
              { className: "text-red-600" }
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Degree</label>
            <div className="flex">
              <select
                disabled={disabled}
                required={true}
                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue={this.state.degree}
                onChange={(e) => {
                  this.setState({ degree: e.target.value });
                  this.validator.fieldValid("degree")
                    ? this.validator.hideMessageFor("degree")
                    : this.validator.showMessageFor("degree");
                }}
              >
                <option value="UG" selected={this.state.degree === "UG"}>
                  UG
                </option>
                <option value="PG" selected={this.state.degree === "PG"}>
                  PG
                </option>
                <option value="Ph.D" selected={this.state.degree === "Ph.D"}>
                  Ph.D
                </option>
              </select>
            </div>
            {this.validator.message("degree", this.state.degree, "required", {
              className: "text-red-600",
            })}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">
              Startup/Firm/Company/Organization Name
            </label>
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
                  this.setState({ organization_name: e.target.value });
                  this.validator.fieldValid("organization_name")
                    ? this.validator.hideMessageFor("organization_name")
                    : this.validator.showMessageFor("organization_name");
                }}
                defaultValue={this.state.organization_name}
              />
            </div>
            {this.validator.message(
              "organization_name",
              this.state.organization_name,
              "required|min:3",
              {
                className: "text-red-600",
              }
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Designation</label>
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
                  this.setState({ designation: e.target.value });
                  this.validator.fieldValid("designation")
                    ? this.validator.hideMessageFor("designation")
                    : this.validator.showMessageFor("designation");
                }}
                defaultValue={this.state.designation}
              />
            </div>
            {this.validator.message(
              "designation",
              this.state.designation,
              "required|min:3",
              {
                className: "text-red-600",
              }
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">
              Areas of expertise:
            </label>
            <div className="main m-2 grid grid-cols-3">
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Business Modeling/Plan Development"}
                  checked={
                    this.state.expertise.indexOf(
                      "Business Modeling/Plan Development"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">
                  Business Modeling/Plan Development
                </div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Design Thinking"}
                  checked={
                    this.state.expertise.indexOf("Design Thinking") !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">Design Thinking</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Idea Generation & Validation"}
                  checked={
                    this.state.expertise.indexOf(
                      "Idea Generation & Validation"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">Idea Generation & Validation</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Incubation/Innovation Management"}
                  checked={
                    this.state.expertise.indexOf(
                      "Incubation/Innovation Management"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">
                  Incubation/Innovation Management
                </div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Investment and Market Analyst"}
                  checked={
                    this.state.expertise.indexOf(
                      "Investment and Market Analyst"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">Investment and Market Analyst</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"IP Generation & Protection"}
                  checked={
                    this.state.expertise.indexOf(
                      "IP Generation & Protection"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">IP Generation & Protection</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"PoC Validation"}
                  checked={
                    this.state.expertise.indexOf("PoC Validation") !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">PoC Validation</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Policy Expert (Start-up and Innovations)"}
                  checked={
                    this.state.expertise.indexOf(
                      "Policy Expert (Start-up and Innovations)"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">
                  Policy Expert (Start-up and Innovations)
                </div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Prototype Development"}
                  checked={
                    this.state.expertise.indexOf("Prototype Development") !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">Prototype Development</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Technology Transfer"}
                  checked={
                    this.state.expertise.indexOf("Technology Transfer") !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">Technology Transfer</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Venture Planning and Enterprise/Startup"}
                  checked={
                    this.state.expertise.indexOf(
                      "Venture Planning and Enterprise/Startup"
                    ) !== -1
                  }
                  onChange={(e) => this.handleExpertiseChange(e.target.value)}
                />
                <div className="title px-2">
                  Venture Planning and Enterprise/Startup
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">
              Roles I'm interested in:
            </label>
            <div className="main flex overflow-hidden m-2 select-none">
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Mentor"}
                  checked={this.state.roles.indexOf("Mentor") !== -1}
                  onChange={(e) => this.handleRolesChange(e.target.value)}
                />
                <div className="title px-2">Mentor</div>
              </label>

              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Evaluator"}
                  checked={this.state.roles.indexOf("Evaluator") !== -1}
                  onChange={(e) => this.handleRolesChange(e.target.value)}
                />
                <div className="title px-2">Evaluator</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Expert Speaker"}
                  checked={this.state.roles.indexOf("Expert Speaker") !== -1}
                  onChange={(e) => this.handleRolesChange(e.target.value)}
                />
                <div className="title px-2">Expert Speaker</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Investor"}
                  checked={this.state.roles.indexOf("Investor") !== -1}
                  onChange={(e) => this.handleRolesChange(e.target.value)}
                />
                <div className="title px-2">Investor</div>
              </label>
              <label className="flex radio p-2 cursor-pointer">
                <input
                  disabled={disabled}
                  className="my-auto transform scale-125"
                  type="checkbox"
                  value={"Product Designer"}
                  checked={this.state.roles.indexOf("Product Designer") !== -1}
                  onChange={(e) => this.handleRolesChange(e.target.value)}
                />
                <div className="title px-2">Product Designer</div>
              </label>
            </div>
          </div>
        </div>

        {!disabled && (
          <div className="flex -mx-3">
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
                    this.setState({ uploadPicture: e.target.files[0] })
                  }
                />
              </div>
            </div>
          </div>
        )}
        <br />
        {!disabled && (
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <button
                style={{ fontFamily: "Montserrat" }}
                className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
                onClick={this.handleSubmit}
              >
                {this.state.isLoading
                  ? "Updating profile...."
                  : "Update profile"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EditProfile;
