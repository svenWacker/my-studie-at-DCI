import React, { useRef, Fragment } from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  const userTextInput = useRef(null);
  const count = useRef(0);

  const changeBg = () => (userTextInput.current.style.backgroundColor = "red");
  const getMe = () => {
    console.log(userTextInput);
    userTextInput.current.focus();
  };
  return (
    <Fragment>
      <input type="text" ref={userTextInput} />
      <button onClick={getMe}>Get me focused</button>
      <button onClick={changeBg}>Change Bg</button>
      <h6>Counter with Ref, No Re-render</h6>
      <button onClick={() => count.current++}>{count.current}</button>
      {console.log(count.current)}
      <h6>Counter with State</h6>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </Fragment>
  );
}

export default App;
