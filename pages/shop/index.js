import { useSelector, useDispatch } from 'react-redux'
import {  ADD_TO_CART , REMOVE_ITEM } from '../../actions'
import Card from "../../components/card/Card"
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
export default function ShopPage() {
    const size = useWindowSize();
      const [active, setActive] = useState(false);
      const [filterMenu, setfilterMenu] = useState(false);
      var count = useSelector((state) => state.counter);

     count=count.cartItems;
    const items=[
     {
       name:"Prm Hoodie",
       first:"Premium",
       last:"Hoddie",
       sizes:[{name:"XS",class:""},{name:"S",class:""},{name:"M",class:"active"},{name:"L",class:""},{name:"XL",class:""}],
       img:"https://mockup-api.teespring.com/v3/image/Z0-2E6B__BJVo_7vDr9bByjWBkA/800/800.jpg",
        Price:"7820"
    }
     ,{
       name:"Hoodie",
       first:"Standard",
       last:"Hoddie",
       sizes:[{name:"XS",class:""},{name:"S",class:""},{name:"M",class:"active"},{name:"L",class:""},{name:"XL",class:""}],

       img:"https://mockup-api.teespring.com/v3/image/oUNxfRal_rzL6F7Ib5R-2OH7SPI/800/800.jpg",
        Price:"3820"
    }
    ,{
       name:"T shirt",
       first:"Premium",
       sizes:[{name:"XS",class:""},{name:"S",class:""},{name:"M",class:"active"},{name:"L",class:""},{name:"XL",class:""}],
       last:"Shirt",
       img:"https://mockup-api.teespring.com/v3/image/-LeI5kHzz2efj2CgR5HiVlKfTJw/800/800.jpg",
        Price:"2620"
    }
    ,{
       name:"Face mask",
       first:"Face",
       sizes:[{name:"XS",class:""},{name:"S",class:""},{name:"M",class:"active"},{name:"L",class:""},{name:"XL",class:""}],
       last:"Mask",
       img:"https://mockup-api.teespring.com/v3/image/JLXRk5StSXGUStGRFawJBmMuNwY/300/300.jpg",
        Price:"520"
    }
    
    ,{
       name:"Tote Bag",
       first:"Organic",
       last:"Bag",
        sizes:[{name:"XS",class:""},{name:"S",class:""},{name:"M",class:"active"},{name:"L",class:""},{name:"XL",class:""}],
       img:"https://mockup-api.teespring.com/v3/image/iOQqbPCcdfRZJwZzDXArEVEg5fo/800/800.jpg",
        Price:"1120"
    }
     ,{
         name:"Water bottle",
         first:"Water",
       last:"Bottle",
        sizes:[{name:"XS",class:""},{name:"S",class:""},{name:"M",class:"active"},{name:"L",class:""},{name:"XL",class:""}],
         img:"https://mockup-api.teespring.com/v3/image/tnVYSYvseS8_QT6EQZdzP4uGmiA/300/300.jpg",
         Price:"720"
    }
    ]
  
  const handleClick = () => {
        setfilterMenu(false);

    setActive(!active);
  };
   const handleClickFilter = () => {
        setActive(false);

    setfilterMenu(!filterMenu);
  };
  return(
    <>
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-0 mb-0 px-6 bg-gray-300  ">
  <div className="col-span-8 lg:col-span-2 order-1 lg:order-none ">
    <div className={`${
            size.width >=1024 ? '' : 'hidden'
          }   `}
 >
    
  <li className="block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 underline">
<a className="block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4" >Colaborations</a>
 <div>
        <Link href="/">
          <a  className="text-black hover:bg-gray-700 hover:text-white  text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">WT/R X Nike</a>
        </Link>
      </div>
      <div>
        <Link href="/shop">
          <a className="text-black hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">WT/R X Adidas</a>
        </Link>
      </div>
      <div>
        <Link href="/shop/apparels">
          <a  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">WT/R X LFC</a>
        </Link>
      </div>
</li>
  </div>
  <div className="lg:hidden ">
         <span className="rounded-md shadow-sm">
         <button onClick={handleClick}  type="button" className="flex justify-between w-full rounded-sm border border-accent-3 px-2 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-4 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
             Colaborations<svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
             </button>
          </span>
          <div
          className={`${
            active ? '' : 'hidden'
          }   `}
        >
  <div>
    <div className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-400">
      <div>
        <Link href="/">
          <a  className="text-black hover:bg-gray-700 hover:text-white  text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">WT/R X Nike</a>
        </Link>
      </div>
      <div>
        <Link href="/shop">
          <a className="text-black hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">WT/R X Adidas</a>
        </Link>
      </div>
      <div>
        <Link href="/shop/apparels">
          <a  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">WT/R X LFC</a>
        </Link>
      </div>
      <div>
      </div>
      </div>
  </div> 
   </div>
   </div>
   </div>
  <div className="col-span-8 order-3 lg:order-none ">
     <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
      {
             items.map((item,index)=>(
       <a key={index} className="ProductCard_root__2we6k ProductCard_simple__thMup animated fadeIn">
           <Card item={item} active={Has(count,item)} />
       </a>
       ))
     }
       
       
     </div>
  </div>
   <div className="col-span-8 lg:col-span-2 order-1 lg:order-none ">
     <div className={`${
            size.width >=1024 ? '' : 'hidden'
          }   `}
 >
    
  <li className="block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 underline">
<a className="block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4" >Filter by</a>
 <div>
        <Link href="/">
          <a  className="text-black hover:bg-gray-700 hover:text-white  text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Price</a>
        </Link>
      </div>
      <div>
        <Link href="/shop">
          <a className="text-black hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">Release date</a>
        </Link>
      </div>
</li>
  </div>
     <div className="lg:hidden ">
         
           <div
          className={`${
            filterMenu ? '' : 'hidden'
          }   `}
        >
  <div>
    <div className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-400">
      <div>
        <Link href="/">
          <a  className="text-black hover:bg-gray-700 hover:text-white  text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Price</a>
        </Link>
      </div>
      <div>
        <Link href="/shop">
          <a className="text-black hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">Release date</a>
        </Link>
      </div>
     
        <div>
        </div>
        </div>
        </div>
      </div>
   </div>
  </div>
</div>
    </>
    )
}   
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function Has(arr,item) {
   for (var i = 0; i <arr.length; i++) {
          if(arr[i].img===item.img){
            return true;
          }
        }
        return false;
}