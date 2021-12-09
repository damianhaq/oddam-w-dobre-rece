import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  const emailEl = document.querySelector("#errorEmailLog");
  const passwordEl = document.querySelector("#errorPasswordLog");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(ev) {
    ev.preventDefault();

    if (validateEmail(email)) {
      emailEl.innerText = "";
    } else {
      emailEl.innerText = "Podany email jest nieprawidłowy";
    }

    if (validatePassword(password)) {
      passwordEl.innerText = "Podane hasło jest za krótkie";
    } else {
      passwordEl.innerText = "";
    }
  }

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    if (password.length > 6) {
      return false;
    } else return true;
  }

  return (
    <div className="loginRegister">
      <h1>Zaloguj się</h1>
      <form action="">
        <div className="container">
          <label htmlFor="email">Email</label>
          <input onChange={(ev) => setEmail(ev.target.value)} value={email} type="text" name="email" id="email" />
          <p id="errorEmailLog" className="error"></p>
          <label htmlFor="password">Hasło</label>
          <input onChange={(ev) => setPassword(ev.target.value)} value={password} type="password" name="password" id="password" />
          <p id="errorPasswordLog" className="error"></p>
        </div>
        <div className="buttonsWrapper">
          <Link to="/rejestracja">Załóż konto</Link>
          <button onClick={(ev) => handleClick(ev)} type="submit">
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  );
}
