let inventario = {};
let progresso = 50;
let sanidade = 50;
let checkpoint;
let opcao;

alert("Bem-vindo à história de Tachlowini Gabriyesos!");

function menuGame() {
    let continuar = true;
    while (continuar) {
        let menu = prompt("--------- MENU ---------\nSelecione uma opção:\n[1] História\n[2] Acessar progresso\n[3] Acessar inventário\n[4] Checkpoint\n[5] Acessar sanidade\n[6] Sair do jogo");

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
                carregarCheckpoint();
                break;
            case "5":
                alert("Sanidade é um fator muito importante, caso sua sanidade chegue a 0, algo ruim acontecerá. Sua sanidade inicial é 50");
                alert(`Sua sanidade: ${sanidade}`);
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

    perguntarSeVoltarMenu();

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
    telefoneAlone();
}

function telefoneAlone() {
    alert("Na loja de conveniência, você pode utilizar o telefone para contatar um parente");

    let UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em Israel e que você pode ir para lá. Ela diz que lá existe um abrigo onde você pode viver e ter a chance de conseguir uma vida melhor");
        alert("Após ouvir o que ela disse, você com os olhos cheios de esperança decide ir para Israel, em busca de algo melhor");
    } else if (UsarFone === "nao") {
        progresso -= 10;
        alert(`Vida: ${progresso}`);
        alert("Você decidiu não usar o telefone e ficar na Etiópia, na loja de conveniência");
        alert("Na Etiópia, você passa por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, você descobre com o dono da loja que existe um local em Israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor");
        alert("Após descobrir isso, você com os olhos cheios de esperança decide ir para Israel, em busca de algo melhor");
    } else {
        alert("Opção inválida, tente novamente");
        telefoneAlone();
    }
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
    telefone();
}

function telefone() {
    alert("Na loja de conveniência, você pode utilizar o telefone para contatar um parente");

    let UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em Israel e que você e seu amigo podem ir para lá. Ela diz que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        alert("Após ouvir o que ela disse, vocês dois com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
    } else if (UsarFone === "nao") {
        progresso -= 10;
        alert(`Vida: ${progresso}`);
        alert("Você decidiu não usar o telefone e ficar na Etiópia, na loja de conveniência");
        alert("Na Etiópia, você e seu amigo passam por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, você descobre com o dono da loja que existe um local em Israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor");
        alert("Após descobrir isso, você rapidamente vai contar para seu amigo e com os olhos cheios de esperança vocês dois decidem ir para Israel, em busca de algo melhor");
    } else {
        alert("Opção inválida, tente novamente");
        telefone();
    }
}

function goSudao() {
    alert("Você decide ir para o Sudão com seu amigo. A jornada é longa e árdua.");
    progresso += 15;
    sanidade += 5;
    alert(`Vida: ${progresso}, Sanidade: ${sanidade}`);
    // Implementar lógica para a história após chegar ao Sudão
}

function goSudaoAlone() {
    alert("Você decide ir para o Sudão sozinho. A jornada é difícil e solitária.");
    progresso += 5;
    sanidade -= 10;
    alert(`Vida: ${progresso}, Sanidade: ${sanidade}`);
    // Implementar lógica para a história após chegar ao Sudão
}

function goIsrael() {

}

function goIsraelAlone() {
    
}

function salvarCheckpoint(ponto) {
    checkpoint = {
        progresso: progresso,
        inventario: {...inventario},
        sanidade: sanidade,
        ponto: ponto
    };
}

function carregarCheckpoint() {
    if (checkpoint) {
        progresso = checkpoint.progresso;
        inventario = {...checkpoint.inventario};
        sanidade = checkpoint.sanidade;
        alert("Checkpoint carregado com sucesso!");

        switch (checkpoint.ponto) {
            case "goFriend":
                goFriend();
                break;
            case "goEtiopia":
                goEtiopia();
                break;
            case "goSudao":
                goSudao();
                break;
            case "goAlone":
                goAlone();
                break;
            case "goEtiopiaAlone":
                goEtiopiaAlone();
                break;
            case "goSudaoAlone":
                goSudaoAlone();
                break;
            case "telefoneAlone":
                telefoneAlone();
                break;
            case "telefone":
                telefone();
                break;
            default:
                alert("Checkpoint inválido. Retornando ao menu principal.");
                menuGame();
        }
    } else {
        alert("Nenhum checkpoint salvo ainda.");
        menuGame();
    }
}

function perguntarSeVoltarMenu() {
    let opcaoValida = false;
    while (!opcaoValida) {
        opcao = prompt("Caso queira acessar o menu, selecione o número 0. \nCaso queira continuar, aperte a tecla ENTER.");
        if (opcao == "0") {
            menuGame();
            opcaoValida = true;
        } else if (opcao === "") {
            alert("Continuando a história...");
            opcaoValida = true;
        } else {
            alert("Opção inválida, tente novamente");
        }
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
    let mensagem = "Inventário:\n";
    for (let item in inventario) {
        mensagem += `${item}: ${inventario[item]}\n`;
    }
    alert(mensagem);
}

menuGame();
