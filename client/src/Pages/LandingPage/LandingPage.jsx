import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LandingMain from "../../Components/Main/LandingMain/LandingMain";
const LandingPage = () => {
  return (
    <>
      <Header active="login"/>
      <LandingMain/>
      <Footer />
    </>
  );
};

export default LandingPage;
