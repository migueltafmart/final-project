import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OffersMain from "../../Components/Main/OffersMain/OffersMain";
import offersCaretaker from "../../assets/img/offersCaretaker.png"

const OffersPage = () => {
  return (
    <>
      <Header active="offers" banner={offersCaretaker} role="caretaker"/>
      <OffersMain />
      <Footer />
    </>
  );
};

export default OffersPage;
