import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";

const Endpoint = "http://127.0.0.1:8000/api";
const ShowLogro = () => {
  const [logros,setLogros ] = useState([]);

  useEffect(() => {
    getAllLogro();
  }, []);

  const getAllLogro = async () => {
    const response = await axios.get(`${Endpoint}/logros`);

    setLogros(response.data);
  };

  const deleteLogro = async (id) => {
    await axios.delete(`${Endpoint}/logro/${id}`);
    getAllLogro();
  };

  return (
    <ConteinerA>
      <Navegacion>
        <div className="contenido">
          <div className="d-grid gap-2">
            <Link
              to="/logro/crear"
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
              {logros.map((logro) => (
                <tr key={logro.id}>
                  <td>{logro.Descripcion}</td>
                  <td>
                    <Link
                    to={`/logro/edit/${logro.id}`}
                      // to="/tienda/edit/"
                      className="btn btn-success btn-lg mt-2 mb-2 text-white"
                      // to={`/tienda/edit/${tienda.id}`}
                      // className="btn btn-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteLogro(logro.id)}
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



export default ShowLogro;