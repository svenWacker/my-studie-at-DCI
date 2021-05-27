import { Text, Hallo } from "./components/Text";

let name = "Sven";
const names = ["Zain", "Olga", "Nancy"];
const listItems = names.map((name, i) => <li key={i}>{name}</li>);

function App() {
  return (
    <div>
      <h1>Hi I am React</h1>
      <Hallo userName={name} age="46" namesArr={names} />
      <Text />
      <Text />
      <Text />
      <ul>{listItems}</ul>
    </div>

    //   <ul>
    //names.map((name, i) => (
    //   <li key={i}>{name}</li>
    // ))
    //  </ul>
  );
}
export default App;

// Increments app
/*
import { useState } from "react";
function App() {
const [clicks, setClicks] = useState(0);
function increment() {
setClicks(clicks + 1);
}
function decrement() {
setClicks((prevState) => prevState - 1);
}
return (
<div>
You click {clicks} times!
<br />
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
</div>
);
}
*/
