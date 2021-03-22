import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import "./OffersMain.scss";
import OfferCard from "../OfferCard/OfferCard";
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";
import LoginMain from "../LoginMain/LoginMain";
import UserContext from "../../../Context/userContext";
import TutorialCard from "./TutorialCard/TutorialCard";
import officeVideo from "../../../video/office.mp4";
import googleVideo from "../../../video/google.mp4";
const OffersMain = () => {
  const { user } = useContext(UserContext);
  const [offerList, setOfferList] = useState([]);
  const [view, setView] = useState("offers");
  const [category, setCategory] = useState("sectorDigital");
  const [popUp, setPopUp] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    axios
      .get("https://cuidaralcuidador.herokuapp.com/api/offers")
      .then((res) => setOfferList([...res.data.response]));
  }, []);
  return (
    <>
      <main className="Offers">
        <SecondaryNavigation
          view={view}
          first={{
            onClick: () => setView("offers"),
            name: "Ofertas de trabajo",
          }}
          second={{
            onClick: () => setView("courses"),
            name: "Cursos y Tutoriales",
          }}
        />
        <CategoryNavigation
          category={category}
          sectorDigital={() => setCategory("sectorDigital")}
          marketingOnline={() => setCategory("marketingOnline")}
          gestionDatos={() => setCategory("gestionDatos")}
          creativos={() => setCategory("creativos")}
          otros={() => setCategory("otros")}
          sinOrdenador={() => setCategory("sinOrdenador")}
        />
        {!user.userId ? (
          <div className="wrapper">
            <p>
              Recuerda que para poder solicitar un puesto de trabajo, primero
              debes estar registrado
            </p>
            <Link to="/cuidador/registro">
              <button className="material-icons" onClick={() => setLogin(!login)}>east</button>
            </Link>
          </div>
        ) : (
          <></>
        )}

        <div className="wrapper">
          {view === "offers" ? (
            <aside>
              {category === "sectorDigital" ? (
                <>
                  <h2>Sector Digital</h2>
                  <img
                    src="https://www.sophiadigital.es/wp-content/uploads/2020/03/sector-digital-respalda-teletrabajo-para-frenar-covid-19.jpg"
                    alt="sector digital"
                  />
                </>
              ) : category === "marketingOnline" ? (
                <>
                  <h2>Marketing On-line</h2>
                  <img
                    src="https://blog.hubspot.es/hubfs/estrategia%20marketing%20digital-1.jpg"
                    alt="marketing online"
                  />
                </>
              ) : category === "gestionDatos" ? (
                <>
                  <h2>Gestión de Datos</h2>
                  <img
                    src="https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/09/bases-de-datos-de-texto-completo.jpg"
                    alt="gestión de datos"
                  />
                </>
              ) : category === "creativos" ? (
                <>
                  <h2>Creativos</h2>
                  <img
                    src="https://www-randstad-es.s3.amazonaws.com/wp-content/uploads/2017/10/ser-creativo-encontrar-profesionales-creativos.jpg"
                    alt="creativos"
                  />
                </>
              ) : category === "otros" ? (
                <h2>Otros</h2>
              ) : category === "sinOrdenador" ? (
                <h2>Sin Ordenador</h2>
              ) : (
                <h2>Categoría</h2>
              )}
            </aside>
          ) : (
            <></>
          )}

          <div className="Tutorials">
            {view === "offers" ? (
              offerList.filter((offer) => offer.category === category).length >
              0 ? (
                offerList
                  .filter((offer) => offer.category === category)
                  .map((offer, i) => (
                    <OfferCard
                      key={i}
                      offer={offer}
                      login={login}
                      setLogin={() => setLogin(!login)}
                    />
                  ))
              ) : (
                <section>
                  <h4>Ahora mismo no tenemos ofertas en este campo</h4>
                </section>
              )
            ) : category === "sectorDigital" ? (
              <section>
                <TutorialCard tutorial={{src:officeVideo ,title:"Microsoft Office", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut--aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation."}}/>
                <TutorialCard tutorial={{src:googleVideo ,title:"Motores de búsqueda para SEO", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut--aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation."}}/>
               
              </section>
            ) : category === "marketingOnline" ? (
              <section>
                <h4>Cursos y tutoriales para puestos de Marketing On-line</h4>
              </section>
            ) : category === "gestionDatos" ? (
              <section>
                <h4>Cursos y tutoriales para puestos de Gestión de datos</h4>
              </section>
            ) : category === "creativos" ? (
              <section>
                <h4>Cursos y tutoriales para puestos Creativos</h4>
              </section>
            ) : category === "otros" ? (
              <section>
                <h4>Otros cursos y tutoriales</h4>
              </section>
            ) : category === "sinOrdenador" ? (
              <section>
                <h4>Cursos y tutoriales para puestos sin Ordenador</h4>
              </section>
            ) : (
              <section>
                <h4>Cursos y tutoriales</h4>
              </section>
            )}
          </div>
          {login ? (
            <>
              <article className="Popup">
                <LoginMain
                  modal
                  setLogin={() => setLogin(!login)}
                  role="caretaker"
                />
              </article>
            </>
          ) : (
            <></>
          )}
        </div>
      </main>

      {popUp ? (
        <Popup action="delete" setPopUp={() => setPopUp(false)} />
      ) : (
        <></>
      )}
    </>
  );
};

export default OffersMain;
