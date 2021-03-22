import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import logoCc from "../../../img/logo-cc.png";
import logoL from "../../../img/logo-l.png";
import UserContext from "../../../Context/userContext";
import LoginMain from "../../Main/LoginMain/LoginMain";
const MainNavigation = ({ role, active }) => {
  const { user } = useContext(UserContext);
  const [profileLinks, setProfileLinks] = useState(false);
  const [login, setLogin] = useState(false)
  return (
    <>
      <nav className="MainNavigation">
        {role ? (
          role === "caretaker" ? (
            <>
              <Link to="/">
                <img src={logoCc} alt="Cuidar al cuidador" />
              </Link>
              <Link
                className={active === "start" ? "active" : ""}
                to="/cuidador/inicio"
              >
                <h4>
                  ¿Qué es
                  <br />
                  "Cuidar al cuidador"?
                </h4>
              </Link>
              <Link
                className={active === "offers" ? "active" : ""}
                to="/cuidador/ofertas"
              >
                <h4>
                  Consulta las ofertas
                  <br /> de trabajo activas
                </h4>
              </Link>
              <Link className={active === "faq" ? "active" : ""} to="/cuidador/preguntas-frecuentes">
                <h4>
                  ¿Cómo compaginarlo
                  <br />
                  con cada fase?
                </h4>
              </Link>
              {user.displayName ? (
                <span
                  className={active === "login" ? "active" : ""}
                  onClick={() => setProfileLinks(true)}
                >
                  <h4>
                    Hola
                    <br />
                    {user.displayName.split(" ")[0]}
                  </h4>
                </span>
              ) : (
                <Link
                  className={active === "login" ? "active" : ""}
                  to="/cuidador/entrar"
                >
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
              <Link
                className={active === "start" ? "active" : ""}
                to="/empresa/inicio"
              >
                <h4>
                  ¿Qué es
                  <br />
                  "Cuidar al cuidador"?
                </h4>
              </Link>
              {user.userId ? (
                <Link
                  className={active === "offers" ? "active" : ""}
                  to="/empresa/ofertas"
                >
                  <h4>
                    Tus ofertas <br />/ Candidatos
                  </h4>
                </Link>
              ) : (
                <button onClick={()=>setLogin(true)}>
                  <h4>
                    Tus ofertas <br />/ Candidatos
                  </h4>
                </button>

              )}

              <Link
                className={active === "faq" ? "active" : ""}
                to="/empresa/preguntas-frecuentes"
              >
                <h4>
                  FAQ <br />
                  Cuidar al cuidador
                </h4>
              </Link>
              {user.displayName ? (
                <span
                  className={active === "login" ? "active" : ""}
                  onClick={() => setProfileLinks(true)}
                >
                  <h4>
                    Hola
                    <br />
                    {user.displayName}
                  </h4>
                </span>
              ) : (
                <Link
                  className={active === "login" ? "active" : ""}
                  to="/empresa/entrar"
                >
                  <h4>
                    Registrarme
                    <br />/ Entrar
                  </h4>
                </Link>
              )}
              <a href="https://ffluzon.org">
                <img src={logoL} alt="Fundación Luzón" />{" "}
              </a>
              {login ? <article className="Popup"><LoginMain modal setLogin={()=> setLogin(false)}/></article>:<></> }
            </>
          )
        ) : (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            {user.displayName ? (
              <span
                className={active === "login" ? "active" : ""}
                onClick={() => setProfileLinks(true)}
              >
                <h4>
                  Hola
                  <br />
                  {user.displayName}
                </h4>
              </span>
            ) : (
              <Link
                className={active === "login" ? "active public" : "public"}
                to={`/entrar`}
              >
                <h4>
                  Registrarme
                  <br />/ Entrar
                </h4>
              </Link>
            )}
            <a href="https://ffluzon.org">
              <img src={logoL} alt="Fundación Luzón" />{" "}
            </a>
          </>
        )}
      </nav>
      {profileLinks ? (
        user.role === "company" ? (
          <ul
            onMouseLeave={() => setProfileLinks(false)}
            className="ProfileLinks"
          >
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
          <ul
            onMouseLeave={() => setProfileLinks(false)}
            className="ProfileLinks"
          >
            <li>
              <Link to="/cuidador/perfil?v=data">Mi perfil</Link>
            </li>
            <li>
              <Link to="/cuidador/perfil?v=experience">Mi experiencia</Link>
            </li>
            <li>
              <Link to="/cuidador/perfil?v=disp">Mis preferencias</Link>
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
