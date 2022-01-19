import getData from "./getData.js";
import { showCart } from "./showData.js";
const url = "http://localhost:4000/productos";

let cancelCart = document.querySelector('.cancelCart')
let cartContainer = document.querySelector('.cartContainer')
let liCarrito = document.querySelector('#liCarrito')

let cartContent = document.querySelector('#cartContent')



let cart = JSON.parse(localStorage.getItem('cart')) || [];


document.addEventListener('DOMContentLoaded', () => {
    showCart(cart,cartContent)
    console.log("showCart",cartContent,cart)

})



cancelCart.onclick = ()=>{cartContainer.style.display = "none";};

liCarrito.onclick = ()=>{cartContainer.style.display = "flex";};


const saveCartLocalStorage = async(e) => {

    const btnDetail = e.target.classList.contains('btnDiscount');
    const id = e.target.id;
    console.log(id)

    if(btnDetail){
        console.log(btnDetail)
         const lista = await getData(url);
         const objeto = lista.find(list => list.id === Number(id))
         cart.unshift(objeto);
         localStorage.setItem("cart",JSON.stringify(cart));
    }

}

export default saveCartLocalStorage