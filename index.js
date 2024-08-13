let progresso = 0
let inventario = []
let sanidade = 50
let checkpoint
let opcao

alert("Bem vindo a historia de Tachlowini Gabriyesos!");
function menuGame(menu) {
    menu = prompt ("------------------- MENU ------------------- \n menu principal onde é possivel escolher uma função do jogo: \n [1] Historia \n [2] acessar progresso \n [3] acessar inventario \n [4] checkpoint \n [5] acessar sanidade ");

    switch (menu){
        case "1": 
            historia();
            break
        case "2":
            alert(`Progresso atual do jogo: ${progresso}%`);
            menuGame();
            break
        case "3":
            alert("Você acessou o inventario, nele é guardado itens coletados durante a historia");
            alert(inventario);
            menuGame();
            break
        case "4":
            alert("Você acessou o checkpoint, nele é armazenado o ponto da historia que voce parou");
            alert("Continuando a historia...");
            checkpoint
            break
        case "5":
            alert("Sanidade é um fator muito importante, caso sua sanidade chegue a 0, algo ruim acontecera. Sua sanidade inicial é 50");
            alert(sanidade);
            menuGame();
            break
        default:
            alert("Opção invalida, tente novamente");
            menuGame();
    }
}

function historia(irAmigo) {
    alert("Seu nome é Tachlowini, atualmente possui 12 anos e mora em Eritreia, sua terra natal.");
    alert("Como Eritreia é um pais com uma taxa de pobreza muito alta, você depois de muito pensar decide ir embora em busca de uma vida melhor.");
    alert("Você possui um amigo, seu unico melhor amigo. Antes de sair, você precisa tomar uma decisão muito importante. Chamar o seu amigo e ir embora com ele, ou ir sozinho.");
    irAmigo = prompt("Ir com o amigo? (sim) (nao)");

    if(irAmigo === "sim"){
        progresso =+ 14
        alert(`progresso de vida: ${progresso}%`);
        alert("Você ganhou 1x empatia");
        alert("Empatia irá ficar armazenada no inventario. Isso irá afeta-lo no futuro");
        inventario.push("1x empatia");
        opcao = prompt("Caso você queria acessar o menu, selecione o numero 0");
        if (opcao == "0"){
            menuGame()
        } else{
            alert("Continuando a historia...")
        }

        checkpoint = goFriend()
        goFriend()

    } else if(irAmigo === "nao"){
        progresso =+ 9
        alert(`Progresso de vida: ${progresso}%`);
        alert("Você ganhou 1x antipatia");
        alert("Antipatia irá ficar armazenada no inventario. Isso irá afeta-lo no futuro");
        inventario.push("1x antipatia");
        opcao = prompt("Caso você queria acessar o menu, selecione o numero 0");
        if (opcao == "0"){
            menuGame()
        } else{
            alert("Continuando a historia...")
        }

        checkpoint = goAlone()
        goAlone()

    } else{
        alert("Opção invalida, tente novamente");
        historia();
    }
       
}

function goFriend(irLocal) {
    alert("Você decidiu que irá atras de seu amigo, então você pega itens basicos e vai ate a casa dele.");
    alert("Ao chegar na casa dele, você rapidamente o chama e o convida para ir com você. Ele prontamente responde que aceita e logo em seguida vão embora de seu pais natal.");
    alert("Agora, os dois tem que decidir entre ir para a etiopia ou para o sultão, dois paises vizinhos de Eritreia.");
    irLocal = prompt("Para onde ir? (etiopia) (sultao)");

    if(irLocal === "etiopia"){
        goEtiopia()
    } else if (irLocal === "sultao"){
        goSultão()
    } else{
        alert("Opção invalida, tente novamente");
    }
    
}

function goAlone(irLocal) {
    alert("Você decidiu não chamar seu amigo e ir sozinho. Então você prontamente pega suas coisas e vai embora de seu pais natal.");
    alert("Agora, você precisa decidir entre ir para a etiopia ou para o sultão, dois paises vizinhos de Eritreia");
    irLocal = prompt("Para onde ir? (etiopia) (sultao)");

    if(irLocal === "etiopia"){
        goEtiopiaAlone()
    } else if(irLocal === "sultao"){
        goSultãoAlone()
    } else{
        alert("Opção invalida, tente novamente");
    }
}

