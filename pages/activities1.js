import Head from "next/head";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Navbar";
import { useEffect, useState } from "react";
import authImport from "../utils/auth";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Router from "next/router";
import Programs1 from "../components/Programs1";
import StepForm from "../components/StepForm";

export default function Activities1() {
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
                       {/* <Hero user={user} isAuth={isAuth} auth={auth} /> */}
          <div className="main-outer" style={{width:'100%'}}>
          <div className="container" style={{margin:'0 auto'}}>
          
            <Programs1/>
            
           
          </div>
          <Footer />
          </div>
        </>
      )}
    </div>

    
    
  );
}
