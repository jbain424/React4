import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './css/NavBar.css';
import { matchPath } from 'react-router'

import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Pins from './components/Pins.js'
import User from './components/User.js'
import Boards from './components/Boards.js'

import { getUser, getUserPins } from "./util/util.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      userPic: "",
      boards: [],
      userPins: [],

    }
  }

  componentDidMount() {
    const match = matchPath(this.props.location.pathname, {
      path: "/username/:id",
      exact: true,
      strict: false
    })
    getUser(match.params.id)
    .then(response => {
      this.setState(
        { username: response.data.data }
      )
    });

    getUserPins(match.params.id)
    .then(response => {
      this.setState(
        { userPins: response.data.data }
      )
    })

  }

  render() {
    const { username, userPins } = this.state;
    return (
      <div className="App">
      <Navbar />
      <main className="userpage">
        <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/pins/:id' component={Pins}/>

        <Route path='/username/:id' render={props => (
            <User
              {...props} username={username}
            />
          )}
        />
      <Route path='/username/:id/pins' render={props => (
            <User
              {...props} userPins={userPins}
            />
          )}
        />
      </Switch>
      </main>
      </div>
    );
  }
}

export default withRouter(App);
