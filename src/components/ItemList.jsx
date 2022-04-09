import React,{useState,useEffect} from "react";
import { Item } from "./Item";
import './ItemList.css';

import {useParams} from "react-router-dom";


export const ItemList= ({productos})=>{
    
      const inicial=[]
      const [productosCatalogo,setProductos]=useState(inicial);
      const [show,setShow]=useState(false);
      
      const {name}=useParams();
     
   
      


      useEffect(() => {
        if(name){
          console.log("estoy haciendo el filtrado")
          setProductos(productos.filter(el=>el.category ===name))}
           else{
             setProductos(productos);
             setShow(!show);
        }
      }, [name])
      
      
      
    

  return (
        
     <div className='cardss'>


        {
        productosCatalogo.map(product => 
                <Item className="cards" key={product.id} product={product} /> )
            
          }
    </div>
        
        
        
       
   )
};

