import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div className="HomeHeader">
      <div className="img"></div>
      <div className="content">
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
