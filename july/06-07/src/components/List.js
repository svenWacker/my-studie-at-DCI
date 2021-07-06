import React from "react";
import UserList from "./UserList";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  changeHandle = (e) => {
    this.setState({ userInput: e.target.value });
  };
  submitHandle = (e) => {
    e.preventDefault();
    const userText = this.state.userInput;
    this.setState({
      userInput: "",
      list: [
        ...this.state.list,
        { id: this.state.list.length, toDo: userText, done: false },
      ],
    });
  };
  check = (itemToCheck) => {
    const newArr = this.state.list.filter((item) => {
      if (item.id == itemToCheck) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ list: newArr });
  };
  remove = (itemToRemove) => {
    const newArr = this.state.list.filter((item) => item.id !== itemToRemove);
    this.setState({ list: newArr });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandle}
            placeholder="type something"
          />
          <input type="submit" value="Add" />
        </form>
        <UserList
          list={this.state.list}
          check={this.check}
          remove={this.remove}
        />
      </React.Fragment>
    );
  }
}
