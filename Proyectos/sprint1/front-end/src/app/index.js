const url = "http://localhost:4000/productos";

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

getElementos(url)