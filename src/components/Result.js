import React from "react";

function Result({ result, setResult }) {
  if (result === null) {
    setResult("?");
  }

  const gumBearArray = [
    "",
    "🔴",
    "🔴🟠",
    "🔴🟠🟡",
    "🔴🟠🟡🟢",
    "🔴🟠🟡🟢🔵",
    "🔴🟠🟡🟢🔵🟣",
    "🔴🟠🟡🟢🔵🟣🔴",
    "🔴🟠🟡🟢🔵🟣🔴🟠",
    "🔴🟠🟡🟢🔵🟣🔴🟠🟡",
    "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢",
    "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢🔵",
    "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢🔵🟣",
    "🔴🟠🟡🟢🔵🟣🔴🟠🟡🟢🔵🟣🔴",
  ];
  let resultDots = gumBearArray[result];

  return (
    <>
      <div>
        Entspricht dem Kohlenhydratäquivalent von {result} Gummibärchen.
      </div>
      <div>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gummi_Bears_in_Action_08.png/120px-Gummi_Bears_in_Action_08.png" /> */}
        <p>{resultDots}</p>
      </div>
    </>
  );
}

export default Result;
