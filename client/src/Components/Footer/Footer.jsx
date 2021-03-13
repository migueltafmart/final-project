import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logoCc from "../../img/logo-cc.png";
import logoL from "../../img/logo-l.png";
import eupals from "../../img/footer/eupals.png";
import aef from "../../img/footer/aef.png";
import fund from "../../img/footer/fund.png";

import lealtad from "../../img/footer/lealtad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="column">
          <img className="logo" src={logoCc} alt="Cuidar al cuidador" />
          <img className="logo" src={logoL} alt="Fundación Luzón" />
        </div>
        <div className="column">
          <div className="socials">
            <a href="#">
              <button>
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </button>
            </a>
            <a href="#">
              <button>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </button>
            </a>
            <a href="#">
              <button>
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </button>
            </a>
            <a href="#">
              <button>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </button>
            </a>
            <a href="#">
              <button>
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </button>
            </a>
          </div>
          <img src={lealtad} alt="" />
        </div>
        <div className="column">
          <h4>Accesos Directos:</h4>
          <ul>
            <li>
              <a href="#">ELA: Esclerosis Lateral Amiotrófica</a>
            </li>
            <li>
              <a href="#">Calidad de Vida</a>
            </li>
            <li>
              <a href="#">Fundación</a>
            </li>
            <li>
              <a href="#">Investigación</a>
            </li>
            <li>
              <a href="#">Proyectos por la ELA</a>
            </li>
            <li>
              <a href="#">Actualidad</a>
            </li>
            <li>
              <a href="#">Colabora</a>
            </li>
            <li>
              <a href="#">Contanto</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Pertenecemos a:</h4>
          <div className="badges">
            <img src={eupals} alt="EUPALS" />
            <img src={fund} alt="Asociación Españolas de Fundaciones" />
            <img src={aef} alt="Asociación Españolas de Fundaciones" />
          </div>
        </div>
      </div>
      <div>
        <Link to="/legal">Aviso Legal</Link>
        <Link to="/cookies">Política de cookies</Link>
        <Link to="/privacidad">Política de privacidad</Link>
      </div>
    </footer>
  );
};

export default Footer;
