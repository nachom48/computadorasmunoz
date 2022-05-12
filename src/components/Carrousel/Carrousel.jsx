import React from 'react';
import './Carrousel.css'
import Button from 'react-bootstrap/esm/Button';
import {Link} from "react-router-dom";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Carrousel() {
  return (
    <MDBCarousel showControls showIndicators className="editar-carrousel"
    interval={1500}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement className="imagen-carrousel-1" src='https://images.alphacoders.com/170/170791.jpg' alt='Geforce' />
          <MDBCarouselCaption>
            <h5 className="titulo-carrousel">Compra lo mejor de Nvidia aqui</h5>
            <Link to={`/marcas/nvidia`}> <Button variant="warning">Conseguilos Aqui</Button></Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="imagen-carrousel" src='https://mcdn.wallpapersafari.com/medium/15/45/toWbFH.jpg' alt='RedDragon' />
          <MDBCarouselCaption>
            <h5 className="titulo-carrousel">Consegui lo mejor de RedDragon</h5>
            <Link to={`/marcas/reddragon`}><Button variant="warning">Conseguilos Aqui</Button></Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
