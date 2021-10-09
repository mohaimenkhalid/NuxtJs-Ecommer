export const setCart = ({ commit, state, getters }, product) => {
  let cart = getters.getCart;
  var dataCart = cart !== null ? cart : [];

  let findCartItem = dataCart.find((p) => p.product_id === product.product_id);

  if (dataCart.length === 0 || !findCartItem) {
    dataCart.push(product)
  } else if (findCartItem) {
    product.subtotal += findCartItem.subtotal
    product.quantity += findCartItem.quantity
    //error goes here
    dataCart.splice(
      dataCart.findIndex((p) => p.product_id === product.product_id),
      1,
      product
    )
  }
  commit('SET_CART', dataCart)
  console.log(getters.getCart)
}

export const setCollapse = () => {

}
