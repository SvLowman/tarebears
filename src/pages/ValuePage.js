import { React, useState } from "react";
import Header from "../components/Header";
import ValueForm from "../components/ValueForm";
import ValueDisplay from "../components/ValueDisplay";
import Footer from "../components/Footer";

function ValuePage() {
  const [valueArray, setValueArray] = useState([]);
  return (
    <>
      <Header />
      <ValueForm valueArray={valueArray} setValueArray={setValueArray} />
      <ValueDisplay valueArray={valueArray} />
      <Footer />
    </>
  );
}

export default ValuePage;
