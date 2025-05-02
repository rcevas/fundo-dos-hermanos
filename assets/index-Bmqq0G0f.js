(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function i(){const r=document.createElement("header");return r.innerHTML=`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid px-lg-5">
        <a class="navbar-brand" href="#">Fundo Dos Hermanos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav fw-bold">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            <a class="nav-link" href="#">Quienes Somos</a>
            <a class="nav-link" href="#">Destino</a>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Caza</a></li>
                <li><a class="dropdown-item" href="#">Pesca</a></li>
              </ul>
            </li>              
            <a class="nav-link" href="#">Precio</a>
            <a class="nav-link" href="#">Contacto</a>
          </div>
        </div>
      </div>
    </nav>    
  `,r}function l(){const r=document.createElement("div");return r.innerHTML=`

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://placehold.co/1920x720" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h1>First slide label</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
    </div>
 
  `,r}function c(){const r=document.createElement("div");return r.innerHTML=`

    <div>

    </div>
 
  `,r}document.querySelector("#app").append(i(),l(),c());
