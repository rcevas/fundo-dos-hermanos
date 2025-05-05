export function Precios() {
  const precios = document.createElement("section");
  precios.setAttribute("id", "precios");
  precios.classList.add("bg-light");

  precios.innerHTML = `
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
  `;

  return precios;
}
