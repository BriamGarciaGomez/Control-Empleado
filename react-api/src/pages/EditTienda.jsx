import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";
import { Link } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/tienda/'
const EditTienda = () => {
  const [Nombre, setNombre] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      Nombre: Nombre,
      Ubicacion: Ubicacion,
    });
    navigate("/tiendas");
  };
  useEffect(() => {
    const getTiendaByid = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNombre(response.data.Nombre);
      setUbicacion(response.data.Ubicacion);
    };
    getTiendaByid();
  }, []);

  return (
    <ConteinerA>
      <Navegacion>
        <h3>Editando tienda</h3>
        <form onSubmit={update}  method="post">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <br />
            <input
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ubicacion</label>
            <br />
            <input
              value={Ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/tiendas" className="btn btn-warning">
            Cancelar
          </Link>
        </form>
      </Navegacion>
    </ConteinerA>
  );
};

export default EditTienda;
