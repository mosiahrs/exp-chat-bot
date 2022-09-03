const chatContainer = document.getElementById('chatContainer');

function ocultar() {
    chatContainer.classList.toggle("ocultar")
}

function limparInput() {
    let input = document.querySelector('#entradaTexto')
    input.value = ""
}
