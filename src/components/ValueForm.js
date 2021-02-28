import React from "react";

function ValueForm() {
  return (
    <>
      <form>
        <input placeholder="Nahrungsmittel" type="text"></input>
        <input
          placeholder="Kohlenhydratgehalt in g pro 100g"
          type="number"
          max="99"
        ></input>
        <button type="submit">Werte speichern</button>
      </form>
    </>
  );
}

export default ValueForm;
