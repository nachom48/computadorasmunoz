import React,{useState} from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList= ()=>{
    
      const inicial=[]
      const [productosCatalogo,setProductos]=useState(inicial);
   
  return (
         <>  <div className='cardss'>
                 {productosCatalogo.map(product => 
                     <Item className="cards"  key={product.id} product={product} />
                                )}
              </div>
         </> )
};
export default ItemList;
