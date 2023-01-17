import React from "react";
import { Catalogo, ConteinerA, Navegacion, Titulo } from "../styles/nav";
import Tienda from "../assets/tiendas.gif";
import Logro from "../assets/logro.png";
import Empleado from "../assets/empleados.gif";
import Puesto from "../assets/puestos.gif";
import Falta from "../assets/faltas.jpg";
import EmLogro from "../assets/logros1.webp";
import EmFalta from "../assets/faltaempleado.webp";

import "../styles/Home.css";

import "../styles/Reportes.css";
const Reporte = () => {
  return (
    <ConteinerA>
      <Navegacion>
        <Titulo>REPORTES EN GENERAL</Titulo>
        <Catalogo>
        <div class="producto ">
            <img src={Logro} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/logros"
              >
                Logros
              </a>
            </p>
          </div>
          <div class="producto tiendas">
            <img src={Tienda} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/tiendaEmpleado"
              >
                Tiendas
              </a>
            </p>
          </div>
          <div class="producto caja2">
            <img src={Puesto} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/puestos"
              >
                Puestos
              </a>
            </p>
          </div>
          
          <div class="producto caja2">
            <img src={Falta} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/faltas"
              >
                Faltas
              </a>
            </p>
          </div>

          <div class="producto caja2">
            <img src={Empleado} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/tiendas"
              >
                Empleados
              </a>
            </p>
          </div>

          <div class="producto caja2">
            <img src={EmLogro} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/logro-empleado"
              >
                Logros Empleados
              </a>
            </p>
          </div>

          <div class="producto caja2">
            <img src={EmFalta} alt="" />
            <p>
              <a
                target="_blank"
                href="http://127.0.0.1:8000/api/reportes/falta-empleado"
              >
                Faltas Empleados
              </a>
            </p>
          </div>

         
        </Catalogo>
        {/* <footer className="pie">
          <p>Reportes Generales en Archivos PDF</p>
          <p>Derechos reservados </p>
        </footer> */}
      </Navegacion>
    </ConteinerA>
  );
};

export default Reporte;
