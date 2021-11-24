import React from "react";
import { Link } from "react-router-dom";

export default function FourSteps() {
  return (
    <div className="FourSteps">
      <h2>Wystarczą 4 proste kroki</h2>
      <article>
        <div className="column">
          <div className="icon icon1"></div>
          <p>Wybierz rzeczy</p>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="column">
          <div className="icon icon2"></div>
          <p>Spakuj je</p>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="column">
          <div className="icon icon3"></div>
          <p>Zdecyduj komu chcesz pomóc</p>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="column">
          <div className="icon icon4"></div>
          <p>Zamów kuriera</p>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </article>
      <Link className="button" to="/logowanie">
        ODDAJ RZECZY
      </Link>
    </div>
  );
}
