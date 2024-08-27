// Selección de elementos
let textarea = document.querySelector(".home__content__input");
let mensaje = document.getElementById("outputText");
let placeholderImage = document.getElementById("placeholderImage");
let copyButton = document.getElementById("copyButton");

/* Llaves de encriptación
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptacion(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptacion(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function encriptar() {
    let texto = textarea.value.trim();
    
    // Rechaza signos y letras mayúsculas
    if (/[^a-z\s]/.test(texto)) {
        mensaje.textContent = 'El texto debe contener solo letras minúsculas y espacios.';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
        textarea.value = "";
        return;
    }
    
    const txEncriptado = encriptacion(texto);

    if (texto === '') {
        placeholderImage.style.display = 'block';
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.style.display = 'none';
        mensaje.textContent = txEncriptado;
        copyButton.style.display = 'block';
    }

    textarea.value = "";
}

function desencriptar() {
    let texto = textarea.value.trim();
    
    // Rechaza signos y letras mayúsculas
    if (/[^a-z\s]/.test(texto)) {
        mensaje.textContent = 'El texto debe contener solo letras minúsculas y espacios.';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
        textarea.value = "";
        return;
    }
    
    const txDesencriptado = desencriptacion(texto);

    if (texto === '') {
        placeholderImage.style.display = 'block';
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.style.display = 'none';
        mensaje.textContent = txDesencriptado;
        copyButton.style.display = 'block';
    }

    textarea.value = "";
}

function copiar() {
    // Obtiene el texto que está en el mensaje (área de encriptado)
    const textoACopiar = mensaje.textContent;

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            // Vacía el contenido del elemento mensaje
            mensaje.textContent = 'Ningún mensaje fue encontrado';
            // Muestra la imagen nuevamente
            placeholderImage.style.display = 'block';
            // Oculta el botón de copiar
            copyButton.style.display = 'none';
            // Opcional: muestra una alerta de éxito
            alert("Texto copiado al portapapeles");

            // Pega el texto en el área de texto para permitir desencriptar
            textarea.value = textoACopiar;
        })
        .catch(err => {
            console.log('Algo salió mal al copiar el texto: ', err);
        });
}
