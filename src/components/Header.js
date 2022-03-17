/*El archivo deberia tener le mismo nombre q el componente */

import React from 'react';
import './Header.css';
import logo from '../img/logopc.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () =>{

    return (
<>

<div className='navBar'>
    <div className='banner'>
            <span className="banner-left">WhatsApp 3516170XXX | Email: computadorasmunoz@gmail.com</span>
             <span className="banner-right">Envio gratis en compras superiores a $16000</span>
    </div>
    
    <div className='navBar-bottom' >
        <div className="img-h1"> 
           <img src={logo} alt="logo tienda" className='imagen'></img>
           <h1>Computadoras Muñoz</h1>
        </div>
        
        <nav className='barra-navegadora'>
            <a href="#">Marcas</a>
            <a href="#">Nosotros</a>
            <a href="#">Centro de ayuda</a>
            <a href="#">Ventas Corporativas</a>
            <a href="#">Contacto</a>
            <a href="#"><PersonOutlineIcon className='userIcon'></PersonOutlineIcon></a>
            <a href="#"><ShoppingCartIcon></ShoppingCartIcon></a>
        </nav>
    </div>
</div>





</>
    )
}

export default Header;

/* Tengo q enlazar tambien lo q creo */