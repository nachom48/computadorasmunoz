import React,{useState,useEffect} from "react";
import ItemDetails from "./ItemDetail";

// const productoDetalle =[
//     {   id:1 
//         ,name:"Placa de video Geforce 3080"
//         ,description:`Placa de video GeFroce Placa de video Colorful RTX3080Ti iGame Advanced OC 12GB GDDR6X
//         - Chipset: GeForce® RTX 3080 Ti
//         - Cores: 10240
//         - Reloj de núcleo: 1365 MHz
//         - Reloj de la memoria efectiva: 19 Gbps
//         - Tamaño de la memoria: 12GB
//         - Tipo de memoria: GDDR6X
//         - Interfaz de memoria: 384 bits
//         - DirectX: 12 Ultimate
//         - OpenGL 4.6
//         - Puertos: 1x HDMI, 3x DisplayPort 1.4"`
//         ,price:1250
//         ,stock:5
//         ,img:"https://http2.mlstatic.com/D_NQ_NP_853934-MLA47492063447_092021-O.webp" }



// const promesa= new Promise((res)=>{
//     setTimeout(() => {
//         res(productoDetalle); 
//     }, 2000);
//   })






export default function ItemDetailContainer(){
    const inicial=[]
    const [arrProductosDetalles,setArrProductosDetalles]=useState(inicial);

    const getItem = () => {
        fetch("https://mocki.io/v1/93586c4a-0fd6-45d2-8efb-fa9b9a973056")
        .then(data=>data.json())
        .then(product=>setArrProductosDetalles(product))
        }

    useEffect(() => {
      getItem();
    }, [])
    
   
  
       console.log(arrProductosDetalles);
    return(
            
        arrProductosDetalles.map(productoDetalle=> 
            <>
           
            <hr/>
            <h1 className="titulo-detalle">Detalle del producto <i>{productoDetalle.name}</i></h1>
            <ItemDetails key={productoDetalle.id} productoDetalle={productoDetalle} />
            </>
    ))




}