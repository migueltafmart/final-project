import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LandingMain from "../../Components/Main/LandingMain/LandingMain";
import landing from "../../assets/img/landing.png"
const LandingPage = () => {
  return (
    <>
      <Header banner={landing} active="login"/>
      <LandingMain/>
      <Footer />
    </>
  );
};

export default LandingPage;
