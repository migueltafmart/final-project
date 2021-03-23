import React, { useContext } from "react";
import UserContext from "../../../Context/userContext";
import "./DenyForm.scss";

const DenyForm = ({back}) => {
  const{user} = useContext(UserContext);
  return (
    <section className="Deny">
      <h3>Haz que el cuidador no se sienta rechazado</h3>
      <p>
        Queremos cuidar al cuidador hasta el final, es por eso que te pedidmos
        que rellenes este breve formulario para poder explicar al cuidador por
        que ha sido rechazado de este empleo. Tus opinión le servirá para
        mejorar y tus palabras le animaran a no desistir en su búsuqeda.
      </p>
      <form>
        <h4>Muchas gracias por interesarte</h4>
        <p>
          Lamentamos informarte de que tu solicitud no ha sido aceptada por:
        </p>
        <div>
          <input type="radio" name="resolutionMssg" id="_f" />
        <label htmlFor="_f">
        Su perfil no se ajusta a los aspectos técnicos requeridos para el puesto.
        </label>
        </div>
        <div>
          <input type="radio" name="resolutionMssg" id="_s" />
        <label htmlFor="_s">
        Buscamos a una persona con conocimientos mas amplios en esta materia. 
        </label>
        </div>
        <div>
<input type="radio" name="resolutionMssg" id="_t" />
        <label htmlFor="_t">
        Su trayectoria profesional es brillante pero no encaja con lo que buscamos. 
        </label>
        </div>
        <div>
          <input type="radio" name="resolutionMssg" id="_fo" />
        <label htmlFor="_fo">
        El puesto ha sido ya cubierto por otro cuidador
        </label>
        </div>
        
        <span>¡No dejes de intentarlo!</span>
        <p>
          Desde {user.displayName} te animamos a seguir intentándolo, nosotros seguiremos publicando ofertas para que cuidadores como tu podáis formar parte del mercado laboral y estamos seguro de que pronto formarás parte de nuestro equipo.
        </p>
        <button onClick={back}>Rechazar</button>
      </form>
    </section>
  );
};

export default DenyForm;
