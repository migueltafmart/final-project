import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HomeMain from "../../Components/Main/HomeMain/HomeMain";
import homeCaretaker from "../../assets/img/homeCaretaker.png"
const HomePage = () => {

  return <>
  <Header active="start" banner={homeCaretaker} role="caretaker"/>
  <HomeMain  role="caretaker"/>
  <Footer/>
  </>;
};

export default HomePage;
