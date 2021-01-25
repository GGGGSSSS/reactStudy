import React, { Component } from 'react';
import matchPath from './matchPath';
import RouterContext from './RouterContext';

class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { path, component, children, render } = this.props
          // console.log(context)
          const match = matchPath(context.history.location.pathname, path)
          const props = {
            ...context, match
          }
          // console.log(match)

          //match 渲染children component render
          //不match 渲染children
          return <RouterContext.Provider value={props}>
            {match
              ? children
                ? typeof children === 'function'
                  ? children(props)
                  : children
                : component
                  ? React.createElement(component, props)
                  : render
                    ? render(props)
                    : null
              : typeof children === 'function'
                ? children(props)
                : null}
          </RouterContext.Provider>
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Route;