export const setCart = ({ commit }, product) => {
  return new Promise((resolve, reject) => {
    commit('SET_CART', product)
    resolve(true);
  })
}

export const setCollapse = () => {

}
