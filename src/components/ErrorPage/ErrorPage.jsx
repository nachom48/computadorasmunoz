import React from "react";
import './errorPage.css';

import {Link} from "react-router-dom";

export  const ErrorPage=()=>{
    
    return (
            <div className="errorPage">
                <h1 className="errorcode">404</h1>
                <div className="errorPage-bottom">
                    <p>Lo lamento, página no encontrada.</p>
                    <p>La pagina a la que intento acceder no pudo ser encontrada.</p>
                    <Link to="/"><button className="bottonHome">Ir a la pagina principal</button></Link>
                </div>
            </div>
    )       
}