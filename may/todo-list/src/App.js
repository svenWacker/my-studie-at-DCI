import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);

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
        <input type="submit" value="Add"></input>
      </form>
      {userInput}
      <br />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
