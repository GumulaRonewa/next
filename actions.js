import * as types from './types'

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const ADD_TO_CART = (product) => (dispatch, getState) => {
  const cartItems = getState().counter.cartItems;
        cartItems.push(product)
		dispatch({type: types.ADD,payload:{cart:cartItems} })

	}

	

// DECREMENT COUNTER BY 1
export const REMOVE_ITEM = (product) => (dispatch, getState) => {
  const cartItems = getState().counter.cartItems.slice();
   const filteredItems = cartItems.filter(item => item !== product)

    dispatch({type: types.REMOVE,payload:{cart:filteredItems} })

  }

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })
