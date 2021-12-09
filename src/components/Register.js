import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const emailEl = document.querySelector("#errorEmailReg");
  const passwordEl = document.querySelector("#errorPasswordReg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  function handleClick(ev) {
    ev.preventDefault();

    if (validateEmail(email)) {
      emailEl.innerText = "";
    } else {
      emailEl.innerText = "Podany email jest nieprawidłowy";
    }

    if (validatePassword(password) && password === passwordConf) {
      passwordEl.innerText = "";
    } else if (password !== passwordConf) {
      passwordEl.innerText = "Podane hasła nie są takie same";
    } else if (!validatePassword(password)) {
      passwordEl.innerText = "Podane hasło jest za krótkie";
    }
  }

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    if (password.length >= 6) {
      return true;
    } else return false;
  }

  return (
    <div className="loginRegister">
      <h1>Załóż konto</h1>
      <form action="">
        <div className="container">
          <label htmlFor="email">Email</label>
          <input onChange={(ev) => setEmail(ev.target.value)} value={email} type="text" name="email" id="email" />
          <p id="errorEmailReg" className="error"></p>
          <label htmlFor="password">Hasło</label>
          <input onChange={(ev) => setPassword(ev.target.value)} value={password} type="password" name="password" id="password" />
          <label htmlFor="password">Powtórz hasło</label>
          <input onChange={(ev) => setPasswordConf(ev.target.value)} value={passwordConf} type="password" name="password" id="password" />
          <p id="errorPasswordReg" className="error"></p>
        </div>
        <div className="buttonsWrapper">
          <Link to="/logowanie">Zaloguj się</Link>
          <button onClick={(ev) => handleClick(ev)} type="submit">
            Załóż konto
          </button>
        </div>
      </form>
    </div>
  );
}
