import './ItemCount.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {useState} from "react";



export const ItemCount = ({stock,initial,onAdd})=>{

const [contador,setContador]=useState(initial)
        
    const handlerClickAdd =()=>{
            if(contador<stock)setContador(contador+1)
            };
        const handlerClickSub =()=>{
            if(contador>initial)setContador(contador-1)
            }

        const reset = ()=>{
            setContador(0)
        }
        const handlerCart = () =>{
            onAdd(contador);
        }

      
    
    return(
        <>
       
          <Card className="card" style={{ width: '18rem' }}>
            <Card.Img  className="card-img"variant="top" />
            <Card.Body>
            <Card.Title className="card-title">ItemName</Card.Title>

            <div className="buttons">
            <Button className="boton"  size="sm" variant="warning" onClick={handlerClickAdd}>+</Button>
            <Card.Title className="card-title">{contador}</Card.Title>

            <Button className="boton"  size="sm" variant="warning" onClick={handlerClickSub}>-</Button>
            </div>
            <Button  className="boton-agregar" onClick={handlerCart} variant="warning">Agregar al Carrito</Button>
            <Button  className="boton-agregar" onClick={reset} variant="warning">Borrar carrito</Button>

                  </Card.Body>
            </Card>
          
        </>  
            )
                  
                   
      

    }