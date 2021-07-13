import Head from 'next/head'
import Image from 'next/image'
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux'

export default function CartList() {
  var count = useSelector((state) => state.counter);
  var total = useSelector((state) => state.total);
  console.log(total);
   count=count.cartItems;
      count =count.reverse()
    
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
                     <div className="flex-shrink-0 px-6 py-6 sm:px-6 sticky z-20 bottom-0 w-full right-0 left-0 bg-accent-0 border-t text-sm">
                          <ul className="pb-2">
                              <li className="flex justify-between py-1">
                                <span>Subtotal</span><span> ZAR 32499</span>
                              </li>
                              <li className="flex justify-between py-1">
                                <span>Taxes</span>
                                <span>ZAR 4200</span>
                              </li><li className="flex justify-between py-1">
                              <span>Shipping</span><span className="font-bold tracking-wide">ZAR 100</span>
                              </li></ul><div className="flex justify-between border-t border-accent-2 py-3 font-bold mb-2"><span>Total</span><span>ZA 37299</span></div><div>
                              <button className="bg-black font-medium text-white"  style={{width: "100%",height:40}}>Proceed to Checkout</button>
                              </div></div>
            </div>
          </div>
    </>
  )
}
