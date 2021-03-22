import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProfileMain from "../../Components/Main/ProfileMain/ProfileMain";

const ProfilePageCompany = ({ company }) => {
  return (
    <>
      <Header role="company" active="login" />
      <ProfileMain company={company} />
      <Footer />
    </>
  );
};

export default ProfilePageCompany;
