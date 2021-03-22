import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MatchMain from "../../Components/Main/MatchMain/MatchMain";
import match from "../../assets/img/match.png"

const MatchPage = () => {
  return (
    <>
      <Header active="offers" role="caretaker" banner={match} />
      <MatchMain/>
      <Footer />
    </>
  );
};

export default MatchPage;
