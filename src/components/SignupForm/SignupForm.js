import React from "react";
import ValidatioError from "../../utils/ValidationError";
import RideBoostContext from "../../contexts/RideBoostContext";
import AuthApiService from "../../services/auth-api-service";
// import AirportOptions from "./AirportOptions/AirportOptions";

export default class SignupForm extends React.Component {
  static contextType = RideBoostContext;
  constructor() {
    super();
    this.state = {
      error: "",
      hidden: true
    };
  }

  static defaultProps = {
    onSignupSuccess: () => {}
  };

  toggleShow = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      user_email,
      password,
      zip_code,
      airport
    } = e.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_email: user_email.value,
      password: password.value,
      zip_code: zip_code.value,
      icao: airport.value
    })
      .then(user => {
        first_name.value = "";
        last_name.value = "";
        user_email.value = "";
        password.value = "";
        zip_code.value = "";
        airport.value = "";
        this.props.onSignupSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const error = this.state.error;
    const airports = this.context.airports;
    return (
      <form className="registration-form" onSubmit={e => this.handleSubmit(e)}>
        <ValidatioError message={error} />
        <label htmlFor="first_name">First Name:</label>
        <input type="text" name="first_name" />
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" name="last_name" />
        <label htmlFor="zip_code">ZIP Code:</label>
        <input type="text" name="zip_code" />
        <div>
          <label htmlFor="airports">Choose a home airport:</label>
          <input type="text" name="airport" list="airport" />
          <datalist id="airport" name="airport">
            {airports.map((airport, index) => (
              <option key={index} value={airport.ICAO}>
                {airport.Airport === null ? "" : airport.Airport}
              </option>
            ))}
          </datalist>
        </div>

        <label htmlFor="user_email">Email Address:</label>
        <input type="email" name="user_email" />
        <label htmlFor="password">Password:</label>
        <input type={this.state.hidden ? "password" : "text"} name="password" />
        <div>
          <input type="checkbox" onChange={this.toggleShow} />
          <label>Show Password</label>
        </div>
        <input type="submit" value="Create Account" />
      </form>
    );
  }
}
