let inventario = {};
let progresso = 50;
let sanidade = 50;
let checkpoint;
let opcao;

alert("Bem-vindo à história de Tachlowini Gabriyesos!");

function menuGame() {
    let continuar = true;
    while (continuar) {
        let menu = prompt("--------- MENU ---------\nSelecione uma opção:\n[1] História\n[2] Acessar progresso\n[3] Acessar inventário\n[4] Acessar sanidade\n[5] Checkpoint\n[6] Sair do jogo");

        switch (menu) {
            case "1":
                historia();
                break;
            case "2":
                alert("O progresso é a sua vida, ela aumenta ou diminui dependendo de suas escolhas. Sua vida inicial é 50");
                alert(`Vida: ${progresso}`);
                break;
            case "3":
                alert("Você acessou o inventário, nele são guardados itens coletados durante a história");
                mostrarInventario();
                break;
            case "4":
                alert("Sanidade é um fator muito importante, caso sua sanidade chegue a 0, algo ruim acontecerá. Sua sanidade inicial é 50");
                alert(`Sua sanidade: ${sanidade}`);
                break;
            case "5":
                carregarCheckpoint();
                break;
            case "6":
                continuar = false;
                alert("Obrigado por jogar!");
                break;
            default:
                alert("Opção inválida, tente novamente");
        }
    }
}

function historia() {
    alert("Seu nome é Tachlowini, atualmente possui 12 anos e mora na Eritreia, sua terra natal. Um país localizado na África.");
    alert("Como a Eritreia é um país com uma taxa de pobreza muito alta, você, depois de muito pensar, decide ir embora em busca de uma vida melhor.");
    alert("Você possui um amigo, seu único melhor amigo. Antes de sair, você precisa tomar uma decisão muito importante: chamar o seu amigo e ir embora com ele ou ir sozinho.");

    let irAmigo = prompt("Deseja ir até o amigo? (sim) (nao)");

    if (irAmigo === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        adicionarAoInventario("Empatia", 1);
        alert("Você ganhou 1x Empatia");
        alert("Empatia será armazenada no inventário. Isso irá afetá-lo no futuro");

        salvarCheckpoint("goFriend");
        perguntarSeVoltarMenu();
        goFriend();

    } else if (irAmigo === "nao") {
        progresso -= 20;
        alert(`Vida: ${progresso}`);
        adicionarAoInventario("Antipatia", 1);
        alert("Você ganhou 1x Antipatia");
        alert("Antipatia será armazenada no inventário. Isso irá afetá-lo no futuro");

        salvarCheckpoint("goAlone");
        perguntarSeVoltarMenu();
        goAlone();

    } else {
        alert("Opção inválida, tente novamente");
        historia();
    }
}

function goFriend() {
    alert("Você decidiu ir atrás de seu amigo, então você pega itens básicos e vai até a casa dele.");
    alert("Ao chegar na casa dele, você rapidamente o chama e o convida para ir com você. Ele prontamente responde que aceita e logo em seguida vão embora de seu país natal.");

    perguntarSeVoltarMenu();

    alert("Agora, os dois têm que decidir entre ir para a Etiópia ou para o Sudão, dois países vizinhos da Eritreia.");
    let irLocal = prompt("Para onde ir? (etiopia) (sudao)");

    if (irLocal === "etiopia") {
        salvarCheckpoint("goEtiopia");
        goEtiopia();
    } else if (irLocal === "sudao") {
        salvarCheckpoint("goSudao");
        goSudao();
    } else {
        alert("Opção inválida, tente novamente");
        goFriend();
    }
}

function goAlone() {
    alert("Você decidiu não chamar seu amigo e ir sozinho. Então você prontamente pega suas coisas e vai embora de seu país natal.");
    alert("Agora, você precisa decidir entre ir para a Etiópia ou para o Sudão, dois países vizinhos da Eritreia.");

    let irLocal = prompt("Para onde ir? (etiopia) (sudao)");

    if (irLocal === "etiopia") {
        salvarCheckpoint("goEtiopiaAlone")
        goEtiopiaAlone();
    } else if (irLocal === "sudao") {
        salvarCheckpoint("goSudaoAlone")
        goSudaoAlone();
    } else {
        alert("Opção inválida, tente novamente");
        goAlone();
    }
}

function goEtiopiaAlone() {
    progresso += 10;
    alert(`Vida: ${progresso}`);
    alert("Você decide ir embora para a Etiópia");
    alert("Você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Tudo isso sozinho");
    alert("Após muito tempo e sofrimento, você consegue finalmente chegar na Etiópia. Agora você decide se abrigar em uma loja de conveniência");
    alert("Como você passou muito tempo sozinho, você acabou perdendo 10x sanidade");
    sanidade -= 15;

    perguntarSeVoltarMenu();

    salvarCheckpoint("telefoneAlone");
    telefoneEtiopiaAlone();
}

