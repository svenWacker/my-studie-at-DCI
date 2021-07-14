const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    product,
  };
};

const removeOne = (product) => {
  return {
    type: "REMOVE_ONE",
    product,
  };
};

const removeAll = (product) => {
  return {
    type: "REMOVE_ALL",
    product,
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};
const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

export { addProduct, removeOne, removeAll, checkout, emptyCart };
