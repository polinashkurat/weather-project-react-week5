import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Düsseldorf" />
        <footer>
          This project was coded by Polina Shkurat and is{" "}
          <a
            href="https://github.com/polinashkurat/weather-project-react-week5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
