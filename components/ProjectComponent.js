import React from "react";
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

export default function ProjectComponent() {
  return (
    <div>
      <div className="  mt-10 px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div
              style={{ fontFamily: "Montserrat" }}
              className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            >
              <div className="text-center">
                <ul class="flex text-center">
                  <li class="flex-1">
                    <a
                      class="block p-4 text-sm font-medium text-indblue bg-pink-100 rounded-xl"
                      href=""
                    >
                      {" "}
                      TEAM QUESTIONS{" "}
                    </a>
                  </li>

                  <li class="flex-1">
                    <a
                      class="block p-4 text-sm font-medium text-gray-500 rounded-sm"
                      href=""
                    >
                      {" "}
                      INDIVIDUAL QUESTIONS{" "}
                    </a>
                  </li>

                  <li class="flex-1">
                    <a
                      class="block p-4 text-sm font-medium text-gray-500 rounded-sm"
                      href=""
                    >
                      {" "}
                      FEEDBACK{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
      <TeamQuestions />
    </div>
  );
}
