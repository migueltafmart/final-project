import React from "react";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import FAQMain from "../../Components/Main/FAQMain/FAQMain";
const FAQPageCompany = () => {
  return (
    <>
      <Header banner role="company" active="faq" />
      <FAQMain/>
      <Footer />
    </>
  );
};
export default FAQPageCompany;
