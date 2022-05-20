import "tailwindcss/tailwind.css";
import "@fontsource/montserrat/800.css";
import ReactGA from "react-ga";
import { useEffect } from "react";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />;
}

export default MyApp;
