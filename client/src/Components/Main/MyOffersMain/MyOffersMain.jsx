import React, { useState, useEffect, useContext } from "react";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import OfferCard from "../OfferCard/OfferCard";
import "./MyOffersMain.scss";
import UserContext from "../../../Context/userContext";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import LoginMain from "../LoginMain/LoginMain";
import CandidateCard from "../CandidateCard/CandidateCard";
import DenyForm from "../DenyForm/DenyForm";
const MyOffersMain = () => {
  const { user } = useContext(UserContext);
  const [offers, setOffers] = useState([]);
  const [offerId, setOfferId] = useState("0");
  const [candidates, setCandidates] = useState([]);
  const [view, setView] = useState("offers");
  const v = new URLSearchParams(useLocation().search).get("v");
  const o = new URLSearchParams(useLocation().search).get("o");
  const t = new URLSearchParams(useLocation().search).get("t");
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (v) {
      setView("candidates");
    } else {
      setView("offers");
    }
  }, [v]);
  useEffect(() => {
    if (o) {
      setOfferId(o);
    } 
  }, [o]);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/offers/${user.userId}`)
      .then((res) => setOffers([...res.data.response]))
      .catch((err) => console.log(err));
  }, [user]);
 
  useEffect(() => {
    if (parseInt(offerId) > 0) {
      axios
        .get(
          `http://localhost:5500/api/offer/${offerId}/matches?apiKey=${user.apiKey}`
        )
        .then((res) => setCandidates([...res.data.response]))
        .catch((err) => console.log(err));
    }
     // eslint-disable-next-line
  }, [offerId]);
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
            view === "candidates" ?
            <section>
              <div>
                <label htmlFor="_off">Filtra por oferta</label>
                <select
                  onChange={() =>
                    setOfferId(document.querySelector("select").value)
                  }
                  name="offers"
                  id="_off"
                >
                  <option value="0">Filtra por oferta</option>
                  {offers.map((offer) => (
                    <option value={offer.offerId}>{offer.jobTitle}</option>
                  ))}
                </select>
              </div>
              <div className="candidates">
                {candidates.length > 0 && parseInt(offerId) > 0 ? <>
                <h3>{t}</h3>
                {candidates.map((e, i) =><CandidateCard key={i} deny={()=>setView("deny")} candidate={e}/>)}
                </>:<></>}
              </div>
            </section>
            :<>
            <DenyForm back={()=> setView("offers")}/>
            </>
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
