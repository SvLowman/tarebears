import { React, useState } from "react";

// localStorage.setItem("lastname", "Smith");

function ValueForm() {
  const [foodType, setFoodType] = useState("");
  const [contentValue, setContentValue] = useState(null);
  const [valueArray, setValueArray] = useState([]);

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
      <form>
        <input
          placeholder="Nahrungsmittel"
          type="text"
          value={foodType}
          required={true}
          onChange={foodValueHandler}
        ></input>
        <input
          placeholder="Kohlenhydratgehalt in g pro 100g"
          type="number"
          min="1"
          max="99"
          step={1}
          value={contentValue}
          required={true}
          onChange={contentValueHandler}
        ></input>
        <button type="submit" onClick={submitHandler} name="value">
          Werte speichern
        </button>
      </form>
    </>
  );
}

export default ValueForm;
