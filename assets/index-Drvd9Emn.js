(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function c(){const e=document.createElement("nav");return e.classList.add("navbar","navbar-expand-lg","navbar-dark","bg-dark","bg-gradient","fixed-top"),e.innerHTML=`
      <div class="container">
        <a class="navbar-brand" href="#">Fundo Dos Hermanos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#quienes_somos">Quienes Somos</a></li>
            <li class="nav-item"><a class="nav-link" href="#destino">Destino</a></li>

            <!-- Dropdown Menu for Services -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
                <li><a class="dropdown-item" href="#servicios">Caza</a></li>
                <li><a class="dropdown-item" href="#servicios">Pesca</a></li>
              </ul>
            </li>

            <li class="nav-item"><a class="nav-link" href="#precios">Precios</a></li>
            <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
  `,e}function r(){const e=document.createElement("header");return e.setAttribute("id","inicio"),e.innerHTML=`
    <div class="container text-white">
      <p class="display-6">TURISMO CINEGÉTICOEN LA PATAGONIA CHILENA</p>
      <p class="display-6">Explora lo salvaje</p>
      <p class="lead">Experiencias premium de caza y pesca</p>
      <a href="#contacto" class="btn btn-outline-light btn-lg mt-4">Reservar ahora</a>
    </div> 
  `,e}function d(){const e=document.createElement("section");return e.setAttribute("id","quienes_somos"),e.classList.add("bg-light"),e.innerHTML=`
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <h2>Quienes Somos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-lg-6 text-center">
          <img src="https://placehold.co/600x400" alt="About Us" class="img-fluid rounded shadow my-2">
        </div>
      </div>
    </div> 
  `,e}function u(){const e=document.createElement("section");return e.setAttribute("id","destino"),e.innerHTML=`
    <div class="container pb-5">
      <h2 class="text-center mb-4">Destino</h2>
      <p class="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="row align-items-center ">
        <div class="col-lg-6 text-center">
          <img src="https://placehold.co/600x400" alt="About Us" class="img-fluid rounded shadow my-2">
        </div>
        <div class="col-lg-6 text-center text-lg-start my-3"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start my-3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-lg-6 text-center my-3">
          <img src="https://placehold.co/600x400" alt="About Us" class="img-fluid rounded shadow my-2">
        </div>
      </div>
    </div>
    <p class="display-6 text-center my-4">¡Vive la experiencia en Fundo Dos Hermanos!</p>
    <div id="carousel_destino" class="carousel slide mt-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://placehold.co/1920x800" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://placehold.co/1920x800" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://placehold.co/1920x800" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
  `,e}function m(){const e=document.createElement("section");return e.setAttribute("id","servicios"),e.innerHTML=`
    <div class="container">
      <h2 class="text-center mb-5">Servicios</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100 shadow text-white shadow">
            <img src="https://placehold.co/400x400" class="card-img" alt="Expediciones de caza">
            <div class="card-img-overlay text-center">
              <h3 class="card-title">Expediciones de caza</h3>
              <p class="card-text">Experiencia casi exclusivamente a la caza de ciervo rojo (Cervus Elaphus) en distintos ambientes que nos ofrecen los dominios de Fundo Dos Hermanos con extensos valles abiertos, bosques de lengas en altura con escaso sotobosque así como sectores de fachinales y quebradas.</p> 
              <p class="card-text">En donde el visitante podrá experimentar los distintos métodos de caza según su experiencia para lo cual se cuenta con la asistencia de nuestro guía local con años de experiencia en la caza mayor y conocedor de la zona.</p> 
              <p class="card-text">También se cuenta con la asistencia de caballares para la logística y traslado de sus presas siendo el lugar de pernoctación un puesto de altura equipado para el descanso pre y post jornada de caza situado en medio del Valle Los Cabezas a pasos de arrollo la veranada y Laguna Azucena.</p> 
            </div>
          </div>
        </div>
        <div class="col-lg-6"> 
          <div class="card h-100 shadow text-white shadow">
            <img src="https://placehold.co/400x400" class="card-img" alt="Expediciones de pesca">
            <div class="card-img-overlay text-center">
              <h3 class="card-title">Expediciones de pesca</h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  `,e}function p(){const e=document.createElement("section");return e.setAttribute("id","precios"),e.classList.add("bg-light"),e.innerHTML=`
    <div class="container">
      <h2 class="text-center mb-5">Precios</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card text-center border-primary h-100 shadow">
            <div class="card-header bg-primary text-white">
              Paquete de caza
            </div>
            <div class="card-body">
              <h3>USD $500</h3>
              <ul class="list-unstyled">
                <li>Por persona - diario</li>
                <li>Guía experto de la zona</li>
                <li>Equipo proporcionado</li>
                <li>Estadía en puesto de montaña</li>
                <li>Comidas incluidas</li> 
                <li>Apoyo de caballares</li>                 
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card text-center border-success h-100 shadow">
            <div class="card-header bg-success text-white">
              Paquete de pezca
            </div>
            <div class="card-body">
              <h3>USD $500</h3>
              <ul class="list-unstyled">
                <li>Por persona - diario</li>
                <li>Guía experto de la zona</li>
                <li>Todo el equipo de pesca proporcionado</li>  
                <li>Estadía en puesto de montaña</li>              
                <li>Comidas incluidas</li>
                <li>Apoyo de caballares</li>     
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-4">Forma de pago mediante transferencia bancaria, 50% al momento de efectuar la reserva.</p>
    </div>
  `,e}function v(){const e=document.createElement("section");return e.setAttribute("id","contacto"),e.classList.add("bg-dark","text-white","bg-gradient"),e.innerHTML=`
    <div class="container">      
      <div class="row g-3">
        <div class="col-lg-6 text-center text-lg-start mb-4">
          <h2 class="mb-3">Contacto</h2>
          <span><i class="bi bi-geo-alt"></i></span>
          <span class="ms-2">Villa Mañihuales, Aysén, Chile</span><br>
          <span><i class="bi bi-telephone"></i></span>
          <a class="ms-2 text-white text-decoration-none" href="tel:+56000000000">+56 000000000</a><br>
          <span><i class="bi bi-envelope-at"></i></span>
          <a class="ms-2 text-white text-decoration-none" href="mailto:fundodoshermanos@gmail.com">fundodoshermanos@gmail.com</a>
        </div>
        <div class="col-lg-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22501.361211256622!2d-72.17508550989648!3d-45.173528894521745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdf315da82e2d6f3%3A0x68b0470258a36370!2zVmlsbGEgTWHDsWlodWFsZXMsIEF5c8OpbiwgQ2hpbGU!5e0!3m2!1ses!2ses!4v1746440601853!5m2!1ses!2ses" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  `,e}function g(){const e=document.createElement("footer");return e.classList.add("bg-black","bg-gradient","text-light","text-center","p-3"),e.innerHTML=`
    <small>© 2025 Fundo Dos Hermanos. All rights reserved.</small>
  `,e}document.querySelector("#app").append(c(),r(),d(),u(),m(),p(),v(),g());const b=document.querySelectorAll(".navbar-nav .nav-link"),l=document.querySelector(".navbar-collapse");b.forEach(e=>{e.addEventListener("click",()=>{l.classList.contains("show")&&new bootstrap.Collapse(l).hide()})});
