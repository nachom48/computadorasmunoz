import React from 'react';
import { ItemCount } from './ItemCount/ItemCount';
const ItemListCointainer = props =>{
    const onAdd=(contador)=>{
        alert(`Estas comprando ${contador} productos `)
        }
    

    return (
        <>
        <h2>Bienvenido {props.name}</h2>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>    
        </>)
}

export default ItemListCointainer

//aca va el contador importado
//function itemCount stock inicial onAdd