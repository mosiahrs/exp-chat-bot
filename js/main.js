const saidaTexto = document.querySelector(".saidaTexto");
const botaoEnviar = document.getElementById('enviarTexto');
const robotIcon = document.getElementById('robotIcon');
const imgRobot = document.getElementById('robotFig')


botaoEnviar.addEventListener('click', recebeEntrada)


function recebeEntrada() {
    let entradaTexto = document.querySelector('#entradaTexto')
    let entrada = entradaTexto.value;
    criarFalaHuman(entrada)
    if (entrada == "1") {
        criarFalaBot(interacoesBot[1])
    }
}












