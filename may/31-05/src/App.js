import React from "react";
// import { add } from "./helpers";
// import List from "./components/List";
import Data from "./data.json";

console.log(Data);

function App() {
  // function print() {
  //   return "Hey I am inner function";
  // }
  //const doSomething = () => 3 + 44 / 23;
  //const users = Data.map((obj) => <h4 key={obj.id}>{obj.name}</h4>);

  const posts = Data.map((obj) => {
    const {
      id,
      owner,
      avatar,
      title,
      text,
      likes,
      comments,
      share,
      createdAt,
    } = obj;
    return (
      <div className="posts" key={id}>
        <h2>
          {avatar} {owner} <span>{title}</span>
          <span>{createdAt}</span>
        </h2>
        <h4>{text}</h4>
        <div>
          <span>👍🏻 {likes}</span>
          <span>💬 {comments}</span>
          <span>📨 {share}</span>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      {
        //{doSomething()}
        //   <List print={print}  name="Hadi" age="31"/>
        //   {add(22, 3)}
        //   {users}
      }
      {posts}
    </React.Fragment>
  );
}
export default App;
