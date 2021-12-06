import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="loginRegister">
      <h1>Zaloguj się</h1>
      <form action="">
        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Hasło</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="buttonsWrapper">
          <Link to="/rejestracja">Załóż konto</Link>
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </div>
  );
}
