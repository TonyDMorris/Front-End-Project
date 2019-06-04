import React from "react";
import ReactDOM from "react-dom";
import "./i18next";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
