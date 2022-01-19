export const showDiscount = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        const { id, nombre, porcentajedes, precio, imagen, ranking} = prod;
        if (porcentajedes>0) {
          element.innerHTML += `
          <div class="product_card">
              <h3 class="descuento">${porcentajedes}% dto.</h3>               
              <img src="${imagen}" class="imgCardDiscount" alt="...">
              <section class="precios">
                  <p class="precio-des">$${(precio-precio*(porcentajedes)/100).toFixed( 2 )}/kg</p>
                  <p class="precio">$${precio}/kg</p>
              </section>
              <p class="nombre">${nombre}</p>
              <button id = "${id}" class="btnDiscount">Agregar</button>
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
        <div class="product_card">   
            <br>
            <img src="${imagen}" class="imgCardDiscount" alt="...">
            <section class="precios">
                <p class="precio-des">$${(precio-precio*(porcentajedes)/100).toFixed( 2 )}</p>
                <p class="precio">$${precio}</p>
            </section>
            <p class="nombre">${nombre}</p>
            <button id = "${id}" class="btnDiscount" >Agregar</button>
        </div>
        `
      }
  })
}


export const showCart = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        const { id, nombre, descuento, porcentajedes, precio, imagen, ranking} = prod;
        {
          element.innerHTML += `
          <div class="product_cardCart">   
              <br>
              <img src="${imagen}" class="imgCardDiscountCart" alt="...">
              <section class="preciosCart">
                  <p class="precio-desCart">$${(precio-precio*(porcentajedes)/100).toFixed( 2 )}</p>
                  <p class="precioCart">$${precio}</p>
              </section>
              <p class="nombreCart">${nombre}</p>
              <button id = "${id}" class="btnEliminar" >Eliminar</button>
          </div>
          `
        }
    })
  }