function goEtiopiaAlone () {
    progresso =+ 21
    alert(`Progresso de vida: ${progresso}%`);
    alert("Você decide ir embora para a etiopia");
    alert("você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policias. Tudo isso sozinho");
    alert("Após muito tempo e sofrimento, você consegue finalmente chegar na etiopia. Agora você decide se abrigar em uma loja de conveniencia");
    alert("Como você passou muito tempo sozinho você acabou perdendo 10x sanidade");
    sanidade =- 10
    opcao = prompt("Caso você queria acessar o menu, selecione o numero 0");
        if (opcao == "0"){
            menuGame()
        } else{
            alert("Continuando a historia...")
        }

    checkpoint = telefoneAlone()
    telefoneAlone()
}

function telefoneAlone(UsarFone){
    alert("Na loja de conveniencia, você pode utilizar o telefone para contatar um parente");
    UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if(UsarFone === "sim"){
        progresso =+ 15
        alert(`Progresso de vida: ${progresso}%`);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em israel e que você pode ir para la. Ela fala que lá existe um abrigo onde você pode viver e ter a chance de conseguir uma vida melhor");
        alert("Apos ouvir oque ela disse, você com os olhos cheios de esperança decide ir para israel, em busca de algo melhor");
    } else if(UsarFone === "nao"){
        progresso =+ 7
        alert(`Progresso de vida:  ${progresso}%`)
        alert("Você decidiu nao usar o telefone e ficar na etiopia, na loja de conveniencia")
        alert("Na etiopia, você passa por muitas dificuldades, tendo que trabalhar na loja de conveniencia durante horas e horas apenas para nao morrer de fome")
        alert("Apos exaustivos dias, você descobre do dono da loja que existe um local em israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor")
        alert("Apos descobrir isso, você com os olhos cheios de esperança decide ir para israel, em busca de algo melhor")
    } else{
        alert("Opção invalida, tente novamente");
        telefoneAlone();
    }
}

function goSultãoAlone() {
    
}

function goEtiopia() {
    progresso =+ 37
    alert(`Progresso de vida: ${progresso}%`);
    alert("Você decide ir embora com seu amigo para a etiopia");
    alert("você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policias. Graças ao seu amigo, você aguenta firmemente.");
    alert("Após um longo periodo, você consegue finalmente chegar na etiopia. Agora você decide procurar abrigo em uma loja de conveniencia");
    alert("Pelo fato de voce ter a companhia de seu amigo, você nao perdeu nenhuma sanidade");
    opcao = prompt("Caso você queria acessar o menu, selecione o numero 0");
        if (opcao == "0"){
            menuGame()
        } else{
            alert("Continuando a historia...")
        }

        checkpoint = telefone()
        telefone()
    
}

function telefone(UsarFone){
    alert("Na loja de conveniencia, você pode utilizar o telefone para contatar um parente");
    UsarFone = prompt ("Você usa o telefone? (sim) (nao)");

    if(UsarFone === "sim"){
        progresso =+ 15
        alert(`progresso de vida: ${progresso}%`);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em israel e que você e seu amgio podem ir para la. Ela fala que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        alert("Apos ouvir oque ela disse, vocês dois com os olhos cheios de esperança decidem ir para israel, em busca de algo melhor");
    } else if(UsarFone === "nao"){
        progresso =+ 7
        alert(`Progresso de vida: ${progresso}%`)
        alert("Você decidiu nao usar o telefone e ficar na etiopia, na loja de conveniencia")
        alert("Na etiopia, você e seu amigo passam por muitas dificuldades, tendo que trabalhar na loja de conveniencia durante horas e horas apenas para nao morrer de fome")
        alert("Apos exaustivos dias, você descobre do dono da loja que existe um local em israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor")
        alert("Apos descobrir isso, você rapidamente vai contar para seu amigo e com os olhos cheios de esperança vocês dois decidem ir para israel, em busca de algo melhor")
    } else {
        alert("Opção invalida, tente novamente");
        telefoneAlone();
    }
}

function goSultão() {
    
}

function goIsrael(){

}

function goIsraelAlone(){
    
}

menuGame()