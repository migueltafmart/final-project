import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginMain.scss";
import UserContext from "../../../Context/userContext";
const LoginMain = () => {
  const user = useContext(UserContext);
  const logIn = (e) => {
    e.preventDefault();
    let email = document.querySelector("input[name=email]");
    let pwd = document.querySelector("input[name=pwd]");
    if (email.value.length > 0 && pwd.value.length > 0) {
      user.setUser({
        userId: 1,
        role: "admin",
        displayName: "Miguel Tafur",
        url:
          "https://avatars.githubusercontent.com/u/74536669?s=460&u=8657e991803a2d49f98c389e3278e2d6a129b81b&v=4",
        email: "migueltafmart@gmail.com",
        hashPw: "10c278beb8a90b7546cb3ae6b0b1ed99",
        apiKey: "fb56bc9f-6d14-4a88-aa45-90cd1884737f",
        disp: null,
        area: null,
        tlf: null,
      });
    }
  };
  return (
    <main className="Login">
      <div className="wrapper">
        <h2>Por favor para acceder incluye tu correo y contraseña</h2>
        <form onSubmit={logIn}>
          <div>
            <label htmlFor="_email">E-mail</label>
            <input autoFocus type="text" name="email" id="_email" />
          </div>
          <div>
            <label htmlFor="_pwd">Contraseña</label>
            <input type="password" name="pwd" id="_pwd" />
          </div>

          <input type="submit" value="Entrar" />
        </form>
        <h2>
          ¿No estás registrado? <br />
          Crea tu cuenta fácilmente
        </h2>
        <p>
          Rellena los datos que te solicitamos y la Fundación Luzón te dará de
          alta en su base de empresas empleadoras.
        </p>
        <p>
          Una vez realizado ese porceso por parte de la Fundación Luzon
          recibirás un código con el que deberás identificarte cuando entres en
          tu usuario.
        </p>
        <Link to="/registro">
          <button>Registrarme</button>
        </Link>
      </div>
    </main>
  );
};

export default LoginMain;
