import "./style.css";
import { NavBar } from "./components/NavBar.js";
import { Inicio } from "./components/Inicio.js";
import { QuienesSomos } from "./components/quienes-somos.js";
import { Destino } from "./components/Destino.js";
import { Servicios } from "./components/Servicios.js";
import { Precios } from "./components/Precios.js";
import { Contacto } from "./components/Contacto.js";
import { Footer } from "./components/Footer.js";

document
  .querySelector("#app")
  .append(
    NavBar(),
    Inicio(),
    QuienesSomos(),
    Destino(),
    Servicios(),
    Precios(),
    Contacto(),
    Footer()
  );

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});
