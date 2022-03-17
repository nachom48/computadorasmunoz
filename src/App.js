//Creamos todo de 0

import React from "react";
import Header from "./components/Header.js";
/*Cuando quiero importar algo si no le ponemos el ./ lo busca en node_modules */
/*No le hace falta el .js al header pero puede estar */


const App = ()=>{
return(

      <Header/>
);
};
export default App;


/* 

    /*Si no tiene hijos no hace falta tener el de cierre, se tiene una sola q abre y q cierra */
      
/* /*Lo primero es crear una funcion con letra mayuscula
debo exportar la funcion sino no va as ervir de nada,
la funcion debe devolver una sola cosa ,antes de return puedo tener codigo JS, crear variables,tener otras funciones internas,
se usa los fragment caundo devuelvo mas de una de ocsa,sino no hace falta usar los fragments <> o tambnein se puede usar un <div> q englobue a todo</div>*/ 