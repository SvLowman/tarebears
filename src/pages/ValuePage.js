import { React } from "react";
import Header from "../components/Header";
import ValueForm from "../components/ValueForm";
import ValueDisplay from "../components/ValueDisplay";
import Footer from "../components/Footer";
import "./valuepage.css";

function ValuePage({ valueArray, setValueArray }) {
  return (
    <>
      <Header />
      <div className="valueContainer">
        <ValueForm valueArray={valueArray} setValueArray={setValueArray} />
        <ValueDisplay valueArray={valueArray} setValueArray={setValueArray} />
      </div>
      <Footer />
    </>
  );
}

export default ValuePage;
