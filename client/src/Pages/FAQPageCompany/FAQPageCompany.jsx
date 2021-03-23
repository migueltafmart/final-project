import React from "react";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import FAQMain from "../../Components/Main/FAQMain/FAQMain";
const FAQPageCompany = () => {
  return (
    <>
      <Header role="company" active="faq" />
      <FAQMain role="company"/>
      <Footer />
    </>
  );
};
export default FAQPageCompany;
