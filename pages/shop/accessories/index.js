import { useSelector, useDispatch } from 'react-redux'
import {  ADD_TO_CART , REMOVE_ITEM } from '../../../actions'
import Checkout from "../../../components/checkout/Checkout"

export default function ShopPage() {
    
  return(
    <>
     <Checkout />
    </>
    )
}   
