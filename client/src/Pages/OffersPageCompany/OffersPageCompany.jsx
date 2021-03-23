import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MyOffersMain from "../../Components/Main/MyOffersMain/MyOffersMain";
import offersCompany from "../../assets/img/offersCompany.png"
const OffersPageCompany = () => {
  return (
    <>
      <Header active="offers" banner={offersCompany} role="company"/>
      <MyOffersMain />
      <Footer />
    </>
  );
};

export default OffersPageCompany;
