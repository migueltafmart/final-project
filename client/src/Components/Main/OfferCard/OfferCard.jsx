import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../Context/userContext";
import Popup from "../Popup/Popup";
import "./OfferCard.scss";

const OfferCard = ({ offer, role, login, setLogin }) => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <div className="OfferCard" key={offer.offerId}>
        {role === "company" ? (
          <>
            <div>
              <Link to={`/empresa/ofertas?v=candidates&o=${offer.offerId}&t=${offer.jobTitle}`}>
                <h4>{offer.jobTitle}</h4>
              </Link>
            </div>
            <div>
              {offer.jobDesc.split("|").map((e, i) => (
                <>
                  {i > 0 ? (
                    i === 1 ? (
                      <h5>Funciones</h5>
                    ) : (
                      <h5>Sitio Web</h5>
                    )
                  ) : (
                    <></>
                  )}
                  <p key={i}>{e}</p>
                </>
              ))}
              <h5>Horario</h5>
              <p>
                {parseInt(offer.hoursADay) === 1
                  ? offer.hoursADay + " día a la semana."
                  : offer.hoursADay + " dias a la semana."}
              </p>
              <div>
                <button onClick={() => setPopUp(true)}>Eliminar Oferta</button>
                <Link to={`/empresa/editar/${offer.offerId}`}>
                  <button> Editar oferta</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h4>{offer.jobTitle}</h4>
            </div>
            <div>
              <p>{offer.jobDesc.split("|")[0]}</p>

              {open ? (
                <>
                  <h5>Funciones</h5>
                  <p>{offer.jobDesc.split("|")[1]}</p>
                  <h5>Horario</h5>
                  <p>
                    {parseInt(offer.hoursADay) === 1
                      ? offer.hoursADay + " día a la semana."
                      : offer.hoursADay + " dias a la semana."}
                  </p>
                  <div className="userDock">
                    {user.userId ? (
                      <Link to={`/cuidador/match/${offer.offerId}`}>
                        <button>Solicitar trabajo</button>
                      </Link>
                    ) : (
                      <button onClick={setLogin}>Solicitar trabajo</button>
                    )}

                    <a href={offer.jobDesc.split("|")[2]}>
                      <button id="web">Sitio Web</button>
                    </a>
                  </div>
                </>
              ) : (
                <button onClick={() => setOpen(!open)}>Me interesa</button>
              )}
            </div>
          </>
        )}
      </div>
      {popUp ? (
        <Popup
          action="delete"
          setPopup={() => setPopUp(false)}
          self={offer.offerId}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default OfferCard;
