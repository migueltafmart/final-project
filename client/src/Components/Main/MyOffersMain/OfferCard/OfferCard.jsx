import React from "react";
import "./OfferCard.scss";
const OfferCard = ({ offer }) => {
  return (
    <div className="OfferCard">
      <div>
        <h4>{offer.jobTitle}</h4>
      </div>
      <div>
        <p>{offer.jobDesc}</p>
        <p>{offer.hoursADay} horas al día</p>
        <div>
          <button>Eliminar Oferta</button>
          <button>Editar oferta</button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
