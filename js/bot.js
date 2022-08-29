function criarFalaBot(entrada) {
    let falaBot = document.createElement("li")
    saidaTexto.appendChild(falaBot)
    falaBot.classList.add('textoRecebido')
    falaBot.textContent = `${entrada} `
}

const opcoesMenuInicial = 
[
    "Selecione uma das Opcoes: ",
    "1 - Atendimento",
    "2 - Sugestões",
    "3 - Criticas",
    "4 - Sair"
]

const interacoesBot =
    [
        "Digite um número válido",
        "Canal de Atendimento",
        "Canal de Sugestões",
        "Criticas",
        "Deseja mesmo sair?"
    ]

const canalAtendimento =
    [
        "Opção 1",
        "Opção 2",
        "Opção 3",
        "Opção 4"
    ]

const canalSugestoes =
    [
        "Opção 1",
        "Opção 2",
        "Opção 3",
        "Opção 4"
    ]