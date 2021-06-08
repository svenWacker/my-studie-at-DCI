import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";

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
    let textToUrl = encodeURIComponent(userInput);
    console.log(textToUrl);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;

    // fetch(endpoint)
    // .then((res)=> res.json())
    // .then((data)=>setResults(data))

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log("You had an ${err}"));
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
      <Country results={results} />
    </React.Fragment>
  );
};

export default App;
