import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ConteinerA, Navegacion } from "../styles/nav";
import { Link } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/falta/'
const EditFalta = () => {
  const [Descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      Descripcion: Descripcion,
    });
    navigate("/faltas");
  };
  useEffect(() => {
    const getTiendaByid = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setDescripcion(response.data.Descripcion);
    };
    getTiendaByid();
  }, []);

  return (
    <ConteinerA>
      <Navegacion>
        <h3>Editando falta</h3>
        <form onSubmit={update}  method="post">
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <br />
            <input
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/faltas" className="btn btn-warning">
            Cancelar
          </Link>
        </form>
      </Navegacion>
    </ConteinerA>
  );
};

export default EditFalta;