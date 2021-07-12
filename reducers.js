import { combineReducers } from 'redux'
import * as types from './types'
import Cookies from 'js-cookie'
// COUNTER REDUCER
const counterReducer = (state = { cartItems: JSON.parse(getNum() || "[]") }, { type,payload }) => {
  switch (type) {
    case types.ADD:
       Cookies.set("cart", JSON.stringify(payload.cart));
      return { cartItems: payload.cart }
    case types.REMOVE:
      Cookies.set("cart", JSON.stringify(payload.cart));
      return { cartItems: payload.cart }
    case types.RESET:
      return 0
    default:
      return { cartItems: state.cartItems }
  }
}


function getNum() {
  
    return Cookies.get("cart")
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers)
