import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import logoCc from "../../../img/logo-cc.png";
import logoL from "../../../img/logo-l.png";
import UserContext from "../../../Context/userContext";
const MainNavigation = ({ role }) => {
  const { user } = useContext(UserContext);
  const [profileLinks, setProfileLinks] = useState(false);
  return (
    <>
      <nav className="MainNavigation">
        {role ? (
          role === "caretaker" ? (
            <>
              <Link to="/">
                <img src={logoCc} alt="Cuidar al cuidador" />
              </Link>
              <Link to="/cuidador/inicio">
                <h4>
                  ¿Qué es
                  <br />
                  "Cuidar al cuidador"?
                </h4>
              </Link>
              <Link to="/cuidador/ofertas">
                <h4>
                  Consulta las ofertas
                  <br /> de trabajo activas
                </h4>
              </Link>
              <Link to="/">
                <h4>
                  ¿Cómo compaginarlo
                  <br />
                  con cada fase?
                </h4>
              </Link>
              {user.displayName ? (
                <Link to={`/cuidador/perfil?apiKey=${user.apiKey}`}>
                  <h4>
                    Hola
                    <br />
                    {user.displayName.split(" ")[0]}
                    <button>Más</button>
                  </h4>
                </Link>
              ) : (
                <Link to="/cuidador/entrar">
                  <h4>
                    Registra tu perfil <br /> / Entrar
                  </h4>
                </Link>
              )}           
              <a href="https://ffluzon.org">
                <img src={logoL} alt="Fundación Luzón" />{" "}
              </a>
            </>
          ) : (
            <>
              <Link to="/">
                <img src={logoCc} alt="Cuidar al cuidador" />
              </Link>
              <Link to="/empresa/inicio">
                <h4>
                  ¿Qué es
                  <br />
                  "Cuidar al cuidador"?
                </h4>
              </Link>
              <Link to="/empresa/ofertas">
                <h4>
                  Tus ofertas <br />/ Candidatos
                </h4>
              </Link>
              <Link to="/empresa/faq">
                <h4>
                  Preguntas <br />
                  frecuentes
                </h4>
              </Link>
              {user.displayName ? (
                <Link to={`/empresa/perfil?apiKey=${user.apiKey}`}>
                  <h4>
                    Hola
                    <br />
                    {user.displayName}
                    <button onMouseEnter={() => setProfileLinks(!profileLinks)}>
                      Más
                    </button>
                  </h4>
                </Link>
              ) : (
                <Link to="/empresa/entrar">
                  <h4>
                    Registrarme
                    <br />
                    / Entrar
                  </h4>
                </Link>
              )}
              <a href="https://ffluzon.org">
                <img src={logoL} alt="Fundación Luzón" />{" "}
              </a>
            </>
          )
        ) : (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            <Link className="public" to="/cuidador/inicio">
              <h4>
                ¿Qué es
                <br />
                "Cuidar al cuidador"?
              </h4>
            </Link>
            <a href="https://ffluzon.org">
              <img src={logoL} alt="Fundación Luzón" />{" "}
            </a>
          </>
        )}
      </nav>
      {profileLinks ? (
        user.role === "company" ? (
          <ul className="ProfileLinks">
            <li>
              <Link to="/empresa/perfil">Mi Perfil</Link>
            </li>
            <li>
              <Link to="/empresa/ofertas">Mis Ofertas</Link>
            </li>
            <li>
              <Link to="/empresa/ofertas?v=candidates">Mis Candidatos</Link>
            </li>
          </ul>
        ) : (
          <ul className="ProfileLinks">
            <li>
              <Link to="/cuidador/perfil">Mi Perfil</Link>
            </li>
            <li>
              <Link to="/cuidador/educacion">Mi Educación</Link>
            </li>
            <li>
              <Link to="/cuidador/experiencia">Mi Experiencia</Link>
            </li>
          </ul>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default MainNavigation;
