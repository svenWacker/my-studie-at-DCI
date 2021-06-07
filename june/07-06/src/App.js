// import "./App.css";
// import React, { createContext, useContext, useState } from "react";
// import List from "./components/List";

import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  //const [log, setLog] = useState(false);
  useEffect(() => {
    console.log("I am Ready ");
  }, [count1]);

  return (
    <React.Fragment>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <List setCount={setCount1} />
      <h3>{count1}</h3>
    </React.Fragment>
  );
}
/*
Stop useEffect from running on every render -->> []
Only Run Once, on Mount -->> []
Run useEffect on State Change -->> [...state]
Run useEffect When a Prop Changes -->> [count]
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
