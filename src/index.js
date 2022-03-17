import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Para q index funcione bien ha yq tener el scoope y necesitamos el import de React en el archivo //

//el import React from 'react', eso es de una libreria, lo busca en node_modules//
//Lo segundo q necesitamos es el react-dom, es otra libreria q van separadas 
//q me permite manipular junto cone l dom virtual mostrar los cambios q vamos realizando
//toma todo lo q vamos plasmando en el codigo y se encarga de tirarlo en el dom

//lo tercero es q neceistamos el App from ./App , lo utiliza dentro del stric mode
//el Strict mode es como una forma q tiene javascript de sre un poco mas riguroso
// javascript neceista algunas formalidades 
//Y por ultimo dibujar el dom con el getElemenyById('root')