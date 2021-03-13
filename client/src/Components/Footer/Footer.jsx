import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
  return <footer>
    <div>
      <Link to="/legal">Aviso Legal</Link>
      <Link to="/cookies">Política de cookies</Link>
      <Link to="/privacidad">Política de privacidad</Link>
    </div>
  </footer>;
};

export default Footer;
