function criarFalaBot(entrada) {
    let falaBot = document.createElement("li")
    saidaTexto.appendChild(falaBot)
    falaBot.classList.add('textoRecebido')
    falaBot.textContent = `${entrada} `
}

const interacoesBot =
    [
        "Seja bem vindo",
        "Canal de Atendimento",
        "Canal de Sugestões",
        "Criticas"
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