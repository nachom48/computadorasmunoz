import React,{useState,useEffect} from "react";
import { Item } from "./Item";
import './ItemList.css';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from "react-router-dom";
export const ItemList= ({productos})=>{
      const inicial=[];
      const [productosCatalogo,setProductos]=useState(inicial);
      const [show,setShow]=useState(false);
      
      const {name}=useParams();
      console.log(name);
      //si trabajamos con api de terceros
      //const url =""
      //if (name){
        // url="urlcategoria{categoria}""
        //else {
          //url="urlproductosgeneral"

         

      useEffect(() => {

        productos.then((arrayProductos)=>{
          if(name){
            console.log("estoy haciendo el filtrado");
                  setProductos(arrayProductos.filter(el=>el.category ===name))}
                      
                

             
              
            //guardar en products un filter de productos con name
          
          else{
          setProductos(arrayProductos);

          
          setShow(!show);
          }
        })
         }, [name])

  return (
        
    <div className='cardss'>


        {
           (show)
              ?productosCatalogo.map(product => 
                <Item key={product.id} product={product} /> )
              :<div className="loading">
                  <div className="spinners">
                     <Spinner animation="border" variant="primary" />
                     <Spinner animation="border" variant="secondary" />
                     <Spinner animation="border" variant="primary" />
                     <Spinner animation="border" variant="dark" />
                     <Spinner animation="border" variant="secondary" />
                     <Spinner animation="border" variant="dark" />
                  </div>
                  <h2 className="cargando">Cargando Catalogo ,Aguarde</h2>
                </div>
          }
    </div>
        
        
        
       
   )
};

