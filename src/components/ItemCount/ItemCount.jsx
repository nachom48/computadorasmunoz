import '../ItemDetail/ItemDetail.css'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import {useState} from "react";



const ItemCount = ({producto,onAdd,setTotal,setCompra,setCantidadTotal})=>{

    const {stock,price}=producto;
    const [quantity,setQuantity]=useState(0);
    const [precioTotal,setPrecioTotal]=useState(0);
    // const {addProduct}=useContext(contexto);
    // const [contador,setContador]=useState(initial)
    
    const [stockDisponible,setStockDisponible]=useState(stock);


    const handlerClickAdd=()=>{
    if(quantity<stock){
        setQuantity(quantity+1)
        setStockDisponible(stockDisponible-1)
        setPrecioTotal(price*(quantity+1));
        if(quantity===stock){
            swal("No quedan mas productos en stock");
        }};

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
 return( <>
            <div className="stock">
                        Stock Disponible {stockDisponible}
                    </div>
             <div className="botones-contador" >
            <Button variant="contained" color="primary" onClick={handlerClickSub}>-</Button>  
            <p className="contador">{quantity}</p>
            <Button variant="contained" color="primary" onClick={handlerClickAdd}> +</Button>
             </div>
                <div className="total">
                    Total ${precioTotal} 
                </div>
              <div className="botones-agregar-carrito">  
             <div className="boton-borrar">
                <Button variant="contained" onClick={handleClean} color="primary" >Borrar del Carrito</Button>
            </div>
            <div className="boton-agregar">
                <Button variant="contained" color="primary" onClick={()=>agregarAlCarrito()}  > Agregar al Carrito</Button>
            </div> 
            </div>   

            </>)
     
       
                  
                   
      

    }
    export default ItemCount



    