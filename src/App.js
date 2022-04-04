

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
//Componentes
import Header from "./components/Header/Header.js";
import ItemListCointainer  from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import {Cart} from "./components/Cart";
import {ErrorPage} from "./components/ErrorPage/ErrorPage.js"
//Navigate
import {BrowserRouter,Routes,Route} from "react-router-dom";

//El route y routes son una especie de Switch, de hecho se llamaba Switch antes el Routes,
//es como un switch de javascripte, el route es como las opciones de ese switch



const App = ()=>{
  
    const name ="Ignacio";
return(
      
       <BrowserRouter>
         <Header/>
         <Routes>
           <Route path="/" element={  <ItemListCointainer />}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/categories/:name" element={ <ItemListCointainer  />}/>
           <Route path="/product/:id" element={ <ItemDetailContainer/>}/>
           <Route path="*" element={<ErrorPage/>}/>
          
           
            
         </Routes>
      </BrowserRouter>
    
);
};
export default App;
