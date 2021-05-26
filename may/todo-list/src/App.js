import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setUserInput(e.target.value.trim());
  }
  return (
    <div>
      <form>
        <input
          className="userInput"
          type="text"
          value={userInput}
          onChange={handleChange}
        ></input>
        <input type="submit" value="add"></input>
      </form>
      {userInput}
    </div>
  );
}

export default App;
