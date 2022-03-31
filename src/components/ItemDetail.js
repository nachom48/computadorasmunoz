import React from "react";
import './ItemDetail.css'



export default function ItemDetails ({productoDetalle}){
 

    return( 
            <div className="contenedor-principal">
                <h1 className="titulo-informacion">{productoDetalle.name}</h1>
                
                    <img className="contenedor-imagen" src={productoDetalle.img}></img>

                
                 <div className="contenedor-informacion-lateral">

                    <h2 className="precio-informacion">Precio: ${productoDetalle.price}</h2>
                    <h3 className="stock">Stock:{productoDetalle.stock} unidades</h3>
                    <a className="medios-pago" href="">Ver los medios de pago</a>

                </div>
                <div className="boton-descripcion-debajo">Descripcion del Producto</div>
                <div className="informacion-producto">{productoDetalle.description}</div>




            </div>



    )
            
}