export const IN_PROCESSING = (state, payload) => {
  state.is_processing = payload;
}

export const SET_CART = (state, payload) => {
  console.log(state.totalPrice)
  let product = payload;
  let cart = state.items;
  var dataCart = cart !== null ? cart : [];

  let findCartItem = dataCart.find((p) => p.product_id === product.product_id);

  if (dataCart.length === 0 || !findCartItem) {
    dataCart.push(product)
  } else if (findCartItem) {
    product.subtotal += findCartItem.subtotal
    product.quantity += findCartItem.quantity
    dataCart.splice(
      dataCart.findIndex((p) => p.product_id === product.product_id),
      1,
      product
    )
  }
  state.items = dataCart;
  state.totalPrice = state.items.reduce(function (accumulator, current) {
    return accumulator + current.subtotal;
  }, 0);
}

export const SET_CART_TOTAL_PRICE = (state, payload) => {
  state.totalPrice = payload;
}

export const SET_COLLAPSE = (state, payload) => {
  state.collapse = payload;
}
