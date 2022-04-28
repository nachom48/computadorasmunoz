import React,{useState} from "react";
import '../ItemDetail/ItemDetail.css';
import swal from 'sweetalert';
import "./ItemCount.css"

const ItemCount = ({producto,onAdd,setTotal,setCompra,setCantidadTotal})=>{

    const {stock,price}=producto;
    const [quantity,setQuantity]=useState(0);
    const [precioTotal,setPrecioTotal]=useState(0);
    const [stockDisponible,setStockDisponible]=useState(stock);


    const handlerClickAdd=()=>{
    if(quantity<stock){
        setQuantity(quantity+1)
        setStockDisponible(stockDisponible-1)
        setPrecioTotal(price*(quantity+1));
        }
     if(stock===quantity){
            swal("No quedan mas productos en stock");
        
    };

}
const handlerClickSub=()=>{
    if(quantity>0){
        setQuantity(quantity-1)
        setStockDisponible(stockDisponible+1)}
        setPrecioTotal(price*(quantity-1));
     if(quantity===0){
        setPrecioTotal(0);
     }   
}
const handleClean=()=>{
    setQuantity(0);
    setPrecioTotal(0);
    setStockDisponible(stock);
}
const agregarAlCarrito=()=>{
    if(quantity>0){
    setCantidadTotal(quantity)
    setCompra(false);
    setTotal(precioTotal);
    }
    else{
        swal("No ha elegido ninguna cantidad del producto", "Seleccione al menos una unidad", "error");
    }
}
 return( 
            <div className="item-count-general">
                    <div className="stock">
                        Stock Disponible {stockDisponible}
                    </div>
                    <div className="botones-contador" >
                            <div className="boton-onAdd"onClick={handlerClickSub}>-</div>  
                            <div >{quantity}</div>
                            <div  className="boton-onAdd"onClick={handlerClickAdd}> +</div>
                    </div>
                    <div className="total">
                         Total ${precioTotal} 
                   </div>
                  <div className="botones-item-count">  
                     <div onClick={handleClean} className="boton-borrar-carrito" >Borrar del Carrito</div>
                     <div onClick={()=>agregarAlCarrito()}  className="boton-agregar-carrito"> Agregar al Carrito</div>
                  </div>   
            </div>
        )
        }
export default ItemCount;



    