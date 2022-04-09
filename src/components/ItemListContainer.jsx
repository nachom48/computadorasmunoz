import {ItemList} from './ItemList';
import './ItemList.css';
import React,{useState,useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
import { productosIniciales } from '../mock/productos';

  


const ItemListContainer = ({ saludo }) => {
   
const promesa= new Promise((res)=>{
    setTimeout(() => {
        res(productosIniciales); 
    }, 2000);})
    
    const [productosCatalogo,setProductos]=useState([]);
    
         

    
    useEffect(() => {

        promesa.then((arrayProductos)=> setProductos(arrayProductos)  )
         
    }, [])
    
                      
    return (
  
  <div className="cardss">
        {
            (productosCatalogo.length)
                ?  <div >
                        <p className="saludo">{saludo}</p>
                        <ItemList  productos={productosCatalogo} />
                    </div>
                :   <div className="loading">
                         <div className="spinners">
                            <Spinner animation="border" variant="dark" />
                         </div>
                         <h2 className="cargando">Cargando Catalogo ,Aguarde</h2>
                     </div> 
        }

    
    </div>
  )}

  
  export default ItemListContainer;

   