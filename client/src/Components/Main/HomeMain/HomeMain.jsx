import React, { useContext } from "react";
import "./HomeMain.scss";
import { Link } from "react-router-dom";
import UserContext from "../../../Context/userContext";
import caretaker from "../../../assets/img/caretaker.png";
const HomeMain = ({ role }) => {
  const { user } = useContext(UserContext);
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
                    El programa Cuidar al Cuidador centra sus esfuerzos en
                    buscar soluciones reales a los problemas que afrontan las
                    familias cada día. A través de este plan de integración
                    laboral para cuidadores ayudamos a las familias a obtener
                    los recursos económicos que tanto necesita el enfermo y le
                    ofrecemos al cuidador la posibilidad de seguir con su vida
                    laboral de una manera totalmente adaptada a su situación
                    actual.
                  </p>
                  <p>
                    Creemos en la igual de oportunidades que tú, como cuidador,
                    te mereces. Nos preocupamos por acompañarte en todo momento
                    para que puedas expresar tus inquietudes y conseguir un
                    trabajo que se ajuste a tu situación personal. Buscamos
                    cuidarte, darte el espacio que te mereces y ayudarte en tu
                    incorporación laboral.
                  </p>
                </div>

                <div>
                  <img src={caretaker} alt="" />
                </div>
              </div>
            </article>
          ) : (
            <article>
              <h2>
                Juntos podemos ser parte del cambio y <br />
                ofrecer oportunidades laborales sólidas a los cuidadores
              </h2>

              <div>
                <div>
                  <h2>¿Por qué colaborar?</h2>
                  <p>
                    Gracias a este plan de integración laboral para cuidadores
                    ofrecemos a las empresas la oportunidad de participar de
                    manera activa en la lucha contra el ELA a través de nuestro
                    programa Cuidar al Cuidador. Uno de los principales retos a
                    los que tienen que hacer frente los cuidadores de enfermos
                    de ELA es la pérdida de su trabajo y la reducción de sus
                    ingresos económicos, unos ingresos de los que el enfermo
                    depende directamente para salir adelante.
                  </p>
                  <p>
                    Mediante este programa queremos colaborar con empresas que
                    nos ayuden a solventar estos dos problemas de tal alto
                    calado en las familias. Por un lado, le damos al cuidador un
                    empleo gracias al cual pueda obtener autoestima y sentirse
                    auto realizado. Por otro lado, le damos a las familias la
                    oportunidad de mediante dichos trabajos obtener un ingreso
                    económico que ayudará de manera directa al enfermo.
                  </p>
                </div>

                <div>
                  <h2>¿Cómo funciona?</h2>
                  <p>
                    Para formar parte del plan de integración laboral Cuidar al
                    Cuidador debes de registrarte y rellenar un sencillo
                    formulario. Una vez la Fundación Luzón haya recibido tus
                    datos se pondrán en contacto contigo para cerrar la
                    colaboración y te facilitará una contraseña a través de la
                    cual podrás acceder. Como empresa registrada podrás publicar
                    las ofertas que consideres y ver los candidatos que se han
                    inscrito a las mismas.
                  </p>
                  {!user.userId ? (
                    <Link to="/empresa/registro">
                      <button>Registrarse</button>
                    </Link>
                  ) : (
                    <></>
                  )}
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
                Conseguir crear una asociación profesional que fomente la
                empleabilidad de cuidadores.
              </p>
            </div>
            <div>
              <span>2</span>
              <p>
                Formar parte activa de un programa novedoso que ayuda tanto a
                cuidadores como a empresas.
              </p>
            </div>
            <div>
              <span>3</span>
              <p>
                Encontrar profesionales capacitados para desarrollar
                determinadas funciones en tu empresa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeMain;
