import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: #db7093;
`

export const Employees = () => {
    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div div className="col-12">
                        <h3 className="text-center"> Employees </h3>

                        <form className="form-group">
                            <input id="inputImage" type="text" className="form-control " placeholder="url image" name="url" required />

                            <input id="inputName" type="text" className="form-control mt-2" name="nombre" autoComplete="off"
                                placeholder="user name" required />

                            <input id="inputEmail" type="text" className="form-control mt-2" name="correo" autoComplete="off"
                                placeholder="email" required />

                            <textarea id="inputDescription" className="form-control mt-2" autoComplete="off" name="descripcion" placeholder="description" required></textarea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input value="Save" type="submit" className="btn btn-outline-dark" />
                            </div>
                        </form>
                    </div>

                    
                    <table className="table text-center mt-3">
                  
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>



                </div>
            </div>
        </div>
    )
}
