import React,{useState,useEffect} from "react";
import ItemDetails from "./ItemDetail";

const productoDetalle =[
    {   id:1 
        ,name:"Placa de video Geforce 3080"
        ,description:`Placa de video GeFroce Placa de video Colorful RTX3080Ti iGame Advanced OC 12GB GDDR6X
        - Chipset: GeForce® RTX 3080 Ti
        - Cores: 10240
        - Reloj de núcleo: 1365 MHz
        - Reloj de la memoria efectiva: 19 Gbps
        - Tamaño de la memoria: 12GB
        - Tipo de memoria: GDDR6X
        - Interfaz de memoria: 384 bits
        - DirectX: 12 Ultimate
        - OpenGL 4.6
        - Puertos: 1x HDMI, 3x DisplayPort 1.4"`
        ,price:1250
        ,stock:5
        ,img:"https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX3080Ti-gaming/images/3080ti-vga-body.png" }
]

const promesa= new Promise((res)=>{
    setTimeout(() => {
        res(productoDetalle); 
    }, 2000);
  })



  


export default function ItemDetailContainer(){
    const inicial=[]
    const [arrProductosDetalles,setArrProductosDetalles]=useState(inicial);


    useEffect(() => {
        promesa.then((productoDetalladoIndividual)=>{
            setArrProductosDetalles(productoDetalladoIndividual);
        })
    }, [])
    
    
        
    
   console.log(arrProductosDetalles);
       
    return(
        arrProductosDetalles.map(productoDetalle=> 
            <>
            <hr/>
            
            <ItemDetails key={productoDetalle.id} productoDetalle={productoDetalle} />
            </>
    ))




}