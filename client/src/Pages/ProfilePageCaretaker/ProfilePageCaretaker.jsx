import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProfileMain from "../../Components/Main/ProfileMain/ProfileMain";

const ProfilePageCaretaker = ({ caretaker }) => {
  return (
    <>
      <Header role="caretaker" active="login" />
      <ProfileMain caretaker={caretaker} />
      <Footer />
    </>
  );
};

export default ProfilePageCaretaker;

