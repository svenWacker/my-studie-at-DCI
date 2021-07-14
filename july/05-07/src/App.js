import React from "react";
import { add, display } from "./helpers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLogged: false,
      data: { name: "Sven", age: 46 },
    };
    this.sum = function () {
      console.log("Hi I am functions built in const");
    };
    // this.sum= ()=>{}
    this.handleSub = this.handleSub.bind(this);
  }
  // Es6 Function
  print = () => console.log("Hi I am Es6 function and I don't need to be bind");
  // Function need to be bind
  handleSub() {
    console.log("Hi I need to be bind");
  }

  render() {
    this.newUser = () => console.log("Hi I am inside render ");
    this.newUser();
    return (
      <div>
        {this.print()}
        {this.sum()}
        {this.handleSub()}
        {display("Hi, I like React")}
        <h1>
          Hi I am a class co {this.state.data.name}, {add(14, 5)}
        </h1>
      </div>
    );
  }
}
