import React from "react";
import { Switch, Route } from "react-router-dom";
import RideBoostContext from "../../contexts/RideBoostContext";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import SignupPage from "../../routes/SingupPage/SignupPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import Footer from "../Footer/Footer";
import Content from "../../content";

export default class App extends React.Component {
  static contextType = RideBoostContext;

  constructor() {
    super();
    this.state = {
      content: Content
    };
  }

  render() {
    const content = this.state.content;
    return (
      <RideBoostContext.Provider value={content}>
        <Header content={content} />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/signup"} component={SignupPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer content={content} />
      </RideBoostContext.Provider>
    );
  }
}
