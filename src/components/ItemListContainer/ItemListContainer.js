import ItemList from '../ItemList/ItemList';
import '../ItemList/ItemList.css'
import './ItemListContainer.css'
import {useParams} from "react-router-dom";

import React,{useState,useEffect} from "react";
import {ClipLoader } from "react-spinners/ClipLoader";
import Carrousel from '../Carrousel/Carrousel';
import {getDocs,collection,where,query} from "firebase/firestore"; 
import {db} from "../../firebase/firebase";
//aca importo la configuracion

import SortBy from '../SortBy/SortBy';
import Toggle from '../toggleButton/Toggle';
import Spinner from '../Spinner/Spinner';
//si quiero de una categoria nomas es con la query
  


const ItemListContainer = () => {
    const [productosCatalogo,setProductos]=useState([]);
    const [loading,setLoading]=useState(false);
    const [show,setShow]=useState(false);
    const {name,marcaID}=useParams();
    
    
    useEffect(() => {
      
      if(name){
             let searchParam=name;
             const productsCollection=collection(db,"ItemCollection")
             const q2=query(productsCollection,where("category","==",searchParam),);
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
           })}
        else if(marcaID){
             let searchParam=marcaID;
             const productsCollection=collection(db,"ItemCollection")
             const q2=query(productsCollection,where("marca","==",searchParam),);
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
            })
             };},[marcaID,name])
          
      return (
        <> 
                   <Carrousel/>
                    {/* <Toggle/> */}
                    {/* <SortBy/> */}
                 {show?
                    <div className="cardss">
                         <ItemList  productos={productosCatalogo} />
                    </div>
                  :<>
                    <h2 className="titulo-destacados">Productos Destacados</h2> 
                      <div className="cardss">
                         <ItemList  productos={productosCatalogo} />
                    </div>
                     </>}
         </>
    )
}
  export default ItemListContainer;

   