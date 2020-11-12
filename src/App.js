import React, { useState } from "react";
import "./app.css";
import "./global.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const [grams, setGrams] = useState(null);
  const [food, setFood] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <>
      <Header />
      <Form
        grams={grams}
        setGrams={setGrams}
        food={food}
        setFood={setFood}
        result={result}
        setResult={setResult}
      />
      <Result result={result} setResult={setResult} />
      <Footer />
    </>
  );
}

export default App;
