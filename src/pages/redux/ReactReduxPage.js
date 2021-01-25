import React, { Component } from 'react';
import { connect } from 'react-redux'
//这里是consumer provider在最顶层定义

export default connect(
  //mapStateToProps 把redux的值映射到props
  (state, ownProps) => {
    console.log('ownProps', ownProps)
    return {
      count: state
    }
  },
  //mapDispatchToProps 把redux的dispatch映射到props
  // {
  //   add: () => ({ type: "ADD" })
  // }
  (dispatch, ownProps) => {
    console.log('ownProps', ownProps)
    const res = {
      add: () => dispatch({ type: "ADD" }),
      minus: () => dispatch({ type: "MINUS" })
    }
    return {
      dispatch, ...res
    }
  }
)
  (
    class ReactReduxPage extends Component {
      render() {
        console.log('props', this.props)
        const { count, dispatch, add } = this.props
        return (
          <div>
            <h3>ReactReduxPage</h3>
            <p>{count}</p>
            <button onClick={add}>add</button>
          </div>
        );
      }
    }
  )
