import React, { useState, useEffect } from "react";
import List from "./components/List";
import Log from "./components/Log";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState(false);

  useEffect(() => {
    console.log("I am Ready ");
  }, []);
  useEffect(() => {
    console.log("useEffect from log");
  }, [log]);
  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <List setCount={setCount} />
      <h3>{count}</h3>
      <Log setLog={setLog} log={log} />
      <h1>Count1</h1>
      <Counter name="count1" />
      <h1>Count2</h1>
      <Counter name="count2" />
    </React.Fragment>
  );
}
/*
Stop useEffect from running on every render -->> []
Only Run Once, on Mount -->> []
Run useEffect on State Change -->> [count]
Run useEffect When a Prop Changes -->> (prop)[prop]
*/
export default App;
