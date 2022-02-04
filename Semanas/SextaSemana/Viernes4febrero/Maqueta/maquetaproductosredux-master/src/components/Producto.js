import React from 'react';

const Producto = () => {
  return (
    <div>
       <div className="card mt-5">
            <div className="card-body">
                <form>
                    <h1> Agregar Producto</h1>
                    <hr />
                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Producto</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="nombre"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Producto;
