import axios from "axios";
import React, { useContext } from "react";
import UserContext from "../../../Context/userContext";
import "./NewOfferMain.scss";
const NewOfferMain = () => {
  const  user  = {userId: 2, apiKey:"a451c81d-3a8c-4181-bbed-2456c497ad9f"}; 
  const postOffer = (e) => {
    e.preventDefault();
    let jobTitle = document.getElementById("_jt");
    let jobDesc = document.getElementById("_jd");
    let jobFunc = document.getElementById("_jf");
    let category = document.getElementById("_c");
    let hoursADay = document.getElementById("_hd");
    if (
      jobTitle.value.length > 0 &&
      jobDesc.value.length > 0 &&
      category.value.length > 0
    ) {
      axios.post(`http://localhost:5500/api/offer/${user.userId}?apiKey=${user.apiKey}`, {
        "jobTitle": jobTitle.value,
        "jobDesc": jobDesc.value + "|" + jobFunc.value,
        "category": category.value,
        "hoursADay": hoursADay.value,
        "area": "madrid"
      });
    }
  };
  return (
    <main className="OfferForm">
      <div className="wrapper">
        <h2>Nueva Oferta</h2>
        <h4>
          Cada vez que publicas una nueva oferta estas cuidando <br />
          al cuidador dándole la oportunidad de trabajar
        </h4>
        <form onSubmit={postOffer}>
          <div>
            <label htmlFor="_jt">Título de la oferta</label>
            <input autoFocus type="text" name="jobTitle" id="_jt" />
          </div>
          <div>
            <label htmlFor="_c">Categoría</label>
            <input autoFocus type="text" name="category" id="_c" />
          </div>
          <div>
            <label htmlFor="_hd">Horario</label>
            <input autoFocus name="hoursADay" id="_hd" />
          </div>
          <div>
            <label htmlFor="_jd">Descripción de la oferta</label>
            <textarea autoFocus name="jobDesc" id="_jd" />
          </div>
          <div>
            <label htmlFor="_jf">Funciones del puesto</label>
            <textarea autoFocus name="jobFunc" id="_jf" />
          </div>
          <input type="submit" value="Publicar Oferta" />
        </form>
      </div>
    </main>
  );
};

export default NewOfferMain;
