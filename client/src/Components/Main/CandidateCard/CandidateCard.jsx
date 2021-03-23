import React from "react";
import "./CandidateCard.scss"
const CandidateCard = ({candidate, deny}) => {
  return <article className="Candidate">
      <h2>{candidate.displayName}</h2>
      <div>
        <p>{candidate.tlf}</p>
        <p>{candidate.email}</p>
        <p>{candidate.disp} días a la semana</p>
      </div>
      <p>
        {candidate.expDesc}
      </p>
      <div>
        <button onClick={deny}>Rechazar</button>
        <button>Contactar</button>
      </div>

  </article>;
};

export default CandidateCard;
