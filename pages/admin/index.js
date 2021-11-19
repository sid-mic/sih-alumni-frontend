import Head from "next/head";
import AdminSidebar from "../../components/AdminSidebar";
import { AdminStats } from "../../components/AdminStats";
import { ChartStats } from "../../components/ChartStats";
import { WelcomeHero } from "../../components/WelcomeHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  flex-wrap">
        <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
          <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />
          <AdminStats />
          <ChartStats />
        </div>
        <AdminSidebar />
      </div>
    </div>
  );
}
