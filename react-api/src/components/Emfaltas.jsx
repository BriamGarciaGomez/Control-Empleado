import React, { useState, useEffect } from "react";
import { ConteinerA, Navegacion } from "../styles/nav";
import axios from "axios";
import { Link } from "react-router-dom";
const endpoint = "http://127.0.0.1:8000/api";

const Emfaltas = () => {
  const [faltas, setFalta] = useState([]);
  const [search, setSearch] = useState("");

  const showData = async () => {
    const response = await fetch(`${endpoint}/emfaltas`);
    const data = await response.json();
    setFalta(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const searchs = (e) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const deletefalta = async (id) => {
    await axios.delete(`${endpoint}/emfalta/${id}`);
    showData();
  };
  const listar = !search
    ? faltas
    : faltas.filter((dato) =>
        dato.empleados.Primer_Nombre.toLowerCase().includes(
          search.toLocaleLowerCase()
        )
      );

  return (
    <ConteinerA>
      <Navegacion>
        <input
          onChange={searchs}
          value={search}
          type="text"
          placeholder="Buscar"
          className=" form-control "
        />
        <div className="contenido">
          <div className="d-grid gap-2">
            <Link
              to="/emfaltas/crear"
              className="btn btn-success btn-lg mt-2 mb-2 text-white"
            >
              Crear
            </Link>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>Empleado</th>
                <th>Faltas</th>
                <th>Fecha</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {listar.map((falta) => (
                <tr key={falta.id}>
                  <td>{falta.empleados.Primer_Nombre}</td>
                  <td>{falta.faltas.Descripcion}</td>
                  <td>{falta.created_at}</td>

                  <td>
                    <Link
                      to={`/emfaltas/edit/${falta.id}`}
                      // to="/tienda/edit/"
                      className="btn btn-success btn-lg mt-2 mb-2 text-white"
                      // to={`/tienda/edit/${tienda.id}`}
                      // className="btn btn-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deletefalta(falta.id)}
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

export default Emfaltas;
