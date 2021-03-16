import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import logoCc from "../../../img/logo-cc.png";
import logoL from "../../../img/logo-l.png";
import UserContext from "../../../Context/userContext";
const MainNavigation = () => {
  const user = useContext(UserContext);
  return (
    <nav className="MainNavigation">
      {user ? (
        user.role === "caretaker" ? (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            <Link to="/inicio">
              <h4>¿Qué es cuidar al cuidador</h4>
            </Link>
            <Link to="/ofertas">
              <h4>Consulta las ofertas de trabajo activas</h4>
            </Link>
            {user.displayName ? (
              <Link to={`/user?apiKey=${user.apiKey}`}>
                <h4>Hola, {user.displayName}</h4>
              </Link>
            ) : (
              <Link to="/registro">
                <h4>Registra tu perfil en pocos pasos</h4>
              </Link>
            )}

            <Link to="/">
              <h4>¿Cómo compaginarlo con cada fase?</h4>
            </Link>
            <a href="https://ffluzon.org">
              <img src={logoL} alt="Fundación Luzón" />{" "}
            </a>
          </>
        ) : (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            <Link to="/inicio">
              <h4>¿Qué es cuidar al cuidador</h4>
            </Link>
            <Link to="/ofertas">
              <h4>Consulta las ofertas de trabajo activas</h4>
            </Link>
            {user.displayName ? (
              <Link to={`/user?apiKey=${user.apiKey}`}>
                <h4>Hola, {user.displayName}</h4>
              </Link>
            ) : (
              <Link to="/registro">
                <h4>Registra tu empresa en pocos pasos</h4>
              </Link>
            )}
            <Link to="/faq">
              <h4>FAQ</h4>
            </Link>
            <a href="https://ffluzon.org">
              <img src={logoL} alt="Fundación Luzón" />{" "}
            </a>
          </>
        )
      ) : (
        <></>
      )}
    </nav>
  );
};

export default MainNavigation;
