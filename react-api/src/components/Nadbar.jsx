import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
import { Siderbar } from "./Siderbar";
import "./narvar.css";
import { IconContext } from "react-icons";

import Usuario from "../assets/logo.jpg";
import Buscar from "../assets/buscar.png";
import {Narbar} from '../styles/nav'

function Nadbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Narbar>
          <div>
            <Link to="#" className="menu-bars" id="menu">
              <FaIcons.FaBars className="icon-menu" onClick={showSiderbar} />
            </Link>
          </div>
          <div className="buscar">
           <h1 className="ciber" style={{color:'white'}} >CIBERDESCUENTO S.A</h1>
          </div>
          <div>
            <span className="imagen">
              <a href="#">
                <img className="logo" src={Usuario} alt="" />
              </a>
            </span>
          </div>
          </Narbar>

        <div className={sidebar ? "nav-menu a active" : "nav-menu"}>
          <ul className="nav-menu-items">
            {Siderbar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span> {item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Nadbar;