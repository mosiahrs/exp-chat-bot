function criarFalaBot(entrada) {
    let falaBot = document.createElement("p")
    saidaTexto.appendChild(falaBot)
    falaBot.classList.add('textoRecebido')
    falaBot.textContent = `${entrada} `
}

function retornoFalaBot(nomeArray, numValida) {
    let entradaTexto = document.querySelector('#entradaTexto')
    let entrada = entradaTexto.value;
    exibirEntrada(entrada)
    for (item of nomeArray)
        criarFalaBot(item)

    validaMenu = numValida
    console.log(validaMenu)
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
        "Qual o problema com sua Linha?",
        "Para mais informações Ligue 0800 123 1234",
        "Deixe uma breve mensagem com sua sugestão",
        "Deixe uma breve mensagem com sua Critica",

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
