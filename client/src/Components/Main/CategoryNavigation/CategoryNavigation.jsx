import React from "react";
import "./CategoryNavigation.scss";

const CategoryNavigation = ({category, sectorDigital, marketingOnline, gestionDatos, creativos, otros, sinOrdenador}) => {
  return <nav className="Category">
    <div className="wrapper">
      <button className={category === "sectorDigital"? "active":"" } onClick={sectorDigital }>Sector Digital</button>
      <button className={category === "marketingOnline" ? "active":""} onClick={marketingOnline}>Marketing On-line</button>
      <button className={category === "gestionDatos"? "active": ""} onClick={gestionDatos}>Gestión de datos</button>
      <button className={category === "creativos"? "active": ""} onClick={creativos}>Creativos</button>
      <button className={category === "otros"? "active": ""} onClick={otros}>Otros</button>
      <button className={category === "sinOrdenador"? "active": ""} onClick={sinOrdenador}>Sin Ordenador</button>
    </div>
  </nav>;
};

export default CategoryNavigation;
