import React from "react";
import "./SignupMain.scss";
import signUpCaretaker1 from "../../../assets/img/signUpCaretaker.png";
import signUpCaretaker2 from "../../../assets/img/signUpCaretaker1.png";
const SignupMain = () => {
  return (
    <main className="Signup">
      <form action="">
        <div className="wrapper">
          <aside>
            <h2>Registrarse es muy sencillo</h2>
            <p>
              Rellena los datos que te solicitamos y ya podrás optar al puesto
              de trabajo que mejor se adapte a tu perfil
            </p>
            <img src={signUpCaretaker1} alt="cuidador" />
          </aside>
          <div className="form">
            <h3>
              Datos Personales <span>*</span>
            </h3>
            <span className="border"></span>
            <fieldset>
              <div className="input name">
                <label htmlFor="_fn">Nombre</label>
                <input type="text" name="firstName" id="_fn" />
              </div>
              <div className="input">
                <label htmlFor="_ln">Apellidos</label>
                <input type="text" name="LastNames" id="_ln" />
              </div>
              <div className="row">
                <div className="input gender">
                  <div>
                    <input type="radio" name="gender" value="woman" id="_wom" />
                    <label htmlFor="_wom">Mujer</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" value="man" id="_man" />
                    <label htmlFor="_wom">Hombre</label>
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="_dob">Fecha de Nacimiento</label>
                  <input type="date" name="dateOfBirth" id="_dob" />
                </div>
              </div>
              <div className="row">
                <div className="input">
                  <label htmlFor="_ph">Teléfono</label>
                  <input type="tel" name="phone" id="_ph" />
                </div>
                <div className="input">
                  <label htmlFor="_pwd">Contraseña</label>
                  <input type="password" name="pwd" id="_pwd" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="_em">Email</label>
                <input type="email" name="email" id="_em" />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="wrapper">
          <aside>
            <h2>
              Si tienes experiencia profesional sigue rellenando el formulario
            </h2>
            <p>
              Si no has trabajado antes, no te preocupes, ¡También puede haber
              ofertas de empleo para ti!
            </p>
            <img src={signUpCaretaker2} alt="cuidador" />
          </aside>
          <div className="form">
            <h3>Experiencia Profesional</h3>
            <span className="border"></span>
            <fieldset>
              <textarea
                name="expDesc"
                placeholder="Cuéntanos tu experiencia Laboral"
              ></textarea>
              <div className="input file">
                <label htmlFor="_cv">Puedes subir un archivo con tu CV</label>
                <div>
                  <input
                    type="text"
                    readOnly
                    value="Selecciona o arrastra un archivo"
                    name="cv"
                  />
                  <button>Subir un archivo</button>
                  <input type="file" name="cv" id="_cv" />
                </div>
              </div>
            </fieldset>
            <h3>Tipos de Trabajo y disponibilidad</h3>
            <span className="border"></span>
            <fieldset>
              <label htmlFor="_categories">
                Categorías <span>Selecciona las que más te interesen</span>
              </label>
              <div id="_categories">
                <div className="row">
                  <div className="category">
                    <input type="checkbox" name="sectorDigital" id="_sd" />
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
                    <input type="checkbox" name="otros" id="_o" />
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
                  <input type="text" name="hoursADay" id="_hd" />
                  <span>Días a la semana</span>
                  <span>
                    *Se trata de una estimación de tu tiempo que bajo ningun
                    concepto te descartará de las ofertas laborales que te
                    interesen.
                  </span>
                </div>
              </div>
            </fieldset>
            <input type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </main>
  );
};

export default SignupMain;
