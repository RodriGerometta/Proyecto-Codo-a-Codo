const formulario = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const p_warning = document.getElementById("warning");

formulario.addEventListener('submit', validar =>{
    validar.preventDefault()
    let war = "";
    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let error = false;
    p_warning.innerHTML = "";

    if (nombre.value.length <3) {
        war += `El nombre es muy corto <br>`;
        error = true;
    }
    if (!validarEmail.test(email.value)){ //COLOCO EL ! PARA CONSULTAR SI LA VALIDACIÓN NO SE CUMPLE.
        war += `El email no es válido <br>`;
        error = true;
    }
    if (mensaje.value.length < 30) {
        war += `El mensaje debe tener como mínimo 30 caracteres <br>`;
        error = true;
    }

    if (error){
        p_warning.innerHTML = war;
    }else{
        document.getElementById("enviado-ok").innerHTML = "Enviado!";
    }

})
