import React, { useState } from "react";
import "./App.css";
import "./Weather";
import axios from "axios";
import Weather from "./Weather";

function App() {
  return (
    <div class="App">
      <Weather defaultCity="Lviv" />

      <p id="autor">
        <a
          href="https://github.com/Alinkll/weatner-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Alina Klimberh
      </p>
    </div>
  );
}

export default App;
