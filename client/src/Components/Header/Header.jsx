import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = ({ banner, landing, caretaker }) => {
  return (
    <header>
      <MainNavigation/>
      {banner ? (
        <div className="img">
          <Link to="/registro">
            <button>¡Regístrate!</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
      {landing ? (
        <div className="landing">
          <Link to="/inicio">
            <button>Empresa</button>
          </Link>
          <Link to="/inicio">
            <button>Cuidador</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
