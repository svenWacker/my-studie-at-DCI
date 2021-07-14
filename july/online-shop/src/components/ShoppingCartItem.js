import React from "react";
// step 1
import { removeOne, removeAll } from "../actions";
import { connect } from "react-redux";

const ShoppingCartItem = (props) => {
  // step 3
  const { item, removeOne, removeAll } = props;

  return (
    <li>
      <p>
        {item.productName} | € {item.price} | x {item.quantity}
      </p>
      <div>
        <button onClick={() => removeOne(item)}>Remove One</button>
        <button onClick={() => removeAll(item)}>Remove All</button>
      </div>
    </li>
  );
};

// step 2
const mapStoreToProps = (store) => ({});
const mapActionsToProps = {
  removeOne,
  removeAll,
};

export default connect(mapStoreToProps, mapActionsToProps)(ShoppingCartItem);
