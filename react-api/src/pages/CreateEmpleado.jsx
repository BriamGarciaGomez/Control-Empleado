import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ShowPuesto from "./ShowPuesto";
import { ConteinerA, Formulario, Navegacion, Titulo } from "../styles/nav";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/empleado";

const CreateEmpleado = () => {
  const [Primer_Nombre, setNombrea] = useState("");
  const [Segundo_Nombre, setNombreb] = useState("");
  const [Primer_Apellido, setApellidoa] = useState("");
  const [Segundo_Apellido, setApellidob] = useState("");
  const [Fecha_Nacimiento, setFecha] = useState("");
  const [imagen, setFoto] = useState(null);

  const changeHandler = (event) => {
    setFoto(event.target.files[0]);
  };

  const [Estado, setEstado] = useState("");
  const [id_puesto, setPuesto] = useState();
  const [id_tienda, setTienda] = useState();
  const [validationError, setValidationError] = useState({});

  const navigate = useNavigate();

  const createEmpleado = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Primer_Nombre", Primer_Nombre);
    formData.append("Segundo_Nombre", Segundo_Nombre);
    formData.append("Primer_Apellido", Primer_Apellido);
    formData.append("Segundo_Apellido", Segundo_Apellido);
    formData.append("Fecha_Nacimiento", Fecha_Nacimiento);
    formData.append("Foto", imagen);
    formData.append("Estado", Estado);
    formData.append("id_puesto", id_puesto);
    formData.append("id_tienda", id_tienda);

    await axios
      .post(endpoint, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/empleados");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <ConteinerA>
      <Navegacion>
        <div className="form-wrapper">
          {Object.keys(validationError).length > 0 && (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-danger">
                  <ul className="mb-0">
                    {Object.entries(validationError).map(([key, value]) => (
                      <li key={key}>{value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={createEmpleado} enctype="multipart/form-data">
          <Titulo>Crear Nuevo Empleado</Titulo>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/empleados" className="btn btn-warning">
            Cancelar
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="form-label">Foto</label>
          <input
            accept="image/*"
            onChange={changeHandler}
            type="file"
            className="forn-control"
          />
          <br />
          <br />
          <Formulario>
            <div className="mb-3">
              <label className="form-label">Primer_Nombre</label>
              <br />
              <input
                required
                value={Primer_Nombre}
                onChange={(event) => {
                  setNombrea(event.target.value);
                }}
                type="text"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Segundo_Nombre</label>
              <br />
              <input
                value={Segundo_Nombre}
                onChange={(event) => {
                  setNombreb(event.target.value);
                }}
                type="text"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Primer_Apellido</label>
              <br />
              <input
                required="Ingresar su Apellido"
                value={Primer_Apellido}
                onChange={(event) => {
                  setApellidoa(event.target.value);
                }}
                type="text"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Segundo_Apellido</label>
              <br />
              <input
                required="Ingresar su Apellido"
                value={Segundo_Apellido}
                onChange={(event) => {
                  setApellidob(event.target.value);
                }}
                type="text"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Feche_Nacimiento</label>
              <br />
              <input
                required="Ingresar una Fecha_Nacimiento"
                value={Fecha_Nacimiento}
                onChange={(event) => {
                  setFecha(event.target.value);
                }}
                type="date"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Estado</label>
              <br />
              <input
                required="Ingresar un Estado"
                value={Estado}
                onChange={(event) => {
                  setEstado(event.target.value);
                }}
                type="number"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Puesto</label>
              <br />
              <input
                required
                readonly
                value={id_puesto}
                onChange={(event) => {
                  setPuesto(event.target.value);
                }}
                type="number"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tienda</label>
              <br />
              <input
                required
                readonly
                value={id_tienda}
                onChange={(event) => {
                  setTienda(event.target.value);
                }}
                type="number"
                className="forn-control"
              />
            </div>

            <br />
          </Formulario>
        </form>
      </Navegacion>
    </ConteinerA>
    
      
      
  );
};

export default CreateEmpleado;
