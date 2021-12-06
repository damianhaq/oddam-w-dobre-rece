import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="loginRegister">
      <h1>Załóż konto</h1>
      <form action="">
        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Hasło</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="password">Powtórz hasło</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="buttonsWrapper">
          <Link to="/logowanie">Zaloguj się</Link>
          <button type="submit">Załóż konto</button>
        </div>
      </form>
    </div>
  );
}
