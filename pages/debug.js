import Head from "next/head";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import Featured from "../components/Featured";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Scroller from "../components/Marquee";
import { Nav } from "../components/Navbar";
import { useEffect, useState } from "react";
import authImport from "../utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Router from "next/router";

export default function Debug() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setAuth(authImport());
    if (authImport().isAuth) {
      await Router.push("/dashboard");
    }

    setIsLoading(false);
  }, [""]);
  return (
    //Add svg with parallax scroll

    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MIC Alumni Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Nav />
          <div className="p-20">
            <div class="overflow-hidden overflow-x-auto border border-gray-100 rounded">
              <table class="min-w-full text-sm divide-y divide-gray-200">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Name
                    </th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Date of Birth
                    </th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Role
                    </th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Salary
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-100">
                  <tr>
                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                      John Doe
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      24/05/1995
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      Web Developer
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      $120,000
                    </td>
                  </tr>

                  <tr>
                    <td class="px-4 py-2 font-medium whitespace-nowrap">
                      Jane Doe
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      04/11/1980
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      Web Designer
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      $100,000
                    </td>
                  </tr>

                  <tr>
                    <td class="px-4 py-2 font-medium whitespace-nowrap">
                      Gary Barlow
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      24/05/1995
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      Singer
                    </td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                      $20,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
