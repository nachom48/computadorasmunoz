import React from 'react'
import './Nosotros.css';


const Nosotros = () => {
  return (
  <div>
    <div className="nosotros-banner">SOMOS COMPUTADORAS MUÑOZ</div>
      <div className="nuestros-clientes">
         Nuestros Clientes nos recomiendan
      </div> 
      <div className="imagenes">
        <img src="https://mundofix.com/img/cms/dorado/badge-facebook.svg" alt="imagen facebook" />
        <img src="https://mundofix.com/img/cms/dorado/badge-mercadolibre.svg" alt="imagen mercadolibre" />
        <img src="https://mundofix.com/img/cms/dorado/badge-google.svg" alt="imagen google" />
      </div>
    <div className="quienes-somos">
      Quienes Somos
    </div>
    <div className="somos-imagen">
      <div className="somos">
        Somos una empresa dedicada a la comercialización de productos de informática y electrónica en general.
        Buscamos tener siempre precios bajos con excelente calidad y una atención personalizada para uno de nuestros clientes.
        Realizamos envíos a todo el país por distintos medios y contamos con varias formas de pago para que puedas obtener el máximo beneficio en cada compra siempre.
        Buscamos que los productos te lleguen en tiempo y forma teniendo la certeza de que tu confianza es nuestro compromiso.
     </div>
     <img className="imagen-pc" src="https://mundofix.com/img/cms/dorado/about-img.jpg" alt="imagenpc" />
   </div> 
</div>
  )
}

export default Nosotros