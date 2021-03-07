import "./App.scss";
import axios from "axios";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("");
  const handleSelect = (e) => {
    setRole(e.target.value);
  };
  const signUp = (e) => {
    e.preventDefault();
    const role = document.querySelector("select");
    const displayName = document.querySelector("input[name=displayName]");
    const email = document.querySelector("input[name=email]");
    const urlToImg = document.querySelector("input[name=urlToImg]");
    const pwd = document.querySelector("input[name=pwd]");
    if (
      role.value === "caretaker" &&
      displayName.value &&
      email.value &&
      urlToImg.value &&
      pwd.value
    ) {
      axios.post(
        "http://localhost:5500/signup",
        {
          role: role,
          displayName: displayName,
          email: email,
          urlToImg: urlToImg,
          pwd: pwd,
        },
        { headers: { "content-type": "application/json" } }
      )
        .then((res) => (sessionStorage.user = res))
        .catch((err) => console.log(err));
      role.value = "";
      displayName.value = "";
      email.value = "";
      urlToImg.value = "";
      pwd.value = "";
    }
  };
  return (
    <div onSubmit={(e) => signUp(e)} className="App">
      <form>
        <select onChange={handleSelect} name="role">
          <option value="company">Empresa</option>
          <option value="caretaker">Cuidador</option>
        </select>
        {role ? (
          role === "caretaker" ? (
            <>
              <input
                defaultValue=""
                autoComplete="off"
                type="text"
                name="displayName"
                placeholder="Nombre completo"
              />
              <input
                defaultValue=""
                autoComplete="off"
                type="text"
                name="email"
                placeholder="Correo electrónico"
              />
              <input
                defaultValue=""
                autoComplete="off"
                type="text"
                name="urlToImg"
                placeholder="Imagen de perfil"
              />
              <input
                defaultValue=""
                autoComplete="off"
                type="password"
                name="pwd"
                placeholder="Contraseña"
              />
              <input type="submit" value="Registrarme" />
            </>
          ) : (
            <>
              <input
                defaultValue=""
                autoComplete="off"
                type="text"
                name="displayName"
                placeholder="Nombre de la empresa"
              />
              <input
                defaultValue=""
                autoComplete="off"
                type="text"
                name="email"
                placeholder="Correo electrónico de contacto"
              />
              <input type="submit" value="¡Quiero Apuntarme!" />
            </>
          )
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default App;
