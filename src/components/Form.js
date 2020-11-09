import React from "react";

function Form({ grams, setGrams, food, setFood, result, setResult }) {
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

  return (
    <>
      <form>
        <input
          placeholder="Wie viel ist übrig? (in g)"
          type="number"
          step={0.1}
          value={grams}
          onChange={gramsHandler}
        ></input>
        <div>
          <select onChange={foodHandler}>
            <option value="">Und wovon?</option>
            <option value="0.5">Brot</option>
            <option value="0.7">Kartoffeln</option>
          </select>
          <button type="submit" onClick={submitHandler} name="amount">
            Bär mich auf!
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
