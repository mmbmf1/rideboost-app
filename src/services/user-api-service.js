import TokenService from "../services/token-service";
import config from "../config";

const UserApiService = {
  getUserDashboard(user_id) {
    return fetch(`${config.API_ENDPOINT}/user/dashboard/${user_id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default UserApiService;
