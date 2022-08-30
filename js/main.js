const saidaTexto = document.querySelector(".saidaTexto");
const botaoEnviar = document.getElementById('enviarTexto');
const robotIcon = document.getElementById('robotIcon');
const imgRobot = document.getElementById('robotFig')

entradaTexto.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === "Enter") {
        recebeEntrada()
    }
});

botaoEnviar.addEventListener('click', recebeEntrada)

function abrirMenu() {
    saidaTexto.innerHTML = " "
    for (opcao of opcoesMenuInicial)
        criarFalaBot(opcao)
}

function recebeEntrada() {
    let entradaTexto = document.querySelector('#entradaTexto')
    let entrada = entradaTexto.value;

    const opcao = entrada
    switch (opcao) {
        case "1":
            criarFalaHuman(opcao)
            timerLoading = setTimeout(timerLoading, 800);
            function timerLoading() {
                for (item of canalAtendimento)
                    criarFalaBot(item)
            }
            break;
        case "2":
            criarFalaHuman(opcao)
            for (item of canalSugestoes)
                criarFalaBot(item)
            break;
        case "3":
            criarFalaHuman(opcao)
            for (item of canalCriticas)
                criarFalaBot(item)
            break;
        default:
            criarFalaHuman(entrada)
            criarFalaBot(interacoesBot[0])
            invalida = setTimeout(entradaInvalida, 1500);
            function entradaInvalida() {
                abrirMenu()
            }
    }

}


