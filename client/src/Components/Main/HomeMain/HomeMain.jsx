import React, { useContext } from "react";
import "./HomeMain.scss";
import { Link } from "react-router-dom";
import UserContext from "../../../Context/userContext";
const HomeMain = ({ role }) => {
  const {user} = useContext(UserContext)
  return (
    <main className="Home">
      <div className="wrapper">
        {role ? (
          role === "caretaker" ? (
            <article>
              <h2>
                Nos importa tanto el bienestar del cuidador
                <br /> como el bienestar del enfermo
              </h2>

              <div>
                <div>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum."
                  </p>
                </div>

                <div>
                  <img
                    src="https://journeycare.org/wp-content/uploads/2020/02/how-illness-affects-family-members333.jpg"
                    alt=""
                  />
                </div>
              </div>
            </article>
          ) : (
            <article>
              <h2>
                Nos importa tanto el bienestar del cuidador
                <br /> como el bienestar del enfermo
              </h2>

              <div>
                <div>
                  <h2>¿Por qué colaborar?</h2>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum."
                  </p>
                </div>

                <div>
                  <h2>¿Cómo funciona?</h2>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum."
                  </p>
                  {!user.userId ?<Link to="/empresa/registro">
                    <button>Registrarse</button>
                  </Link> : <></>}
                  
                  
                </div>
              </div>
            </article>
          )
        ) : (
          <></>
        )}

        <section className="objectives">
          <h2>Objetivos</h2>
          <div>
            <div>
              <span>1</span>
              <p>
                Conseguir que el cuidador de enfermos de ELA no abandone toda su
                actividad laboral.
              </p>
            </div>
            <div>
              <span>2</span>
              <p>
                Conseguir un ingreso económico adaptado a las circunstancias que
                ayudará a aliviar los gastos.
              </p>
            </div>
            <div>
              <span>3</span>
              <p>
                Conseguir que el cuidador pueda realizar otras actividades que
                le aporten satisfacción
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeMain;
