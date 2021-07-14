import Image from 'next/image'
import { useState } from 'react';
import {  ADD_TO_CART , SUB_PRICE, REMOVE_ITEM, ADD_PRICE } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

export default function Card(props) {
  const [active, setActive] = useState(props.active);
  const [orange, setOrange] = useState(false);
  const [black, setBlack] = useState(true);
  const [green, setGreen] = useState(false);
  const [classN, setClassN] = useState(props.active ? "bottom clicked":"bottom");
  var item=props.item;
  var sizes=item.sizes;
   var count = useSelector((state) => state.counter);

     count=count.cartItems;  
     const dispatch = useDispatch();
  
   const handleClick = () => {

      dispatch(ADD_TO_CART(item))
      dispatch(ADD_PRICE(item))
        setClassN("bottom clicked");
        setActive(true);
       
     
  };
  const handleBlack = () => {
      setBlack(true);    
      setOrange(false);    
      setGreen(false);    
  };
   const handleGreen = () => {
      setBlack(false);    
      setOrange(false);    
      setGreen(true);    
  };
   const handleOrange = () => {
      setBlack(false);    
      setOrange(true);    
      setGreen(false);    
  };
  const handleRemove = () => {

      dispatch(REMOVE_ITEM(item))
      dispatch(SUB_PRICE(item))

        setClassN("bottom");
        setActive(false);
    }
	return(
<div className="wrapper">
       <div className="container">

      <div style={{ position: 'relative', height: '320px' }}>

              <Image  layout="fill" className=" mb-10" objectFit="cover" src={item.img} alt="" />
              
      </div>
      <div className={classN}>
      <div className="left">
        <div className="details">
          <h1>{item.name}</h1>
          <p>ZAR {item.Price}</p>
        </div>
        <button onClick={handleClick} className="buy"><span className="material-icons">add_shopping_cart</span></button>
      </div>

  <div className="right">
        <div className="done"><i className="material-icons">done</i></div>
        <div className="details">
          <h1>{item.name}</h1>
          <p>Added to your cart</p>
        </div>
        <button onClick={handleRemove} className="remove"><i className="material-icons">clear</i></button>
      </div>
      </div>
      </div>
  
<div className="inside">
    <div className="icon"><i className="material-icons">info_outline</i></div>
    <div className="contents">
        <div className="card-body">
      <div className="product-desc">
        <span className="product-title">
                {item.first}<b>{item.last}</b>
                <span className="badge">
                  New
                </span>
        </span>
        <span className="product-caption">
                Winter Collection
              </span>
        <span className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star grey"></i>
              </span>
      </div>
      <div className="product-properties">
        <span className="product-size">
                <h4>Size</h4>
                <ul className="ul-size">
                  {
                   sizes.map((item,index)=>(
                  <li key={index}><button >
                  <a className={item.class} >{item.name}
                   </a>
                  </button></li>
                 ))}
                </ul>
              </span>
        <span className="product-color">
                <h4>Colour</h4>
                <ul className="ul-color">
                   <div onClick={handleBlack}>
                  <li><a href="#" className={`${  black ? 'black active' : 'black' }   `}></a></li>
                  </div>
                  <div onClick={handleOrange}>
                  <li><a href="#" className={`${  orange ? 'orange active' : 'orange' } `} ></a></li>
                  </div>
                  <div onClick={handleGreen}>
                  <li><a href="#" className={`${  green ? 'green active' : 'green' } `}></a></li>
                  </div>
                </ul>
              </span>
       
      </div>
    </div>
    </div>
  </div>


</div>
		)
}










