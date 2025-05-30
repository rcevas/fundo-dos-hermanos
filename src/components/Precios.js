export function Precios() {
  const precios = document.createElement("section");
  precios.setAttribute("id", "precios");
  precios.classList.add("bg-light");

  precios.innerHTML = `
    <div class="container">
      <h2 class="text-center text-primary mb-5">Precios</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card text-center border-primary h-100 shadow">
            <div class="card-header bg-primary text-white">Paquete de caza</div>
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
            <div class="card-header bg-success text-white">Paquete de pezca</div>
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
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          />
        </symbol>
        <symbol
          id="exclamation-triangle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </symbol>
      </svg>
      <div
        class="alert alert-primary d-flex align-items-center mt-5 shadow"
        role="alert"
      >
        <svg
          class="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Info:"
        >
          <use xlink:href="#info-fill" />
        </svg>
        <div>
          <ul>
            <li>
              Las reservas se hacen a través del email de contacto:
              <a
                class="ms-2 text-decoration-none"
                href="mailto:fundodoshermanos@gmail.com"
                >fundodoshermanos@gmail.com</a
              >
            </li>
            <li>
              Forma de pago mediante transferencia bancaria, 50% al momento de
              efectuar la reserva.
            </li>
            <li>
              Forma de pago y condiciones se comunicará al momento de efectuar la
              reserva.
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

  return precios;
}
