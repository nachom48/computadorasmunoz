# Computadoras Muñoz

Frontend de un ecommerce de articulos de informatica, desarrollado durante el curso de React JS en Coderhouse. 

Versión online [Aquí](https://computadorasmunoz.vercel.app/)

Este proyecto fue maquetado principalmente con [Create React App](https://github.com/facebook/create-react-app). 

# Tabla de contenidos

- [Instalación](#Instalación)
- [Uso](#Uso)


# Instalación 

- Clonar el repositorio.
- Utilizar `npm install` en el directorio raiz.
- Luego `npm start`.

### Librerias utilizadas

- React router dom
- Material UI 
- Material icons
- Sweet Alert
- Firebase
- React spinners

# Uso

El sitio posee un inicio, categorias y un carrito de compras. 

En el inicio se visualizan todos los productos destacados. 

Al seleccionar una categoria o bien una marca se solicita el contenido filtrado a Firebase para luego renderizarlo dentro de un contenedor. 

Al seleccionar un producto este es renderizado dentro de un contenedor con sus detalles. Desde aquí es posible añadirlo al carrito de compras.

Al entrar al carrito de compras, si este se encuentra vacio muestra un mensaje y permite redirigir hacia los productos. 
En caso de haber seleccionado productos, permite rellenar un formulario para obtener los datos: Nombre y apellido, dirección, email y telefono de contacto.

### Navegando el Sitio

![](src/assets/example-page.gif)

# Creditos

Este trabajo fue desarrollado por [@nachom48](https://github.com/nachom48) durante el curso de React JS dictado por [@alejandromoises02](https://github.com/alejandromoises02), profesor de Coderhouse.
