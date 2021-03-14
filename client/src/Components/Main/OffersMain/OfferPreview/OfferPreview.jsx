import React from "react";
import "./OfferPreview.scss";
const OfferPreview = ({ offer }) => {
  return (
    <article className="Offer">
      <h3>{offer.jobTitle}</h3>
      <div>
        <p>{offer.jobDesc}</p>
        <button>Me interesa</button>
      </div>
    </article>
  );
};

export default OfferPreview;
