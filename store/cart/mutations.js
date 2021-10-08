export const IN_PROCESSING = (state, payload) => {
  state.is_processing = payload;
}

export const SET_CART = (state, payload) => {
  state.items = payload;
}

export const SET_CART_TOTAL_PRICE = (state, payload) => {
  state.totalPrice = payload;
}

export const SET_COLLAPSE = (state, payload) => {
  state.collapse = payload;
}
