import React, { Fragment } from "react";
// step 6
import { increment, decrement } from "../actions";
import { connect } from "react-redux";

const ChildComponent = (props) => {
  const { store, increment, decrement } = props;

  return (
    <Fragment>
      <hr />
      {store.counter}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </Fragment>
  );
};
const mapStateToProps = (store) => {
  return {
    store,
  };
};
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent);
