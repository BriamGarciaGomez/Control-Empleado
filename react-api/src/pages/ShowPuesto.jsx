import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";

const Endpoint = "http://127.0.0.1:8000/api";
const ShowPuesto = () => {
  const [puestos,setPuestos ] = useState([]);

  useEffect(() => {
    getAllPuesto();
  }, []);

  const getAllPuesto = async () => {
    const response = await axios.get(`${Endpoint}/puestos`);

    setPuestos(response.data);
  };

  const deletePuesto = async (id) => {
    await axios.delete(`${Endpoint}/puesto/${id}`);
    getAllPuesto();
  };

  return (
    <ConteinerA>
      <Navegacion>
        <div className="contenido">
          <div className="d-grid gap-2">
            <Link
              to="/puesto/crear"
              className="btn btn-success btn-lg mt-2 mb-2 text-white"
            >
              Crear
            </Link>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>Nombre</th>
                <th>Salario</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {puestos.map((puesto) => (
                <tr key={puesto.id}>
                  <td>{puesto.Nombre}</td>
                  <td>{puesto.Salario}</td>
                  <td>
                    <Link
                    to={`/puesto/edit/${puesto.id}`}
                      // to="/tienda/edit/"
                      className="btn btn-success btn-lg mt-2 mb-2 text-white"
                      // to={`/tienda/edit/${tienda.id}`}
                      // className="btn btn-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deletePuesto(puesto.id)}
                      className="btn btn-danger"
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Navegacion>
    </ConteinerA>
  );
};



export default ShowPuesto;
