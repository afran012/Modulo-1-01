import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetalleTarea } from "../components/DetalleTarea";
import { Navbar } from "../components/Navbar";
import { Container } from "../container/Container";
import { getData } from "../helpers/getData";

export const AppRouter = () => {
  const [tarea, setTarea] = useState([]);

  const traerDatos = async () => {
    const datos = await getData();
    setTarea(datos);
    // return datos;
  };

  useEffect(() => {
    traerDatos();
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Container datos={tarea} />} />
          <Route path="/detalle/:id" element={<DetalleTarea datos={tarea} />} />
        </Routes>
      </Router>
    </div>
  );
};
