import React, {useEffect, useState } from "react";
import axios from "axios";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import OfferPreview from "./OfferPreview/OfferPreview";
import "./OffersMain.scss"
const OffersMain = () => {
  const [offerList, setOfferList] = useState([]);
  const [view, setView] = useState("offers");
  const [category, setCategory] = useState("sectorDigital");
  useEffect(() => {
    axios
      .get("https://cuidaralcuidador.herokuapp.com/api/offers")
      .then((res) => setOfferList([...res.data.response]));
  }, []);
  return (
    <main className="Offers">
      <SecondaryNavigation
        view={view}
        first={{ onClick: () => setView("offers"), name: "Ofertas de trabajo" }}
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
      <div className="wrapper">
      {view === "offers" ? (
          offerList.filter(offer => offer.category === category).length > 0 ? (
          offerList.filter(offer => offer.category === category).map((offer, i) =><OfferPreview key={i} offer={offer}/>)
          ) : (
            <section><h4>Ahora mismo no tenemos ofertas en este campo</h4></section>
          )
        ) : (
          category === "sectorDigital" ? (
            <section><h4>Cursos y tutoriales para puestos de Sector Digital</h4></section>
          ) : category === "marketingOnline" ? (
            <section><h4>Cursos y tutoriales para puestos de Marketing On-line</h4></section>
          ) : category === "gestionDatos" ? (
            <section><h4>Cursos y tutoriales para puestos de Gestión de datos</h4></section>
          ) : category === "creativos" ? (
            <section><h4>Cursos y tutoriales para puestos Creativos</h4></section>
          ) : category === "otros" ? (
            <section><h4>Otros cursos y tutoriales</h4></section>
          ) : category === "sinOrdenador" ? (
            <section><h4>Cursos y tutoriales para puestos sin Ordenador</h4></section>
          ) : (
            <section><h4>Cursos y tutoriales</h4></section>
          )
        )}
      </div>
    </main>
  );
};

export default OffersMain;
