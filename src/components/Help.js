import React, { useState } from "react";
import Fundations from "./Fundations";
import Organizations from "./Organizations";
import Local from "./Local";
import { local, organizations, fundations } from "./api";

export default function Help() {
  const [show, setShow] = useState(1);

  function handleShow(numb, ev) {
    ev.preventDefault();
    setShow(numb);
  }

  return (
    <div to="help" className="help">
      <h2>Komu pomagamy?</h2>
      <nav>
        <a href="#" onClick={(ev) => handleShow(1, ev)}>
          Fundacjom
        </a>
        <a href="#" onClick={(ev) => handleShow(2, ev)}>
          Organizacjom pozarządowym
        </a>
        <a href="#" onClick={(ev) => handleShow(3, ev)}>
          Lokalnym zbiórkom
        </a>
      </nav>
      <article>
        {show === 1 && (
          <div>
            <p className="description">
              W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
              czego potrzebują.
            </p>
            <Fundations itemsPerPage={3} fundations={fundations} />
          </div>
        )}
        {show === 2 && (
          <div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation.
            </p>
            <Organizations itemsPerPage={3} organizations={organizations} />
          </div>
        )}
        {show === 3 && (
          <div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation.
            </p>
            <Local itemsPerPage={3} local={local} />
          </div>
        )}
      </article>
    </div>
  );
}
