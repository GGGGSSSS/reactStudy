import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class RouterPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <Router >
          <Link to="/">首页 </Link>
          <Link to="/user">用户中心 </Link>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/user' component={UserPage} />
            <Route render={() => <div>404</div>} />
          </Switch>
        </Router>
      </div>
      //Switch的效果是从上到下匹配出符合要求的那一个Route去显示 只显示一个
    );
  }
}

export default RouterPage;

class HomePage extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}

class UserPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

