import React from 'react';
import './Header.css';
import logo from '../../../img/logopc.png'
import Navbar from '../Navbar/Navbar';
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const HeaderComponent = () =>{

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

 <header className="header">
    <div className='navBar'>
      <div className='banner'>
        <div className="banner-right">Envio gratis en compras superiores a $16000</div>
        <div className="banner-left">WhatsApp 3516170XXX | Email: computadorasmunoz@gmail.com</div>
     </div>
    
                    <div className='navBar-bottom' >
                        <div className="img-h1"> 
                             <Link to="/" ><img src={logo} alt="logo tienda" className='imagen'></img></Link>
                            <h1 className="computadoras-munoz">Computadoras Muñoz</h1>
                        </div>
                       <Navbar/> 
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

export default HeaderComponent;
