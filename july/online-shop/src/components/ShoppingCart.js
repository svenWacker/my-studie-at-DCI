import React, { Fragment } from "react";
import { connect } from "react-redux";
import { checkout, emptyCart } from "../actions";

import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const { items, checkout, emptyCart } = props;
  const itemsInCart = items.map((item) => (
    <ShoppingCartItem item={item} key={item.id} />
  ));
  return (
    <Fragment>
      <ul>{itemsInCart}</ul>
      <p>
        Total: €
        {items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </p>
      <div>
        <button onClick={emptyCart} disabled={!items.length}>
          Empty cart
        </button>
        <button onClick={checkout} disabled={!items.length}>
          Checkout
        </button>
      </div>
    </Fragment>
  );
};

const mapStoreToProps = (store) => ({
  items: Object.values(store.cart),
});
const mapActionsToProps = {
  checkout,
  emptyCart,
};
export default connect(mapStoreToProps, mapActionsToProps)(ShoppingCart);
