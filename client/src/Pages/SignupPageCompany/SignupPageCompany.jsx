import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SignupCompanyMain from "../../Components/Main/SignupCompanyMain/SignupCompanyMain";
const SignupPage = () => {
  return (
    <>
      <Header active="login" role="company" />
      <SignupCompanyMain/>
      <Footer />
    </>
  );
};

export default SignupPage;
