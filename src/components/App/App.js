import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RideBoostContext from '../../contexts/RideBoostContext'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SingupPage/SignupPage'
import DemoPage from '../../routes/DemoPage/DemoPage'
import UserDashboard from '../../routes/UserDashboard/UserDashboard'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Footer from '../Footer/Footer'
import PublicRoute from '../../utils/PublicRoute'
import PrivateRoute from '../../utils/PrivateRoute'
import Content from '../../content'
import airports from '../../airport_store'
import TokenService from '../../services/token-service'

export default class App extends React.Component {
  static contextType = RideBoostContext

  constructor() {
    super()
    this.state = {
      content: Content,
      airports: airports,
      loggedIn: false,
      setLoggedIn: (loggedIn) => this.setState({ loggedIn }),
    }
  }

  componentDidMount() {
    this.setState({ loggedIn: TokenService.hasAuthToken() })
  }

  render() {
    const content = this.state.content
    return (
      <RideBoostContext.Provider value={this.state}>
        <Header content={content} />
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <PublicRoute exact path={'/signup'} component={SignupPage} />
          <PublicRoute exact path={'/login'} component={LoginPage} />
          <PublicRoute exact path={'/demopage'} component={DemoPage} />
          <PrivateRoute
            exact
            path={'/dashboard/:user_id'}
            component={UserDashboard}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer content={content} />
      </RideBoostContext.Provider>
    )
  }
}
