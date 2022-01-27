import React from 'react'

export const AgregarTarea = () => {
    return (
        <div>
            <h3 className="text-center"> Agregar Tareas </h3>

            <form className="form-group" >
                <input
                    type="text"
                    className="form-control "
                    placeholder="Url"
                    name="url"
                    value=""
                    onChange=""
                />

                <input
                    type="text"
                    className="form-control mt-2"
                    name="nombre"
                    autoComplete="off"
                    placeholder="Nombre Tarea"
                    value=""
                    onChange=""
                />

                <textarea
                    name="Description"
                    className="form-control mt-2"
                    autoComplete="off"
                    name="descripcion"
                    value=""
                    onChange=""
                >
                </textarea>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button
                        type="submit"
                        className="btn btn-dark">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}
