import React from "react";
import { Link } from "react-router-dom";
import "./LoginMain.scss";
import axios from "axios";
const LoginMain = () => {
  const logIn = (e) => {
    e.preventDefault();
    let email = document.querySelector("input[name=email]")
    let pwd = document.querySelector("input[name=pwd]")
    if (email.value.length > 0 && pwd.value.length > 0){
      const requestOptions = {
        method: 'POST',
        mode: "no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: {email: email, pwd: pwd}
    };
      fetch("https://cuidaralcuidador.herokuapp.com/api/login", requestOptions)
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
