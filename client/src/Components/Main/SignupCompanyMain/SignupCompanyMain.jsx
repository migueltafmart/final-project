import React from "react";

const SignupCompanyMain = () => {
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
            <img src="" alt="" />
          </aside>
          <div className="form">
            <h3>
              Datos de la Empresa <span>*</span>
            </h3>
            <fieldset>
              <div className="input">
                <label htmlFor="_fn">Nombre</label>
                <input type="text" name="firstName" id="_fn" />
              </div>
              <div className="input">
                <label htmlFor="_ln">Email de contacto RRHH </label>
                <input type="text" name="LastNames" id="_ln" />
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
              <textarea
                name="expDesc"
                placeholder="¿Por qué quieres formar parte del proyecto?"
              ></textarea>
            </fieldset>
            <input type="submit" value="Enviar" />
          </div>
          
        </div>

      
      </form>
    </main>
  );
};

export default SignupCompanyMain;
