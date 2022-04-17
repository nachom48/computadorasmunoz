import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../../context/CartContext'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './CartItem.css';
import DeleteIcon from '@mui/icons-material/Delete';



const CartItem = ({product,quantity}) => {
	

const {stock,name,img,price,id} = product;
  const {removeItem,updateCart} = useContext(contexto);
  const [count,setCount]=useState(quantity);
  const [totalPrice,setTotalPrice]=useState(0);

const handRemoveItem=()=>{
	removeItem(id);

}

const handlerAddQuantity=()=>{
	setCount(count+1)
	if(count<stock){
		setCount(count+1);
	
		}
	else{
		setCount(stock);
	}
}

useEffect(() => {
	const newUpdateProduct={
		product,
		quantity:count
	}
	updateCart(newUpdateProduct)
}, [count])
useEffect(() => {
	const newUpdateProduct={
		product,
		quantity:count
	}
	updateCart(newUpdateProduct)
}, [count])



const handlerRemoveQuantity=()=>((count>=1) ?setCount(count-1) :setCount(0));

	return (
		<div className="general-cart">
			<div className="cartItemBox">
				<div className="cart-img" style={{backgroundImage:`url(${img})`}} alt="imagen-producto"></div>				
				
				<div className="cart-product-name" >
					{name} 
				</div>
				
				<div className="quantity-selector">
					<KeyboardArrowUpIcon className="keyboardArrow"  onClick={handlerAddQuantity}> </KeyboardArrowUpIcon>
					<p className="quantity"> {count}</p>
					<KeyboardArrowDownIcon className="keyboardArrow" onClick={handlerRemoveQuantity}></KeyboardArrowDownIcon>
				</div>


				<div className="price">Precio: $ {price*count}</div>

				<div className="cuadrado">
					<DeleteIcon fontSize="large" className="delete-icon" onClick={handRemoveItem}/>
				</div>
				
			</div>
			
		</div>	
	)
}

export default CartItem