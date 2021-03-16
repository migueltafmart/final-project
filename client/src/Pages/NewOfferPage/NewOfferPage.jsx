import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewOfferMain from "../../Components/Main/NewOfferMain/NewOfferMain";

const NewOfferPage = () => {
  return (
    <>
      <Header banner role="company" />
      <NewOfferMain/>
      <Footer />
    </>
  );
};

export default NewOfferPage;
