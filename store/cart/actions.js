export const setCart = ({ commit }, product) => {
  return new Promise((resolve, reject) => {
    commit('SET_CART', product)
    commit('SET_COLLAPSE', true)
    resolve(true);
  })
}

export const setCollapse = () => {

}
