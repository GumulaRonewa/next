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
const totalReducer = (state = parseInt(getTotal() || "0"), { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      var total=parseInt(state) +parseInt(payload.price);
      Cookies.set("total", JSON.stringify(total));
      return total;
    case types.DECREMENT:
      var check=parseInt(state) -parseInt(payload.price);
      var total= check<=0 ? 0: check;
      Cookies.set("total", JSON.stringify(total));
      return total;
    default:
      return parseInt(state)
  }
}
const deliveryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.DELIVERY:
      
      return payload.details;
    default:
      return state;
  }
}
function getTotal() {
  
    return Cookies.get("total")
}
// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  total: totalReducer,
  delivery: deliveryReducer,
}

export default combineReducers(reducers)
