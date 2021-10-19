export const IN_PROCESSING = (state, payload) => {
  state.is_processing = payload;
}

export const SET_CART = (state, payload) => {
  let product = payload;
  let cart = state.items;
  var dataCart = cart !== null ? cart : [];

  let findCartItem = dataCart.find((p) => p.product_id === product.product_id);

  if (dataCart.length === 0 || !findCartItem) {
    dataCart.push(product)
  } else if (findCartItem) {
    product.subtotal = parseInt(product.subtotal) + parseInt(findCartItem.subtotal)
    product.quantity = parseInt(product.quantity) + parseInt(findCartItem.quantity)
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

export const SET_UPDATE_CART = (state, payload) => {

  let productId = payload.productId;
  let type = payload.type;
  let cart = state.items;
  var dataCart = cart !== null ? cart : [];

  let findCartItem = dataCart.find((p) => p.product_id === productId)
  if (type === 'increment') {
    findCartItem.quantity++;
    findCartItem.subtotal += parseInt(findCartItem.price);
  } else if (type === 'decrement') {
    findCartItem.quantity--;
    findCartItem.subtotal -= parseInt(findCartItem.price);
  }

  let cartIndex = dataCart.findIndex((p) => p.product_id === productId);
  if (findCartItem.quantity === 0) {
    dataCart.splice(cartIndex, 1)
  } else {
    dataCart[cartIndex].quantity = findCartItem.quantity;
    dataCart[cartIndex].subtotal = findCartItem.subtotal;
  }
  state.items = dataCart;
  state.totalPrice = state.items.reduce(function (accumulator, current) {
    return accumulator + current.subtotal;
  }, 0);
}

export const DELETE_CART = (state, productId) => {
  let cart = state.items;
  let findCartItem = cart.find((p) => p.product_id === productId)
  if (cart && findCartItem) {
    let cartIndex = cart.findIndex((p) => p.product_id === productId);
    cart.splice(cartIndex, 1)

    state.items = cart;
    state.totalPrice = state.items.reduce(function (accumulator, current) {
      return accumulator + current.subtotal;
    }, 0);
  }
}

export const REMOVE_CART = (state) => {
  state.items = [];
  state.totalPrice = 0;
}
