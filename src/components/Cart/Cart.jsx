//React
import React, { useContext,useState,useEffect } from 'react';
import {Link} from "react-router-dom";
//Firebase
import {addDoc,collection,serverTimestamp,updateDoc,doc,increment} from "firebase/firestore";
import {db} from "../../firebase/firebase";
//Components
import {Formulario} from "../Formulario/Formulario"
import { contexto } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
//Css
import './Cart.css';
//Libraries
import swal from 'sweetalert';






const Cart = () => {
	
	const { cart, clearCart,contadorProductos,getCantidadProducts,totalPrice,getTotalPrice } = useContext(contexto)
	const [idVenta, setIdVenta] = useState("");
    const [showForm, setShowForm] = useState(true);
	const [estadoCantidad,setEstadoCantidad]=useState("")
useEffect(() => {
	let contador=0;
	cart.map(cartItem=>{
		return contador=contador+cartItem.quantity;
		
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
const saveData=()=>{
	setShowForm(false);
	swal("Excelente", "Completa tus datos para terminar la compra", "success");
}
const finalizarCompra=(buyer)=>{

	const ventaCollection=collection(db,"ventas")
	addDoc(ventaCollection,{
		buyer,
		items:cart,
		data:serverTimestamp()
	})
	.then(result=>{
		setIdVenta(result.id);
		swal(`Compra Finalizada`,`Id de su venta ${result.id}`,`success`)
	})
	cart.forEach(element=>{
		const updateCollection=doc(db,"ItemCollection",element.product.id);
		updateDoc(updateCollection,{stock:increment(-element.quantity)})
	})
	clearCart();
	

}

	return (
	<>
		{showForm
			?<div className="cart">
				<h1 className="titulo-total-productos"> TIENES {contadorProductos } PRODUCTO(S) EN TU CARRO DE COMPRA</h1>
				{cart?.map(cart => (
					<CartItem key={cart.product.id} product={cart.product} quantity={cart.quantity} setEstadoCantidad  />))}

				{(cart.length)
					?
						<>
							<div className="final-description">
								<div className="quantity-price">  {contadorProductos} Articulos <p className="p-price">${totalPrice}</p></div>
								<div className="total-price">Total (impuestos incluidos) <p className="p-price">${totalPrice}</p></div>
								<div className="contenedor-boton">
								<button onClick={saveData}  className="boton-finalizar-compra"  >Finalizar Compra</button>	
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
		: <Formulario finalizarCompra={finalizarCompra} />}
	</>
		)
			}

export default Cart;