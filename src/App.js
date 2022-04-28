import React from "react";
import CustomProvider from "./context/CartContext";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Sweet Alert


//Componentes
import ItemListCointainer  from "./components/ItemListContainer/ItemListContainer";
import HeaderComponent from "./components/Header/Header/HeaderComponent";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart";
import {ErrorPage} from "./components/ErrorPage/ErrorPage"
import { Footer } from "./components/Footer/Footer";
//Navigate
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Formulario } from "./components/Formulario/Formulario";




const App = ()=>{
   

   
return(
      
       <BrowserRouter>
       <CustomProvider>
        <HeaderComponent/>
         <Routes>
           <Route path="/" element={ <ItemListCointainer />}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/categories/:name" element={ <ItemListCointainer  />}/>
           <Route path="/marcas/:marcaID" element={ <ItemListCointainer  />}/>
           <Route path="/product/:id" element={ <ItemDetailContainer/>}/>
           <Route path="*" element={<ErrorPage/>}/>   
           <Route path="/finalizarcompra" element={< Formulario />} />     
         </Routes>
         </CustomProvider>
         <Footer/>
      </BrowserRouter>
    
);
};
export default App;
