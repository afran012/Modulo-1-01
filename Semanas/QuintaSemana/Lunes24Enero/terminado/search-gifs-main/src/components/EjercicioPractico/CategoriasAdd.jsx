import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

const CategoriasAdd = ({ setCategorias }) => {

    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Control type="text" placeholder="Busca una categoria" name="categoria" value={search} onChange={handleOnChange} ref={searchRef} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default CategoriasAdd
