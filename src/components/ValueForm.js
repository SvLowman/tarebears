import { React, useState } from "react";
import "./valueform.css";

// localStorage.setItem("lastname", "Smith");

function ValueForm({ valueArray, setValueArray }) {
  const [foodType, setFoodType] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [dualBolus, setDualBolus] = useState(false);

  const foodValueHandler = (e) => {
    setFoodType(e.target.value);
    console.log(foodType);
  };

  const contentValueHandler = (e) => {
    setContentValue(e.target.value);
    console.log(contentValue);
  };

  const dualBolusHandler = () => {
    setDualBolus(!dualBolus);
    console.log(dualBolus);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // let currentValues = JSON.parse(localStorage.getItem("valuesArray") || []);
    // currentValues.push({ foodtype: foodType });
    // localStorage.setItem("valuesArray", JSON.stringify(currentValues));
    // console.log(currentValues);
    setValueArray([
      ...valueArray,
      { foodType: foodType, contentValue: contentValue, dualBolus: dualBolus },
    ]);
    console.log(valueArray);
  };

  return (
    <>
      <form className="value-form" onSubmit={submitHandler}>
        <div className="value-input-container">
          <input
            className="value-input"
            placeholder="Nahrungsmittel"
            type="text"
            value={foodType}
            required={true}
            onChange={foodValueHandler}
          ></input>
          <input
            className="value-input"
            placeholder="Kohlenhydratgehalt in g pro 100g"
            type="text"
            value={contentValue}
            required={true}
            onChange={contentValueHandler}
          ></input>
          <div className="dual-bolus-container">
            <input
              className="dual-bolus-checkbox"
              type="checkbox"
              id="dual-bolus"
              value={dualBolus}
              onChange={dualBolusHandler}
            ></input>
            <label htmlFor="dual-bolus">Dual-Bolus aktivieren</label>
          </div>
        </div>
        <button
          className="value-button"
          type="submit"
          value="Submit"
          name="value"
        >
          Werte speichern
        </button>
      </form>
    </>
  );
}

export default ValueForm;
