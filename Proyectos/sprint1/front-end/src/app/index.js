//import '../style/style.css'
import { showDiscount, showMostPopular } from './showData.js'
import getData from "./getData.js";
const url = "http://localhost:4000/productos";
let discountElement = document.querySelector('.grid-discount')
let popularElement = document.querySelector('.grid-popular')

document.addEventListener('DOMContentLoaded', () => {

    const data = getData(url);
    console.log(data)
    showDiscount(data,discountElement);
    showMostPopular(data,popularElement);

})

async(e) => {

    const btnDetail = e.target.classList.contains('btn-outline-dark');
    const id = e.target.id;

    if(btnDetail){
         const lista = await getData(endpoint);
         const objeto = lista.find(list => list.id === Number(id))
         localStorage.setItem("Detail",JSON.stringify(objeto));
         window.location.href = "detail.html"
    }

    

}

element.addEventListener('click', async(e) => {

    const btnDetail = e.target.classList.contains('btn-outline-dark');
    const id = e.target.id;

    if(btnDetail){
         const lista = await getData(endpoint);
         const objeto = lista.find(list => list.id === Number(id))
         localStorage.setItem("Detail",JSON.stringify(objeto));
         window.location.href = "detail.html"
    }

    

})














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

