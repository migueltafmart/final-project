import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../Context/userContext";
import Popup from "../Popup/Popup";
import "./NewOfferMain.scss";

const NewOfferMain = ({ edit }) => {
  const { user } = useContext(UserContext);
  let { offerId } = useParams();
  const [offer, setOffer] = useState({});
  const [popUp, setPopUp] = useState(false)
  const postOffer = (e) => {
    e.preventDefault();
    let jobTitle = document.getElementById("_jt");
    let jobDesc = document.getElementById("_jd");
    let jobFunc = document.getElementById("_jf");
    let jobUrl = document.getElementById("_jUrl");
    let category = document.getElementById("_c");
    let hoursADay = document.getElementById("_hd");
    if (
      jobTitle.value.length > 0 &&
      jobDesc.value.length > 0 &&
      category.value.length > 0 &&
      jobUrl.value.length > 0
    ) {
      axios.post(
        `http://localhost:5500/api/offer/${user.userId}?apiKey=${user.apiKey}`,
        {
          jobTitle: jobTitle.value,
          jobDesc: jobDesc.value + "|" + jobFunc.value + "|" + jobUrl.value,
          category: category.value,
          hoursADay: hoursADay.value,
          area: "madrid",
        }
      );
    }
  };
  const putOffer = (e) => {
    e.preventDefault();
    let jobTitle = document.getElementById("_jt");
    let jobDesc = document.getElementById("_jd");
    let jobFunc = document.getElementById("_jf");
    let jobUrl = document.getElementById("_jUrl");
    let category = document.getElementById("_c");
    let hoursADay = document.getElementById("_hd");
    console.log(jobDesc.value);
    if (
      jobTitle.value.length > 0 &&
      jobDesc.value.length > 0 &&
      category.value.length > 0 &&
      jobUrl.value.length > 0
    ) {
      axios
        .put(
          `http://localhost:5500/api/offer/${offerId}?apiKey=${user.apiKey}`,
          {
            jobTitle: jobTitle.value,
            jobDesc: jobDesc.value + "|" + jobFunc.value + "|" + jobUrl.value,
            category: category.value,
            hoursADay: hoursADay.value,
            area: "madrid",
          }
        )
        .then((res) => setPopUp(true))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    if (edit) {
      axios
        .get(`http://localhost:5500/api/offer/${offerId}`)
        .then((res) => setOffer(res.data.response))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <main className="OfferForm">
        <div className="wrapper">
          {edit ? <h2>Editar Oferta </h2> : <h2>Nueva Oferta</h2>}
          {edit ? (
            <></>
          ) : (
            <h4>
              Cada vez que publicas una nueva oferta estas cuidando <br />
              al cuidador dándole la oportunidad de trabajar
            </h4>
          )}
          <form onSubmit={edit ? putOffer : postOffer}>
            <div>
              <label htmlFor="_jt">Título de la oferta</label>
              <input
                tabIndex="1"
                autoFocus
                defaultValue={offer.jobTitle ? offer.jobTitle : ""}
                type="text"
                name="jobTitle"
                id="_jt"
              />
            </div>
            <div>
              <label htmlFor="_c">Categoría</label>
              <input
                
                defaultValue={offer.category ? offer.category : ""}
                type="text"
                name="category"
                id="_c"
              />
            </div>
            <div>
              <label htmlFor="_hd">Horario</label>
              <input
                
                defaultValue={offer.hoursADay ? offer.hoursADay : ""}
                name="hoursADay"
                id="_hd"
              />
            </div>
            <div>
              <label htmlFor="_jd">Descripción de la oferta</label>
              <textarea
                
                defaultValue={offer.jobDesc ? offer.jobDesc.split("|")[0] : ""}
                name="jobDesc"
                id="_jd"
              />
            </div>
            <div>
              <label htmlFor="_jf">Funciones del puesto</label>
              <textarea
                defaultValue={offer.jobDesc ? offer.jobDesc.split("|")[1] : ""}
                name="jobFunc"
                id="_jf"
              />
            </div>
            <div>
              <label htmlFor="_jUrl">Sitio web de la empresa</label>
              <input
                defaultValue={offer.jobDesc ? offer.jobDesc.split("|")[2] : ""}
                type="text"
                name="jobUrl"
                id="_jUrl"
              />
            </div>
            <input
              type="submit"
              value={edit ? "Editar Oferta" : "Publicar Oferta"}
            />
          </form>
          {popUp ? <Popup action={edit ? "edit":"success"} setPopup={()=>setPopUp(false)}/>:<></>}
        </div>
      </main>
      
    </>
  );
};

export default NewOfferMain;
