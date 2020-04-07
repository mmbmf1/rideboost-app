import React from "react";
import ValidatioError from "../../utils/ValidationError";
import RideBoostContext from "../../contexts/RideBoostContext";
import AuthApiService from "../../services/auth-api-service";

export default class SignupForm extends React.Component {
  static contextType = RideBoostContext;
  constructor() {
    super();
    this.state = {
      error: "",
      hidden: true,
    };
  }

  static defaultProps = {
    onSignupSuccess: () => {},
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      user_email,
      password,
      zip_code,
      airport,
    } = e.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_email: user_email.value,
      password: password.value,
      zip_code: zip_code.value,
      icao: airport.value,
    })
      .then((user) => {
        first_name.value = "";
        last_name.value = "";
        user_email.value = "";
        password.value = "";
        zip_code.value = "";
        airport.value = "";
        this.props.onSignupSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const error = this.state.error;
    const airports = this.context.airports;
    return (
      <form
        className="registration-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <ValidatioError message={error} />
        <label htmlFor="first_name"></label>
        <input type="text" name="first_name" placeholder="First Name" />
        <label htmlFor="last_name"></label>
        <input type="text" name="last_name" placeholder="Last Name" />
        <label htmlFor="zip_code"></label>
        <input
          type="text"
          pattern="[0-9]{5}"
          name="zip_code"
          placeholder="5 digit ZIP code"
        />
        <div>
          <label htmlFor="airports"></label>
          <input
            type="text"
            name="airport"
            list="airport"
            placeholder="Choose a home airport"
          />
          <datalist id="airport" name="airport">
            {airports.map((airport, index) => (
              <option key={index} value={airport.ICAO}>
                {airport.Airport === null ? "" : airport.Airport}
              </option>
            ))}
          </datalist>
        </div>

        <label htmlFor="user_email"></label>
        <input type="email" name="user_email" placeholder="Email" />
        <label htmlFor="password"></label>
        <input
          type={this.state.hidden ? "password" : "text"}
          name="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <div className="show-container">
          <input type="checkbox" onChange={this.toggleShow} />
          <label>Show Password</label>
        </div>
        <input type="submit" value="Create Account" />
      </form>
    );
  }
}
