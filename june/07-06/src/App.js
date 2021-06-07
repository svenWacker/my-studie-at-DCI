// import "./App.css";
// import React, { createContext, useContext, useState } from "react";
// import List from "./components/List";

import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  //const [log, setLog] = useState(false);
  useEffect(() => {
    console.log("I am Ready ");
  }, []);

  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <List setCount={setCount} />
      <h3>{count}</h3>
    </React.Fragment>
  );
}
/*
Stop useEffect from running on every render -->> []
Only Run Once, on Mount -->> []
Run useEffect on State Change
Run useEffect When a Prop Changes
*/
export default App;

// const initialState = {
//   count1: 0,
//   count2: 0,
// };

// const useValue = () => useState(initialState);

// const Context = createContext(null);

// const useGlobalState = () => {
//   const value = useContext(Context);
//   if (value === null) throw new Error("Please add GlobalStateProvider");
//   return value;
// };

// const GlobalStateProvider = ({ children }) => (
//   <Context.Provider value={useValue()}>{children}</Context.Provider>
// );

// const Counter = ({ name }) => {
//   const [state, setState] = useGlobalState();
//   const count = state[name] || 0;
//   const increment = () => {
//     setState({ ...state, [name]: count + 1 });
//   };
//   const decrement = () => {
//     setState({ ...state, [name]: count - 1 });
//   };
//   return (
//     <div>
//       {count}
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//     </div>
//   );
// };

// const App = () => (
//   <GlobalStateProvider>
//     <h1>Count1</h1>
//     <Counter name="count1" />
//     {/* <Counter name="count1" /> */}
//     <h1>Count2</h1>
//     <Counter name="count2" />
//     {/* <Counter name="count2" /> */}
//   </GlobalStateProvider>
// );

// export default App;
