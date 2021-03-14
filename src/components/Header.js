import React from "react";
import "./header.css";
import emojibear from "../assets/emoji-bear.png";

function Header() {
  return (
    <>
      <header className="title">
        <div className="title-container">
          <h1>TareBears</h1>
          <img className="header-logo" src={emojibear} alt="Tär-Bär" />
        </div>
      </header>
    </>
  );
}

export default Header;
