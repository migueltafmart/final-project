import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewOfferMain from "../../Components/Main/NewOfferMain/NewOfferMain";

const NewOfferPage = ({edit}) => {
  return (
    <>
      <Header banner role="company" />
      {edit ? <NewOfferMain edit />: <NewOfferMain/>}
      <Footer />
    </>
  );
};

export default NewOfferPage;
