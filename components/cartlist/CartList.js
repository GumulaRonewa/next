import Head from 'next/head'
import Image from 'next/image'
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux'

export default function CartList() {
  var count = useSelector((state) => state.counter);

   count=count.cartItems;
   
  return (
    <>
                  <div style={{zIndex:1,width:320}} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                            <div className='mycart' style={{display:"flex",flexDirection:"row"}}>
                               <div>
                               My Cart
                               </div>
                            </div>
                            {
                             count.map((item,index)=>(
                                      <div key={index}>
                                        <Item item={item} />
                                      </div>
                                      ))
                               }
            
                          <div className="itemprices" style={{display:"grid",placeItems:"center"}}>
                          <ul className="pb-2">
                              <li className="flex justify-between py-1">
                                <span>Subtotal</span><span>$329.99</span>
                              </li>
                              <li className="flex justify-between py-1">
                                <span>Taxes</span>
                                <span>Included in item price</span>
                              </li><li className="flex justify-between py-1">
                              <span>Shipping</span><span className="font-bold tracking-wide">ZAR 55</span>
                              </li></ul><div className="flex justify-between border-t border-accent-2 py-3 font-bold mb-2"><span>Total</span><span>$329.99</span></div><div>
                              <button className="bg-black font-medium text-white"  style={{width: "100%",height:40}}>Proceed to Checkout</button>
                              </div>
            </div>
          </div>
    </>
  )
}
