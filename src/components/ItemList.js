import React,{useState,useEffect} from "react";
import { Item } from "./Item";
import './ItemList.css';
import Spinner from 'react-bootstrap/Spinner'

export const ItemList= ({productos})=>{
      const inicial=[];
      const [productosCatalogo,setProductos]=useState(inicial);
      const [show,setShow]=useState(false);
      

      useEffect(() => {
        productos.then((arrayProductos)=>{
          setProductos(arrayProductos);
          setShow(!show);
        })
         }, [])

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

