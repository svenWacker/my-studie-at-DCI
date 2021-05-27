import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDos from "./components/ToDos";

function App() {
  const [list, setList] = useState([]);
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <ToDos />
      <Footer />
    </React.Fragment>
  );
}

export default App;
