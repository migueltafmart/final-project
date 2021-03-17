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
    <article className={action ==="edit" ? "Popup edit":"Popup"}>
      <div className="wrapper">
        {action === "delete" ? (
          <>
            <button onClick={setPopup}>X</button>
            <h2>¿De verdad quieres borrar esta oferta?</h2>
            <button onClick={deleteSelf}>Eliminar Oferta</button>
          </>
        ) : action === "success" ? (
          <>
            <Link to="/empresa/ofertas">
              <button>X</button>
            </Link>
            <h2>¡Tu oferta ha sido publicada!</h2>
            <Link to="/empresa/ofertas">
              <button>Volver a mis ofertas</button>
            </Link>
          </>
        ) : action === "edit" ? (
          <>
            <Link to="/empresa/ofertas">
              <button>X</button>
            </Link>
            <h2>¡Tu oferta ha sido editada!</h2>
            <Link to="/empresa/ofertas">
              <button>Volver a mis ofertas</button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default Popup;
