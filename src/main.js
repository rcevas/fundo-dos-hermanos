import "./style.css";
import { NavBar } from "./components/navbar/NavBar.js";
import { Inicio } from "./components/inicio/Inicio.js";
import { QuienesSomos } from "./components/quienes-somos/QuienesSomos.js";
import { Destino } from "./components/destino/Destino.js";
import { Servicios } from "./components/servicios/Servicios.js";
import { Precios } from "./components/precios/Precios.js";
import { Contacto } from "./components/contacto/Contacto.js";
import { Footer } from "./components/footer/Footer.js";

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
