
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header/Header.js";
import  ItemListCointainer  from "./components/ItemListContainer";
import { ItemCount} from "./components/ItemCount/ItemCount";


const App = ()=>{
    const name ="Ignacio";
return(
      <>
      <Header/>

      <ItemListCointainer id="1" name={name} />
      
        </>
);
};
export default App;
