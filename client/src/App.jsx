import "./App.scss";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePageCaretaker from "./Pages/HomePageCaretaker/HomePageCaretaker";
import HomePageCompany from "./Pages/HomePageCompany/HomePageCompany";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPageCaretaker from "./Pages/SignupPageCaretaker/SignupPageCaretaker";
import SignupPageCompany from "./Pages/SignupPageCompany/SignupPageCompany";
import OffersPageCaretaker from "./Pages/OffersPageCaretaker/OffersPageCaretaker";
import OffersPageCompany from "./Pages/OffersPageCompany/OffersPageCompany";
import MatchPage from "./Pages/MatchPage/MatchPage";
import { UserProvider } from "./Context/userContext";
function App() {
  const [user, setUser] = useState({});
  return (
    <UserProvider value={{user, setUser}}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/cuidador/inicio">
          <HomePageCaretaker />
        </Route>
        <Route path="/empresa/inicio">
          <HomePageCompany />
        </Route>
        <Route path="/entrar">
          <LoginPage />
        </Route>
        <Route path="/cuidador/registro">
          <SignupPageCaretaker />
        </Route>
        <Route path="/empresas/registro">
          <SignupPageCompany />
        </Route>
        <Route path="/cuidador/ofertas">
          <OffersPageCaretaker />
        </Route>
        <Route path="/empresa/ofertas">
          <OffersPageCompany />
        </Route>
        <Route path="/matches">
          <MatchPage />
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
