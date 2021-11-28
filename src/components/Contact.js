import React, { useState } from "react";
const errorEmail = document.querySelector("#errorEmail");
const errorName = document.querySelector("#errorName");
const errorMessage = document.querySelector("#errorMessage");

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleClick(ev) {
    ev.preventDefault();

    (async () => {
      const rawResponse = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, message: message }),
      });
      const content = await rawResponse.json();

      if (content.status === "error") {
        console.log("errors:", content.errors);
        content.errors.forEach((el) => {
          if (el.param === "name") {
            console.log(el.msg);
            errorName.innerText = el.msg;
          }
          if (el.param === "email") {
            console.log(el.msg);
            errorEmail.innerText = el.msg;
          }
          if (el.param === "message") {
            console.log(el.msg);
            errorMessage.innerText = el.msg;
          }
        });
      }
      // console.log(content);
    })();
  }

  return (
    <div to="contact" className="contact">
      <div className="img">
        <form action="">
          <h2>Skontaktuj się z nami</h2>
          <p className="message"></p>
          <div className="wrapper">
            <div className="wrapper__in">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Krzysztof" type="text" name="name" id="name" />
              <p id="errorName" className="error"></p>
            </div>
            <div className="wrapper__in">
              <label htmlFor="email">Wpisz swój email</label>
              <input value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder="abc@xyz.pl" type="email" name="email" id="email" />
              <p id="errorEmail" className="error"></p>
            </div>
          </div>
          <label for="text">Tell us your story:</label>
          <textarea
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            id="text"
            name="text"
            rows="5"
            cols="33"
          ></textarea>
          <p id="errorMessage" className="error"></p>
          <button onClick={(ev) => handleClick(ev)} type="submit">
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}
