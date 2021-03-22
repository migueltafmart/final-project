import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import logoCc from "../../../img/logo-cc.png";
import logoL from "../../../img/logo-l.png";
import UserContext from "../../../Context/userContext";
<<<<<<< HEAD
const MainNavigation = ({ role, active }) => {
  console.log(active);
  const { user } = useContext(UserContext);
  const [profileLinks, setProfileLinks] = useState(false);
=======
import LoginMain from "../../Main/LoginMain/LoginMain";
const MainNavigation = ({ role, active }) => {
  const { user } = useContext(UserContext);
  const [profileLinks, setProfileLinks] = useState(false);
  const [login, setLogin] = useState(false)
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
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
<<<<<<< HEAD
              <Link className={active === "learn" ? "active" : ""} to="/">
=======
              <Link className={active === "faq" ? "active" : ""} to="/cuidador/preguntas-frecuentes">
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
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
<<<<<<< HEAD
                <></>
=======
                <button onClick={()=>setLogin(true)}>
                  <h4>
                    Tus ofertas <br />/ Candidatos
                  </h4>
                </button>

>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
              )}

              <Link
                className={active === "faq" ? "active" : ""}
<<<<<<< HEAD
                to="/empresa/faq"
              >
                <h4>
                  Preguntas <br />
                  frecuentes
=======
                to="/empresa/preguntas-frecuentes"
              >
                <h4>
                  FAQ <br />
                  Cuidar al cuidador
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
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
<<<<<<< HEAD
=======
              {login ? <article className="Popup"><LoginMain modal setLogin={()=> setLogin(false)}/></article>:<></> }
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
            </>
          )
        ) : (
          <>
            <Link to="/">
              <img src={logoCc} alt="Cuidar al cuidador" />
            </Link>
            {user.displayName ? (
              <span
<<<<<<< HEAD
                className={active === "login" ? "active public" : "public"}
=======
                className={active === "login" ? "active" : ""}
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
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
<<<<<<< HEAD
                to={`cuidador/entrar`}
=======
                to={`/entrar`}
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
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
<<<<<<< HEAD
              <Link to="/cuidador/perfil">Mi Perfil</Link>
            </li>
            <li>
              <Link to="/cuidador/educacion">Mi Educación</Link>
            </li>
            <li>
              <Link to="/cuidador/experiencia">Mi Experiencia</Link>
=======
              <Link to="/cuidador/perfil?v=data">Mi perfil</Link>
            </li>
            <li>
              <Link to="/cuidador/perfil?v=experience">Mi experiencia</Link>
            </li>
            <li>
              <Link to="/cuidador/perfil?v=disp">Mis preferencias</Link>
>>>>>>> ce2601933d8a97dcc698c816b8ed707b064fbd3d
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
