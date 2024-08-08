let progresso = 0
let inventario = []
let personagem


function showChoices(choices) {
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = choice.action;
        gameElement.appendChild(button);
    });
}

function startGame() {
    showText("Seu nome é Tachlowini, atualmente possui 12 anos e mora em Eritreia, sua terra natal.");
    showText("Como Eritreia é um pais com uma taxa de pobreza muito alta, você depois de muito pensar decide ir embora em busca de uma vida melhor.");
    showText("Você possui um amigo, seu unico melhor amigo. Antes de sair, você precisa tomar uma decisão muito importante. Chamar o seu amigo e ir embora com ele, ou ir sozinho.");
    showChoices([
        { text: "ir atras de seu amigo", action: goFriend },
        { text: "Ir embora sozinho", action: goAlone }
    ]);
}

function goFriend() {
    showText("Você decidiu que ir atras de seu amigo, então você pega itens basicos e vai ate a casa dele.");
    showText("Ao chegar na casa dele, você rapidamente o chama e o convida para ir com você. Ele prontamente responde que aceita e logo em seguida vão embora de seu pais natal.");
    showText("Agora, os dois tem que decidir entre ir para a etiopia ou para o sultão, dois paises vizinhos de Eritreia.");
    showChoices([
        { text: "Ir à etiopia", action: goEtiopia },
        { text: "Ir à sultão", action: goSultão }
    ]);
}

function goAlone() {
    showText("Você decidiu não chamar seu amigo e ir sozinho. Então você prontamente pega suas coisas e vai embora de seu pais natal.");
    showText("Agora, você precisa decidir entre ir para a etiopia ou para o sultão, dois paises vizinhos de Eritreia")
    showChoices([
        { text: "Ir à etiopia", action: goEtiopiaAlone },
        { text: "Ir à sultão", action: goSultãoAlone }
    ]);
}

function goEtiopiaAlone () {
    showText("")
}

function goSultãoAlone () {
    showText("")
}

function goEtiopia() {
    showText("Você foi para a esquerda e encontrou um tesouro!");
}

function goSultão() {
    showText("Você foi para a direita e encontrou um monstro!");
}
