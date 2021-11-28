import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright by Coders Lab</p>
      <div className="icons">
        <a onClick={(ev) => ev.preventDefault()} href=""></a>
        <a onClick={(ev) => ev.preventDefault()} href=""></a>
      </div>
    </div>
  );
}
