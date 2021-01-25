import React, { Component } from 'react';
import store from '../../store';

class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('state变化了')
      this.forceUpdate()
    })
  }
  render() {
    console.log(store)
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => { store.dispatch({ type: 'ADD' }) }}>button</button>
      </div>);
  }
}

export default ReduxPage;