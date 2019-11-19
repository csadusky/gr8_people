import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());
ReactDOM.render(<App />, document.getElementById("root"));
