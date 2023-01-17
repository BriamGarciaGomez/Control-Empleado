import axios from "axios";
import { ConteinerA, Navegacion } from "../styles/nav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/tienda";

const CreateTienda = () => {
  const [Nombre, setNombre] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { Nombre: Nombre, Ubicacion: Ubicacion });
    navigate("/tiendas");
  };

  return (
    <ConteinerA>
      <Navegacion>

        
        <h3>Creando nueva tienda</h3>
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
            <label className="form-label">Ubicacion</label>
            <br />
            <input required   value={Ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Guardar
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

export default CreateTienda;
