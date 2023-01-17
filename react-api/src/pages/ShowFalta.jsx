import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";

const Endpoint = "http://127.0.0.1:8000/api";
const ShowFalta = () => {
  const [faltas,setFaltas ] = useState([]);

  useEffect(() => {
    getAllFalta();
  }, []);

  const getAllFalta = async () => {
    const response = await axios.get(`${Endpoint}/faltas`);

    setFaltas(response.data);
  };

  const deleteFalta = async (id) => {
    await axios.delete(`${Endpoint}/falta/${id}`);
    getAllFalta();
  };

  return (
    <ConteinerA>
      <Navegacion>
        <div className="contenido">
          <div className="d-grid gap-2">
            <Link
              to="/falta/crear"
              className="btn btn-success btn-lg mt-2 mb-2 text-white"
            >
              Crear
            </Link>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>Descripcion</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {faltas.map((falta) => (
                <tr key={falta.id}>
                  <td>{falta.Descripcion}</td>
                  <td>
                    <Link
                    to={`/falta/edit/${falta.id}`}
                      // to="/tienda/edit/"
                      className="btn btn-success btn-lg mt-2 mb-2 text-white"
                      // to={`/tienda/edit/${tienda.id}`}
                      // className="btn btn-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteFalta(falta.id)}
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



export default ShowFalta;