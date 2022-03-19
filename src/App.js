

import React from "react";
import Header from "./components/Header.js";
import  ItemListCointainer  from "./components/ItemListContainer";



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
