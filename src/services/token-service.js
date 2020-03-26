import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  saveUserId(user_id) {
    window.localStorage.setItem(config.USER_ID, user_id);
  },

  getUserId() {
    return window.localStorage.getItem(config.USER_ID);
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },

  clearUserId() {
    window.localStorage.removeItem(config.USER_ID);
  }
};

export default TokenService;
