import React, { Component } from 'react';
import { connect } from 'react-redux'

export default connect(
  //mapStateToProps 把state映射到props
  // state => ({ num: state }),
  (state, ownProps) => {
    console.log('ownProps', ownProps)
    return {
      count: state
    }
  }
  //mapDispatchToProps 把dispatch映射到props
  ,
  // {
  //   add: () => ({ type: "ADD" })
  // }
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
