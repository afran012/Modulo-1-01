const listGroup = document.querySelector('.list-group');

const getLocalStorage = () => {
   const det = JSON.parse(localStorage.getItem("Detail"));
   const {name,description,img,price} = det;
   listGroup.innerHTML += `
   <li class="card" style="width: 18rem;">
   <div class="card-body">
    <img src=${img} class="card-img-top" alt="...">
     <h5 class="card-title">${name}</h5>
     <p class="card-text">${description}</p>
     <h5 class="card-title">USD$ ${price}</h5>
     <a href="#" class="btn btn-outline-dark " style="background-color: #db7093;">Return</a>
   </div>
 </li>
   `
}

document.addEventListener('DOMContentLoaded',getLocalStorage)

listGroup.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-outline-dark')){
        window.location.href = "index.html";
    }
 
})