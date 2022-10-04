import { valida } from "./validaciones.js";
import { validat } from "./validacionest.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

const textarea = document.querySelectorAll("textarea");

textarea.forEach((text) => {
    text.addEventListener("blur", (text) => {
        validat(text.target);
    });
});