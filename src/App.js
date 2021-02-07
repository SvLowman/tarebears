import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import "./global.css";
import SplashPage from "./pages/SplashPage";
import CalcPage from "./pages/CalcPage";

function App() {
  // const [splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setSplash(false), 4000);
  // }, []);

  return (
    <div className="all">
      {/* <Router>
        <Switch>
          <Route exact path="/" /> */}
      <SplashPage />
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
