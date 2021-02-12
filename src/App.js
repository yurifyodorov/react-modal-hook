import React from "react";
import { Router } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
