import "./style.css";
import { NavBar } from './components/NavBar.js';
import { Inicio } from "./components/Inicio.js";
import { QuienesSomos } from "./components/quienes-somos.js";

document.querySelector("#app").append(
  NavBar(),
  Inicio(),
  QuienesSomos()
);
