import React from "react";
import "./DenyForm.scss";
const DenyForm = ({back}) => {
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
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut--aliquip ex ea commodo
        </label>
        </div>
        <div>
          <input type="radio" name="resolutionMssg" id="_s" />
        <label htmlFor="_s">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut--aliquip ex ea commodo
        </label>
        </div>
        <div>
<input type="radio" name="resolutionMssg" id="_t" />
        <label htmlFor="_t">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut--aliquip ex ea commodo
        </label>
        </div>
        <div>
          <input type="radio" name="resolutionMssg" id="_fo" />
        <label htmlFor="_fo">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut--aliquip ex ea commodo
        </label>
        </div>
        
        <span>¡No dejes de intentarlo!</span>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut--aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <button onClick={back}>Rechazar</button>
      </form>
    </section>
  );
};

export default DenyForm;
