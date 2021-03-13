import React from "react";
import { Link } from "react-router-dom";
import"./MainNavigation.scss"
const MainNavigation = () => {
  return <nav className="MainNavigation">
      <Link to="/">
       <img src="https://cuidaralcuidador.herokuapp.com/api/logo" alt="cuidar al cuidador"/>
      </Link>
     <Link to="/inicio">
        <h4>¿Qué es cuidar al cuidador</h4>
     </Link>
     <Link to="/ofertas" >
      <h4>Consulta las ofertas de trabajo activas</h4>
     </Link>
     <Link to="/signup">
      <h4>Registra tu perfil en pocos pasos</h4>
     </Link >
     <Link to="/">
      <h4>¿Cómo compaginarlo con cada fase?</h4>
     </Link>
     <Link to="/">
       <img src="https://cuidaralcuidador.herokuapp.com/api/logo" alt="cuidar al cuidador"/>
      </Link>
  </nav>;
};

export default MainNavigation;
