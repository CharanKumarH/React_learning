import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    // default elements
    // <div>
    //   <h1>good marning in app.js</h1>
    // </div>

    //  create element
    React.createElement(
      `dev`,
      { className: `dev1`, id: `dev_id` },
      React.createElement(
        `h1`,
        { className: `head_1`, id: `head_id` },
        `hello this is element create by react element`
      )
    )
  );
}

export default App;
