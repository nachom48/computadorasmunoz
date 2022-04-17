/*El archivo deberia tener le mismo nombre q el componente */

import React from 'react';
import './Header.css';
import logo from '../../img/logopc.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { CartWidget } from '../CartWidget/CartWidget';
import {NavLink,Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () =>{
    const links=[
        {name:"Marcas", route:"/marcas", id:1},
        {name:"Nosotros", route:"/nosotros", id:2},
        {name:"Centro de Ayuda", route:"#", id:3},
        {name:"Ventas Corporativas", route:"#", id:4},
        {name:"Contacto", route:"#", id:5},
        

    ]
    const categories=[
        {name:"Componentes de PC", route:"/categories/componentes", id:1},
        {name:"Perisfericos y Accesorios", route:"/categories/perisfericos", id:2},
        {name:"PCS y Notebooks", route:"/categories/pcs", id:3},
        {name:"Redes y Telefonia", route:"/categories/redes", id:4},
        {name:"Electronica", route:"/categories/electronica", id:5},
        {name:"Insumos", route:"/categories/insumos", id:6},
    ]
    return (
<>

            <header>
                <div className='navBar'>
                    <div className='banner'>
                        <div className="banner-right">Envio gratis en compras superiores a $16000</div>
                        <div className="banner-left">WhatsApp 3516170XXX | Email: computadorasmunoz@gmail.com</div>
                    </div>
    
                    <div className='navBar-bottom' >
                        <div className="img-h1"> 
                             <NavLink to="/"><img src={logo} alt="logo tienda" className='imagen'></img></NavLink>
                            <h1 className="computadoras-munoz">Computadoras Muñoz</h1>
                        </div>
                        <nav className='barra-navegadora'>
                            {links.map((el)=>{
                                            return(
                                                    <Link key={el.id} to={el.route} >{el.name}</Link>
                                                  )  
                                             }
                                     )
                            }            
                            <Link to="#"><PersonOutlineIcon className='userIcon'></PersonOutlineIcon></Link>
                            <Link to="/cart"><CartWidget className="cart-widget"></CartWidget></Link>
                        </nav>
                        <Dropdown>
                            <Dropdown.Toggle  variant="warning" id="dropdown-basic">Categorias</Dropdown.Toggle>
                            <Dropdown.Menu>
                                         {categories.map((el)=>{
                                                                return (
                                                                        <Dropdown.Item  key={el.id}> <Link className="dropdown text-primary" to={el.route}>{el.name}</Link></Dropdown.Item>
                                                                         )
                                                                    })}
                             </Dropdown.Menu>
                        </Dropdown>

    
            

                    </div>
                </div>
</header>





</>
    )
}

export default Header;

/* Tengo q enlazar tambien lo q creo */
//El navLink lo que hace , es q se activa una clase si tengo NavLink q cuando le hago click se activa una clase que podemos tomar con los 
//estilos para q ese link se vea de otro color o subrayado o algo  ppara q resalte de las otras y el usuario vea donde tas parado 