import React, { useState } from "react";
import "../global.css";
import Form from "../components/Form";
import Header from "../components/Header";
import Result from "../components/Result";
import Footer from "../components/Footer";

function CalcPage({ valueArray, setValueArray }) {
  const [grams, setGrams] = useState(null);
  const [food, setFood] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <>
      <Header />
      <div className="calcContainer">
        <Form
          grams={grams}
          setGrams={setGrams}
          food={food}
          setFood={setFood}
          result={result}
          setResult={setResult}
          valueArray={valueArray}
          setValueArray={setValueArray}
        />
        <Result result={result} setResult={setResult} />
      </div>
      <Footer />
    </>
  );
}

export default CalcPage;
