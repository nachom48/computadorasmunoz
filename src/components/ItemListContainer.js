import React from 'react';
import {ItemList} from './ItemList';
import './ItemList.css';


const productosIniciales=[
    {   id:1 
        ,name:"Placa de video Geforce 3080"
        ,description:"Placa de video GeFroce.."
        ,price:1250
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_853934-MLA47492063447_092021-O.webp" },
    {   id:2
        ,name:"Fuente Coolermaster 750W 80 Bronce"
        ,description:"Placa de video GeFroce.."
        ,price:200
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_933872-MLA45654252002_042021-O.webp" },
    {   id:3
        ,name:"Disco Solido SSD Colorful"
        ,description:"Placa de video GeFroce.."
        ,price:50
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_682074-MLA41164832047_032020-O.webp" },
    {   id:4
        ,name:"Memoria RAM 8 GB DDR 5 Colorful"
        ,description:"Placa de video GeFroce.."
        ,price:25
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_659197-MLA48429437022_122021-W.webp" },
    {   id:5
        ,name:"Motherboard ASUS PRIME HS510M"
        ,description:"Placa de video GeFroce.."
        ,price:250
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_672250-MLA48003407067_102021-W.webp" },
    {   id:6
        ,name:"Gabinete Vidrio Templado"
        ,description:"Placa de video GeFroce.."
        ,price:175
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_684655-MLA43249855264_082020-W.webp" },
    {   id:7
        ,name:"Teclado Mecanico Reddragon "
        ,description:"Placa de video GeFroce.."
        ,price:38
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_871071-MLA47949886927_102021-V.webp" },
    {   id:8
        ,name:"Monitor 4k 28 pulgadas "
        ,description:"Placa de video GeFroce.."
        ,price:425
        ,stock:5
        ,img:"https://http2.mlstatic.com/D_NQ_NP_888657-MLA45976073068_052021-W.webp" }

];

const promesa= new Promise((res)=>{
    setTimeout(() => {
        res(productosIniciales); 
    }, 2000);
  })
const ItemListContainer = ({ saludo }) => {
  
    return (
        <div>
            <p className="saludo">{saludo}</p>
            <ItemList className="cards" productos={promesa} />
      </div>
    );
  };
  
  export default ItemListContainer;
 
    //const onAdd = (count) => {
      //alert(`Agregaste ${count} items al carrito`);
   // };