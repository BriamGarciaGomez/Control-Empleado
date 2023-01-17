import axios from "axios";
import { ConteinerA, Navegacion } from "../styles/nav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/puesto";

const CreatePuesto = () => {
  const [Nombre, setNombre] = useState("");
  const [Salario, setSalario] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { Nombre: Nombre, Salario: Salario });
    navigate("/puestos");
  };

  return (
    <ConteinerA>
      <Navegacion>

        
        <h3>Creando nuevo puesto</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <br />
            <input required 
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salario</label>
            <br />
            <input required   value={Salario}
              onChange={(e) => setSalario(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Guardar
          </button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/puestos" className="btn btn-warning">
            Cancelar
          </Link>
        </form>

      </Navegacion>
    </ConteinerA>
  );
};

export default CreatePuesto;
