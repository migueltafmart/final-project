import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import "./OffersMain.scss";
import OfferCard from "../OfferCard/OfferCard";
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
              <h2>Marketing On-line</h2>{" "}
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
            <h2>Otro"</h2>
          ) : category === "sinOrdenador" ? (
            "Sin Ordenador"
          ) : (
            <h2>Categoría</h2>
          )}
        </aside>
        <div>
          {view === "offers" ? (
            offerList.filter((offer) => offer.category === category).length >
            0 ? (
              offerList
                .filter((offer) => offer.category === category)
                .map((offer, i) => <OfferCard key={i} offer={offer} />)
            ) : (
              <section>
                <h4>Ahora mismo no tenemos ofertas en este campo</h4>
              </section>
            )
          ) : category === "sectorDigital" ? (
            <section>
              <h4>Cursos y tutoriales para puestos de Sector Digital</h4>
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
      </div>
    </main>
  );
};

export default OffersMain;
