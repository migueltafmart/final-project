import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MatchMain from "../../Components/Main/MatchMain/MatchMain";


const MatchPage = () => {
  return (
    <>
      <Header active="offers" role="caretaker" banner />
      <MatchMain/>
      <Footer />
    </>
  );
};

export default MatchPage;
