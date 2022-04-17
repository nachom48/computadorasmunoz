import React,{useState,useEffect} from "react";
import ItemDetails from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";






export default function ItemDetailContainer(){
    const {id}=useParams();
    const [arrProductosDetalles,setArrProductosDetalles]=useState([]);
    const [productoMostrar,setProductoMostrar]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("")


    
        //consume cosas asincronas,osea cuando hago una peticion a un servidor no puedo parar el codigo y esperar q me responda el servidor
        //entonces se hace de una forma asincrona, hazme esta cosa y al mismo tiempo esperame,
    

    const getItem = async () => {
        try {
        const data= await fetch(" https://mocki.io/v1/19f7aadc-f0f8-4604-bc96-10020a8f4c15")
        const product= await data.json();
        setArrProductosDetalles(product);
        
        }
        catch{
            setError("No se ha podido cargar el detalle del producto,hubo un error")
        }
        finally{
            setLoading(false);
        }
        }

    useEffect(() => {
      getItem();
    }, [])
  
    useEffect(() => {
        setProductoMostrar(arrProductosDetalles.find(prod => {
            return prod.id == id
        }))
      }, [arrProductosDetalles])
    
   
  
       
    
    return(
            productoMostrar 
            ? 
            <div key={productoMostrar.id}> 
            <hr/>

            
            <ItemDetails key={productoMostrar.id} productoDetalle={productoMostrar} />
            </div>
            :
            <h1>Lo lamento hubo un error</h1>)




}