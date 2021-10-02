import AppURL from "@/api/AppURL";
import axios from "axios";

export const login = ({ commit }, formData) => {
  commit('IN_PROCESSING', true)
  return new Promise((resolve, reject) => {
    return axios.post(AppURL.login, formData)
      .then(res => {
        if (res.status === 200 && res.data.access_token) {
          commit('SET_IS_AUTH', true)
          commit('SET_TOKEN', res.data.access_token)
          commit('SET_USER_INFO', res.data.user)
          commit('IN_PROCESSING', false)
        }
        commit('IN_PROCESSING', false)
        resolve(res);
      }, response => {
        // error in loading data
        reject()
      })
  })

}
