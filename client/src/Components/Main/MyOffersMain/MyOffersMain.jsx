import React, { useContext, useEffect, useState } from "react";
import "./MyOffersMain.scss";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import axios from "axios";
import UserContext from "../../../Context/userContext"
import OfferCard from "./OfferCard/OfferCard";
const MyOffersMain = () => {
  const {user} = useContext(UserContext);
  const [offers, setOffers] = useState([])
  const [view, setView] = useState("offers");
  useEffect(()=>{
    axios.get(`https://cuidaralcuidador.herokuapp.com/api/offers/2`)
    .then(res => setOffers([...res.data.response]))
  }, [user])
  return (
    <main className="MyOffers">
      <div className="wrapper">
        <h2>Bienvenido</h2>
        <SecondaryNavigation
          view={view}
          first={{ onClick: () => setView("offers"), name: "Mis ofertas" }}
          second={{
            onClick: () => setView("candidates"),
            name: "Candidatos",
          }}
        />
        {view === "offers" ?
        <section>
          <article>
            <h3>Nueva oferta</h3>
            <p>
              ¿Tienes una nueva oportunidad laboral? ¿Buscas a un cuidador que
              pueda cubrir un puesto en tu empresa? Publica la oferta para que
              puedan verla los cuidadores
            </p>
            <button>Añadir oferta</button>
          </article>
          <article>
            <h3>Ofertas publicadas</h3>
            {offers.length > 0 ? offers.map((e,i)=> <OfferCard key={i} offer={e}/> ): <></>}
          </article>
        </section>
        :
        <section>
          </section>}
      </div>
    </main>
  );
};

export default MyOffersMain;
