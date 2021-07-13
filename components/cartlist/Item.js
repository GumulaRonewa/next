import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import {  REMOVE_ITEM,SUB_PRICE } from '../../actions'
export default function Item(props) {
    var item=props.item;
      const dispatch = useDispatch();

    const handleClick = () => {
     
              dispatch(REMOVE_ITEM(item))
              dispatch(SUB_PRICE(item))

       
  };
	return(
    <div>
          <div className='items' style={{display:"flex",flexDirection:"row"}}>
                <Image  width={64} height={64}   src={item.img} alt="" />
                
           <div className="flex-1 flex flex-col text-base space-x-4 py-4">
            <span className="CartItem_productName__x9t-a" style={{marginLeft:10,marginTop:-10}}>{item.name}</span>
             <span className="CartItem_productName__x9t-a" style={{marginLeft:10}} >Size: M</span>

            <span className="CartItem_productName__x9t-a" style={{marginLeft:10}}>Price: ZAR {item.Price}</span>

          </div>
           <div style={{display:'grid',placeItems:"center"}}>
             <button onClick={handleClick} style={{marginRight:10}} className="remove"><i className="material-icons">clear</i></button>

            </div>

          
      </div>
    </div>
		)
}




/*
export default function Item(props) {
    var item=props.item;

  return(
    <li className="CartItem_root__c20Bc">
    <div className="flex flex-row space-x-4 py-4">
      <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer z-0">
          <div className="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;">
            <div className="box-sizing: border-box; display: block; max-width: 100%;">
                <Image  width={74} height={74}   src={item.img} alt="" />
                
            </div>

          </div>
          <div className="flex-1 flex flex-col text-base">
            <span className="CartItem_productName__x9t-a">Piped Fleece Jacket</span>
            
          </div>
          <div className="flex flex-col justify-between space-y-2 text-sm"><span>$49.50</span></div>
      </div>
    </div>
    </li>
    )
}
*/




