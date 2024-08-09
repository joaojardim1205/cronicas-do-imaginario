let progresso = 0
let inventario = []
let acessoInv

function startGame() {
    alert("Seu nome é Tachlowini, atualmente possui 12 anos e mora em Eritreia, sua terra natal.");
    alert("Como Eritreia é um pais com uma taxa de pobreza muito alta, você depois de muito pensar decide ir embora em busca de uma vida melhor.");
    alert("Você possui um amigo, seu unico melhor amigo. Antes de sair, você precisa tomar uma decisão muito importante. Chamar o seu amigo e ir embora com ele, ou ir sozinho.");
    let irAmigo = prompt ("Ir com o amigo? (sim) (nao)");

    if(irAmigo == "sim"){
        alert("você ganhou 1x empatia");
        alert("empatia ira ficar armazenada no inventario");
        alert("empatia ira influencia-lo no futuro");
        inventario.push("1x empatia");

        acessoInv = prompt ("você deseja acessar o inventario? (sim) (nao)");
        if(acessoInv == "sim"){
            alert(inventario);
        } else if(acessoInv == "nao"){
            alert("você nao acessou o inventario");
        }

        goFriend()
    } else if(irAmigo == "nao"){
        alert("você ganhou 1x antipatia");
        alert("antipatia ira ficar armazenada no inventario");
        alert("antipatia ira influencia-lo no futuro");
        inventario.push("1x antipatia");

        acessoInv = prompt ("você deseja acessar o inventario? (sim) (nao)");
        if(acessoInv == "sim"){
            alert(inventario);
        } else if(acessoInv == "nao"){
            alert("você nao acessou o inventario");
        }
        
        goAlone()
    } else {
        alert("resposta invalida");
    }
       
}

function goFriend() {
    alert("Você decidiu que ir atras de seu amigo, então você pega itens basicos e vai ate a casa dele.");
    alert("Ao chegar na casa dele, você rapidamente o chama e o convida para ir com você. Ele prontamente responde que aceita e logo em seguida vão embora de seu pais natal.");
    alert("Agora, os dois tem que decidir entre ir para a etiopia ou para o sultão, dois paises vizinhos de Eritreia.");
    let irLocal = prompt ("Para onde ir? (etiopia) (sultao)");

    if(irLocal == "etiopia"){
        goEtiopia()
    } else if (irLocal == "sultao"){
        goSultão()
    } else{
        alert("resposta invalida");
    }
    
}

function goAlone() {
    alert("Você decidiu não chamar seu amigo e ir sozinho. Então você prontamente pega suas coisas e vai embora de seu pais natal.");
    alert("Agora, você precisa decidir entre ir para a etiopia ou para o sultão, dois paises vizinhos de Eritreia");
    let irLocal = prompt ("Para onde ir? (etiopia) (sultao)");

    if(irLocal == "etiopia"){
        goEtiopiaAlone()
    } else if(irLocal == "sultao"){
        goSultãoAlone()
    } else{
        alert("resposta invalida");
    }
}

function goEtiopiaAlone () {
    alert("Você decidiu ir embora para a etiopia");
    alert("você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policias. Tudo isso sozinho");
    alert("Após muito tempo e sofrimento, você consegue finalmente chegar na etiopia. Agora você decide se abrigar em uma loja de conveniencia");
    alert("como você passou muito tempo sozinho você acabou perdendo 10x sanidade");
    alert("sanidade é um fator muito importante, caso sua sanidade chegue a 0, algo ruim acontecera");
    alert("Na loja de conveniencia, você pode utilizar o telefone para contatar um parente");
    let UsarFone = prompt ("Você usa o telefone? (sim) (nao)");

    if(UsarFone == "sim"){
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em israel e que você pode ir para la. Ela fala que lá existe um abrigo onde você pode viver e ter a chance de conseguir uma vida melhor");
        alert("Apos ouvir oque ela disse, você com os olhos cheios de esperança decide ir para israel, em busca de algo melhor");
    } else if(UsarFone == "nao"){
        alert("Você decidiu nao usar o telefone e ficar na etiopia, na loja de conveniencia")
        alert("Na etiopia, você passa por muitas dificuldades, tendo que trabalhar na loja de conveniencia durante horas e horas apenas para nao morrer de fome")
        alert("Apos exaustivos dias, você descobre do dono da loja que existe um local em israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor")
        alert("Apos descobrir isso, você com os olhos cheios de esperança decide ir para israel, em busca de algo melhor")
    }
}

function goSultãoAlone () {
    
}

function goEtiopia() {
    
}

function goSultão() {
    
}

startGame()