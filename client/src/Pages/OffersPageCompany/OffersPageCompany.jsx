import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MyOffersMain from "../../Components/Main/MyOffersMain/MyOffersMain";

const OffersPageCompany = () => {
  return (
    <>
      <Header banner role="company"/>
      <MyOffersMain />
      <Footer />
    </>
  );
};

export default OffersPageCompany;
