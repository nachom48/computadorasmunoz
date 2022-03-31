
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header/Header.js";
import  ItemListCointainer  from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';



const App = ()=>{
  
    const name ="Ignacio";
return(
      <>
      <Header/>
      
      <ItemListCointainer id="1" name={name} />
      <ItemDetailContainer/>
        </>
);
};
export default App;
