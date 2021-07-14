import { Fragment } from "react";
// step 6
import { connect } from "react-redux";
import { changeName } from "../actions";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  const { store, changeName } = props;
  return (
    <Fragment>
      {store.userName}&nbsp;
      <button onClick={() => changeName("Sven Uwe")}>Click me</button>
      <ChildComponent />
    </Fragment>
  );
};

const mapStateToProps = (store) => {
  return {
    store,
  };
};
const mapDispatchToProps = { changeName };

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
