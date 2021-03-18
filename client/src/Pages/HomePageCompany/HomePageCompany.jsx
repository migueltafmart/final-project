import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HomeMain from "../../Components/Main/HomeMain/HomeMain";

const HomePage = () => {

  return <>
  <Header active="start" banner role="company"/>
  <HomeMain  role="company"/>
  <Footer/>
  </>;
};

export default HomePage;
