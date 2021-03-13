import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./Header.scss"
const Header = () => {
  return <header>
    <MainNavigation/>
    <div className="img">
      <button>¡Regístrate!</button>
    </div>
  </header>;
};

export default Header;
