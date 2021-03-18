import React, { useState, useEffect, useContext } from "react";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import OfferCard from "../OfferCard/OfferCard";
import "./MyOffersMain.scss";
import UserContext from "../../../Context/userContext";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import LoginMain from "../LoginMain/LoginMain";
const MyOffersMain = () => {
  const { user } = useContext(UserContext);
  const [offers, setOffers] = useState([]);
  const [view, setView] = useState("offers");
  const v = new URLSearchParams(useLocation().search).get("v");
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (v) {
      setView("candidates");
    } else {
      setView("offers");
    }
  }, [v]);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/offers/${user.userId}`)
      .then((res) => setOffers([...res.data.response]));
  }, [user]);
  return (
    <>
      <main className="MyOffers">
        <div className="wrapper">
          <h2>Bienvenido</h2>
          <h4>
            Gracias por participar de manera activa con la Fundación Luzón en su
            <br />
            plan de integración laboral "Cuidar al cuidador"
          </h4>
          <SecondaryNavigation
            view={view}
            first={{
              onClick: () => setView("offers"),
              name: "Mis ofertas",
            }}
            second={{
              onClick: () => setView("candidates"),
              name: "Candidatos",
            }}
          />

          {view === "offers" ? (
            <>
              {!user.userId ? (
                <div className="wrapper">
                  <p>
                    Recuerda que para poder publicar una oferta, primero debes
                    estar registrado
                  </p>
                  <Link to="/cuidador/registro">
                    <button onClick={() => setLogin(!login)}>
                      Registrarme
                    </button>
                  </Link>
                </div>
              ) : (
                <></>
              )}
              <section>
                <article>
                  <h3>Nueva Oferta</h3>
                  <p>
                    ¿Tienes una nueva oportunidad laboral? ¿Buscas a un cuidador
                    que pueda cubrir un puesto en tu empresa? Publica la oferta
                    para que puedan verla los cuidadores
                  </p>
                  <Link to="/empresa/publicar">
                    <button>Añadir oferta</button>
                  </Link>
                </article>
                <article>
                  <h3>Ofertas Publicadas</h3>
                </article>
                <div className="offers">
                  {offers.length > 0 ? (
                    offers.map((e, i) => (
                      <OfferCard role="company" key={i} offer={e} />
                    ))
                  ) : (
                    <article>
                      <h2>
                        ¿ A qué esperas?
                        <br />
                        Publica tu primera oferta
                      </h2>
                    </article>
                  )}
                </div>
              </section>
            </>
          ) : (
            <section></section>
          )}
          {login ? (
            <LoginMain
              modal
              setLogin={() => setLogin(!login)}
              role="caretaker"
            />
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default MyOffersMain;
