import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroller } from "react-scroll";

export default function HomeHeader() {
  return (
    <div className="HomeHeader">
      <div className="img"></div>
      <div className="content">
        <nav>
          <div className="account">
            <Link className="link" to="/logowanie">
              Zaloguj
            </Link>
            <Link className="link" to="/rejestracja">
              Załóż konto
            </Link>
          </div>
          <div className="navigation">
            <Scroller className="link" to="">
              Start
            </Scroller>
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
        <section>
          <h2>Zacznij pomagać!</h2>
          <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
          <div className="buttons">
            <Link className="link" to="/logowanie">
              ODDAJ RZECZY
            </Link>
            <Link className="link" to="/logowanie">
              ZORGANIZUJ ZBIÓRKĘ
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
