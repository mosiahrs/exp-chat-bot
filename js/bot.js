function criarFalaBot(entrada) {
    let falaBot = document.createElement("p")
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
        "Bem vindo ao Canal de atendimento, escolha opção que melhor te atenda :",
        "1 - Linha telefônica",
        "2 - Sinal de Internet ",
        "3 - Assistência Técnica"
    ]

const canalSugestoes =
    [
        "Bem vindo ao Canal de Sugestões, sobre o que deseja falar :",
        "1 - Assistência Técnica",
        "2 - Sinal de Internet ",
        "3 - Linha telefônica"
    ]

const canalCriticas =
    [
        "Bem vindo ao Canal de Criticas, sobre o que deseja falar :",
        "1 - Assistência Técnica",
        "2 - Sinal de Internet ",
        "3 - Linha telefônica"
    ]

