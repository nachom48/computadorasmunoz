import './ItemCount.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {useState} from "react";
import computadora from "../../img/computadora.jpg"

export const ItemCount = (props)=>{

const [contador,setContador]=useState(0)
        
    const handlerClickAdd =()=>{
            if(contador<props.stock)setContador(contador+1)
            };
        const handlerClickSub =()=>{
            if(contador>props.initial)setContador(contador-1)
            }

        const reset = ()=>{
            setContador(0)
        }

        const alerts=()=>{
            if (contador>0){
                setContador(0);
                alert("Se ha agregado al carrito exitosamente")
            }
        }

    
    return(
        <>
       
          <Card className="card" style={{ width: '18rem' }}>
            <Card.Img  className="card-img"variant="top" src={computadora} />
            <Card.Body>
            <Card.Title className="card-title">ItemName</Card.Title>

            <div className="buttons">
            <Button className="boton"  size="sm" variant="warning" onClick={handlerClickAdd}>+</Button>
            <Card.Title className="card-title">{contador}</Card.Title>

            <Button className="boton"  size="sm" variant="warning" onClick={handlerClickSub}>-</Button>
            </div>
            <Button  className="boton-agregar" onClick={alerts} variant="warning">Agregar al Carrito</Button>
            <Button  className="boton-agregar" onClick={reset} variant="warning">Borrar carrito</Button>

                  </Card.Body>
            </Card>
          
        </>  
            )
                  
                   
      

    }