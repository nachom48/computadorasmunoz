import React, { useContext,useState,useEffect } from 'react'
import { contexto } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from "react-router-dom";
import './Cart.css';
import swal from 'sweetalert';


const Cart = () => {
	const { cart, clearCart,contadorProductos,getCantidadProducts,totalPrice,getTotalPrice } = useContext(contexto)
	
const [estadoCantidad,setEstadoCantidad]=useState("")
useEffect(() => {
	let contador=0;
	cart.map(cartItem=>{
		contador=contador+cartItem.quantity;
		
	})
	setEstadoCantidad(contador);
}, [cart])

useEffect(() => {
	getCantidadProducts(cart);
  
}, [cart])
useEffect(() => {
  getTotalPrice(cart);
}, [cart])


const handlerClearCart=()=>{
	clearCart();
}
const finalizarCompra=()=>{
	swal("Excelente", "Has realizado la compra!", "success");

}
	console.log(cart);
	return (
		<div className="cart">
			<h1 className="titulo-total-productos">TIENES <b>{contadorProductos}</b> EN TU CARRO DE COMPRA</h1>
				

				{cart?.map(cart => (
					<CartItem key={cart.product.id} product={cart.product} quantity={cart.quantity} setEstadoCantidad  />))}

				{(cart.length)
					?
						<>
							<div className="final-description">
								<div className="quantity-price">  {contadorProductos} Articulos <p className="p-price">${totalPrice}</p></div>
								<div className="total-price">Total (impuestos incluidos) <p className="p-price">${totalPrice}</p></div>
								<div className="contenedor-boton">
								<Link to={`/`} ><button onClick={finalizarCompra}  className="boton-finalizar-compra"  >Finalizar Compra</button></Link>	
								</div>
							</div>
							<div className="botones-borrar-seguir">
							<button className="boton-borrar-carro"   onClick={handlerClearCart}>Borrar Carro</button>
							<Link to={`/`} ><button  className="boton-seguir-compra"  >Seguir Comprando</button></Link>	
							</div>	
						</>
				
					:
						<>
							<h3 className="carro-vacio-mensaje">No hay productos en tu carro de compra</h3>
							<Link to={`/`} ><button  className="boton-seguir-compra"  >Seguir Comprando</button></Link>
						</>
				}


		</div>		
				)}

export default Cart;