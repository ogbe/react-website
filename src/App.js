import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </div>
  );
}
