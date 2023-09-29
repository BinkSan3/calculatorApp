import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const buttons = [
    "1",
    "2",
    "3",
    "-",

    "4",
    "5",
    "6",
    "+",

    "7",
    "8",
    "9",
    "/",

    "clear",
    "0",
    "=",
    "*",
  ];
  const [displayedNumber, setDisplayedNumber] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (press) => {
    setDisplayedNumber(displayedNumber + press);

    if (press == "=") {
      const calculationResult = evaluate(displayedNumber);
      setResult(calculationResult);
      setDisplayedNumber(calculationResult.toString());
    } else if (press == "clear") {
      setDisplayedNumber("");
      setResult("");
    }
  };

  return (
    <div className="App">
      <h2 id="calcBox">{displayedNumber}</h2>
      <div id="buttonLayout">
        {buttons.map((input) => (
          <button key={input} onClick={() => handleButtonClick(input)}>
            {input}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
