import React, { useEffect, useState } from "react";
import MyOffersMain from "../MyOffersMain/MyOffersMain";
import { useLocation } from "react-router-dom";
import "./ProfileMain.scss";
const ProfileMain = ({ company, caretaker }) => {
  const v = new URLSearchParams(useLocation().search).get("v");
  const [, setView] = useState("data");
  useEffect(() => {
    if (v === "data") {
      setView("data");
      document.querySelector("h3:first-child").scrollIntoView({block: "center", behavior: "smooth"});
    } else if (v === "experience") {
      setView("experience");
      document.querySelector("h3:nth-of-type(2)").scrollIntoView({block: "center", behavior: "smooth"});
    } else {
      setView("disp");
      document.querySelector("h3:nth-of-type(3)").scrollIntoView({block: "center", behavior: "smooth"});
    }
  }, [v]);

  return (
    <main className="Profile">
      <div className="wrapper">
        {company ? (
          <>
            <h3>Mis datos</h3>
            <form>
              <div className="input">
                <label htmlFor="_displayName">Nombre de la empresa</label>
                <input
                  type="text"
                  defaultValue={company.displayName}
                  name="displayName"
                  id="_displayName"
                />
              </div>
              <div className="input">
                <label htmlFor="_email">Email de contacto RRHH</label>
                <input type="text" defaultValue={company.email} name="email" />
              </div>
              <div className="row">
                <div className="input">
                  <label htmlFor="_tlf">Nº de Teléfono</label>
                  <input
                    type="tel"
                    defaultValue={company.tlf || ""}
                    name="tlf"
                    id="_tlf"
                  />
                </div>
                <div className="input">
                  <label htmlFor="_sw">Web de la Empresa</label>
                  <input
                    type="text"
                    defaultValue={company.web || ""}
                    name="web"
                    id="_sw"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input">
                  <label htmlFor="_pwd">Nueva contraseña</label>
                  <input type="password" name="pwd" id="_pwd" />
                </div>
              </div>
              <input type="submit" value="Modificar" />
            </form>
            <section>
              <h3>Mis ofertas</h3>
              <MyOffersMain />
            </section>
          </>
        ) : (
          <>
            <h3>Mis datos</h3>
            <form action="">
              <div className="input name">
                <label htmlFor="_fn">Nombre</label>
                <input
                  type="text"
                  defaultValue={caretaker.displayName.split(" ")[0]}
                  name="firstName"
                  id="_fn"
                />
              </div>
              <div className="input">
                <label htmlFor="_ln">Apellidos</label>
                <input
                  type="text"
                  defaultValue={
                    caretaker.displayName.length >= 2
                      ? caretaker.displayName.split(" ")[1] +
                        " " +
                        caretaker.displayName.split(" ")[2]
                      : caretaker.displayName.split(" ")[1]
                  }
                  name="LastNames"
                  id="_ln"
                />
              </div>
              <div className="row">
                <div className="input gender">
                  <div>
                    <input
                      defaultChecked
                      type="radio"
                      name="gender"
                      value="woman"
                      id="_wom"
                    />
                    <label htmlFor="_wom">Mujer</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" value="man" id="_man" />
                    <label htmlFor="_wom">Hombre</label>
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="_dob">Fecha de Nacimiento</label>
                  <input
                    defaultValue="1975-04-07"
                    type="date"
                    name="dateOfBirth"
                    id="_dob"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input">
                  <label htmlFor="_ph">Teléfono</label>
                  <input
                    defaultValue={caretaker.tlf}
                    type="tel"
                    name="phone"
                    id="_ph"
                  />
                </div>
                <div className="input">
                  <label htmlFor="_pwd">Nueva contraseña</label>
                  <input type="password" name="pwd" id="_pwd" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="_em">Email</label>
                <input
                  defaultValue={caretaker.email}
                  type="email"
                  name="email"
                  id="_em"
                />
              </div>
              <input type="submit" value="Modificar" />
            </form>
            <h3>Mi experiencia</h3>
            <form>
              <textarea
                name="expDesc"
                placeholder="Cuéntanos tu experiencia Laboral"
              ></textarea>
              <input type="submit" value="Modificar" />
              <div className="input file">
                <label htmlFor="_cv">Puedes subir un archivo con tu CV</label>
                <div>
                  <input
                    readOnly
                    type="text"
                    value="amparoLopezCV.pdf"
                    name="cv"
                  />
                  <button>Subir un archivo</button>
                  <input type="file" name="cv" id="_cv" />
                </div>
              </div>
            </form>
            <h3>Mis preferencias</h3>
            <form>
              <label htmlFor="_categories">
                Categorías <span>Selecciona las que más te interesen</span>
              </label>
              <div id="_categories">
                <div className="row">
                  <div className="category">
                    <input
                      defaultChecked
                      type="checkbox"
                      name="sectorDigital"
                      id="_sd"
                    />
                    <label htmlFor="_sd">Sector Digital</label>
                  </div>
                  <div>
                    <input type="checkbox" name="marketingOnline" id="_mo" />
                    <label htmlFor="_mo">Marketing Ditial</label>
                  </div>
                  <div>
                    <input type="checkbox" name="gestionDatos" id="_dg" />
                    <label htmlFor="_gd">Gestión de Datos</label>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <input type="checkbox" name="creativos" id="_c" />
                    <label htmlFor="_c">Creativos</label>
                  </div>
                  <div>
                    <input
                      defaultChecked
                      type="checkbox"
                      name="otros"
                      id="_o"
                    />
                    <label htmlFor="_o">Otros</label>
                  </div>
                  <div>
                    <input type="checkbox" name="sinOrdenador" id="_so" />
                    <label htmlFor="_so">Sin ordenador</label>
                  </div>
                </div>
              </div>
              <div className="input note">
                <label htmlFor="_hd">Disponibilidad</label>
                <div className="hoursADay">
                  <input
                    defaultValue={caretaker.disp}
                    type="text"
                    name="hoursADay"
                    id="_hd"
                  />
                  <span>Días a la semana</span>
                  <span>
                    *Se trata de una estimación de tu tiempo que bajo ningun
                    concepto te descartará de las ofertas laborales que te
                    interesen.
                  </span>
                </div>
              </div>
              <input type="submit" value="Enviar" />
            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default ProfileMain;
