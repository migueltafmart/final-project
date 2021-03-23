import React, { useState } from "react";
import "./FAQCard.scss";
import faqCaretaker from "../../../../assets/img/caretakerFAQ.png"
const FAQCard = ({ q, a, src }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <article className={open ? "FAQOpen":"FAQClosed"}>
      <div className={src? "img":""}>
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
      
      </div> 
      {open && src ? <img className="faq" src={faqCaretaker} alt="Cuidador"/>:<></>}
    </article>
        
    </>
  );

};

export default FAQCard;
