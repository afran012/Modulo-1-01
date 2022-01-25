import React from 'react'
import { Form, Button } from 'react-bootstrap'

import {useFormulario} from './FormularioCustomHook'


const Formulario = () => {

    const { datos, handleSubmit, handleInputChange } = useFormulario()

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
