import React from "react";
import { AgregarTarea } from "../components/AgregarTarea";
import { ListarTarea } from "../components/ListarTarea";

export const Container = ({ datos }) => {
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <ListarTarea datos={datos} />
        </div>

        <div className="col-4">
          <AgregarTarea />
        </div>
      </div>
    </div>
  );
};
