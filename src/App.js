import React from "react";
import CustomProvider from "./context/CartContext";
//con el hook me perimte rescatar el contexto
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Sweet Alert


//Componentes
import Header from "./components/Header/Header";
import ItemListCointainer  from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart";
import {ErrorPage} from "./components/ErrorPage/ErrorPage"
import { Footer } from "./components/Footer/Footer";
//Navigate
import {BrowserRouter,Routes,Route} from "react-router-dom";

//El route y routes son una especie de Switch, de hecho se llamaba Switch antes el Routes,
//es como un switch de javascripte, el route es como las opciones de ese switch



const App = ()=>{
  //aca le estoy dando el valor inicial
   

    const name ="Ignacio";
return(
      
       <BrowserRouter>
       <CustomProvider>
         <Header/>
         <Routes>
           <Route path="/" element={  <ItemListCointainer />}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/categories/:name" element={ <ItemListCointainer  />}/>
           <Route path="/product/:id" element={ <ItemDetailContainer/>}/>
           <Route path="*" element={<ErrorPage/>}/>            
         </Routes>
         </CustomProvider>
         <Footer/>
      </BrowserRouter>
    
);
};
export default App;
//asi pongo a disposicion todo lo que tenga en el CustomProvider