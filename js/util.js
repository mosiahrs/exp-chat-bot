const chatContainer = document.getElementById('chatContainer');

function ocultar() {
    chatContainer.classList.remove("ocultar")
}

function ocultarChat() {
    chatContainer.classList.add("ocultar")
}

function limparInput() {
    let input = document.querySelector('#entradaTexto')
    input.value = ""
}