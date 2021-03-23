import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginMain.scss";
import UserContext from "../../../Context/userContext";
import axios from "axios";
const LoginMain = ({ role, modal, setLogin }) => {
  const { setUser } = useContext(UserContext);
  const logIn = (e) => {
    e.preventDefault();
    let email = document.querySelector("input[name=email]");
    let pwd = document.querySelector("input[name=pwd]");
    if (email.value.length > 0 && pwd.value.length > 0) {
      axios
        .post("/api/login", {
          email: email.value,
          pwd: pwd.value,
        })
        .then((res) => {
          setUser(res.data.response);
          if (modal) {
            setLogin();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <main className="Login">
      <div className="wrapper">
        {modal ? <span className="material-icons" onClick={setLogin}>close</span> : <></>}
        <h2>Por favor para acceder incluye tu correo y contraseña</h2>
        {role ? (
          role === "caretaker" ? (
            <h4>Log in cuidador</h4>
          ) : (
            <h4>Log in empresa</h4>
          )
        ) : (
          <></>
        )}
        <form onSubmit={logIn}>
          <div>
            <label htmlFor="_email">E-mail</label>
            <input
              tabIndex="1"
              autoFocus
              type="text"
              name="email"
              id="_email"
            />
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
        {role ? (
          role === "caretaker" ? (
            <>
              <p>
                Rellena los datos que te solicitamos y la Fundación Luzón te
                dará de alta en su base de empresas empleadoras.
              </p>
              <p>
                Una vez realizado ese porceso por parte de la Fundación Luzon
                recibirás un código con el que deberás identificarte cuando
                entres en tu usuario.
              </p>
            </>
          ) : (
            <>
              <p>
                Regístrate fácilmente para que te conozcamos y podamos registrar
                tu perfil profesional.
              </p>
              <p>
                Una vez realizado este proceso podrás aplicar a las ofertas que
                más te interesen y que se ajusten a tus necesidades. Las
                empresas podrán ver tu perfil ponerse en contacto contigo.
              </p>
            </>
          )
        ) : (
          <></>
        )}

        <Link
          to={role === "caretaker" ? "/cuidador/registro" : "/empresa/registro"}
        >
          <button>Registrarme</button>
        </Link>
      </div>
    </main>
  );
};

export default LoginMain;
