import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";
import { Link } from "react-router-dom";

const ProductListItem = (props) => {
  const { item, addProduct } = props;

  return (
    <li>
      <span>
        <Link to={`/product/${item.id}`} key={item.id}>
          <h4>{item.productName}</h4> €{item.price}
        </Link>
        <h5>
          {item.inventory > 0 ? `x ${item.inventory} items left` : "sold out"}
        </h5>
      </span>
      <i>{item.icon}</i>
      <div>
        <button
          onClick={() => addProduct(item)}
          disabled={item.inventory === 0}
        >
          {item.inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
      </div>
    </li>
  );
};

const mapStoreToProps = (store) => {};
const mapActionsToProps = {
  addProduct,
};
export default connect(mapStoreToProps, mapActionsToProps)(ProductListItem);
