import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import OffersPage from "./Pages/OffersPage/OffersPage";
import MatchPage from "./Pages/MatchPage/MatchPage";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/inicio">
        <HomePage />
      </Route>
      <Route path="/entrar">
        <LoginPage />
      </Route>
      <Route path="/registro">
        <SignupPage />
      </Route>
      <Route path="/ofertas">
        <OffersPage />
      </Route>
      <Route path="/matches">
        <MatchPage />
      </Route>
    </Switch>
  );
}

export default App;
