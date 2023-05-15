function validacion() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var error = document.getElementById("error");
  var expresion = /\w+@\w+\.+[a-z]/;

  error.style.color = "red";
  error.style.fontSize = "14px";

  if (nombre === "" || email === "" || mensaje === "") {
    error.innerHTML = "Todos los campos son obligatorios";
    return false;
  } else if (!expresion.test(email)) {
    error.innerHTML = "El correo no es válido";
    return false;
  }
}
