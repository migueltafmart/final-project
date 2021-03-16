import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = ({ banner, landing, role }) => {
  return (
    <>
      <header>
        {role ? <MainNavigation role={role} /> : <MainNavigation />}
      </header>
      {banner ? (
        <div className="img">
          {role === "caretaker" ? (
            <Link to={`/cuidador/registro`}>
              <button>¡Regístrate!</button>
            </Link>
          ) : (
            <Link to={`/empresa/registro`}>
              <button>¡Regístrate!</button>
            </Link>
          )}
        </div>
      ) : (
        <></>
      )}
      {landing ? (
        <div className="landing">
          <Link to="/empresa/inicio">
            <button>Empresa</button>
          </Link>
          <Link to="/cuidador/inicio">
            <button>Cuidador</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
