import React from "react";
import emojibeargreen from "../assets/emoji-bear-green.png";
import emojibearorange from "../assets/emoji-bear-orange.png";
import emojibearred from "../assets/emoji-bear-red.png";
import emojibearwhite from "../assets/emoji-bear-white.png";
import emojibearyellow from "../assets/emoji-bear-yellow.png";
import "./splashpage.css";

const bearArray = [
  emojibeargreen,
  emojibearorange,
  emojibearred,
  emojibearwhite,
  emojibearyellow,
];
const bearNumber = Math.floor(Math.random() * 5);
const emojibear = bearArray[bearNumber];

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
