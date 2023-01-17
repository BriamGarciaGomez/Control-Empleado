import React from "react";
import { ConteinerA, Navegacion, Catalogo, Titulo } from "../styles/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import ImgPuesto from "../assets/puestos.gif";
import "../styles/Home.css";

import P1 from "../assets/imagenes/P1.jpg";
import P2 from "../assets/imagenes/P2.jpg";
import P3 from "../assets/imagenes/P3.jpg";
import P4 from "../assets/imagenes/P4.webp";
import P5 from "../assets/imagenes/P5.jpg";
import P6 from "../assets/imagenes/P6.jpg";
import P7 from "../assets/imagenes/P7.webp";
import P8 from "../assets/imagenes/P8.jpg";
import P9 from "../assets/imagenes/P9.jpg";
import P10 from "../assets/imagenes/P10.jpg";
import P11 from "../assets/imagenes/P11.webp";
import P12 from "../assets/imagenes/P12.jpg";
import P13 from "../assets/imagenes/P13.jpeg";
import P14 from "../assets/imagenes/P14.jpeg";
import P15 from "../assets/imagenes/P15.webp";
import P16 from "../assets/imagenes/P16.webp";
import P17 from "../assets/imagenes/P17.webp";
import P18 from "../assets/imagenes/P18.jpg";
import P19 from "../assets/imagenes/P19.jpg";
import P20 from "../assets/imagenes/P20.webp";
import P21 from "../assets/imagenes/P21.png";

const Home = () => {
  return (
    <ConteinerA>
      <Navegacion>
        <Titulo>CATALOGO DE PRODUCTOS</Titulo>

        <Catalogo>
          <div class="producto caja1">
            <img src={P1} alt="" />
            <p>Auriculares</p>
            <p>Precio C/U Q 200.00</p>
          </div>

          <div class="producto caja2">
            <img src={P2} alt="" />
            <p>Auriculares in-ear inalámbricos</p>
            <p>Precio C/U 250.00</p>
          </div>

          <div class="producto caja3">
            <img src={P3} alt="" />
            <p>Unidades Caddy</p>
            <p>Precio C/U 100.00</p>
          </div>

          <div class="producto caja4">
            <img src={P4} alt="" />
            <p>Computadoras de escritorio Gammer</p>
            <p>Precio C/U 6000.00</p>
          </div>

          <div class="producto caja5">
            <img src={P5} alt="" />
            <p>Memerias RAM</p>
            <p>Precio C/U 550.00</p>
          </div>

          <div class="producto caja6">
            <img src={P6} alt="" />
            <p>Reloj con GPS Inteligente</p>
            <p>Precio C/U 400.00</p>
          </div>

          <div class="producto caja7">
            <img src={P7} alt="" />
            <p>Discos Duros SSD</p>
            <p>Precio C/U 800.00</p>
          </div>

          <div class="producto caja8">
            <img src={P8} alt="" />
            <p>Tablets </p>
            <p>Precio C/U 1500.00</p>
          </div>

          <div class="producto caja9">
            <img src={P9} alt="" />
            <p>Placas Madres de ultima generacion</p>
            <p>Precio C/U 3500.00</p>
          </div>

          <div class="producto caja10">
            <img src={P10} alt="" />
            <p>Teclados Gammer</p>
            <p>Precio C/U 300.00</p>
          </div>

          <div class="producto caja11">
            <img src={P11} alt="" />
            <p>Smartphone</p>
            <p>Precio C/U 7000.00</p>
          </div>

          <div class="producto caja12">
            <img src={P12} alt="" />
            <p>Televisores Smar tv</p>
            <p>Precio C/U 4500.00</p>
          </div>

          <div class="producto caja13">
            <img src={P13} alt="" />
            <p>Micro Memorias Smartphone</p>
            <p>Precio C/U 150.00</p>
          </div>

          <div class="producto caja14">
            <img src={P14} alt="" />
            <p>Mouse Gammer</p>
            <p>Precio C/U 200.00</p>
          </div>

          <div class="producto caja15">
            <img src={P15} alt="" />
            <p>Lentes de Realidad Aumentada</p>
            <p>Precio C/U 3500.00</p>
          </div>

          <div class="producto caja16">
            <img src={P16} alt="" />
            <p>Laptops de ultima generacion</p>
            <p>Precio C/U 4989.00</p>
          </div>

          <div class="producto caja17">
            <img src={P17} alt="" />
            <p>Inpresoras de ultima generacion CANON</p>
            <p>Precio C/U 400.00</p>
          </div>

          <div class="producto caja18">
            <img src={P18} alt="" />
            <p>Gadget de ultima generacion</p>
            <p>Precio C/U 2500.00</p>
          </div>

          <div class="producto caja19">
            <img src={P19} alt="" />
            <p>Procesadores de ultima generacion</p>
            <p>Precio C/U 2000.00</p>
          </div>

          <div class="producto caja20">
            <img src={P20} alt="" />
            <p>Consolas de ultima generacion Gammer</p>
            <p>Precio C/U 5800.00</p>
          </div>

          <div class="producto caja15">
            <img src={P21} alt="" />
            <p>Cargadores para laptops y Pcs.</p>
            <p>Precio C/U 500.00</p>
          </div>
        </Catalogo>
      </Navegacion>
    </ConteinerA>
  );
};

export default Home;
