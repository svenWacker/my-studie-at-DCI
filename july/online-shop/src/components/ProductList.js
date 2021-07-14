import React from "react";
import { connect } from "react-redux";

import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const { items } = props;
  console.log(items);
  const allItems = items.map((item) => (
    <ProductListItem item={item} key={item.id} />
  ));
  return <ul className="product">{allItems}</ul>;
};

const mapStoreToProps = (store) => ({
  items: Object.values(store.products),
});
export default connect(mapStoreToProps)(ProductList);
