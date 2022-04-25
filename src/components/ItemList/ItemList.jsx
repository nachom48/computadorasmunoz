import React,{useState,useEffect} from "react";
import Item from "../Item/Item";
import './ItemList.css';
import {useParams} from "react-router-dom";
import {getDocs,collection,where,query} from "firebase/firestore"; 
import {db} from "../../firebase/firebase";


const ItemList= ()=>{
    
      const inicial=[]
      const [productosCatalogo,setProductos]=useState(inicial);
      const [show,setShow]=useState(true);
      
      const {name,marcaID}=useParams();
     
      ////////////////////////////////////////////////



  

      useEffect(() => {
        if(marcaID){
          console.log("entre aca con la marca" ,marcaID)
          let searchParam={marcaID};
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
                      
                      setShow(false)
        })}
      }, [marcaID])
      

      useEffect(() => {
     
        if(name){
          
            
        
        let searchParam={name}.name;
        const productsCollection=collection(db,"ItemCollection")
        const q=query(productsCollection,where("category","==",searchParam),);
        
        getDocs(q)
          
        .then((result)=>{
          
                    const docs= result.docs 
                    console.log(docs);
                      const lista=docs.map((producto)=>{
                        const id=producto.id
                        const product={
                            id,
                            ...producto.data()
                        }
                        return product;
                        })
                    setProductos(lista);
                    
                    setShow(false)
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
                   
                  }
                  
                  ;  },[name])
                
                  


////////////////////////////////////////////////////////
   
    
      
  
    
    

  return (
    <>
    
        {show?
          <>
                 <h2 className="titulo-destacados">Productos Destacados</h2> 
                 <div className='cardss'>
                 {productosCatalogo.map(product => 
                     <Item className="cards"  key={product.id} product={product} />
                                )}
                    </div>
                 </>
              
        
        :<>
            {productosCatalogo.map(product => 
          <Item className="cards" key={product.id} product={product} /> )}
        </>
          }    
    </>
        
        
        
       
   )
};
export default ItemList;
