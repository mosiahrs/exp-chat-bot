
function criarFalaHuman(entradaTexto) {
    let criarFalaHuman = document.createElement("p")
    saidaTexto.appendChild(criarFalaHuman)
    criarFalaHuman.classList.add('textoEnviado')
    criarFalaHuman.textContent = entradaTexto
}