import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LoginMain from "../../Components/Main/LoginMain/LoginMain";

const LoginPage = ({role}) => {
  return (
    <>
      <Header role={role} />
      <LoginMain role ={role}/>
      <Footer />
    </>
  );
};

export default LoginPage;
