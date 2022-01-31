import React from "react";
import { Link } from "react-router-dom";
import { deleteData } from "../helpers/deleteData";

export const ListarTarea = ({ datos }) => {
  return (
    <div>
      <h3 className="text-center">Lista de Tareas</h3>
      <ul className="list-group">
        {datos.map((datos) => (
          <li className="list-group-item" key={datos.id}>
            <span className="lead">{datos.nombre}</span>
            <button className="btn btn-danger btm-sm float-end" onClick={() => deleteData(datos.id)}>
              borrar
            </button>
            <Link to={`/detalle/${datos.id}`} className="btn btn-success btm-sm float-end mx-2">
              Detalle
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
