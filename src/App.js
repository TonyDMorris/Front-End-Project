import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import Play from "./components/Play";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Create path="/create" />
        <Play path="/play" />
      </Router>
    </div>
  );
}

export default App;
