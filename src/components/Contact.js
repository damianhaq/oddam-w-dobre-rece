import React from "react";

export default function Contact() {
  function handleClick(ev) {
    ev.preventDefault();
  }
  return (
    <div to="contact" className="contact">
      <div className="img">
        <form action="">
          <h2>Skontaktuj się z nami</h2>
          <div className="wrapper">
            <div className="wrapper__in">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input placeholder="Krzysztof" type="text" name="name" id="name" />
            </div>
            <div className="wrapper__in">
              <label htmlFor="email">Wpisz swój email</label>
              <input placeholder="abc@xyz.pl" type="email" name="email" id="email" />
            </div>
          </div>
          <label for="text">Tell us your story:</label>
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            id="text"
            name="text"
            rows="5"
            cols="33"
          ></textarea>
          <button onClick={(ev) => handleClick(ev)} type="submit">
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}
