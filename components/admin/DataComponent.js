import React from "react";

export default function DataComponent() {
  return (
    <div>
      <section class="mb-20">
        <div class="px-4 mx-auto grid grid-cols-1 gap-4 max-w-screen-2xl sm:px-6 lg:px-8 lg:grid-cols-4 lg:items-start">
          <div>
            <button
              type="button"
              class="flex items-center justify-between w-full p-3 text-xs font-medium tracking-wide uppercase bg-gray-200 border border-gray-200 lg:hidden"
            >
              Show Filters
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <form class="hidden border bg-gray-200 border-gray-200 divide-y divide-gray-200 lg:block">
              <div>
                <fieldset>
                  <legend class="w-full p-3 text-xs font-medium tracking-wide text-center uppercase bg-gray-100 border-b border-gray-200">
                    FILTERING OPTIONS
                  </legend>

                  <div class="p-4 space-y-2">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="toy"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="toy" class="ml-3 text-sm font-medium">
                        Registered
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="game"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="game" class="ml-3 text-sm font-medium">
                        Non-registered
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="download"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="download" class="ml-3 text-sm font-medium">
                        Bootstrapped
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="outdoors"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="outdoors" class="ml-3 text-sm font-medium">
                        Looking for investment
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <legend class="w-full p-3 text-xs font-medium tracking-wide text-center uppercase bg-gray-100 border-b border-gray-200">
                    FILTER BY COMPETITION
                  </legend>

                  <div class="p-4 space-y-2">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="3_plus"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="3_plus" class="ml-3 text-sm font-medium">
                        ASEAN India Hackathon
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="8_plus"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="8_plus" class="ml-3 text-sm font-medium">
                        IIC Innovation Contest
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="12_plus"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="12_plus" class="ml-3 text-sm font-medium">
                        Manthan
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="16_plus"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="16_plus" class="ml-3 text-sm font-medium">
                        Smart India Hackathon
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="adults"
                        class="w-6 h-6 border-gray-300"
                      />
                      <label for="adults" class="ml-3 text-sm font-medium">
                        Toycathon
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="flex justify-between p-3">
                <button
                  type="button"
                  name="reset"
                  class="p-2 text-xs font-medium text-gray-500 uppercase"
                >
                  Reset All
                </button>

                <button
                  type="button"
                  name="commit"
                  class="p-2 text-xs font-medium text-white uppercase bg-indblue"
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
          <table class="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
            <thead class="block md:table-header-group rounded-2xl">
              <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th class="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Team / Project
                </th>
                <th class="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Team Leader
                </th>
                <th class="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email Address
                </th>
                <th class="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Mobile
                </th>
                <th class="bg-indblue  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Detailed info
                </th>
              </tr>
            </thead>
            <tbody class="block md:table-row-group">
              <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Team / Project
                  </span>
                  Cipher Infoline
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Team Leader
                  </span>
                  Somebody
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  dummmy@email.com
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Mobile
                  </span>
                  9999999990
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Detailed info
                  </span>
                  <button class="bg-indblue hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    View Response
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
