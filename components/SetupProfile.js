import React, { useEffect, useReducer, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "../utils/axios";
import Router from "next/router";
import {toast} from "react-toastify";

export default function SetupProfile(props) {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [name, setName] = useState(props.user?.name);
  const [alternate_email, setAlternateEmail] = useState(
    props.user?.alternate_email
  );
  const [phone, setPhone] = useState(props.user?.phone);
  const [gender, setGender] = useState(props.user?.gender);
  const [upload_picture, setUploadPicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [employment_status, setEmploymentStatus] = useState("Self employed");
  const [degree, setDegree] = useState("UG");
  const [organization_name, setOrganizationName] = useState(null);
  const [designation, setDesignation] = useState(null);

  useEffect(() => {
    setName(props.user?.name);
    setAlternateEmail(props.user?.alternate_email);
    setPhone(props.user?.phone);
    setGender(props.user?.gender);
  }, props.user);

  function handleSubmit(e) {
    e.preventDefault();

    if (simpleValidator.current.allValid() && props.user != null) {
      const form_data = new FormData();
      form_data.append("name", name);
      form_data.append("alternate_email", alternate_email);
      form_data.append("phone", phone);
      form_data.append("gender", gender);
      form_data.append("employment_status", employment_status);
      form_data.append("degree", degree);
      form_data.append("organization_name", organization_name);
      form_data.append("designation", designation);
      form_data.append("roles", roles);
      form_data.append("expertise", expertise);

      if (upload_picture) {
        form_data.append("picture", upload_picture);
      }

      props.toast.promise(axios().post(`/user/update`, form_data), {
        pending: {
          render() {
            setIsLoading(true);
            return "Setting up profile....";
          },
        },
        success: {
          render() {
            setIsLoading(false);
            Router.push("/dashboard");
            return "Profile updated successfully!";
          },
        },
        error: {
          render({data}) {
            setIsLoading(false);
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
      simpleValidator.current.showMessages();
      forceUpdate();
    }
  }

  function handleRolesChange(value) {
    if (roles.indexOf(value) !== -1) {
      setRoles(roles.filter((r) => r !== value));
    } else {
      let roles_array = JSON.parse(JSON.stringify(roles));
      roles_array.push(value);
      setRoles(roles_array);
    }
  }

  function handleExpertiseChange(value) {
    if (expertise.indexOf(value) !== -1) {
      setExpertise(expertise.filter((r) => r !== value));
    } else {
      let expertise_array = JSON.parse(JSON.stringify(expertise));
      expertise_array.push(value);
      setExpertise(expertise_array);
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-indblue flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-white py-10 px-10 max-h-full">
            <img src="assets/namaste.gif" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1
                className="font-bold text-3xl text-gray-900"
                style={{ fontFamily: "Montserrat" }}
              >
                SETUP PROFILE
              </h1>
              <p className="mt-4">
                Please check if the below information is correct
              </p>
            </div>
            <div>
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
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setName(e.target.value);
                        simpleValidator.current.fieldValid("name")
                          ? simpleValidator.current.hideMessageFor("name")
                          : simpleValidator.current.showMessageFor("name");
                      }}
                      value={name}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "name",
                    name,
                    "required|min:3",
                    { className: "text-red-600" }
                  )}
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
                      type="email"
                      required={true}
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setAlternateEmail(e.target.value);
                        simpleValidator.current.fieldValid("alternate_email")
                          ? simpleValidator.current.hideMessageFor(
                              "alternate_email"
                            )
                          : simpleValidator.current.howMessageFor(
                              "alternate_email"
                            );
                      }}
                      defaultValue={alternate_email}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "alternate_email",
                    alternate_email,
                    "email",
                    {
                      className: "text-red-600",
                    }
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Phone number
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      required={true}
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setPhone(e.target.value);
                        simpleValidator.current.fieldValid("phone")
                          ? simpleValidator.current.hideMessageFor("phone")
                          : simpleValidator.current.showMessageFor("phone");
                      }}
                      value={phone}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "phone",
                    phone,
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
                        setGender(e.target.value);
                        simpleValidator.current.fieldValid("gender")
                          ? simpleValidator.current.hideMessageFor("gender")
                          : simpleValidator.current.showMessageFor("gender");
                      }}
                    >
                      <option value="male" selected={gender === "male"}>
                        Male
                      </option>
                      <option value="female" selected={gender === "female"}>
                        Female
                      </option>
                      <option value="other" selected={gender === "other"}>
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
                  {simpleValidator.current.message(
                    "gender",
                    gender,
                    "required|in:male,female,other",
                    { className: "text-red-600" }
                  )}
                </div>
              </div>
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
                      onChange={(e) => setUploadPicture(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Current Employment Status
                  </label>
                  <div className="flex">
                    <select
                      required={true}
                      className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => {
                        setEmploymentStatus(e.target.value);
                        simpleValidator.current.fieldValid("employment_status")
                          ? simpleValidator.current.hideMessageFor(
                              "employment_status"
                            )
                          : simpleValidator.current.showMessageFor(
                              "employment_status"
                            );
                      }}
                    >
                      <option value="Self employed" selected={true}>
                        Self employed
                      </option>
                      <option value="Salaried Individual">
                        Salaried Individual
                      </option>
                    </select>
                  </div>
                  {simpleValidator.current.message(
                    "employment_status",
                    employment_status,
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
                      required={true}
                      className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => {
                        setDegree(e.target.value);
                        simpleValidator.current.fieldValid("degree")
                          ? simpleValidator.current.hideMessageFor("degree")
                          : simpleValidator.current.showMessageFor("degree");
                      }}
                    >
                      <option value="UG" selected={true}>
                        UG
                      </option>
                      <option value="PG">PG</option>
                      <option value="Ph.D">Ph.D</option>
                    </select>
                  </div>
                  {simpleValidator.current.message(
                    "degree",
                    degree,
                    "required",
                    {
                      className: "text-red-600",
                    }
                  )}
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
                      type="text"
                      required={true}
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setOrganizationName(e.target.value);
                        simpleValidator.current.fieldValid("organization_name")
                          ? simpleValidator.current.hideMessageFor(
                              "organization_name"
                            )
                          : simpleValidator.current.showMessageFor(
                              "organization_name"
                            );
                      }}
                      defaultValue={organization_name}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "organization_name",
                    organization_name,
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
                    Designation
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      required={true}
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(e) => {
                        setDesignation(e.target.value);
                        simpleValidator.current.fieldValid("designation")
                          ? simpleValidator.current.hideMessageFor(
                              "designation"
                            )
                          : simpleValidator.current.showMessageFor(
                              "designation"
                            );
                      }}
                      defaultValue={designation}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "designation",
                    designation,
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
                  <div className="main m-2 grid grid-cols-2">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Business Modeling/Plan Development"}
                        checked={
                          expertise.indexOf(
                            "Business Modeling/Plan Development"
                          ) !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">
                        Business Modeling/Plan Development
                      </div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Design Thinking"}
                        checked={expertise.indexOf("Design Thinking") !== -1}
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2 mt-6">Design Thinking</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Idea Generation & Validation"}
                        checked={
                          expertise.indexOf("Idea Generation & Validation") !==
                          -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">
                        Idea Generation & Validation
                      </div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Incubation/Innovation Management"}
                        checked={
                          expertise.indexOf(
                            "Incubation/Innovation Management"
                          ) !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">
                        Incubation/Innovation Management
                      </div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Investment and Market Analyst"}
                        checked={
                          expertise.indexOf("Investment and Market Analyst") !==
                          -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">
                        Investment and Market Analyst
                      </div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"IP Generation & Protection"}
                        checked={
                          expertise.indexOf("IP Generation & Protection") !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">
                        IP Generation & Protection
                      </div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"PoC Validation"}
                        checked={expertise.indexOf("PoC Validation") !== -1}
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2 mt-3">PoC Validation</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Policy Expert (Start-up and Innovations)"}
                        checked={
                          expertise.indexOf(
                            "Policy Expert (Start-up and Innovations)"
                          ) !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">
                        Policy Expert (Start-up and Innovations)
                      </div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Prototype Development"}
                        checked={
                          expertise.indexOf("Prototype Development") !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2">Prototype Development</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Technology Transfer"}
                        checked={
                          expertise.indexOf("Technology Transfer") !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
                      />
                      <div className="title px-2 mt-3">Technology Transfer</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Venture Planning and Enterprise/Startup"}
                        checked={
                          expertise.indexOf(
                            "Venture Planning and Enterprise/Startup"
                          ) !== -1
                        }
                        onChange={(e) => handleExpertiseChange(e.target.value)}
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
                  <div className="main grid grid-cols-2 m-2 select-none">
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Mentor"}
                        checked={roles.indexOf("Mentor") !== -1}
                        onChange={(e) => handleRolesChange(e.target.value)}
                      />
                      <div className="title px-2">Mentor</div>
                    </label>

                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Evaluator"}
                        checked={roles.indexOf("Evaluator") !== -1}
                        onChange={(e) => handleRolesChange(e.target.value)}
                      />
                      <div className="title px-2">Evaluator</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Expert Speaker"}
                        checked={roles.indexOf("Expert Speaker") !== -1}
                        onChange={(e) => handleRolesChange(e.target.value)}
                      />
                      <div className="title px-2">Expert Speaker</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Investor"}
                        checked={roles.indexOf("Investor") !== -1}
                        onChange={(e) => handleRolesChange(e.target.value)}
                      />
                      <div className="title px-2">Investor</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="checkbox"
                        value={"Product Designer"}
                        checked={roles.indexOf("Product Designer") !== -1}
                        onChange={(e) => handleRolesChange(e.target.value)}
                      />
                      <div className="title px-2">Product Designer</div>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    style={{ fontFamily: "Montserrat" }}
                    className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={handleSubmit}
                  >
                    {isLoading ? "Setting up....." : "CONFIRM AND CONTINUE"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
