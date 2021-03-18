import React, { useContext } from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./Header.scss";
import { Link } from "react-router-dom";
import UserContext from "../../Context/userContext";
const Header = ({ banner, landing, role, active }) => {
  const {user} = useContext(UserContext);
  return (
    <>
      <header>
        {role ? (
          role === "caretaker" ? (
            <MainNavigation active={active} role="caretaker" />
          ) : (
            <MainNavigation active={active} role="company" />
          )
        ) : (
          <MainNavigation />
        )}
      </header>
      {banner ? (
        <div className="img">
          {!user.userId ? <Link to={role === "caretaker" ?"/cuidador/registro":"empresa/registro"}>
            <button>¡Regístrate!</button> </Link>
            :<></>
         }
          
        </div>
      ) : (
        <div className="nobanner"></div>
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
