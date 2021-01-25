import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  changeValue = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  setCount = () => {
    this.changeValue()
  }
  render() {
    return (
      <div>
        <h3>test</h3>
        <button onClick={this.setCount}>{this.state.count}</button>
      </div>
    );
  }
}

export default Test;