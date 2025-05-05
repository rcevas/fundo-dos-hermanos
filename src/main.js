import "./style.css";
import { NavBar } from './components/NavBar.js';
import { Inicio } from "./components/Inicio.js";
import { QuienesSomos } from "./components/quienes-somos.js";
import { Destino } from "./components/Destino.js";
import { Servicios } from "./components/Servicios.js";

document.querySelector("#app").append(
  NavBar(),
  Inicio(),
  QuienesSomos(),
  Destino(),
  Servicios(),
);
