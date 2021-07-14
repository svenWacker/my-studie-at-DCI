import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const ProductInfo = (props) => {
  const { store, id } = props;
  // console.log(store);
  const product = store.products[id];
  // console.log(product);
  return (
    <div>
      <h2>
        {product.productName} <i>{product.icon}</i>
      </h2>
      <h4>{product.price}€</h4>
      <Link to="/product">Back</Link>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  store,
});
export default connect(mapStoreToProps)(ProductInfo);
