import React from 'react';
import BrowserRouter from "./BrowserRouter";
import Link from './Link'
import Route from './Route'
import HomePage from '../pages/HomePage'
import Switch from './Switch';
import LoginPage from '../pages/LoginPage';

export default function RouterPage() {
  return (<div>
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/user">用户中心</Link>
      <Link to="/login">登录</Link>
      <Link to="/Search/123">Search</Link>
      <Switch>
        <Route exact path='/' location component={HomePage} />
        <Route path='/Search/:id' location component={Search} />
        <Route exact path='/login' location component={LoginPage} />
        <Route render={() => { <div>404</div> }} />
      </Switch>
    </BrowserRouter>
  </div>)
}

function Search(props) {
  console.log(props)
  const { id } = props.match.params
  return <div>
    <div>Search-{id}</div>
  </div>
}