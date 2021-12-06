import React from "react";
import { Link as Scroller } from "react-scroll";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="account">
        <Link className="link" to="/logowanie">
          Zaloguj
        </Link>
        <Link className="link" to="/rejestracja">
          Załóż konto
        </Link>
      </div>
      <div className="navigation">
        <Link className="link" to="/">
          Start
        </Link>
        <Scroller className="link" smooth={true} to="fourSteps">
          O co chodzi?
        </Scroller>
        <Scroller className="link" smooth={true} to="AboutUs">
          O nas
        </Scroller>
        <Scroller className="link" smooth={true} to="help">
          Fundacja i organizacje
        </Scroller>
        <Scroller className="link" smooth={true} to="contact">
          Kontakt
        </Scroller>
      </div>
    </nav>
  );
}
