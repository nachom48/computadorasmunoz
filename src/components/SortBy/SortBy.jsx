import React from 'react'
import "./SortBy.css"

const SortBy = () => {
  return (
  <div className="sortby">
      <h4>Ordenar Por </h4>
    <select name="select">
        <option value="nombreaz">Nombre,A a Z</option>
        <option value="nombreza" >Nombre,Z a A</option>
         <option value="preciobajoalto" >Precio:de mas bajo a mas alto</option>
         <option value="precioaltobajo">Precio:de mas alto a mas alto</option>

    </select>
  </div>
  )
}

export default SortBy