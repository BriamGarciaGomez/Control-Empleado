import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ConteinerA, Formulario, Navegacion, Titulo } from "../styles/nav";
import { Link } from "react-router-dom";


const endpoint = "http://127.0.0.1:8000/api/empleado/";
const EditEmpleado = () => {
  const [Primer_Nombre, setNombrea] = useState("");
  const [Segundo_Nombre, setNombreb] = useState("");
  const [Primer_Apellido, setApellidoa] = useState("");
  const [Segundo_Apellido, setApellidob] = useState("");

  const [Fecha_Nacimiento, setFecha] = useState("");
  const [Foto, setFoto] = useState("");

  const [Estado, setEstado] = useState("");
  const [id_puesto, setPuesto] = useState();
  const [id_tienda, setTienda] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [validationError, setValidationError] = useState({});

  // const imagen = (file) => {
  // setFoto(file [0])
  // };

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      Primer_Nombre: Primer_Nombre,
      Segundo_Nombre: Segundo_Nombre,
      Primer_Apellido: Primer_Apellido,
      Segundo_Apellido: Segundo_Apellido,
      Fecha_Nacimiento: Fecha_Nacimiento,
      Foto: Foto,
      Estado: Estado,
      id_puesto: id_puesto,
      id_tienda: id_tienda,
    })
    
    
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
  useEffect(() => {
    const getTiendaByid = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNombrea(response.data.Primer_Nombre);
      setNombreb(response.data.Segundo_Nombre);
      setApellidoa(response.data.Primer_Apellido);
      setApellidob(response.data.Segundo_Apellido);
      setFecha(response.data.Fecha_Nacimiento);
      setFoto(response.data.Foto);
      setEstado(response.data.Estado);
      setPuesto(response.data.id_puesto);
      setTienda(response.data.id_tienda);
    };
    getTiendaByid();
  }, []);

  return (
    <ConteinerA>
      <Navegacion>
        <form onSubmit={update} method="post" enctype="multipart/form-data">
          <Titulo>Editando Empleado</Titulo>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/empleados" className="btn btn-warning">
            Cancelar
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="form-label">Foto</label>
          <input required
            // value={Foto}
            onChange={(e) => setFoto(e.target.value)}
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
                required="Ingresar un Nombre"
                value={Primer_Nombre}
                onChange={(e) => setNombrea(e.target.value)}
                type="text"
                className="forn-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Segundo_Nombre</label>
              <br />
              <input
                value={Segundo_Nombre}
                onChange={(e) => setNombreb(e.target.value)}
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
                onChange={(e) => setApellidoa(e.target.value)}
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
                onChange={(e) => setApellidob(e.target.value)}
                type="text"
                className="forn-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Feche_Nacacimiento</label>
              <br />
              <input
                required="Ingresar una Fecha_Nacimiento"
                value={Fecha_Nacimiento}
                onChange={(e) => setFecha(e.target.value)}
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
                onChange={(e) => setEstado(e.target.value)}
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
                onChange={(e) => setPuesto(e.target.value)}
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
                onChange={(e) => setTienda(e.target.value)}
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

export default EditEmpleado;
