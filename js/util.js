
const chatContainer = document.getElementById('chatContainer');
let ponta = document.querySelector('.ponta')
let textHelp = document.querySelector('.textHelp')

function ocultar() {
    chatContainer.classList.remove("ocultar")
    ponta.classList.add("ocultar")
    textHelp.classList.add("ocultar")
}

function ocultarChat() {
    chatContainer.classList.add("ocultar")
}

function abrirMenu() {
    saidaTexto.innerHTML =
        ` <span id="itensMenu">
        <h3>Selecione uma das opções: </h3>
        <ol class="menuPrincipal">
            <li> Atendimento </li>
            <li> Sugestões </li>
            <li> Criticas </li>
            <li> Sair do Menu </li>
        </ol>
      </span>
    `
    return saidaTexto
}