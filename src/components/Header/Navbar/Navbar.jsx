import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from "react-router-dom";
import './Navbar.css';
import {CartWidget} from '../../CartWidget/CartWidget.js'

const links=[
    {name:"Marcas", route:"/marcas", id:1},
    {name:"Nosotros", route:"/nosotros", id:2},
    {name:"Centro Ayuda", route:"/centroayuda", id:3},
    {name:"Ventas Corporativas", route:"/error", id:4},
    {name:"Contacto", route:"/contactenos", id:5},
    

]
const marcas=[
    {name:"Red Dragon",route:"/marcas/reddragon",id:6},
    {name:"Nvidia",route:"/marcas/nvidia",id:7},
    {name:"Xiaomi",route:"/marcas/xiaomi",id:8},
    {name:"AMD",route:"/marcas/amd",id:9},
    {name:"INTEL",route:"/marcas/intel",id:10},
    {name:"Colorfull",route:"/marcas/colorfull",id:11},
]
const Navbar = () => {
  return (
    <nav className='barra-navegadora'>
         {links.map((element)=>{
            return(
               (element.name==="Marcas")
                 ? 
                 <Dropdown  key={element.id}> 
                   <Dropdown.Toggle  variant="warning" >Marcas</Dropdown.Toggle>
                     <Dropdown.Menu>
                       {marcas.map((element)=>{
                             return (
                              <Dropdown.Item  key={element.id}> <Link className="dropdown text-primary" to={element.route}>{element.name}</Link></Dropdown.Item>
                              )
                                     })}
                       </Dropdown.Menu>
                   </Dropdown>

                 :
                  <Link  key={element.id} to={element.route} >{element.name}</Link>
                   )  
                   }
                   )
                  }            
                  <Link to="#"><PersonOutlineIcon className='userIcon'></PersonOutlineIcon></Link>
                  <Link to="/cart"><CartWidget className="cart-widget"></CartWidget></Link>
                        </nav>
  )
}

export default Navbar