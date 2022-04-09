import React, { useState, useEffect } from 'react';
import './ItemDetail.css'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { CartWidget } from './CartWidget';

export default function ItemDetails ({productoDetalle}){
    const stockInicial=productoDetalle.stock;
    const [contador,setContador]=useState(0);
    const [compra,setCompra]=useState(true);
    const [stockDisponible,setStockDisponible]=useState(stockInicial);
    const [precioTotal,setPrecioTotal]=useState(0);
 
 
    const handlerClickAdd=()=>{
     console.log("estoy apretando el click")
    if(contador<productoDetalle.stock){
        setContador(contador+1)
        setStockDisponible(stockDisponible-1)
        setPrecioTotal(productoDetalle.price*(contador+1));
    };

}
const handlerClickSub=()=>{
    if(contador>0){
        setContador(contador-1)
        setStockDisponible(stockDisponible+1)}
        setPrecioTotal(productoDetalle.price*(contador-1));
}




  
 

    return( 
            <div className="contenedor-principal">
                <h1 className="titulo-informacion">{productoDetalle.name}</h1>
                
                    <img className="contenedor-imagen" src={productoDetalle.img}></img>

                
                     <div className="contenedor-informacion-lateral">
                            
                         <div className="precio-informacion">Precio ${productoDetalle.price}</div>
                            <div className="stock">Stock disponible:{stockDisponible} unidades</div>
                            <a className="medios-pago" href="">Ver los medios de pago</a>
                            {compra
                            ?(<>
                            <div className="botones-contador" >
                                <Button variant="contained" color="primary" onClick={handlerClickAdd}> +</Button>
                                 <p className="contador">{contador}</p>
                                 <Button variant="contained" color="primary" onClick={handlerClickSub}>-</Button>
                            </div>
                                <div className="total">Total ${precioTotal} </div>
                            <div className="botones-agregar-carrito">
                                <div className="boton-agregar">
                                    <Button variant="contained" color="primary" onClick={()=>setCompra(false)}> Agregar al Carrito</Button>
                                </div>
                                <div className="boton-borrar">
                                     <Button variant="contained" color="primary" >Borrar del Carrito</Button>
                                </div>

                     </div>
                            </>)
                                :( <> <div className="total">Total ${precioTotal} </div>
                                     <Link to="/cart"><button className="boton-comprar">COMPRAR<CartWidget/></button></Link></>)
                             }
                </div>
                <div className="boton-descripcion-debajo">Descripcion del Producto</div>
                <div className="informacion-producto">{productoDetalle.description}</div>



              
            </div>



    )
            
}