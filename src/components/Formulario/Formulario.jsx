import React, {useState} from "react";
import './Form.css';

export const Formulario = ({finalizarCompra}) => {
 
  
const [buyer,setBuyer]=useState({name:"",lastname:"",email:""})


function handleSubmit(e){
 e.preventDefault();
 finalizarCompra(buyer);
 setBuyer({name:"",lastname:"",email:""});
}

function handleChange(e){
    
    const {name,value}=e.target;
    const newBuyer={
        ...buyer,[name]:value,
    };
    setBuyer(newBuyer);
}
  return (
    <>
      <div className='formulario'>
      <h1>Ultimo pasos: </h1>
        <form className='formulario-compra'>
          <label htmlFor="name" className='labelForm'>Nombre:</label>
          <input
            id="name"
            name="name"
            type="name"
            placeholder="Ingrese aqui su nombre"
            value={buyer.name}
            onChange={handleChange}
          />
          <label htmlFor="lastname" className='labelForm'>Apellido:</label>
          <input
            id="lastname"
            name="lastname"
            type="lastname"
            placeholder='Ingrese aqui su apellido'
            value={buyer.lastname}
            onChange={handleChange}
          />
          <label htmlFor="email" className='labelForm'>Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='ejemplo@gmail.com'
            value={buyer.email}
            onChange={handleChange}
          />
          <button className='btnPagar' type="submit"  onClick={handleSubmit} >Pagar</button>
        </form>
      </div>
    </>
  );
}