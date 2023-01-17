import React, { useState, useEffect } from "react";
import { ConteinerA, Navegacion } from "../styles/nav";
import axios from "axios";
import { Link } from "react-router-dom";
const endpoint = "http://127.0.0.1:8000/api";

const Emlogros = () => {
  const [logros, setLogros] = useState([]);
  const [search, setSearch] = useState("");

  const showData = async () => {
    const response = await fetch(`${endpoint}/emlogros`);
    const data = await response.json();
    setLogros(data);
    console.log('hola');
  };

  useEffect(() => {
    showData();
  }, []);

  const searchs = (e)=> {
    setSearch (e.target.value)
    console.log (e)
  }
  const deleteLogro = async (id) => {
    await axios.delete(`${endpoint}/emlogro/${id}`);
    showData();
  };

  const listar = !search
    ? logros
    : logros.filter((dato) =>
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
              to="/emlogros/crear"
              className="btn btn-success btn-lg mt-2 mb-2 text-white"
            >
              Crear
            </Link>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>Empleado</th>
                <th>Logros</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {listar.map((logro) => (
                <tr key={logro.id}>
                  <td>{logro.empleados.Primer_Nombre}</td>
                  <td>{logro.logros.Descripcion}</td>
                  <td>
                    <Link
                      to={`/emlogros/edit/${logro.id}`}
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

export default Emlogros;
