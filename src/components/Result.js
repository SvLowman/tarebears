import React from "react";
import "./result.css";

function Result({ result, setResult }) {
  if (result === null) {
    setResult("?");
  }

  function randomColor() {
    const randomNumber = Math.random();
    let classCSS = ".";
    if (randomNumber < 0.2) {
      classCSS = "textWhite";
    } else if (randomNumber < 0.4) {
      classCSS = "textYellow";
    } else if (randomNumber < 0.6) {
      classCSS = "textOrange";
    } else if (randomNumber < 0.8) {
      classCSS = "textRed";
    } else {
      classCSS = "textGreen";
    }
    return classCSS;
  }

  // const gumBearArray = [
  //   "",
  //   "🔴",
  //   "🔴🟠",
  //   "🔴🟠🟡",
  //   "🔴🟠🟡🟢",
  //   "🔴🟠🟡🟢🔵",
  //   "🔴🟠🟡🟢🔵🟣",
  //   "🔴🟠🟡🟢🔵🟣🔴",
  //   "🔴🟠🟡🟢🔵🟣🔴🟠",
  //   "🔴🟠🟡🟢🔵🟣🔴🟠🟡",
  //   "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢",
  //   "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢🔵",
  //   "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢🔵🟣",
  //   "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢🔵🟣🔴",
  // ];
  // let resultDots = gumBearArray[result];

  return (
    <>
      <div className="resultContainer">
        <div className="resultText">
          Das entspricht dem Kohlenhydratäquivalent von
        </div>
        <div className={`${randomColor()} resultSymbols`}>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gummi_Bears_in_Action_08.png/120px-Gummi_Bears_in_Action_08.png" /> */}
          {result}
        </div>
        <div className="resultText">Gummibärchen.</div>
      </div>
    </>
  );
}

export default Result;
