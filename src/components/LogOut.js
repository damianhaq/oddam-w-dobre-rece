import React from "react";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div className="logOut">
      <h1>Wylogowanie nastąpiło pomyślnie</h1>

      <div className="wrapper">
        <Link className="link" to="/">
          Strona główna
        </Link>
      </div>
    </div>
  );
};

export default LogOut;
