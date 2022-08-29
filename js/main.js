const saidaTexto = document.querySelector(".saidaTexto");
const botaoEnviar = document.getElementById('enviarTexto');
const robotIcon = document.getElementById('robotIcon');
const imgRobot = document.getElementById('robotFig')

function abrirMenu() {
    saidaTexto.innerHTML = " "
    for (opcao of opcoesMenuInicial)
        criarFalaBot(opcao)
}

botaoEnviar.addEventListener('click', recebeEntrada)

function recebeEntrada() {
    let entradaTexto = document.querySelector('#entradaTexto')
    let entrada = entradaTexto.value;
    criarFalaHuman(entrada)
    criarFalaBot(interacoesBot[entrada])
}