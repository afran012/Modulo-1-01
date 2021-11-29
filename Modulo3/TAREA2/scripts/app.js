const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")
const card5 = document.getElementById("card5")


const carouselExampleControls = document.getElementById("carouselExampleControls")
const peliculas = document.getElementById("peliculas")
const card6 = document.getElementById("cardFullScreen")
card6.style.display = "none"


card1.addEventListener("click", async (e) =>{
    carouselExampleControls.style.display = "none"
    card6.style.display = "flex"
    peliculas.style.display = "none"
    //card2.classList.add("flexCenter") 
    card6.innerHTML = ""
    card6.appendChild(card1)

})

card2.addEventListener("click", async (e) =>{
    carouselExampleControls.style.display = "none"
    card6.style.display = "flex"
    peliculas.style.display = "none"
    //card2.classList.add("flexCenter") 
    card6.innerHTML = ""
    card6.appendChild(card2)

})

card3.addEventListener("click", async (e) =>{
    carouselExampleControls.style.display = "none"
    card6.style.display = "flex"
    peliculas.style.display = "none"
    //card2.classList.add("flexCenter") 
    card6.innerHTML = ""
    card6.appendChild(card3)

})

card4.addEventListener("click", async (e) =>{
    carouselExampleControls.style.display = "none"
    card6.style.display = "flex"
    peliculas.style.display = "none"
    //card2.classList.add("flexCenter") 
    card6.innerHTML = ""
    card6.appendChild(card4)

})

card5.addEventListener("click", async (e) =>{
    carouselExampleControls.style.display = "none"
    card6.style.display = "flex"
    peliculas.style.display = "none"
    //card2.classList.add("flexCenter") 
    card6.innerHTML = ""
    card6.appendChild(card5)

})