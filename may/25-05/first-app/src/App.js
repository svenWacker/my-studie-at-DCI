function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="header" id="h1">
        Hello World, this is my first React App
      </h1>
      {console.log("Hi")}
      <h2>Second heading</h2>
      <p>paragraph</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
      </form>
      <img className="pic" src="./img/eiffel-tower.jpg" alt="Eiffel-Tower" />
    </div>
  );
}

export default App;
