import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./Header.scss"
import { Link } from "react-router-dom";
const Header = () => {
  return <header>
    <MainNavigation/>
    <div className="img">
      <Link to="/registro"> <button>¡Regístrate!</button></Link>
     
    </div>
  </header>;
};

export default Header;
