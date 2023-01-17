import React, { useState, useEffect } from "react";
import { ConteinerA, Navegacion } from '../styles/nav'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const endpoint = "http://127.0.0.1:8000/api/emfalta/";

const Emeditfalta = () => {
  const [empleado, setEmpleado] = useState("");
  const [falta, setFalta] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      id_Empleado: empleado ,id_Falta: falta
    });
    navigate("/emfaltas");
  };
  useEffect(() => {
    const getTiendaByid = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setEmpleado(response.data.id_Empleado);
      setFalta(response.data.id_Falta);
    };
    getTiendaByid();
  }, []);

  return (
    <ConteinerA>
    <Navegacion>

    <h3>Editando logro</h3>
        <form onSubmit={update}  method="post">
          <div className="mb-3">
            <label className="form-label">Empleado</label>
            <br />
            <input
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
              value={falta}
              onChange={(e) => setFalta(e.target.value)}
              type="text"
              className="forn-control"
            />
          </div>

        

          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/emfaltas" className="btn btn-warning">
            Cancelar
          </Link>
        </form>




    </Navegacion>
 </ConteinerA>
  )
}

export default Emeditfalta