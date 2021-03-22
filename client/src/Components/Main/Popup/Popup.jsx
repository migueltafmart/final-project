import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../Context/userContext";
import "./Popup.scss";
const Popup = ({ action, self, setPopup }) => {
  const { user } = useContext(UserContext);
  const deleteSelf = () => {
    axios
      .delete(`http://localhost:5500/api/offer/${self}?apiKey=${user.apiKey}`)
      .then((res) => console.log(res));
  };
  return (
    <article className={action === "edit" ? "Popup edit" : "Popup"}>
      <div className="wrapper">
        {action === "delete" ? (
          <>
            <button className="material-icons" onClick={setPopup}>close</button>
            <h2>Eliminar oferta</h2>
            <p>¿Estas seguro de que deseas eliminar esta oferta?</p>
            <button onClick={deleteSelf}>Eliminar Oferta</button>
          </>
        ) : action === "success" ? (
          <>
            <Link to="/empresa/ofertas">
              <button>x</button>
            </Link>
            <h2>La oferta se ha publicado correctamente</h2>
            <p>
              Podrás consultar tu oferta publicada en el area de tus
              ofertas/candidatos o tu perfil.
            </p>
          </>
        ) : action === "edit" ? (
          <>
            <Link to="/empresa/ofertas">
              <button>x</button>
            </Link>
            <h2>Los cambios se han publicado correctamente</h2>
            <p>
              Podrás consultar tu oferta modificada en el area de tus
              ofertas/candidatos o tu perfil.
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default Popup;
