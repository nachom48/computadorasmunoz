import React, { useState,useContext } from 'react';
import './ItemDetail.css'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contexto } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import swal from 'sweetalert';

export default function ItemDetails ({productoDetalle}){
    const {name,img,price,description,stock}=productoDetalle;

    const stockInicial=productoDetalle.stock;
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
            console.log("aca definitivamnete lo agregue")
          swal("El producto se ha agregado a su carrito", {
            icon: "success",
          });
        } else {
          swal("No se ha agregado el producto a su carrito");
          
        }
      });
   

}


const onAdd=(estadoCompra)=>{
    

}

 

    return( 
            <div className="contenedor-principal">
                <h1 className="titulo-informacion">
                    {name}
                </h1>
                <img className="contenedor-imagen" src={img}></img>
                 <div className="contenedor-informacion-lateral">
                    <div className="precio-informacion">
                        Precio ${price}
                    </div>
                  
                    <a className="medios-pago" href="">
                        Ver los medios de pago
                    </a>
                    {(compra)
                    ? (<>
                        <ItemCount producto={productoDetalle} setCompra={setCompra} onAdd={onAdd} setCantidadTotal={setCantidadTotal} setTotal={setTotal}  ></ItemCount>
                       
                        </>)

                        : (<> 
                            <div className="total-a-pagar">Total a pagar $ {total} </div>
                             <Link to="/cart"><button onClick={()=>handleCompra(productoDetalle,CantidadTotal)} className="boton-comprar">COMPRAR<ShoppingCartIcon/></button></Link>
                          </>)}
                </div>              
                            
                <div className="boton-descripcion-debajo">
                    Descripcion del Producto
                </div>
                <div className="informacion-producto">
                    {description}
                </div>
            </div>   



              
           



    )
            
}

//para pasar info de hijos a padres

//handleSearch={handleSearch}