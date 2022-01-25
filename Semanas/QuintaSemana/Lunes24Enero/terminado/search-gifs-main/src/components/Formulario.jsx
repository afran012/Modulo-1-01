import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        email: ''
    })

    useEffect(() => {
        console.log("ComponenDidMount");
        return () => {
            console.log('ComponentUnmount');
        }
    }, [datos])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>Formulario</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" value={datos.nombre} onChange={handleInputChange} name="nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" value={datos.email} onChange={handleInputChange} name="email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

export default Formulario
