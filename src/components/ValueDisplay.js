import React from "react";
import "./valuedisplay.css";

function ValueDisplay({ valueArray }) {
  console.log(valueArray);
  return (
    <>
      <div className="valueDisplayContainer">
        <h3>Liste der bestehenden Werte:</h3>
        <div>
          {valueArray &&
            valueArray.map((value, index) => (
              <p key={index}>
                {value.foodType} : {value.contentValue} g / 100g
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default ValueDisplay;
