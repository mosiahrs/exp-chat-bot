const chatContainer = document.getElementById('chatContainer');

function ocultar() {
    chatContainer.classList.toggle("ocultar")
}

function limparInput() {
    let input = document.querySelector('#entradaTexto')
    input.value = ""
}

function exibirEntrada(entradaTexto) {
    let criarFalaHuman = document.createElement("p")
    saidaTexto.appendChild(criarFalaHuman)
    criarFalaHuman.classList.add('textoEnviado')
    criarFalaHuman.textContent = entradaTexto
}