import React, { useState, useEffect } from "react";
import "./app.css";
import "./global.css";
import SplashPage from "./pages/SplashPage";
import CalcPage from "./pages/CalcPage";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 4000);
  }, []);

  return <div className="all">{splash ? <SplashPage /> : <CalcPage />}</div>;
}

export default App;
