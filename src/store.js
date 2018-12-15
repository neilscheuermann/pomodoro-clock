import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger

// CONSTANTS

// ACTION CREATORS

// REDUCER
const initialState = {
  breakLength: 5,
  sessionLength: 25
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    loggingMiddleware
  ))
)
