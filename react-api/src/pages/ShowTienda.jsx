import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";

const Endpoint = "http://127.0.0.1:8000/api";
const ShowTienda = () => {
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    getAllTienda();
  }, []);

  const getAllTienda = async () => {
    const response = await axios.get(`${Endpoint}/tiendas`);

    setTiendas(response.data);
  };

  const deleteTienda = async (id) => {
    await axios.delete(`${Endpoint}/tienda/${id}`);
    getAllTienda();
  };

  return (
    <ConteinerA>
      <Navegacion>
        <div className="contenido">
          <div className="d-grid gap-2">
            <Link
              to="/tienda/crear"
              className="btn btn-success btn-lg mt-2 mb-2 text-white"
            >
              Crear
            </Link>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>Nombre</th>
                <th>Ubicacion</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {tiendas.map((tienda) => (
                <tr key={tienda.id}>
                  <td>{tienda.Nombre}</td>
                  <td>{tienda.Ubicacion}</td>
                  <td>
                    <Link
                    to={`/tienda/edit/${tienda.id}`}
                      // to="/tienda/edit/"
                      className="btn btn-success btn-lg mt-2 mb-2 text-white"
                      // to={`/tienda/edit/${tienda.id}`}
                      // className="btn btn-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteTienda(tienda.id)}
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

export default ShowTienda;
