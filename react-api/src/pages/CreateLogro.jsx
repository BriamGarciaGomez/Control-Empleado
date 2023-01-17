import axios from "axios";
import { ConteinerA, Navegacion } from "../styles/nav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/logro";

const CreateLogro = () => {
  const [Descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { Descripcion: Descripcion });
    navigate("/logros");
  };

  return (
    <ConteinerA>
      <Navegacion>

        
        <h3>Creando nuevo logro</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <br />
            <input required 
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Guardar
          </button>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/logros" className="btn btn-warning">
            Cancelar
          </Link>
        </form>

      </Navegacion>
    </ConteinerA>
  );
};

export default CreateLogro;
