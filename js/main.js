const saidaTexto = document.querySelector(".saidaTexto");
const botaoEnviar = document.getElementById('enviarTexto');
const robotIcon = document.getElementById('robotIcon');
const imgRobot = document.getElementById('robotFig');

let validaMenu = 0; // 0 = Neutro, 1 = MenuPrincipal, 2 = SubMenu, 3 = SubSubMenu ...

function abrirMenu() {
    saidaTexto.innerHTML = " "
    for (opcao of opcoesMenuInicial)
        criarFalaBot(opcao)
}

function enviaEntrada() {
    let entradaTexto = document.querySelector('#entradaTexto')
    let entrada = entradaTexto.value;

    menuPrincipal(entrada);
    limparInput();

}

let menuPrincipal = (userInput) => {
    const opcao = userInput
    switch (opcao) {
        case "1":
            retornoFalaBot(canalAtendimento, 1)
            break;
        case "2":
            retornoFalaBot(canalSugestoes, 1)
            break;
        case "3":
            retornoFalaBot(canalCriticas, 1)
            break;
        default:
            criarFalaHuman(opcao)
            criarFalaBot(interacoesBot[0])
            invalida = setTimeout(entradaInvalida, 1500);
            function entradaInvalida() {
                abrirMenu()
            }
    }
}

let subMenu1 = (userInput) => {
    const opcao = userInput
    switch (opcao) {
        case "1":
            retornoFalaBot(interacoesBot, 2)
            break;
        case "2":
            retornoFalaBot(interacoesBot, 2)
            break;
        case "3":
            retornoFalaBot(interacoesBot, 2)
            break;
        default:
            criarFalaHuman(opcao)
            criarFalaBot(interacoesBot[0])
            invalida = setTimeout(entradaInvalida, 1500);
            function entradaInvalida() {
                abrirMenu()
            }
    }
}

botaoEnviar.addEventListener('click', enviaEntrada);

entradaTexto.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === "Enter") {
        enviaEntrada()
    }
});

// SEPARAR A FUNCAO QUE ENVIA AS ENTRADAS DA FUNCAO QUE RETORNA AS MENSAGENS DO BOT
// CRIAR UM SISTEMA DE VALIDACAO BOOLEAN QUE INDICA SE ESTA NO MENU OU SUB MENU
// CRIAR O IF ELSE DE CADA SUB MENU FORA DO SWITCH
