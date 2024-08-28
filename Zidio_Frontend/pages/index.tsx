import { Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";
import Announcement from "../website/Banners/Announcement";
import GetStarted from "../website/Banners/GetStarted";
import Broadmap from "../website/Broadmap";
import FourGrid from "../website/Features/FeaturesGrid";
import Champions from "../website/Features/FullFeatures";
import Footer from "../website/Footer";
import Graph from "../website/Graph";
import Hero from "../website/Hero";
import Nav from "../website/Nav";
const CookieBanner = dynamic(() => import("../website/Cookies/CookieBanner"), {
  ssr: false
});

const Index: NextPage = () => {
  const acceptedCookie = Cookies.get("user-accepted-cookies");

  useEffect(() => {
    mp.track("Landing Page View");
  }, []);

  return (
    <>
      <SEO />
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        minH="100vh"
        mt="16"
      >
        <Nav />
        {/* <Announcement /> */}
        <Hero />
        <Graph />
        <FourGrid />
        <Champions />
        {/* <Broadmap /> */}
        <GetStarted />
        {!acceptedCookie && <CookieBanner />}
        <Footer />
      </Box>
    </>
  );
};

export default Index;
