import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './css/NavBar.css';
import { matchPath } from 'react-router'

import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Pins from './components/Pins.js'
import User from './components/User.js'

import { getUser } from "./util/util.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      userPic: "",
      boards: [],
    }
  }

  componentDidMount() {
    const match = matchPath(this.props.location.pathname, {
      path: "/username/:id",
      exact: true,
      strict: false
    })

    if (match) {
      getUser(match.params.id)
      .then(response =>
      this.setState({ username: response.data.data }));
    }
  }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/pins/:id' component={Pins}/>

        <Route path='/username/:id' render={props => (
            <User
              {...props} username={username}
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
