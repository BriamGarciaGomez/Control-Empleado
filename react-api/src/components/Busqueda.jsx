import React, { useState, useEffect } from "react";
import { ConteinerA, Navegacion } from "../styles/nav";
import { Link } from "react-router-dom";
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api";

const Busqueda = () => {
  //setear los hoohs useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la API
  

  const showData = async () => {
    const response = await fetch(`${endpoint}/empleados`);
    const data = await response.json();
    setUsers(data)
  };

  useEffect  (() => {


  showData();
  

  }, [])

  const deleteEmpleado = async (id) => {
    await axios.delete(`${endpoint}/empleado/${id}`);
    showData();
  };



  //funcion de busqueda
  const searchs = (e)=> {
    setSearch (e.target.value)
    console.log (e)
  }
 //Metodo de filtrado

const listar =!search ? users: users.filter((dato) => dato.Primer_Nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  return (
   <>
    
  <input onChange={searchs} value={search} type="text"  placeholder="Buscar" className=" form-control "/>


      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead >
          <tr className="text-primary">
            <th>Foto</th>
            <th>Pri_Nombre</th>
            <th>Seg_Nombre</th>
            <th>Pri_Apellido</th>
            <th>Seg_Apellido</th>
            <th>Fec_Nacimiento</th>
            <th>Puesto</th>
            <th>Salario</th>
            <th>Tienda</th>
          </tr>
        </thead>
        <tbody>
          {listar.map((tabla) => (
            <tr  key={tabla.id}>
              <td><img
                width="50px"
                height="50px"
                src={`http://localhost:8000/empleados/imagenes/${tabla.Foto}`}
              /></td>
              <td>{tabla.Primer_Nombre}</td>
              <td>{tabla.Segundo_Nombre}</td>
              <td>{tabla.Primer_Apellido}</td>
              <td>{tabla.Segundo_Apellido}</td>
              <td>{tabla.Fecha_Nacimiento}</td>
              <td>{tabla.puesto.Nombre}</td>
              <td>{tabla.puesto.Salario}</td>
              <td>{tabla.tienda.Nombre}</td>
              <td>
                    <Link
                      to={`/empleado/edit/${tabla.id}`}
                      className="btn btn-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteEmpleado(tabla.id)}
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
      </>
  );
};

export default Busqueda;
