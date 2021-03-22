import React from "react";
import { Link } from "react-router-dom";
import "./LandingMain.scss";
const LandingMain = () => {
  return (
    <main className="Landing">
      <div className="wrapper">
        <h2>
          Nace el proyecto que ayudará al cuidador <br />a seguir manteniendo su
          independencia
        </h2>
        <h3>
          Con la participación de empresas que entienden la colaboración como
          una manera de apoyar a los cuidadores
        </h3>
        <p>
          Impulsamos la integración laboral de los cuidadores de enfermos de
          ELA. Gracias al compromiso de la Fundación Luzón y las empresas
          colaboradoras ayudamos a los cuidadores a poder recuperar su vida
          laboral adaptándonos a sus necesidades y sus circunstancias personales
          en todo momento.
        </p>
        <p>
          Mediante este plan de integración laboral pretendemos dotar de
          independencia económica a las familias para poder ayudar de manera
          directa al enfermo. Además, este plan va mas allá de lo meramente
          económico, gracias a los trabajos que puede realizar el cuidador le
          damos a este la posibilidad de que sus necesidades e inquietudes sean
          también escuchadas. Cuidamos al cuidador para que no pierda su
          conexión con el mundo laboral obteniendo además la motivación
          emocional que tanto necesitan.
        </p>
        <div>
          <article>
            <div>
              <span>C</span> <p>Soy cuidador</p>
            </div>
            <div>
              <h2>Para los cuidadores</h2>
              <p>
                Ofrecemos oportunidades laborales a los cuidadores pensando
                siempre en sus necesidades y sus circunstancias. Para ello,
                hemos creado una serie de colaboraciones con distintas empresas
                que ponen a disposición de los cuidadores distintos trabajos
                adaptados a su situación.
              </p>
              <Link to="/cuidador/inicio">
                <button>Ir a mi zona</button>
              </Link>
            </div>
          </article>
          <article>
            <div>
              <span>E</span> <p>Soy una empresa</p>
            </div>
            <div>
              <h2>Para las empresas</h2>
              <p>
                Colaboramos con distintas empresas que quieran ayudarnos a darle
                oportunidades laborales a los cuidadores. Disponemos de
                herramientas y recursos para formar a los cuidadores y que
                puedan desempeñar sus funciones laborales. Además, conocemos su
                bagaje profesional para saber que pueden aportar a tu empresa.
              </p>
              <Link to="/empresa/inicio">
                <button>Ir a mi zona</button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default LandingMain;
