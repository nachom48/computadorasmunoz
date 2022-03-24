import React from 'react';
import { ItemCount } from './ItemCount/ItemCount';
const ItemListCointainer = props =>{
    return (
        <>
        <h2>Bienvenido {props.name}</h2>
        <ItemCount stock={5} initial={0}/>    
        </>)
}

export default ItemListCointainer

//aca va el contador importado
//function itemCount stock inicial onAdd