import ItemList from '../ItemList/ItemList';
import '../ItemList/ItemList.css'
import './ItemListContainer.css'
import {useParams} from "react-router-dom";

import React,{useState,useEffect} from "react";
import Carrousel from '../Carrousel/Carrousel';
import {getDocs,collection,where,query} from "firebase/firestore"; 
import {db} from "../../firebase/firebase";
//aca importo la configuracion
import Spinner from '../Spinner/Spinner';
//si quiero de una categoria nomas es con la query
  


const ItemListContainer = () => {
    const [productosCatalogo,setProductos]=useState([]);
    const [loading,setLoading]=useState(true);
    const [show,setShow]=useState(false);
    const {name,marcaID}=useParams();
    
    
    useEffect(() => {
      
      if(name){
             
             const productsCollection=collection(db,"ItemCollection")
             const q2=query(productsCollection,where("category","==",name),);
             getDocs(q2)
              .then((result)=>{
                        const docs= result.docs 
                        const lista=docs.map((producto)=>{
                        const id=producto.id
                        const product={
                          id,
                          ...producto.data()
                        }
                       return product;
                       })
              setProductos(lista);
              setShow(true)
              setLoading(false);
           })}
        else if(marcaID){
             const productsCollection=collection(db,"ItemCollection")
             const q2=query(productsCollection,where("marca","==",marcaID),);
             getDocs(q2)
            .then((result)=>{
                  const docs= result.docs 
                  const lista=docs.map((producto)=>{
                  const id=producto.id
                  const product={
                        id,
                        ...producto.data()
                    }
                    return product;
                    })
                setProductos(lista);
                setShow(true)
                setLoading(false);
                           })}
        else{
           const productsCollection=collection(db,"ItemCollection")
           const q1=query(productsCollection,where("destacado","==",true),);
          getDocs(q1)
             .then((result)=>{
              const docs= result.docs 
                 const lista1=docs.map((producto)=>{
                  const id=producto.id
                  const product={
                      id,
                      ...producto.data()
                  }
                  return product;
                  })
              setProductos(lista1);
              setLoading(false);
            })
             };},[marcaID,name])
  return(
        <>
          {loading ?
                <Spinner className="spinner"></Spinner>
            :
              <>
                <Carrousel />
                {show
                    ?
                      <div className="cardss">
                          <ItemList  productosCatalogo={productosCatalogo} />
                      </div>
                    :
                      <>
                          <h2 className="titulo-destacados">Productos Destacados</h2> 
                          <div className="cardss">
                            <ItemList  productosCatalogo={productosCatalogo} />
                          </div>
                      </> 
                }
              </>
          }
        </>
    )
          
  }

  export default ItemListContainer;

   