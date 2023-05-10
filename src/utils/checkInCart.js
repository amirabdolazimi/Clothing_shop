// this fucntion specifies there is this product in Cart or not
export const checkInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};
