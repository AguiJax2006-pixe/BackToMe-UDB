document.getElementById("formLogin").addEventListener("submit", (event) => {
  event.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const carnet = document.getElementById("carnet").value.trim();
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensajeError");

  mensaje.classList.remove("show");

  if (!validarCampo(correo)) {
    return mostrarError("Por favor ingresa tu correo.");
  }

  if (!validarCorreo(correo)) {
    return mostrarError("Ingresa un correo electrónico válido.");
  }

  if (!validarCampo(carnet)) {
    return mostrarError("Por favor ingresa tu carnet estudiantil.");
  }

  if (!validarCampo(password)) {
    return mostrarError("Por favor ingresa tu contraseña.");
  }

  const resultado = iniciarSesion(carnet, correo, password);

  if (!resultado.correcto) {
    return mostrarError(resultado.mensaje);
  }

  window.location.href = "dashboard.html";

  function mostrarError(texto) {
    mensaje.textContent = texto;
    mensaje.classList.add("show");
  }
});

