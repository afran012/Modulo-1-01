export const showDiscount = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        const { id, nombre, porcentajedes, precio, imagen, ranking} = prod;
        if (porcentajedes>0) {
          element.innerHTML += `
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
        }
    })
}

export const showMostPopular = async(list,element) => {
  const products = await list;
  products.forEach(prod => {
      const { id, nombre, descuento, porcentajedes, precio, imagen, ranking} = prod;
      if (ranking>5) {
        element.innerHTML += `
        <div class="product_card" id = "${id}">   
            <br>
            <img src="${imagen}" class="imgCardDiscount" alt="...">
            <section class="precios">
                <p class="precio-des">$${(precio-precio*(porcentajedes)/100).toFixed( 2 )}</p>
                <p class="precio">$${precio}</p>
            </section>
            <p class="nombre">${nombre}</p>
            <button class="btnDiscount">Agregar</button>
        </div>
        `
      }
  })
}