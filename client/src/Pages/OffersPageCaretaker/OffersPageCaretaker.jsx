import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OffersMain from "../../Components/Main/OffersMain/OffersMain";

const OffersPage = () => {
  return (
    <>
      <Header active="offers" banner role="caretaker"/>
      <OffersMain />
      <Footer />
    </>
  );
};

export default OffersPage;
