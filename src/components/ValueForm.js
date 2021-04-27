import { React, useState } from "react";
import "./valueform.css";

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

  const addValueToArray = () => {
    let value = {
      foodType: foodType,
      contentValue: contentValue,
      dualBolus: dualBolus,
    };
    if (!valueArray || valueArray === null) {
      setValueArray([value]);
      localStorage.setItem("valueArray", JSON.stringify(valueArray));
    } else {
      setValueArray([...valueArray, value]);
    }
    localStorage.setItem("valueArray", JSON.stringify(valueArray));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addValueToArray();
    setFoodType("");
    setContentValue("");
    console.log(valueArray);
  };

  return (
    <>
      <form className="value-form" onSubmit={submitHandler}>
        <div className="value-input-container">
          <input
            className="value-input"
            id="food-input"
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
          <label className="dual-bolus-container-custom" htmlFor="dual-bolus">
            <input
              type="checkbox"
              id="dual-bolus"
              value={dualBolus}
              onChange={dualBolusHandler}
            />
            <span className="checkmark"></span>
            <div className="checktext">Dual-Bolus aktivieren</div>
          </label>
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
