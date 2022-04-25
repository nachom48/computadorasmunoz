import React, { useContext} from 'react'
import { contexto } from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        vertical:'top',
        horizontal:'right',
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },}));
export const CartWidget= ()=>{
    const { contadorProductos } = useContext(contexto)

   
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={contadorProductos} color="warning">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
     
}

