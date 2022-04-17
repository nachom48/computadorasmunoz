import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './Item.css';
import {Link} from "react-router-dom";

const Item = ({product})=>{
    const {name,price,img} = product;
    // const {cartContext,addProduct}=useContext{contexto};

const manejarClick={
    
    // o podria usar addUsuario en el
}




    return (
        <>
        <Card className="card">
            <Card.Img  className="card-img" variant="top" src={img} alt=""/>
            <Card.Body>
                  <Card.Title className="card-title">{name}</Card.Title>
                  <h5 className="price">${price}</h5>
                  <div className="buttons">
                        <Card.Title className="card-title"></Card.Title>
                        <Link to={`/product/${product.id}`} ><Button  className="boton-detalle"  variant="warning">Ver Detalle</Button></Link>
                   </div>
           </Card.Body>
       </Card>
       </>
      )
}
export default Item;
