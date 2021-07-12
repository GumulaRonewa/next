import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import {useRouter} from "next/router"
import { useSelector, useDispatch } from 'react-redux'


 const MainNavigation = () => {
  const [active, setActive] = useState(false);
  const [userMenu, setuserMenu] = useState(false);
  const [cartView, setcartView] = useState(false);
      var count = useSelector((state) => state.counter);
         console.log(count);

   count=count.cartItems;
   var length=count.length;
  
  const handleClick = () => {

    setActive(!active);
  };
  const handleClickCart = () => {

    setcartView(!cartView);
  };
   const handleClickProfile = () => {
    setuserMenu(!userMenu);
  };
  return (
    <>
<nav className="bg-gray-100">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

    <div className="relative flex items-center justify-between h-16 ">

      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
           
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-start justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
           <Link href="/"  >
            <a className=" text-black px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
           </Link>
           <Link href="/shop">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop All</a>
            </Link>
            <Link href="/shop/apparels">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Apparel</a>
             </Link>
             <Link href="/shop/accessories">
            <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accessories</a>
           </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">

          {length} 
        </button>

        <div className="ml-3 relative">
          <div>
            <button onClick={handleClickProfile} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <Image width={35} height={35} className="h-8 w-8 rounded-full" src="https://e0.365dm.com/21/05/2048x1152/skysports-sadio-mane-liverpool_5377814.jpg" alt="" />
            </button>
          </div>

         <div
          className={`${
            userMenu ? '' : 'hidden'
          }   `}
        >
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Orders</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
    
     <div
          className={`${
            active ? '' : 'hidden'
          }   `}
        >
  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
    <Link href="/">
      <a  className="text-black hover:bg-gray-700 hover:text-white  text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
    </Link>
    <Link href="/shop">
      <a className="text-black hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">Shop All</a>
    </Link>
    <Link href="/shop/apparels">
      <a  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Apparel</a>
    </Link>
    <Link href="/shop/accessories">
      <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Accessories</a>
      </Link>
    </div>
  </div>
  </div>
</nav>
</>      
  );
};

export default MainNavigation;

