export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("contacto__div-inputs-invalid");
        input.parentElement.querySelector(".contacto__input-mensaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("contacto__div-inputs-invalid");
        input.parentElement.querySelector(".contacto__input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo no puede estar vacio"
    },
    email: {
        valueMissing: "El campo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    asunto: {
        valueMissing: "El campo no puede estar vacio"
    },
    
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput] [error];
        };
    });

    return mensaje;
};

