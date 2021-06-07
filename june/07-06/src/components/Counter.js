import React, { useState } from "react";

const initialState = {
  count1: 0,
  count2: 0,
};

const Counter = ({ name }) => {
  const [state, setState] = useState(0);
  const count = state[name] || 0;
  const increment = () => {
    setState({ ...state, [name]: count + 1 });
  };
  const decrement = () => {
    setState({ ...state, [name]: count - 1 });
  };
  return (
    <div>
      {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
