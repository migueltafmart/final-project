import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SignupMain from "../../Components/Main/SignupMain/SignupMain";

const SignupPage = () => {
  return (
    <>
      <Header active="login" role="caretaker"/>
      <SignupMain/>
      <Footer />
    </>
  );
};

export default SignupPage;
