//import '../style/style.css'
import { showDiscount, showMostPopular } from './showData.js'
import getData from "./getData.js";
import saveCartLocalStorage from './cart.js';


const url = "http://localhost:4000/productos";
let discountElement = document.querySelector('.grid-discount')
let popularElement = document.querySelector('.grid-popular')
let cancelCart = document.querySelector('.cancelCart')
let cartContainer = document.querySelector('.cartContainer')
let liCarrito = document.querySelector('#liCarrito')


cancelCart.onclick = ()=>{cartContainer.style.display = "none";};

liCarrito.onclick = ()=>{cartContainer.style.display = "flex";};



document.addEventListener('DOMContentLoaded', () => {

    const data = getData(url);
    showDiscount(data,discountElement);
    showMostPopular(data,popularElement);

})

discountElement.addEventListener('click', saveCartLocalStorage)














/*const url = "http://localhost:4000/productos";
import '../style/style.css'

const getElementos = async (url) => {
    let mostrarElementos = document.querySelector('.grid-elementos')
    mostrarElementos.innerHTML = ''
    const resp = await fetch(url)
    const data = await resp.json()
    data.forEach(element => {
        const { id, nombre, descuento, porcentajedes, precio, imagen} = element
        mostrarElementos.innerHTML += `
        <div class="product_card" id = "${id}">
            <h3 class="descuento">${porcentajedes}% dto.</h3>               
            <img src="${imagen}" class="imgCardDiscount" alt="...">
            <section class="precios">
                <p class="precio-des">$${(precio-precio*(porcentajedes)/100).toFixed( 2 )}/kg</p>
                <p class="precio">$${precio}/kg</p>
            </section>
            <p class="nombre">${nombre}</p>
            <button class="btnDiscount">Agregar</button>
        </div>
        `
    })
}

getElementos(url)*/

