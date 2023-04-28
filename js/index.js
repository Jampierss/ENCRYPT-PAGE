function encriptar(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');

    return text;
}

function desencriptar(textEncriptado) {
    textEncriptado = textEncriptado.replace(/enter/g, 'e');
    textEncriptado = textEncriptado.replace(/imes/g, 'i');
    textEncriptado = textEncriptado.replace(/ai/g, 'a');
    textEncriptado = textEncriptado.replace(/ober/g, 'o');
    textEncriptado = textEncriptado.replace(/ufat/g, 'u');

    return textEncriptado;
}

/*
const textoOriginal = 'gato';
const textoEncriptado = encriptar(textoOriginal);
console.log(textoEncriptado); 

const textoDesencriptado = desencriptar("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!");
console.log(textoDesencriptado); 
*/

const btnEncriptar = document.querySelector("#btnEncript");
const btnDesencriptar = document.querySelector("#btnDesencript");

const imgMuñeco = document.querySelector("#muñeco");
const divMsg = document.querySelector("#divMsgNotFound");

const invalidCharsRegex = /[^a-z\s]/gi;

btnEncriptar.addEventListener('click', function() {

    const newP = document.getElementById("pNewTxt");
    if (newP) {
        newP.remove();
    };

    imgMuñeco.remove()
    divMsg.remove()

    const divOutput = document.querySelector("#outputTxt");
    const txtArea = document.querySelector('#textToEncript');
    const pTxt = document.createElement('p');
    pTxt.id = "pNewTxt";
    let contentTxtArea = txtArea.value; 

    if (contentTxtArea.length > 1150) {
        // Muestra una alerta al usuario
        alert('El texto es demasiado largo. Por lo que tendra que copiar el texto para visualizarlo.');
    }

    if (invalidCharsRegex.test(contentTxtArea)) {
        alert('El texto no debe contener mayúsculas, acentos o caracteres especiales.');
    } else {
        pTxt.textContent = encriptar(contentTxtArea);
        divOutput.appendChild(pTxt);

        txtArea.value = "";
    }

});


btnDesencriptar.addEventListener('click', function() {

    const newP = document.getElementById("pNewTxt");
    if (newP) {
        newP.remove();
    };

    imgMuñeco.remove()
    divMsg.remove()

    const divOutput = document.querySelector("#outputTxt");
    const txtArea = document.querySelector('#textToEncript');
    const pTxt = document.createElement('p');
    pTxt.id = "pNewTxt";
    let contentTxtArea = txtArea.value; 

    if (contentTxtArea.length > 2150) {
        // Muestra una alerta al usuario
        alert('El texto es demasiado largo. Por lo que tendra que copiar el texto para visualizarlo.');
    }

    pTxt.textContent = desencriptar(contentTxtArea);
    divOutput.appendChild(pTxt);

    txtArea.value = "";

});

// COPY
const buttonCopy = document.querySelector('.boton-copy');

buttonCopy.addEventListener('click', () => {
    const copiedTxt = document.querySelector('#pNewTxt');
    const txtToCopy = copiedTxt.innerText;

    navigator.clipboard.writeText(txtToCopy)
        .then(() => {
             // Si la copia es exitosa, cambia el contenido del botón temporalmente
            const icon = document.createElement('i');
            icon.className = 'fas fa-copy';
            buttonCopy.innerHTML = '';
            buttonCopy.appendChild(icon);
            buttonCopy.innerText = 'Copiado';
            setTimeout(() => {
                buttonCopy.innerHTML = '';
                buttonCopy.appendChild(icon);
            }, 1500); // Restablece el contenido del botón después de 1.5 segundos
        })
        .catch((error) => {
            console.error("Error al copiar texto: ", error);
        });
});





