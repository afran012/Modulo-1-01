import React, { Component } from 'react';
import styled from 'styled-components';
import Lista from './Lista';


const Input = styled.input`
    background-color: #F3C881;
`

const TextArea = styled.textarea`
    resize: none;
`

const Form = styled.form`
   background-color: #F3C881;
   background-image: url("./assets/fondo.png");
`



export default class Formulario extends Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center"> Productos </h3>
                        <Form className="form-group p-5">
                            <input
                                id="fileSelector"
                                type="text"
                                className="form-control "
                                placeholder="url image"
                                name="imagen"
                                required
                               />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="product"
                                autoComplete="off"
                                placeholder="product name"
                                required
                                />

                            <TextArea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                required
                         
                            ></TextArea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </Form>
                        <Lista />
                    </div>

                </div>
            </div>
        );
    }
}
