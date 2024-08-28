import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";
import AboutUs from "../website/About";
import GetStarted from "../website/Banners/GetStarted";
import Footer from "../website/Footer";
import Header from "../website/Nav";

const AboutPage: NextPage = () => {
  useEffect(() => {
    mp.track("About Page View");
  }, []);

  return (
    <>
      <SEO title="About Us" />
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        minH="100vh"
      >
        <Header />
        <AboutUs />
        <GetStarted />
        <Footer />
      </Box>
    </>
  );
};

export default AboutPage;
