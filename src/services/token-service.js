import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
    // window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  saveUserId(user_id) {
    window.sessionStorage.setItem(config.USER_ID, user_id);
    // window.localStorage.setItem(config.USER_ID, user_id);
  },

  getUserId() {
    return window.sessionStorage.getItem(config.USER_ID);
    // return window.localStorage.getItem(config.USER_ID);
  },

  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
    // return window.localStorage.getItem(config.TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
    // window.localStorage.removeItem(config.TOKEN_KEY);
  },

  clearUserId() {
    window.sessionStorage.removeItem(config.USER_ID);
    // window.localStorage.removeItem(config.USER_ID);
  },
};

export default TokenService;
