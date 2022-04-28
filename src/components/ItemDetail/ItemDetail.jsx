//React
import React, { useState,useContext } from 'react';
//CSS
import './ItemDetail.css';
//Components
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import { contexto } from '../../context/CartContext';
//Libraries
import swal from 'sweetalert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemDetails ({productoDetalle}){
    const {name,img,price,description}=productoDetalle;
    const [CantidadTotal,setCantidadTotal]=useState(0);
    const {addProduct}=useContext(contexto);
    const [compra,setCompra]=useState(true);
    const [total,setTotal]=useState(0);
    
    const handleCompra=(productoDetalle,CantidadTotal)=>{
    swal({
        title: "",
        text: "Esta seguro que desea agregar el producto a su carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            addProduct(productoDetalle,CantidadTotal);
            swal("El producto se ha agregado a su carrito", {
            icon: "success",
          });
        } else {
          swal("No se ha agregado el producto a su carrito");
          
        }
      });
}

 return( 
            <div className="contenedor-principal">
                <div className="titulo-informacion">
                    {name}
                </div>
              <div className="detalle-superior">
                <img className="contenedor-imagen" src={img} alt="imagen-producto"></img>
                <div className="contenedor-informacion-lateral">
                    <div className="precio-informacion">
                        Precio ${price}
                    </div>
                    <a className="medios-pago" href="/">
                        Ver los medios de pago
                    </a>
                    {(compra)
                    ? (<>
                        <ItemCount producto={productoDetalle} setCompra={setCompra}  setCantidadTotal={setCantidadTotal} setTotal={setTotal}  ></ItemCount>
                       
                        </>)
                        : (<> 
                            <div className="total-a-pagar">
                              Total a pagar $ {total} 
                            </div>
                             <Link to="/cart"><button onClick={()=>handleCompra(productoDetalle,CantidadTotal)} className="boton-comprar">COMPRAR<ShoppingCartIcon/></button></Link>
                          </>)}
                </div>              
              </div>    
              <div className="descripcion-producto">        
                <div className="boton-descripcion-debajo">
                    Descripcion del Producto
                </div>
                <div className="informacion-producto">
                    {description}
                </div>
              </div> 
             
          </div>     )
            }
