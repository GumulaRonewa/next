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
const totalReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      var total=parseInt(state) +parseInt(payload.price);
      console.log(payload);
      Cookies.set("total", JSON.stringify(total));
      return total;
    default:
      return parseInt(state)
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  total: totalReducer,
}

export default combineReducers(reducers)
