import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import { stat } from 'fs';

// CONSTANTS
const INCREMENT_BREAK = 'INCREMENT_BREAK';
const DECREMENT_BREAK = 'DECREMENT_BREAK';
const INCREMENT_SESSION = 'INCREMENT_SESSION';
const DECREMENT_SESSION = 'DECREMENT_SESSION';

// ACTION CREATORS
export const incrementBreak = () => ({
  type: INCREMENT_BREAK
})

export const decrementBreak = () => ({
  type: DECREMENT_BREAK
})

export const incrementSession = () => ({
  type: INCREMENT_SESSION
})

export const decrementSession = () => ({
  type: DECREMENT_SESSION
})

// REDUCER
const initialState = {
  breakLength: 5,
  sessionLength: 25
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return { ...state, breakLength: state.breakLength + 1 }
    case DECREMENT_BREAK:
      return { ...state, breakLength: state.breakLength - 1 }
    case INCREMENT_SESSION:
      return { ...state, sessionLength: state.sessionLength + 1 }
    case DECREMENT_SESSION:
      return { ...state, sessionLength: state.sessionLength - 1 }
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
