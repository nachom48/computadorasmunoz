import React,{useState,useEffect} from "react";
import ItemDetails from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {db} from "../../firebase/firebase"
import {getDocs,collection,query,where, getDoc,doc} from "firebase/firestore"; 





export default function ItemDetailContainer(){
    const {id}=useParams();
    const [arrProductosDetalles,setArrProductosDetalles]=useState([]);
    const [productoMostrar,setProductoMostrar]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("")
    let lista=[]

    
     

    const getItem = async () => {
        try {
            const productsCollection=collection(db,"ItemCollection");
            const refDoc=doc(productsCollection,id)
            getDoc(refDoc)
            // const q=query(productsCollection,where("id","==",id),);
            .then((result)=>{
                setProductoMostrar(result.data())
                setLoading(true);
            }
            )     
               
                 }       
      
        catch{
            setError("No se ha podido cargar el detalle del producto,hubo un error")
        }
        
        }

    useEffect(() => {
      getItem();
    }, [id])
  
    
    
   
  
       
    
    return(


      loading? 
            <div key={productoMostrar.id}> 
            
        <ItemDetails key={productoMostrar.id} productoDetalle={productoMostrar} />
         </div>
            :
            <h1>Lo lamento hubo un error</h1>)
              
           




}