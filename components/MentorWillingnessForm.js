import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import { toast } from "react-toastify";

export default function MentorWillingnessForm(props) {
  let disabled = props.disabled ?? false;

  const [mentor, setMentor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios()
      .get("/mentor_willingness")
      .then((response) => {
        setMentor(response.data);
        setIsLoading(false);
      });
  }, []);

  if (!mentor || mentor?.interested == 0) {
    return <h5 className="mt-12 text-center">Not interested</h5>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled) {
      return;
    }

    let data = new FormData(e.target);

    toast.promise(axios().post(`/mentor_willingness`, data), {
      pending: {
        render() {
          return "Updating....";
        },
      },
      success: {
        render({ data }) {
          setMentor(data.data);
          return "Data updated successfully!";
        },
      },
      error: {
        render({ data }) {
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
  }

  if (isLoading) {
    return <FormLoader />;
  }

  return (
    <div className="text-xl font-bold">
      <form
        onSubmit={handleSubmit}
        className="ml:0 md:ml-20 mr-0 md:mr-18 lg:mr-20 mt-3 mx-4"
      >
        <div>
          <div className="flex mb-5 ">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                1] Nodal Center:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-2 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.nodal_center}
                  name="nodal_center"
                >
                  <option value="Aditya Engineering College - Surampalem - Andhra Pradesh">Aditya Engineering College - Surampalem - Andhra Pradesh</option>
                  <option value="Amity University Uttar Pradesh, Noida - Noida - Uttar Pradesh">Amity University Uttar Pradesh, Noida - Noida - Uttar Pradesh</option>
                  <option value="Anand Institute of Higher Technology - Chennai - Tamil Nadu">Anand Institute of Higher Technology - Chennai - Tamil Nadu</option>
                  <option value="C V Raman Global University - Bhubaneswar - Odisha">C V Raman Global University - Bhubaneswar - Odisha</option>
                  <option value="Chandigarh Engineering College, Jhanjeri, Mohali - Mohali - Punjab">Chandigarh Engineering College, Jhanjeri, Mohali - Mohali - Punjab</option>
                  <option value="Chandigarh Engineering College-CGC Landran - Mohali - Punjab">Chandigarh Engineering College-CGC Landran - Mohali - Punjab</option>
                  <option value="Chhotubhai Gopalbhai Patel Institute of Technology - Bardoli - Gujarat">Chhotubhai Gopalbhai Patel Institute of Technology - Bardoli - Gujarat</option>
                  <option value="G H Raisoni College of Engineering - Nagpur - Maharashtra">G H Raisoni College of Engineering - Nagpur - Maharashtra</option>
                  <option value="GIET University, Gunupur, Odisha - Gunupur - Odisha">GIET University, Gunupur, Odisha - Gunupur - Odisha</option>
                  <option value="GMR Institute Of Technology - Rajam - Andhra Pradesh">GMR Institute Of Technology - Rajam - Andhra Pradesh</option>
                  <option value="Gujarat Technological University, Ahmedabad - Ahmedabad - Gujarat">Gujarat Technological University, Ahmedabad - Ahmedabad - Gujarat</option>
                  <option value="IES College of Technology - Bhopal - Madhya Pradesh">IES College of Technology - Bhopal - Madhya Pradesh</option>
                  <option value="Kolhapur Institute of Technology'S College of Engineering (Autonomous), Kolhapur - Kolhapur - Maharashtra">Kolhapur Institute of Technology'S College of Engineering (Autonomous), Kolhapur - Kolhapur - Maharashtra</option>
                  <option value="Manipal University Jaipur - Jaipur - Rajasthan">Manipal University Jaipur - Jaipur - Rajasthan</option>
                  <option value="New Horizon College of Engineering, Bangalore - Bangalore - Karnataka">New Horizon College of Engineering, Bangalore - Bangalore - Karnataka</option>
                  <option value="Noida Institute of Engineering and Technology, Greater Noida - Greater Noida - Uttar Pradesh">Noida Institute of Engineering and Technology, Greater Noida - Greater Noida - Uttar Pradesh</option>
                  <option value="O P Jindal University, Raigarh - Raigarh - Chhattisgarh">O P Jindal University, Raigarh - Raigarh - Chhattisgarh</option>
                  <option value="Oriental Institute of Science and Technology - Bhopal - Madhya Pradesh">Oriental Institute of Science and Technology - Bhopal - Madhya Pradesh</option>
                  <option value="P. R. Pote Patil College of Engineering & Management, Amravati - Amravati - Maharashtra">P. R. Pote Patil College of Engineering & Management, Amravati - Amravati - Maharashtra</option>
                  <option value="P.S.N.A. College of Engineering and Technology - Dindigul - Tamil Nadu">P.S.N.A. College of Engineering and Technology - Dindigul - Tamil Nadu</option>
                  <option value="Poornima Institute of Engineering & Technology - Jaipur - Rajasthan">Poornima Institute of Engineering & Technology - Jaipur - Rajasthan</option>
                  <option value="Prasad V Potluri Siddhartha Institute of Technology - Vijayawada - Andhra Pradesh">Prasad V Potluri Siddhartha Institute of Technology - Vijayawada - Andhra Pradesh</option>
                  <option value="Prin L. N. Welingkar Institute of Management Development & Research (PGDM) - Mumbai  - Maharashtra">Prin L. N. Welingkar Institute of Management Development & Research (PGDM) - Mumbai  - Maharashtra</option>
                  <option value="QIS College of Engineering and Technology - Ongole - Andhra Pradesh">QIS College of Engineering and Technology - Ongole - Andhra Pradesh</option>
                  <option value="Rungta College of Engineering and Technology, Bhilai - Bhilai - Chhattisgarh">Rungta College of Engineering and Technology, Bhilai - Bhilai - Chhattisgarh</option>
                  <option value="Shobhit Institute of Engineering and Technology  - Meerut - Uttar Pradesh">Shobhit Institute of Engineering and Technology  - Meerut - Uttar Pradesh</option>
                  <option value="Sreenidhi Institute of Science & Technology - Hyderabad - Telangana">Sreenidhi Institute of Science & Technology - Hyderabad - Telangana</option>
                  <option value="Sri Venkateswara College of Engineering and Technology  - Chittoor - Andhra Pradesh">Sri Venkateswara College of Engineering and Technology  - Chittoor - Andhra Pradesh</option>
                  <option value="St. Joseph'S College of Engineering - Chennai - Tamil Nadu">St. Joseph'S College of Engineering - Chennai - Tamil Nadu</option>
                  <option value="Swami Keshvanand Institute of Technology, Management & Gramothan - Jaipur - Rajasthan">Swami Keshvanand Institute of Technology, Management & Gramothan - Jaipur - Rajasthan</option>
                  <option value="Techno India Unversity - Kolkata - West Bengal">Techno India Unversity - Kolkata - West Bengal</option>
                  <option value="Techno Main Salt Lake - Kolkata - West Bengal">Techno Main Salt Lake - Kolkata - West Bengal</option>
                  <option value="The Assam Royal Global University - Guwahati - Assam">The Assam Royal Global University - Guwahati - Assam</option>
                  <option value="Vidyavardhaka College of Engineering - Mysuru - Karnataka">Vidyavardhaka College of Engineering - Mysuru - Karnataka</option>
                  <option value="Vignana Bharathi Institute of Technology - Hyderabad - Telangana">Vignana Bharathi Institute of Technology - Hyderabad - Telangana</option>
                  <option value="VNR Vignana Jyothi Institute of Engineering & Technology - Hyderabad - Telangana">VNR Vignana Jyothi Institute of Engineering & Technology - Hyderabad - Telangana</option>
                  <option value="Bhilai Institute of Technology, Durg - Durg - Chhattisgarh">Bhilai Institute of Technology, Durg - Durg - Chhattisgarh</option>
                  <option value="Chennai Institute of Technology - Chennai - Tamil Nadu">Chennai Institute of Technology - Chennai - Tamil Nadu</option>
                  <option value="Coimbatore Innovation and Business Incubator (Forge) - Coimbatore - Tamil Nadu">Coimbatore Innovation and Business Incubator (Forge) - Coimbatore - Tamil Nadu</option>
                  <option value="Galgotias University  - Greater Noida  - Uttar Pradesh">Galgotias University  - Greater Noida  - Uttar Pradesh</option>
                  <option value="Lakshmi Narain College of Technology - Bhopal - Madhya Pradesh">Lakshmi Narain College of Technology - Bhopal - Madhya Pradesh</option>
                  <option value="Lovely Professional University - Jalandhar - Punjab">Lovely Professional University - Jalandhar - Punjab</option>
                  <option value="Manav Rachna International Institute of Research and Studies - Faridabad - Haryana">Manav Rachna International Institute of Research and Studies - Faridabad - Haryana</option>
                  <option value="Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal - Manipal - Karnataka">Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal - Manipal - Karnataka</option>
                  <option value="MIT Art, Design and Technology University, Pune - Pune - Maharashtra">MIT Art, Design and Technology University, Pune - Pune - Maharashtra</option>
                  <option value="Nalla Malla Reddy Engineering College - Hyderabad - Telangana">Nalla Malla Reddy Engineering College - Hyderabad - Telangana</option>
                  <option value="The National Institute of Engineering - Mysuru - Karnataka">The National Institute of Engineering - Mysuru - Karnataka</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex mb-5 ">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                2] Area of Expertise:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-2 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.expertise}
                  name="expertise"
                >
                  <option value="AI">AI</option>
                  <option value="ML">ML</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Remote sensing/GIS">Remote sensing/GIS</option>
                  <option value="Programming: python, Java">
                    Programming: python, Java
                  </option>
                  <option value="Database: MySQL, Oracle etc">
                    Database: MySQL, Oracle etc
                  </option>
                  <option value="Image Processing">Image Processing</option>
                  <option value="Subject Matter Expert">
                    Subject Matter Expert
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex mb-5">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                3] Current Designation:
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  disabled={disabled}
                  type="text"
                  className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                  defaultValue={mentor?.designation ?? props.user.designation}
                  name={"designation"}
                />
              </div>
            </div>
          </div>

          <div className="flex mb-5">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                4] Current Organization/Company:
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  disabled={disabled}
                  type="text"
                  className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                  defaultValue={
                    mentor?.organization_name ?? props.user.organization_name
                  }
                  name={"organization_name"}
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <span className="text-base font-semibold">
              5] Will travel from:
            </span>{" "}
            <br />
            <div className="flex flex-row mt-2">
              <div className="w-full px-3 mb-5">
                <label className="text-base font-semibold">City:</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    disabled={disabled}
                    type="text"
                    className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                    defaultValue={mentor?.city}
                    name={"city"}
                  />
                </div>
              </div>
              <div className="w-full px-3 mb-5">
                <label className="text-base font-semibold">State:</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    disabled={disabled}
                    type="text"
                    className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                    defaultValue={mentor?.state}
                    name={"state"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mb-5 text-base font-semibold">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                6] Upload your CV/Resume:
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  disabled={disabled}
                  type="file"
                  className="w-full mt-2 -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-normal"
                  name={"cv"}
                  accept={".pdf,.doc,.docx"}
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full px-3 mb-5">
              <label className="text-base font-semibold">
                7] Participated as Mentor/evaluator/design expert in Toycathon
                or SIH 2022 or UIA 2022?
              </label>
              <div className="main xl:flex m-2 select-none">
                <label
                  className="flex radio p-2 cursor-pointer"
                  htmlFor="attended_yes"
                >
                  <input
                    required={true}
                    name="participated_in_previous"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={1}
                    id="attended_yes"
                    defaultChecked={mentor.participated_in_previous == 1}
                  />
                  <div className="title px-2 text-base font-semibold">
                    Attended
                  </div>
                </label>

                <label
                  className="flex radio p-2 cursor-pointer"
                  htmlFor="attended_no"
                >
                  <input
                    required={true}
                    name="participated_in_previous"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={0}
                    id="attended_no"
                    defaultChecked={mentor.participated_in_previous == 0}
                  />
                  <div className="title px-2 text-base font-semibold">
                    Not Attended
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-1">Terms and Conditions:</p>

          <ol className="text-base font-semibold list-disc"><li>Only local alumni are encouraged to apply, as no travel allowance will be provided.</li>
            <li>Accommodation and food will be provided.</li>
            <li>No honorarium will be provided initially (subject to change upon approval).</li>
            <li>If you are ready to be a Design Mentor, please give your consent by selecting "Yes" and specify the nodal center at which you will be participating.</li>
            <li>List of Nodal Centers and problem statements can be found at: <a className={"text-blue-800"} target="_blank" href={"https://sih.gov.in/shortlisted-nodel-centres-2023"}>https://sih.gov.in/shortlisted-nodel-centres-2023</a></li></ol>

          <p className="text-red-600 font-normal">The last date for expressing your interest is 6th December 2023.</p>
        </div>

        {!disabled && (
          <div className="flex  mb-16 md:mb-2">
            <div className="w-full px-3 mb-5">
              <button
                style={{ fontFamily: "Montserrat" }}
                className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
              >
                {isLoading ? "Saving...." : (mentor?.nodal_center ? "Update Application" : "Apply as Design Mentor")}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
