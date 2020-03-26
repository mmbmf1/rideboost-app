import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    console.log(credentials);
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postUser(new_user) {
    return fetch(`${config.API_ENDPOINT}/auth/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(new_user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default AuthApiService;
