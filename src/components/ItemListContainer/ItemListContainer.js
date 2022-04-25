import ItemList from '../ItemList/ItemList';
import '../ItemList/ItemList.css'
import './ItemListContainer.css'

import React,{useState,useEffect} from "react";
import {ClipLoader } from "react-spinners/ClipLoader";
import Carrousel from '../Carrousel/Carrousel';
//aca importo la configuracion

import SortBy from '../SortBy/SortBy';
import Toggle from '../toggleButton/Toggle';
import Spinner from '../Spinner/Spinner';
//si quiero de una categoria nomas es con la query
  


const ItemListContainer = () => {
    const [productosCatalogo,setProductos]=useState([]);
    const [loading,setLoading]=useState(false);

    

    
                      
    return (
        <>    
        
       

            
              
                  <div > 
                    <Carrousel/>
                    {/* <Toggle/> */}
                    {/* <SortBy/> */}
                    <div className="cardss">
                         <ItemList  productos={productosCatalogo} />
                    </div>
                    </div>
                     
                 
                         
                       
               
         
        

    
        </>
    
  )

    }
  export default ItemListContainer;

   