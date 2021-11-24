import React from "react";
import { Link } from "react-router-dom";

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
            <Link className="link" to="">
              Start
            </Link>
            <Link className="link" to="">
              O co chodzi?
            </Link>
            <Link className="link" to="">
              O nas
            </Link>
            <Link className="link" to="">
              Fundacja i organizacje
            </Link>
            <Link className="link" to="">
              Kontakt
            </Link>
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
