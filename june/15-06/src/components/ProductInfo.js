import React from "react";
import { Link } from "react-router-dom";

const ProductInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id == props.id);
  console.log(selectedItem);

  const moreInfo = selectedItem.length
    ? selectedItem.map((item) => {
        const { id, productName, icon, inventory, price } = item;
        return (
          <li key={id}>
            <h2>{productName} </h2>
            <h5>{price}€</h5>
          </li>
        );
      })
    : "Sorry, something went wrong";

  return (
    <React.Fragment>
      <h3>Product farther infos</h3>
      <ul>{moreInfo}</ul>
      <Link to="/product" style={{ textDecoration: "none" }}>
        Back
      </Link>
    </React.Fragment>
  );
};

export default ProductInfo;
