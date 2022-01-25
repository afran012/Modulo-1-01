import React, { useState } from 'react'
import CategoriasList from './CategoriasList'
import CategoriasAdd from './CategoriasAdd'

const Categorias = () => {

    const [categorias, setCategorias] = useState([])

    return (
        <div>
            <h1>Encuentra tu gif ideal</h1>
            <CategoriasAdd setCategorias={setCategorias} />
            <CategoriasList categorias={categorias} />
        </div>
    )
}

export default Categorias
