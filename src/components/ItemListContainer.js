import {ItemList} from './ItemList';
import './ItemList.css';
import React,{useState,useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';

const productosIniciales=[
    {   id:1 
        ,name:"Placa de video Geforce 3080"
        ,description:"Placa de video GeFroce.."
        ,price:1250
        ,stock:5
        ,category:"componentes"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_853934-MLA47492063447_092021-O.webp" },
    {   id:2
        ,name:"Fuente Coolermaster 750W 80 Bronce"
        ,description:"Fuente Coolermaster 750 W 80 Bronce "
        ,price:200
        ,stock:5
        ,category:"componentes"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_933872-MLA45654252002_042021-O.webp" },
    {   id:3
        ,name:"Disco Solido SSD Colorful"
        ,description:"Disco Solido SSD Colorfull power."
        ,price:50
        ,stock:5
        ,category:"componentes"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_682074-MLA41164832047_032020-O.webp" },
    {   id:4
        ,name:"Memoria RAM 8 GB DDR 5 Colorful"
        ,description:"Memoria RAM 8 GB "
        ,price:25
        ,stock:5
        ,category:"componentes"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_659197-MLA48429437022_122021-W.webp" },
    {   id:5
        ,name:"Motherboard ASUS PRIME HS510M"
        ,description:"Motherboard Asus Prime HS510M"
        ,price:250
        ,stock:5
        ,category:"componentes"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_672250-MLA48003407067_102021-W.webp" },
    {   id:6
        ,name:"Gabinete Vidrio Templado"
        ,description:"Gabinete Vidrio Templado"
        ,price:175
        ,stock:5
        ,category:"componentes"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_684655-MLA43249855264_082020-W.webp" },
    {   id:7
        ,name:"Teclado Mecanico Reddragon "
        ,description:"Teclado Mecanico Reddragon"
        ,price:38
        ,stock:5
        ,category:"perisfericos"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_871071-MLA47949886927_102021-V.webp" },
    {   id:9
        ,name:"Monitor 4k 28 pulgadas "
        ,description:"Monitor 4k 28 Pulgadas"
        ,price:425
        ,stock:5
        ,category:"perisfericos"
        ,img:"https://http2.mlstatic.com/D_NQ_NP_888657-MLA45976073068_052021-W.webp" },
  {      id:10
         ,name:"PC Intel i5 10400 240GB SSD 4GB HDMI"
         ,description:"PC Intel i5 10400 240GB SSD 4GB HDMI"
         ,price:1500
         ,stock:5
         ,category:"pcs"
         ,img:"https://mundofix.com/349737-large_default/pc-intel-i5-10400-240gb-ssd-4gb-hdmi.jpg" },
{         id:11
          ,name:"TP-Link TL-WN725N USB"
          ,description:"TP-Link TL-WN725N USB"
          ,price:20
          ,stock:5
          ,category:"redes"
          ,img:"https://mundofix.com/442191-home_default/tp-link-tl-wn725n-usb.jpg-i5-10400-240gb-ssd-4gb-hdmi.jpg" },
{          id:12
           ,name:"Reloj Haxly QUO 1.0 Grey"
           ,description:"Reloj Haxly QUO 1.0 Grey"
           ,price:10
           ,stock:5
           ,category:"electronica"
           ,img:"https://mundofix.com/373800-home_default/haxly-quo-10-grey.jpg" }
  

];

  


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

   