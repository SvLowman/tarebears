import React from "react";
import emojibear from "../assets/emoji-bear.png";
import "./splashpage.css";

function SplashPage() {
  return (
    <div className="splashContainer">
      <h1 className="supratitle">TareBears</h1>
      <div className="splashLogoContainer">
        <img className="splashLogo" src={emojibear} alt="Tär-Bär" />
      </div>
      <p className="subtitle">Der proxy-hydroxy-kulante Gummibärchenrechner</p>
    </div>
  );
}

export default SplashPage;
