import React from "react";
import emojibear from "emoji-bear.png";
import "./header.css";

function SplashPage() {
  return (
    <>
      <h1 className="title">TareBears</h1>
      <div className="splashLogo">
        <img src={emojibear} alt="Tär-Bär" />
      </div>
      <p className="title"></p>
    </>
  );
}

export default SplashPage;
