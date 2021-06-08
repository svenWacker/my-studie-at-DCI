import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  function submitHandle(e) {
    e.preventDefault();
    let TextToUrl = encodeURIComponent(userInput);
    console.log(TextToUrl);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;

    axios(endPoint).then((res) => console.log(res));
  }

  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Write a country name"
        />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
};

export default App;
