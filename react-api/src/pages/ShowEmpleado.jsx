import React from "react";
import { Link } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";
import Busqueda from "../components/Busqueda";

const ShowEmpleado = () => {
  return (
    <ConteinerA>
      <Navegacion>
        <Link
          to="/empleado/crear"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Crear Empleado
        </Link>

        <Busqueda />
      </Navegacion>
    </ConteinerA>
  );
};

export default ShowEmpleado;
