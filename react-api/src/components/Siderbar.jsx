import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as MiIcons from "react-icons/md";
export const Siderbar = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Empleados",
    path: "/empleados",
    icon: <FaIcons.FaUsersCog />,
    cName: "nav-text",
  },
  {
    title: "Tiendas",
    path: "/tiendas",
    icon: <ImIcons.ImHome />,
    cName: "nav-text",
  },
  {
    title: "Puestos",
    path: "/puestos",
    icon: <MiIcons.MdMapsHomeWork />,
    cName: "nav-text",
  },

  {
    title: "Logros",
    path: "/logros",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Faltas",
    path: "/faltas",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Reportes",
    path: "/reportes",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Falta/Empleado",
    path: "/emfaltas",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Logro/Empleado",
    path: "/emlogros",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },


  

  // {
  //   title: "Crear",
  //   path: "/tienda/crear",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text",
  // },
];
