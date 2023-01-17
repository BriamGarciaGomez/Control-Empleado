import React, { useState, useEffect } from "react";
import { ConteinerA, Navegacion } from "../styles/nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const endpoint = "http://127.0.0.1:8000/api/emfalta";

const Emcreatefalta = () => {
  const [empleado, setEmpleado] = useState("");
  const [falta, setFalta] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { id_Empleado: empleado, id_Falta: falta });
    navigate("/emfaltas");
  };

  return (
    <ConteinerA>
      <Navegacion>
        <h3>Creando una falta a unEmpleado</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Empleado</label>
            <br />
            <input
              required
              value={empleado}
              onChange={(e) => setEmpleado(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Falta</label>
            <br />
            <input
              required
              value={falta}
              onChange={(e) => setFalta(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/emfaltas" className="btn btn-warning">
            Cancelar
          </Link>
        </form>
      </Navegacion>
    </ConteinerA>
  );
};

export default Emcreatefalta;