function goEtiopia() {
    progresso += 15;
    alert(`Vida: ${progresso}`);
    alert("Você decide ir embora com seu amigo para a Etiópia");
    alert("Você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Graças ao seu amigo, você aguenta firmemente.");
    alert("Após um longo período, você consegue finalmente chegar na Etiópia. Agora você decide procurar abrigo em uma loja de conveniência");
    alert("Pelo fato de você ter a companhia de seu amigo, você não perdeu nenhuma sanidade");

    perguntarSeVoltarMenu();

    salvarCheckpoint("telefone");
    telefoneEtiopia();
}

function goSudaoAlone(){
    progresso -= 10;
    alert(`Vida: ${progresso}`);
    alert("Você decide ir sozinho para o Sudão.");
    alert("Você caminha durante dias sob o sol escaldante, sobrevivendo com poucas migalhas de comida e evitando policiais.");
    alert("Finalmente, você chega ao Sudão, exausto e com sede.");
    
    perguntarSeVoltarMenu();
    
    salvarCheckpoint("telefoneSudaoAlone");
    telefoneSudaoAlone();
}

function goSudao() {
    progresso -= 10;
    alert(`Vida: ${progresso}`);
    alert("Você e seu amigo decidem ir embora para o Sudão");
    alert("Vocês caminham durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Com a ajuda do seu amigo, vocês conseguem aguentar.");
    alert("Após um longo período, vocês conseguem finalmente chegar no Sudão. Agora vocês decidem procurar abrigo em uma loja de conveniência");

    perguntarSeVoltarMenu();

    salvarCheckpoint("telefoneSudao");
    telefoneSudao();
}



function telefoneEtiopiaAlone() {
    alert("Na loja de conveniência, você pode utilizar o telefone para contatar um parente");

    let UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em Israel e que você pode ir para lá. Ela diz que lá existe um abrigo onde você pode viver e ter a chance de conseguir uma vida melhor");
        alert("Após ouvir o que ela disse, você com os olhos cheios de esperança decide ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsraelAlone");
        goIsraelAlone();
    } else if (UsarFone === "nao") {
        progresso -= 10;
        alert(`Vida: ${progresso}`);
        alert("Você decidiu não usar o telefone e ficar na Etiópia, na loja de conveniência");
        alert("Na Etiópia, você passa por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, você descobre com o dono da loja que existe um local em Israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor");
        alert("Após descobrir isso, você com os olhos cheios de esperança decide ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsraelAlone");
        goIsraelAlone();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneEtiopiaAlone();
    }
}

function telefoneEtiopia() {
    alert("Na loja de conveniência, você pode utilizar o telefone para contatar um parente");

    let UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em Israel e que você e seu amigo podem ir para lá. Ela diz que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        alert("Após ouvir o que ela disse, vocês dois com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsrael");
        goIsrael();
    } else if (UsarFone === "nao") {
        progresso -= 10;
        alert(`Vida: ${progresso}`);
        alert("Você decidiu não usar o telefone e ficar na Etiópia, na loja de conveniência");
        alert("Na Etiópia, você e seu amigo passam por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, você descobre com o dono da loja que existe um local em Israel onde vocês dois podem ficar e possivelmente ter uma chance de viver uma vida melhor");
        alert("Após descobrir isso, vocês dois com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsrael");
        goIsrael();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneEtiopia();
    }
}

function telefoneSudaoAlone(){
    alert("Na loja de conveniência, você pode usar o telefone para contatar um parente.");

    let usarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (usarFone === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide ligar para sua tia, que sempre cuidou de você.");
        alert("Sua tia diz que está em Israel e que há um abrigo onde você pode viver e ter uma chance de uma vida melhor.");
        alert("Com esperança renovada, você decide ir para Israel.");
        salvarCheckpoint("goIsraelAlone");
        goIsraelAlone();
    } else if (usarFone === "nao") {
        progresso -= 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide não usar o telefone e permanecer no Sudão.");
        alert("No Sudão, você enfrenta muitas dificuldades, trabalhando na loja de conveniência para sobreviver.");
        alert("Após um tempo, você descobre sobre o abrigo em Israel e decide ir para lá em busca de uma vida melhor.");
        salvarCheckpoint("goIsraelAlone");
        goIsraelAlone();
    } else {
        alert("Opção inválida, tente novamente.");
        telefoneSudaoAlone();
    }
}

