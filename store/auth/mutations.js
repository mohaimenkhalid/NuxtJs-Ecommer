export const IN_PROCESSING = (state, payload) => {
  state.is_processing = payload;
}

export const SET_IS_AUTH = (state, payload) => {
  state.isAuth = payload;
}

export const SET_TOKEN = (state, payload) => {
  state.token = payload;
}

export const SET_USER_INFO = (state, payload) => {
  console.log(payload);
  state.user_info = payload;
}
