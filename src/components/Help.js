import React, { useState, useEffect } from "react";
import Fundations from "./Fundations";
import Organizations from "./Organizations";
import Local from "./Local";

const organizations = [
  {
    title: `Organizacja "Lorem Ipsum 1"`,
    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    target: "Egestas, sed, tempus",
  },
  {
    title: `Organizacja “Lorem Ipsum 2”`,
    text: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    target: "Ut, aliquam, purus, sit, amet",
  },
  {
    title: `Organizacja “Lorem Ipsum 3`,
    text: "Scelerisque in dictum non consectetur a erat nam.",
    target: "Mi, quis, hendrerit, dolor",
  },
  {
    title: `Organizacja “Lorem Ipsum 4`,
    text: "Scelerisque in dictum non consectetur a erat nam.",
    target: "Mi, quis, hendrerit, dolor",
  },
  {
    title: `Organizacja “Lorem Ipsum 5`,
    text: "Scelerisque in dictum non consectetur a erat nam.",
    target: "Mi, quis, hendrerit, dolor",
  },
  {
    title: `Organizacja “Lorem Ipsum 6`,
    text: "Scelerisque in dictum non consectetur a erat nam.",
    target: "Mi, quis, hendrerit, dolor",
  },
];

const fundations = [
  {
    title: `Fundacja “Dbam o Zdrowie”`,
    text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    target: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: `Fundacja “Dla dzieci”`,
    text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    target: "ubrania, meble, zabawki",
  },
  {
    title: `Fundacja “Bez domu”`,
    text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    target: "ubrania, jedzenie, ciepłe koce",
  },
  {
    title: `Fundacja "Lorem Ipsum 4"`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae.",
    target: "Lorem, ipsum dolor.",
  },
  {
    title: `Fundacja "Lorem Ipsum 5"`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae.",
    target: "Lorem, ipsum dolor.",
  },
  {
    title: `Fundacja "Lorem Ipsum 6"`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae.",
    target: "Lorem, ipsum dolor.",
  },
  {
    title: `Fundacja "Lorem Ipsum 7"`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae.",
    target: "Lorem, ipsum dolor.",
  },
  {
    title: `Fundacja "Lorem Ipsum 8"`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae.",
    target: "Lorem, ipsum dolor.",
  },
  {
    title: `Fundacja "Lorem Ipsum 9"`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae.",
    target: "Lorem, ipsum dolor.",
  },
];

const local = [
  {
    title: `Zbiórka “Lorem Ipsum 1”`,
    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    target: "Egestas, sed, tempus",
  },
  {
    title: `Zbiórka “Lorem Ipsum 2”`,
    text: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    target: "Ut, aliquam, purus, sit, amet",
  },
  {
    title: `Zbiórka “Lorem Ipsum 3”`,
    text: "Scelerisque in dictum non consectetur a erat nam.",
    target: "Mi, quis, hendrerit, dolor",
  },
];

export default function Help() {
  const [show, setShow] = useState(1);
  let style = { borderColor: "white" };

  const button1 = document.querySelector("#root > div > div.help > nav > a:nth-child(1)");
  const button2 = document.querySelector("#root > div > div.help > nav > a:nth-child(2)");
  const button3 = document.querySelector("#root > div > div.help > nav > a:nth-child(3)");

  function handleShow(numb, ev) {
    ev.preventDefault();
    button1.style.borderColor = "white";
    button2.style.borderColor = "white";
    button3.style.borderColor = "white";
    document.activeElement.style.borderColor = "#3c3c3c";
    setShow(numb);
  }

  return (
    <div className="help">
      <h2>Komu pomagamy?</h2>
      <nav>
        <a style={style} href="" onClick={(ev) => handleShow(1, ev)}>
          Fundacjom
        </a>
        <a href="" onClick={(ev) => handleShow(2, ev)}>
          Organizacjom pozarządowym
        </a>
        <a href="" onClick={(ev) => handleShow(3, ev)}>
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
