import React from "react";
import CustomProvider from "./context/CartContext";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Componentes
import ItemListCointainer  from "./components/ItemListContainer/ItemListContainer";
import HeaderComponent from "./components/Header/Header/HeaderComponent";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart";
import {ErrorPage} from "./components/ErrorPage/ErrorPage"
import { Footer } from "./components/Footer/Footer";
import { Formulario } from "./components/Formulario/Formulario";
import Nosotros from "./components/Nosotros/Nosotros.jsx"
import CentroAyuda from "./components/CentroAyuda/CentroAyuda.jsx"
import Contactenos from "./components/Contactenos/Contactenos.jsx"

//Navigate
import {BrowserRouter,Routes,Route} from "react-router-dom";


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
           <Route path="/nosotros" element={< Nosotros />} />
           <Route path="/centroayuda" element={< CentroAyuda />} />
           <Route path="/contactenos" element={< Contactenos />} />

         </Routes>
         </CustomProvider>
         <Footer/>
      </BrowserRouter>
    
);
};
export default App;
