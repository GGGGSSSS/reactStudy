import React, { Component } from 'react';

//HOC: 是个函数 接受一个组件返回一个组件
// const Child = props => <div>Child</div>;

const foo = Cmp => props =>
  <div className='border' >
    <Cmp {...props} />
  </div>

@foo
@foo
class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}
// const Foo = foo(foo(Child))
class HocPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Child />
      </div>);
  }
}

export default HocPage;