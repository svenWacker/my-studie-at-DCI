import React, { useState } from "react";
import Code from "./code.json";

const App = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function codeThatText(e) {
    e.preventDefault();
    let morseText = "";
    userInput.split("").forEach((chr) => {
      morseText += " " + Code[chr.toLowerCase()];
    });
    setTranslatedText(morseText);
  }

  return (
    <React.Fragment>
      <h3>Translate to Morse</h3>
      <form>
        <div className="container">
          <label>Input Message:</label>
          <textarea
            cols="50"
            rows="8"
            onKeyUp={codeThatText}
            onChange={handleChange}
            placeholder="Type a message here"
          />
        </div>
        <div className="container">
          <label>Output Message:</label>
          <textarea
            cols="50"
            rows="8"
            placeholder="Here comes Morse code"
            value={translatedText}
            readOnly
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default App;
