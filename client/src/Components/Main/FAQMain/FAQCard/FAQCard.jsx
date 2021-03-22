import React, { useState } from "react";
import "./FAQCard.scss"
const FAQCard = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <article className={open ? "FAQOpen":"FAQClosed"}>
      <h3 onClick={() => setOpen(!open)}>{q}</h3>
      <div className="border"></div>
      {open ? (
        a.split("|").length > 0 ? (
          a.split("|").map((e, i) => <p key={i}>{e}</p>)
        ) : (
          <p>{a}</p>
        )
      ) : (
        <></>
      )}
    </article>
    
    </>
  );

};

export default FAQCard;
