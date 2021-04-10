import React from "react";
import "./valuedisplay.css";

function ValueDisplay({ valueArray, setValueArray }) {
  console.log(valueArray);

  const removeHandler = (index) => {
    let newValueArray = valueArray.splice(index, 1);
    setValueArray([newValueArray]);
    console.log(valueArray);
  };

  return (
    <>
      <div className="valueDisplayContainer">
        <h3>Liste der bestehenden Werte:</h3>
        <div>
          {valueArray &&
            valueArray.map((value, index) => (
              <div className="valueDisplayInfo" key={index}>
                <div className="foodTypeInfo">{value.foodType} :</div>
                <div className="contentValueInfo">
                  {value.contentValue} g / 100g
                </div>
                <div className="dualBolusInfo">{value.dualBolus && "✨"}</div>
                <button className="deleteButton" onClick={removeHandler}>
                  ❌
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ValueDisplay;
