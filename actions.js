import * as types from './types'

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const SUB_PRICE = (product) => (dispatch, getState) => {
  var Price = product.Price;
    dispatch({type: types.DECREMENT,payload:{price:Price} })

  }
export const ADD_PRICE = (product) => (dispatch, getState) => {
  var Price = product.Price;
    dispatch({type: types.INCREMENT,payload:{price:Price} })

  }
// INCREMENT COUNTER BY 1
export const ADD_TO_CART = (product) => (dispatch, getState) => {
  const cartItems = getState().counter.cartItems;
        cartItems.push(product)
		dispatch({type: types.ADD,payload:{cart:cartItems} })

	}

	

// DECREMENT COUNTER BY 1
export const REMOVE_ITEM = (product) => (dispatch, getState) => {
  const cartItems = getState().counter.cartItems;
   const filteredItems = cartItems.filter(item => item.img !== product.img)

    dispatch({type: types.REMOVE,payload:{cart:filteredItems} })

  }

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })
