import React from "react";
import { Link } from "react-router-dom";
const Product = ({ data }) => {
  const items = data.map((item) => {
    const { id, productName, icon, inventory, price } = item;
    return (
      <li key={id}>
        <Link to={`/product/${id}`}>
          <h5>{productName}</h5>
        </Link>
        <i>{icon}</i>
        <h6>{price}€</h6>
        <h6>{inventory} items in stock</h6>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Products </h3>
      <ul>{items}</ul>
    </React.Fragment>
  );
};

export default Product;
