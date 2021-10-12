export const setCart = ({ commit }, product) => {
  return new Promise((resolve, reject) => {
    commit('SET_CART', product)
    commit('SET_COLLAPSE', true)
    resolve(true);
  })
}

export const updateCart = ({commit}, payload) => {
  commit('SET_UPDATE_CART', payload)
}

export const deleteCart = ({commit}, productId) => {
  return new Promise((resolve, reject) => {
    commit("DELETE_CART", productId)
    resolve();
  })
}

export const setCollapse = () => {

}
