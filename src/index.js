import React from "react";
import ReactDOM from "react-dom";

const name = "amogh";
const num = 7;
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p> this is a {num}</p>
  </div>,
  document.getElementById("root")
);
