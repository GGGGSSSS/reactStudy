import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case "MINUS":
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer, applyMiddleware(thunk, logger))

export default store