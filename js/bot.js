function criarFalaBot(entrada) {
    let falaBot = document.createElement("p")
    saidaTexto.appendChild(falaBot)
    falaBot.classList.add('textoRecebido')
    falaBot.textContent = `${entrada} `
}

function retornoFalaBot(nomeArray, itemValidacao) {
    let printOption = saidaTexto.appendChild(document.createElement("p"));
    printOption.classList.add('textoEnviado');
    printOption.textContent = itemValidacao

    for (item of nomeArray)
        criarFalaBot(item)

    validaMenu = itemValidacao
    console.log(validaMenu)
}

function callFalaHumana () {
    let entr = document.querySelector('#entradaTexto').value;
    criarFalaHuman(entr)
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
        "Para mais informações Ligue 0800 123 1234",
        "Deixe uma breve mensagem com sua sugestão",
        "Deixe uma breve mensagem com sua Critica",
        "Qual o problema com sua Linha?"
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