import "./App.scss";
import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePageCaretaker from "./Pages/HomePageCaretaker/HomePageCaretaker";
import SignupPageCaretaker from "./Pages/SignupPageCaretaker/SignupPageCaretaker";
import OffersPageCaretaker from "./Pages/OffersPageCaretaker/OffersPageCaretaker";
import HomePageCompany from "./Pages/HomePageCompany/HomePageCompany";
import SignupPageCompany from "./Pages/SignupPageCompany/SignupPageCompany";
import OffersPageCompany from "./Pages/OffersPageCompany/OffersPageCompany";
import MatchPage from "./Pages/MatchPage/MatchPage";
import { UserProvider } from "./Context/userContext";
import NewOfferPage from "./Pages/NewOfferPage/NewOfferPage";
function App() {
  const [user, setUser] = useState({});
  return (
    <UserProvider value={{ user, setUser }}>
      <Switch>
        <Route exact path="/">
          {user.role ? (
            user.role === "caretaker" ? (
              <Redirect to="/cuidador/inicio" />
            ) : (
              <Redirect to="/empresa/inicio" />
            )
          ) : (
            <LandingPage />
          )}
        </Route>
        <Route path="/cuidador/inicio">
          <HomePageCaretaker />
        </Route>
        <Route path="/cuidador/entrar">
          {user.role ? (
            user.role === "caretaker" ? (
              <Redirect to="/cuidador/inicio" />
            ) : (
              <Redirect to="/empresa/inicio" />
            )
          ) : (
            <LoginPage role="caretaker"/>
          )}
        </Route>
        <Route path="/cuidador/registro">
          {user.role ? (
            user.role === "caretaker" ? (
              <Redirect to="/cuidador/inicio" />
            ) : (
              <Redirect to="/empresa/inicio" />
            )
          ) : (
            <SignupPageCaretaker/>
          )}
        </Route>
        <Route path="/cuidador/ofertas">
          <OffersPageCaretaker />
        </Route>
        <Route path="/empresa/inicio">
          <HomePageCompany />
        </Route>
        <Route path="/empresa/entrar">
          {user.role ? (
            user.role === "caretaker" ? (
              <Redirect to="/cuidador/inicio" />
            ) : (
              <Redirect to="/empresa/inicio" />
            )
          ) : (
            <LoginPage role="company"/>
          )}
        </Route>
        <Route path="/empresa/registro">
          {user.role ? (
            user.role === "caretaker" ? (
              <Redirect to="/cuidador/inicio" />
            ) : (
              <Redirect to="/empresa/inicio" />
            )
          ) : (
            <SignupPageCompany/>
          )}
        </Route>
        <Route path="/empresa/ofertas">
          {user.userId ?  <OffersPageCompany />:<Redirect to="/empresa/entrar" />}
         
        </Route>
        <Route path="/empresa/publicar">
          {user.role === "company" ? <NewOfferPage />: <Redirect to="/"/> }
        </Route>
        <Route path="/empresa/editar/:offerId">
          {user.role === "company" ? <NewOfferPage edit />: <Redirect to="/"/> }
        </Route>
        <Route path="/cuidador/match/:offerId">
        {user.role === "caretaker" ? <MatchPage />: <Redirect to="/"/> }
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
