import "./style.css";
import { Header } from './components/Header.js';
import { Inicio } from "./components/Inicio.js";
import { QuienesSomos } from "./components/quienes-somos.js";

document.querySelector("#app").append(
  Header(),
  Inicio(),
  QuienesSomos()
);
