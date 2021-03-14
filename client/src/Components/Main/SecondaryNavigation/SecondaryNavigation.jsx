import React from "react";
import "./SecondaryNavigation.scss";
const SecondaryNavigation = ({view, first, second}) => {
  return (
    <nav className="Secondary">
      <div className="wrapper">
        <button className={view === "offers" ? "active":""} onClick={first.onClick}>{first.name}</button>
        <button className={view !== "offers" ? "active":""} onClick={second.onClick}>{second.name}</button>
      </div>
    </nav>
  );
};

export default SecondaryNavigation;
