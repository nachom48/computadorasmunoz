import React,{useState} from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList= ({productosCatalogo})=>{
    
     
  return (
         <>  <div className='cardss'>
                 {productosCatalogo.map(product => 
                     <Item className="cards"  key={product.id} product={product} />
                                )}
              </div>
         </> )
};
export default ItemList;
