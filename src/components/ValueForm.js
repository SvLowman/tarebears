import { React, useState } from "react";
import "./valueform.css";

// localStorage.setItem("lastname", "Smith");

function ValueForm({ valueArray, setValueArray }) {
  const [foodType, setFoodType] = useState("");
  const [contentValue, setContentValue] = useState("");

  const foodValueHandler = (e) => {
    setFoodType(e.target.value);
    console.log(foodType);
  };

  const contentValueHandler = (e) => {
    setContentValue(e.target.value);
    console.log(contentValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // let currentValues = JSON.parse(localStorage.getItem("valuesArray") || []);
    // currentValues.push({ foodtype: foodType });
    // localStorage.setItem("valuesArray", JSON.stringify(currentValues));
    // console.log(currentValues);
    setValueArray([
      ...valueArray,
      { foodType: foodType, contentValue: contentValue },
    ]);
    console.log(valueArray);
  };

  return (
    <>
      <form className="value-form">
        <div className="value-input-container">
          <input
            className="value-input"
            placeholder="Nahrungsmittel"
            type="text"
            value={foodType}
            required={true}
            onChange={foodValueHandler}
          ></input>
          <div className="buffer"></div>
          <input
            className="value-input"
            placeholder="Kohlenhydratgehalt in g pro 100g"
            type="text"
            value={contentValue}
            required={true}
            onChange={contentValueHandler}
          ></input>
        </div>
        <button
          className="value-button"
          type="submit"
          onClick={submitHandler}
          name="value"
        >
          Werte speichern
        </button>
      </form>
    </>
  );
}

export default ValueForm;
