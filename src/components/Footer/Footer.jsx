import "./Footer.css"
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export  const Footer=()=> {
  return (
    <MDBFooter className='text-center footer' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/nacho.munoz.5' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>
         <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/ignacio.munoz89/' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/ignacio-mu%C3%B1oz89/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/nachom48/computadorasmunoz.git' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Recibe nuestras novedades</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Ingrese su correo' className='mb-4' />
              </MDBCol>
{/* 
              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div> */}
            </div>
          </form>
        </section>

       

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Marcas
                  </a>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
             

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Nosotros
                  </a>
                </li>
             
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                       Centro de ayuda
                  </a>
                </li>
           
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Boton de Arrepentimiento
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='/'>
          Computadorasmunoz.com -  Todos los derechos Reservados
        </a>
      </div>
    </MDBFooter>
  );
}