import React from "react";
import { Link } from "react-router-dom";
import "./LandingMain.scss"
const LandingMain = () => {
  return (
    <main className="Landing" >
      <div className="wrapper">
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <h2>
          Nace el proyecto que ayudará al cuidador <br/>a seguir manteniendo su
          independencia
        </h2>
        <h3>
          Con la participación de empresas que entienden la colaboración como
          una manera de apoyar a los cuidadores
        </h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <article>
            <div>
              <span>C</span> <p>Soy cuidador</p>
            </div>
            <div>
              <h2>Ut enim ad minim veniam</h2>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/cuidador/inicio">
                <button>Soy cuidador</button>
              </Link>
            </div>
          </article>
          <article>
            <div>
              <span>E</span> <p>Soy una empresa</p>
            </div>
            <div>
              <h2>Ut enim ad minim veniam</h2>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/cuidador/inicio">
                <button>Soy una empresa</button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default LandingMain;
