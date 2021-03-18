import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import UserContext from "../../../Context/userContext";
import "./MatchMain.scss";
const MatchMain = () => {
  const { offerId } = useParams();
  const [offer, setOffer] = useState({});
  const { user } = useContext(UserContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/offer/${offerId}`)
      .then((res) => setOffer(res.data.response))
      .catch((err) => console.log(err));
  }, [offerId]);
  useEffect(() => {
    axios.post(
      `http://localhost:5500/api/match/${offerId}/${user.userId}?apiKey=${user.apiKey}`
    );
  }, []);
  return (
    <main className="Match">
      <div className="wrapper">
        <h3>
          ¡Tu solicitud para <br />
          <span> {offer.jobTitle} </span>
          <br /> ha sido enviada correctamente!
        </h3>
        <span className="Border"></span>
        <p>
          En breve recibirás un mensaje informándote<br/>si tu solicitud ha sido
          aceptada.
        </p>
        <p>En caso contrario, se te informará porque no ha podido ser.</p>
      </div>
    </main>
  );
};

export default MatchMain;
