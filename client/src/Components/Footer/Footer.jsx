import React from "react";
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
            <a href="https://www.facebook.com/FundacionLuzon/">
              <button>
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </button>
            </a>
            <a href="https://twitter.com/fundacionluzon?lang=es">
              <button>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/fundaci%C3%B3n-francisco-luz%C3%B3n-775304157/?originalSubdomain=es">
              <button>
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </button>
            </a>
            <a href="https://www.instagram.com/fundacionluzon/">
              <button>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </button>
            </a>
            <a href="https://www.youtube.com/channel/UC1yT9BSr8aTC1EXcse1Ap7w">
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
              <a href="https://ffluzon.org/ela/">ELA: Esclerosis Lateral Amiotrófica</a>
            </li>
            <li>
              <a href="https://ffluzon.org/calidad-de-vida/">Calidad de Vida</a>
            </li>
            <li>
              <a href="https://ffluzon.org/francisco-luzon/">Fundación</a>
            </li>
            <li>
              <a href="https://ffluzon.org/investigacion/">Investigación</a>
            </li>
            <li>
              <a href="https://ffluzon.org/proyectos/">Proyectos por la ELA</a>
            </li>
            <li>
              <a href="https://ffluzon.org/actualidad/">Actualidad</a>
            </li>
            <li>
              <a href="https://ffluzon.org/colabora-ela/">Colabora</a>
            </li>
            <li>
              <a href="https://ffluzon.org/contacto/">Contanto</a>
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
        <a href="https://ffluzon.org/aviso-legal/">Aviso Legal</a>
        <a href="https://ffluzon.org/politica-de-cookies/">Política de cookies</a>
        <a href="https://ffluzon.org/politica-de-privacidad/">Política de privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
