import React from "react";
import Header from "../../Components/Header/Header";
import FAQMain from "../../Components/Main/FAQMain/FAQMain"
import Footer from "../../Components/Footer/Footer";
const FAQPageCaretaker = () => {
  return (
    <>
      <Header role="caretaker" active="faq" />
      <FAQMain/>
      <Footer />
    </>
  );
};

export default FAQPageCaretaker;
