import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nadbar from "./components/Nadbar";
import ShowTienda from "./pages/ShowTienda";
import ShowPuesto from "./pages/ShowPuesto";
import CreateTienda from "./pages/CreateTienda";
import CreatePuesto from "./pages/CreatePuesto";
import CreateFalta from "./pages/CreateFalta";
import CreateLogro from "./pages/CreateLogro";


import EditPuesto from "./pages/EditPuesto";
import EditFalta from "./pages/EditFalta";
import EditLogro from "./pages/EditLogro";
import EditTienda from "./pages/EditTienda";

import ShowFalta from "./pages/ShowFalta";
import ShowLogro from "./pages/ShowLogro";
import ShowEmpleado from "./pages/ShowEmpleado";
import CreateEmpleado from "./pages/CreateEmpleado";
import Reporte from "./pages/Reporte";
import EditEmpleado from "./pages/EditEmpleado";
import Emlogros from "./components/Emlogros";
import Emfaltas from "./components/Emfaltas";
import Emcreatefalta from "./components/Emcreatefalta";
import Emcreatelogro from "./components/Emcreatelogro";
import Emeditfalta from "./components/Emeditfalta";
import Emeditlogro from "./components/Emeditlogro";

const App = () => {
  return (
    <>

      <BrowserRouter>

        <Nadbar />
        <Routes>
          
          <Route path="/" element={<Home />} />

          {/* ruta para la tabla Tiendas */}
          <Route path="/tiendas" element={<ShowTienda />} />
          <Route path="/tienda/edit/:id" element={<EditTienda />} />
          <Route path="/tienda/crear" element={<CreateTienda />} />

          {/* rutas para la tabla Puestos */}
          <Route path="/puestos" element={<ShowPuesto />} />
          <Route path="/puesto/edit/:id" element={<EditPuesto />} />
          <Route path="/puesto/crear" element={<CreatePuesto />} />

          {/* rutas para la tabla logros */}
          <Route path="/logros" element={<ShowLogro />} />
          <Route path="/logro/edit/:id" element={<EditLogro />} />
          <Route path="/logro/crear" element={<CreateLogro />} />

          {/* rutas para la tabla faltas */}
          <Route path="/faltas" element={<ShowFalta />} />
          <Route path="/falta/edit/:id" element={<EditFalta />} />
          <Route path="/falta/crear" element={<CreateFalta />} />


            {/* rutas para la tabla empleados */}
            <Route path="/empleados" element={<ShowEmpleado />} />
            <Route path="/empleado/crear" element={<CreateEmpleado />} />
            <Route path="/empleado/edit/:id" element={<EditEmpleado />} />
        

            <Route path="/emlogros" element={<Emlogros/>} />
            <Route path="/emlogros/crear" element={<Emcreatelogro />} />
            <Route path="/emlogros/edit/:id" element={<Emeditlogro />} />

            <Route path="/emfaltas" element={<Emfaltas />} />
            <Route path="/emfaltas/crear" element={<Emcreatefalta />} />
            <Route path="/emfaltas/edit/:id" element={<Emeditfalta />} />


          <Route path="/reportes" element={<Reporte />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
