import "./style.css";
import { Header } from './components/Header.js';
import { Inicio } from "./components/Inicio.js";

document.querySelector("#app").append(
  Header(),
  Inicio()
);
