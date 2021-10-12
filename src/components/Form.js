import React from "react";
import "./form.css";
import "../assets/gumBear.png";

function Form({
  grams,
  setGrams,
  food,
  setFood,
  result,
  setResult,
  valueArray,
  setValueArray,
}) {
  const gramsHandler = (e) => {
    setGrams(e.target.value);
    console.log(grams);
  };

  const foodHandler = (e) => {
    setFood(e.target.value);
    // alert(food);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setResult(Math.round((grams * food) / 1.84));
    // alert(result);
    // setGrams("");
    return result;
  };

  console.log("valueArray:", valueArray);

  return (
    <>
      <form>
        <div className="dataInput">
          <div className="inputBar">
            <input
              placeholder="Wie viel ist übrig?"
              type="number"
              min="1"
              max="99"
              step={1}
              value={grams}
              onChange={gramsHandler}
            ></input>
            <span className="inputSize">Gramm</span>
          </div>
          <select className="select-css" onChange={foodHandler}>
            <option value="">Und wovon?</option>
            {valueArray &&
              valueArray.map((value, index) => (
                <option
                  className="foodTypeOption"
                  value={value.contentValue}
                  key={index}
                >
                  {value.foodType}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" onClick={submitHandler} name="amount">
          <img
            className="buttonPic"
            src="http://www.clker.com/cliparts/B/F/X/a/P/9/bear-candy-gummy-md.png"
            alt="Gummibärchen"
          />
          <span className="buttonText">Bär mich auf!</span>
        </button>
      </form>
    </>
  );
}

export default Form;