function telefoneSudao() {
    alert("Na loja de conveniência, vocês podem utilizar o telefone para contatar um parente");

    let UsarFone = prompt("Vocês usam o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        progresso += 5;
        alert(`Vida: ${progresso}`);
        alert("Vocês decidem utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhes fala que ela está em Israel e que vocês podem ir para lá. Ela diz que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        alert("Após ouvir o que ela disse, vocês com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsraelSudao");
        goIsrael();
    } else if (UsarFone === "nao") {
        progresso -= 10;
        alert(`Vida: ${progresso}`);
        alert("Vocês decidiram não usar o telefone e ficar no Sudão, na loja de conveniência");
        alert("No Sudão, vocês passam por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, vocês descobrem com o dono da loja que existe um local em Israel que vocês podem ficar e possivelmente ter uma chance de viver uma vida melhor");
        alert("Após descobrir isso, vocês com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsraelSudao");
        goIsrael();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneSudao();
    }
}

function goIsrael() {
    progresso += 20;
    alert(`Vida: ${progresso}`);
    alert("Você e seu amigo finalmente chegam em Israel");
    alert("Agora, vocês dois podem se hospedar no abrigo que sua tia falou");

    perguntarSeVoltarMenu();

    alert("O tempo passa, você consegue se estabilizar no país, porém, se você e seu amigo quiserem morar definitivamente em Israel, é necessário tentar conseguir um asilo");
    let tentativaAsilo = prompt("Vocês irão pedir asilo? (sim) (nao)");

    if (tentativaAsilo === "sim") {
        progresso += 30;
        alert(`Vida: ${progresso}`);
        alert("Vocês dois decidem pedir asilo para morar em Israel");
        alert("Depois de um longo período de avaliação, vocês dois conseguem o asilo e podem morar legalmente em Israel");
        alert("Vocês dois se sentem muito felizes e finalmente conseguem alcançar uma boa condição de vida");
    } else if (tentativaAsilo === "nao") {
        progresso -= 15;
        alert(`Vida: ${progresso}`);
        alert("Vocês dois decidem não pedir asilo e viverem no país ilegalmente");
        alert("Vocês dois passam por muitas dificuldades e sempre vivem no medo de serem pegos");
        alert("Mesmo assim, vocês dois continuam lutando para tentar ter uma vida melhor");
    } else {
        alert("Opção inválida, tente novamente");
        goIsrael();
    }
}

function goIsraelAlone() {
    progresso += 10;
    alert(`Vida: ${progresso}`);
    alert("Você finalmente chega em Israel");
    alert("Agora, você pode se hospedar no abrigo que sua tia falou");

    perguntarSeVoltarMenu();

    alert("O tempo passa, você consegue se estabilizar no país, porém, se você quiser morar definitivamente em Israel, é necessário tentar conseguir um asilo");
    let tentativaAsilo = prompt("Você irá pedir asilo? (sim) (nao)");

    if (tentativaAsilo === "sim") {
        progresso += 20;
        alert(`Vida: ${progresso}`);
        alert("Você decide pedir asilo para morar em Israel");
        alert("Depois de um longo período de avaliação, você consegue o asilo e pode morar legalmente em Israel");
        alert("Você se sente muito feliz e finalmente consegue alcançar uma boa condição de vida");
    } else if (tentativaAsilo === "nao") {
        progresso -= 15;
        alert(`Vida: ${progresso}`);
        alert("Você decide não pedir asilo e viver no país ilegalmente");
        alert("Você passa por muitas dificuldades e sempre vive no medo de ser pego");
        alert("Mesmo assim, você continua lutando para tentar ter uma vida melhor");
    } else {
        alert("Opção inválida, tente novamente");
        goIsraelAlone();
    }
}

function adicionarAoInventario(item, quantidade) {
    if (inventario[item]) {
        inventario[item] += quantidade;
    } else {
        inventario[item] = quantidade;
    }
}

function mostrarInventario() {
    if (Object.keys(inventario).length === 0) {
        alert("Seu inventário está vazio");
    } else {
        let itens = "Itens no inventário:\n";
        for (let item in inventario) {
            itens += `${item}: ${inventario[item]}\n`;
        }
        alert(itens);
    }
}

function salvarCheckpoint(ponto) {
    checkpoint = ponto;
    alert(`Checkpoint salvo: ${checkpoint}`);
}

function carregarCheckpoint() {
    if (checkpoint) {
        alert(`Carregando checkpoint: ${checkpoint}`);
        if (typeof window[checkpoint] === "function") {
            window[checkpoint]();
        } else {
            alert("Checkpoint inválido");
        }
    } else {
        alert("Nenhum checkpoint salvo");
    }
}

function perguntarSeVoltarMenu() {
    opcao = prompt("Deseja retornar ao menu? (sim) (nao)");
    if (opcao === "sim") {
        menuGame();
    } else if (opcao === "nao") {
        alert("Continuando a história...");
    }
}

menuGame();
