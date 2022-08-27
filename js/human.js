
function criarFalaHuman(entradaTexto) {
    let criarFalaHuman = document.createElement("li")
    saidaTexto.appendChild(criarFalaHuman)
    criarFalaHuman.classList.add('textoEnviado')
    criarFalaHuman.textContent = entradaTexto
}