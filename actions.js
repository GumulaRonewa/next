import * as types from './types'



export const SUB_PRICE = (product) => (dispatch, getState) => {
  var Price = product.Price;
    dispatch({type: types.DECREMENT,payload:{price:Price} })

  }
export const ADD_PRICE = (product) => (dispatch, getState) => {
  var Price = product.Price;
    dispatch({type: types.INCREMENT,payload:{price:Price} })

  }
export const ADD_TO_CART = (product) => (dispatch, getState) => {
  const cartItems = getState().counter.cartItems;
        cartItems.push(product)
		dispatch({type: types.ADD,payload:{cart:cartItems} })

	}
export const DELIVERY = (delivery) => (dispatch, getState) => {
 
    dispatch({type: types.DELIVERY,payload:{details:delivery} })

  }
export const PAYMENT = (Payment) => (dispatch, getState) => {
 
    dispatch({type: types.PAYMENT,payload:{payment:Payment} })

  }
	

export const REMOVE_ITEM = (product) => (dispatch, getState) => {
  const cartItems = getState().counter.cartItems;
   const filteredItems = cartItems.filter(item => item.img !== product.img)

    dispatch({type: types.REMOVE,payload:{cart:filteredItems} })

  }

export const resetCount = () => ({ type: types.RESET })
