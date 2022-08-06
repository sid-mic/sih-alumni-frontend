import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import { toast } from "react-toastify";

export default function MentorWillingnessForm(props) {
  let disabled = props.disabled ?? false;

  let sw_nodal_centers = [
    "ACS College of Engineering Karnataka Bangalore",
    "ANAND INSTITUTE OF HIGHER TECHNOLOGY Tamil Nadu CHENNAI",
    "Anurag Group of Institutions Telangana Hyderabad",
    "Birla Institute of Technology Mesra Ranchi Jharkhand Ranchi",
    "Cambridge Institute of Technology, K R Puram,Bangalore Karnataka Bangalore",
    "Chandigarh University Punjab Mohali",
    "DR B C ROY ENGINEERING COLLEGE West Bengal DURGAPUR",
    "D. Y. Patil College of Engineering, Akurdi, Pune Maharashtra Pune",
    "Excel Engineering College Tamil Nadu Komarapalayam",
    "G H Raisoni College of Engineering, Nagpur Maharashtra Nagpur",
    "GIET University Odisha Gunupur",
    "GMR Institute of Technology Andhra Pradesh Rajam",
    "Gujarat Technological University Gujarat Ahmedabad",
    "G.PULLAIAH COLLEGE OF ENGINEERING AND TECHNOLOGY Andhra Pradesh KURNOOL",
    "IES College of Technology Madhya Pradesh Bhopal",
    "IIT GUWAHATI Assam Guwahati",
    "IIT KANPUR Uttar Pradesh KANPUR",
    "IT-BHU Uttar Pradesh BANARAS",
    "Jai Bharath College of Management and Engineering Technology Kerala Perumbavoor",
    "JSS TECHNOLOGICAL UNIVERSITY Karnataka Mysore",
    "Karnavati University Gujarat Gandhinagar",
    "KIT'S College of Engineering Kolhapur Maharashtra Kolhapur",
    "KLE Technological University Karnataka Hubballi",
    "Koneru Lakshmaiah Education Foundation Andhra Pradesh Vijayawada",
    "Kongu Engineering College Tamil Nadu Erode",
    "Lovely Professional University Punjab Phagwara",
    "Malaviya National Institute of Technology Jaipur Rajasthan Jaipur",
    "National Institute of Technology Silchar Assam Silchar",
    "Noida Institute of Engineering and Technology, Greater Noida Uttar Pradesh Greater Noida",
    "Paavai Engineering College Tamil Nadu Namakkal",
    "Parul University Gujarat Vadodara",
    "Presidency University, Bengaluru Karnataka Bengaluru",
    "Prin. L.N. Welingkar Institute of Management Development and Research (PGDM) Maharashtra Mumbai",
    "PSR ENGINEERING COLLEGE Tamil Nadu Sivakasi",
    "SAGE University Indore Madhya Pradesh Indore",
    "Sahyadri College of Engineering & Management Karnataka Mangalore",
    "Sathyabama Institute of Science and Tehcnology Tamil Nadu Chennai",
    "SCMS School of Technology and Management Kerala Ernakulam",
    "Shri Ramdeobaba College of Engineering and Management, Nagpur Maharashtra Nagpur",
    "Sona College of Technology Tamil Nadu Salem",
    "SRI ESHWAR COLLEGE OF ENGINEERING Tamil Nadu COIMBATORE",
    "Sri Venkateswara College of Engineering and Technology Andhra Pradesh Chittoor",
    "Techno International New Town West Bengal Kolkata",
    "Vaageswari College of Engineering Telangana Karimnagar",
    "VIGNANA BHARATHI INSTITUTE OF TECHNOLOGY Telangana HYDERABAD",
    "VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING & TECHNOLOGY Telangana HYDERABAD",
  ];

  let hw_nodal_centers = [
    "B. S. Abdur Rahman Crescent Institute of Science & Technology Tamil Nadu Chennai",
    "Chitkara University Punjab Rajpura",
    "Forge Accelarator Tamil Nadu Coimbatore",
    "Galgotias University Uttar Pradesh Greater Noida",
    "Indian Institute of Technology Roorkee Uttarakhand Roorkee",
    "JAIN (Deemed-to-be University)Faculty of Engineering and Technology Karnataka Bengaluru",
    "Kalasalingam Academy of Research and Education Tamil Nadu Srivilliputtur",
    "KIET Group of Institutions Ghaziabad Uttar Pradesh Ghaziabad",
    "Manav Rachna International Institute of Research and Studies Haryana Faridabad",
    "Manipal University Jaipur Rajasthan Jaipur",
    "MIT PUNE Maharashtra PUNE",
    "QIS COLLEGE OF ENGINEERING AND TECHNOLOGY Andhra Pradesh ONGOLE",
    "REVA University Karnataka Bengaluru",
    "SRM Institute of Science & Technology Tamil Nadu Chennai",
  ];

  const [mentor, setMentor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [interested, setInterested] = useState(true);
  const [category, setCategory] = useState("sw");

  useEffect(() => {
    axios()
      .get(
        props.user?.id
          ? "mentor_willingness/" + props.user?.id
          : "/mentor_willingness"
      )
      .then((response) => {
        setMentor(response.data);
        setInterested(response.data?.interested);
        setCategory(response.data?.category);
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (disabled) {
      return;
    }

    let data = new FormData(e.target);

    toast.promise(axios().post(`/mentor_willingness`, data), {
      pending: {
        render() {
          setIsLoading(true);
          return "Updating....";
        },
      },
      success: {
        render({data}) {
          setMentor(data.data)
          setIsLoading(false);
          return "Willingness updated successfully!";
        },
      },
      error: {
        render({ data }) {
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
  }

  if (isLoading) {
    return <FormLoader />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="ml:0 md:ml-20 mr-0 md:mr-18 lg:mr-20 mt-3"
    >

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-md font-semibold">
            1] Are you interested in mentoring for Smart India Hackathon 2022?
          </label>
          <div className="main xl:flex m-2 select-none">
            <label className="flex radio p-2 cursor-pointer">
              <input
                required={true}
                name="interested"
                disabled={disabled}
                className="my-auto transform scale-125"
                type="radio"
                value={1}
                defaultChecked={interested === 1}
                onClick={(e) => setInterested(1)}
              />
              <div className="title px-2">Interested</div>
            </label>

            <label className="flex radio p-2 cursor-pointer">
              <input
                required={true}
                name="interested"
                disabled={disabled}
                className="my-auto transform scale-125"
                type="radio"
                value={0}
                defaultChecked={interested === 0}
                onClick={(e) => setInterested(0)}
              />
              <div className="title px-2">Not Interested</div>
            </label>
          </div>
        </div>
      </div>

      {interested === 1 && (
        <div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                2] Select your preferred category:
              </label>
              <div className="main xl:flex m-2 select-none">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    required={true}
                    name="category"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={"sw"}
                    defaultChecked={category === "sw"}
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <div className="title px-2">Software</div>
                </label>

                <label className="flex radio p-2 cursor-pointer">
                  <input
                    required={true}
                    name="category"
                    disabled={disabled}
                    className="my-auto transform scale-125"
                    type="radio"
                    value={"hw"}
                    defaultChecked={category === "hw"}
                    onClick={(e) => setCategory(e.target.value)}
                  />
                  <div className="title px-2">Hardware</div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex mb-5 -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                3] Select your preferred nodal center:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.nodal_center}
                  name="nodal_center"
                >
                  {category === "sw"
                    ? sw_nodal_centers.map((n, index) => (
                        <option value={n} key={index}>
                          {n}
                        </option>
                      ))
                    : hw_nodal_centers.map((n, index) => (
                        <option value={n} key={index}>
                          {n}
                        </option>
                      ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex mb-5 -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-md font-semibold">
                4] Associate yourself as:
              </label>
              <div className="flex">
                <select
                  disabled={disabled}
                  className="mt-5 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={mentor?.associate}
                  name="associate"
                >
                  <option value="Evaluator">Evaluator</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Design Expert">Design Expert</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {!disabled && (
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              style={{ fontFamily: "Montserrat" }}
              className="block w-full max-w-xs mx-auto bg-indblue hover:bg-indblue focus:bg-indblue text-white rounded-lg px-3 py-3 font-semibold"
            >
              {isLoading ? "Saving...." : "SAVE CHANGES"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
