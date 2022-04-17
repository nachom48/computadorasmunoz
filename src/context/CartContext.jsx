import React,{createContext,useState} from 'react';

export const contexto=createContext({});
const {Provider}=contexto;

const CustomProvider = ({children})=>{

    const [contadorProductos,setContadorProductos]=useState(0);
    const [cart,setCart]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);

    const addProduct =(product,quantity)=>{
        const newProduct={
            product,
            quantity,
        }
            if(isInCart(product.id)){
                const productFind = cart.find(element=>element.product.id===product.id);
                const index=cart.indexOf(productFind);
                const newCart=[...cart];
                newCart[index].quantity+=quantity;
                setCart(newCart);
            }
            else{
                setCart([...cart,newProduct]);
            }
        
        
    }

    const removeItem=(id)=>{
        const newCart=cart.filter(el=>el.product.id !==id);
        setCart(newCart);
    }

    const getCantidadProducts=(cart)=>{
        let contador=0;
        cart.forEach(elemento=>{
           contador+=elemento.quantity;

        })
        setContadorProductos(contador);
        return contadorProductos;
    }
        
    const updateCart=(newUpdateProduct)=>{
    
        const newUpdateCart=cart.filter(cartItem=>cartItem.product.id!==newUpdateProduct.product.id)
        setCart([...newUpdateCart, newUpdateProduct].sort())
     } 

    const getTotalPrice=(cart)=>{
       let contador=0;
        cart.forEach(element=>{
            contador+=(element.quantity*element.product.price)
        })
        setTotalPrice(contador);
        return totalPrice;
    }    
   
   

    
    const clearCart=()=>{
        setCart([]);

    }
 
    const isInCart=(id)=>{
        if(cart.find(element=>element.product.id===id)) return true;}
       
    return <Provider value={{cart,addProduct,removeItem,clearCart,contadorProductos,getCantidadProducts,getTotalPrice,updateCart,totalPrice}}>{children} </Provider>
                
        
}

export default CustomProvider;
