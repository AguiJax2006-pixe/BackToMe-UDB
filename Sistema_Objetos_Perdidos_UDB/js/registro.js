document.getElementById("formRegistro").addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const carnet = document.getElementById("carnet").value.trim();
  const carrera = document.getElementById("carrera").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value;
  const confirmar = document.getElementById("confirmarPassword").value;
  const mensaje = document.getElementById("mensaje");

  mensaje.className = "alert";

  if (!nombre || !apellido || !carnet || !carrera || !correo || !password || !confirmar) {
    return mostrarError("Todos los campos son obligatorios.");
  }

  if (!validarCorreo(correo)) {
    return mostrarError("Ingresa un correo electrónico válido.");
  }

  if (!validarPassword(password)) {
    return mostrarError("La contraseña debe tener al menos 6 caracteres.");
  }

  if (password !== confirmar) {
    return mostrarError("Las contraseñas no coinciden.");
  }

  const resultado = registrarUsuario(
    nombre,
    apellido,
    carnet,
    carrera,
    correo,
    password
  );

  if (!resultado.correcto) {
    return mostrarError(resultado.mensaje);
  }

  mensaje.textContent = "¡Cuenta creada correctamente!";
  mensaje.classList.add("alert-success", "show");
  document.getElementById("formRegistro").reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);

  function mostrarError(texto) {
    mensaje.textContent = texto;
    mensaje.classList.add("alert-error", "show");
  }
});
