import React, { Component } from 'react';
import KFormCreate from '../components/KFormCreate';

@KFormCreate
class MyFormPage extends Component {
  submit = () => { console.log('submit') };
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>MyFormPage</h3>
        <input type='text' id='ut' placeholder='plz type ur name' />
        <input type='password' placeholder='plz type ur password' />
        <button onClick={this.submit}>提交</button>
      </div>);
  }
}


export default MyFormPage;