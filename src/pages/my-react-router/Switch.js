import React, { Component } from 'react';
import matchPath from './matchPath';
import RouterContext from './RouterContext';

export class Switch extends Component {
  state = {}
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context.history
          let element, match
          const { children } = this.props
          React.Children.forEach(children, child => {
            if (match == null && React.isValidElement(child)) {
              element = child
              const path = child.props.path
              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : context.match
            }
          })
          return match ? React.cloneElement(element, {}) : null
          // const { children } = this.props
          // React.Children.forEach(children, child => {
          //   if (React.isValidElement(child) && (matchPath(location.pathname, child.props.path))) {
          //     element = child
          //     return React.cloneElement(element, {})
          //   }
          // })
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Switch;