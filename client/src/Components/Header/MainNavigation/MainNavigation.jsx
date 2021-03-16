import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import logoCc from "../../../img/logo-cc.png";
import logoL from "../../../img/logo-l.png";
import UserContext from "../../../Context/userContext";
const MainNavigation = ({ role }) => {
  const { user } = useContext(UserContext);
  return (
    <nav className="MainNavigation">
      {role ? (
        role === "caretaker" ? (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            <Link to="/cuidador/inicio">
              <h4>
                ¿Qué es <br />
                "Cuidar al cuidador"?
              </h4>
            </Link>
            <Link to="/cuidador/ofertas">
              <h4>
                Consulta las ofertas <br /> de trabajo activas
              </h4>
            </Link>
            <Link to="/">
              <h4>
                ¿Cómo compaginarlo <br /> con cada fase?
              </h4>
            </Link>
            {user.displayName ? (
              <Link to={`/user?apiKey=${user.apiKey}`}>
                <h4>
                  Hola, <br /> {user.displayName}
                </h4>
              </Link>
            ) : (
              <Link to="/cuidador/registro">
                <h4>
                  Registra tu perfil <br /> en pocos pasos
                </h4>
              </Link>
            )}
            <a href="https://ffluzon.org">
              <img src={logoL} alt="Fundación Luzón" />
            </a>
          </>
        ) : (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            <Link to="/empresa/inicio">
              <h4>
                ¿Qué es <br />
                "Cuidar al cuidador"?
              </h4>
            </Link>
            <Link to="/empresa/ofertas">
              <h4>
                Tus ofertas <br />
                Candidatos
              </h4>
            </Link>
            <Link to="/empresa/preguntas-frecuentes">
              <h4>Preguntas frecuentes</h4>
            </Link>
            {user.displayName ? (
              <Link to={`/user?apiKey=${user.apiKey}`}>
                <h4>{user.displayName}</h4>
              </Link>
            ) : (
              <Link to="/empresa/registro">
                <h4>
                  Registra tu empresa <br />
                  Entra en tu peril
                </h4>
              </Link>
            )}
            <a href="https://ffluzon.org">
              <img src={logoL} alt="Fundación Luzón" />
            </a>
          </>
        )
      ) : (
        <>
          <Link to="/">
            <img src={logoCc} alt="Cuidar al cuidador" />
          </Link>
          <Link className="landing" to="/inicio">
            <h4>
              ¿Qué es <br /> "Cuidar al cuidador"?
            </h4>
          </Link>

          <a href="https://ffluzon.org">
            <img src={logoL} alt="Fundación Luzón" />
          </a>
        </>
      )}
    </nav>
  );
};

export default MainNavigation;
