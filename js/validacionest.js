export function validat(text) {
    const tipoDeText = text.dataset.tipo;
    if (text.validity.valid) {
        text.parentElement.classList.remove("contacto__div-text-invalid");
        text.parentElement.querySelector(".contacto__textarea-mensaje-error").innerHTML = "";
    } else {
        text.parentElement.classList.add("contacto__div-text-invalid");
        text.parentElement.querySelector(".contacto__textarea-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeText, text);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    mensaje: {
        valueMissing: "El campo no puede estar vacio"
    }, 
};

function mostrarMensajeDeError(tipoDeText, text) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (text.validity[error]) {
            console.log(tipoDeText, error);
            console.log(text.validity[error]);
            console.log(mensajesDeError[tipoDeText][error]);
            mensaje = mensajesDeError[tipoDeText] [error];
        };
    });

    return mensaje;
};