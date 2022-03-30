import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './Item.css';


export const Item = ({product})=>{
    const {name,price,stock,img} = product;
    return (
        <Card className="card">
        <Card.Img  className="card-img" variant="top" src={img} alt=""/>
        <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <h5 className="price">Precio ${price}</h5>

        <div className="buttons">
        <Button className="boton"  size="sm" variant="warning">+</Button>
        <Card.Title className="card-title"></Card.Title>

        <Button className="boton"  size="sm" variant="warning" >-</Button>
        </div>
        <Button  className="boton-agregar"  variant="warning">Agregar al Carrito</Button>
        <Button  className="boton-agregar"  variant="warning">Borrar carrito</Button>

              </Card.Body>
        </Card>
      )
}
