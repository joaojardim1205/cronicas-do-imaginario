let inventario = {};
let progresso = 50;
let sanidade = 50;
let checkpoint;
let opcao;
let treinamento = true;

alert("Bem-vindo à história de Tachlowini Gabriyesos!");

function menuGame() {
    let continuar = true;
    while (continuar) {
        let menu = prompt("--------- MENU ---------\nSelecione uma opção:\n[1] História\n[2] Acessar progresso\n[3] Acessar inventário\n[4] Acessar sanidade\n[5] Checkpoint\n6] Treinamento\n[7] Sair do jogo");

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
    alert("Como você passou muito tempo sozinho, você acabou perdendo 10x de sanidade");
    sanidade -= 10;
    alert(`Sanidade: ${sanidade}`);

    perguntarSeVoltarMenu();

    salvarCheckpoint("telefoneAlone");
    telefoneEtiopiaAlone();
}

function goEtiopia() {
    progresso += 15;
    alert(`Vida: ${progresso}`);
    alert("Você decide ir embora com seu amigo para a Etiópia");
    alert("Você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Graças ao seu amigo, você aguenta firmemente.");
    alert("Por essa experiencia dificil, você acaba perdendo 5x sanidade")
    sanidade -= 5;
    alert(`Sanidade: ${sanidade}`);
    alert("Após um longo período, você consegue finalmente chegar na Etiópia. Agora você decide procurar abrigo em uma loja de conveniência");
    alert("Pelo fato de você ter a companhia de seu amigo, você não perdeu nenhuma sanidade");

    perguntarSeVoltarMenu();

    salvarCheckpoint("telefone");
    telefoneEtiopia();
}

function goSudaoAlone(){
    progresso -= 10;
    alert(`Vida: ${progresso}`);
    alert("Você decide ir para o Sudão.");
    alert("Você caminha durante dias sob o sol escaldante, sobrevivendo com poucas migalhas de comida e evitando policiais.");
    alert("você precisa atravesar o deserto, durante dias e noites a pé.")
    alert("Finalmente, você chega ao Sudão, exausto e com sede.");
    alert("Logo apos chegar no sudão, você decide procurar abrigo. Após caminhar por um tempo, você acha uma loja de conveniencia, então você entra nela.");
    alert("Pelo fato de você ter passado por tudo isso sozinho, você acabou perdendo 20x de sanidade.");
    sanidade -= 15;
    alert(`Sanidade: ${sanidade}`);
    
    perguntarSeVoltarMenu();
    
    salvarCheckpoint("telefoneSudaoAlone");
    telefoneSudaoAlone();
}

function goSudao() {
    progresso -= 5;
    alert(`Vida: ${progresso}`);
    alert("Você e seu amigo decidem ir embora para o Sudão");
    alert("Vocês caminham durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Com a ajuda do seu amigo, vocês conseguem aguentar.");
    alert("Após um longo período, vocês conseguem finalmente chegar no Sudão. Agora vocês decidem procurar abrigo");
    alert("Por essa experiencia dificil, você acaba perdendo 5x sanidade")
    sanidade -= 5;
    alert(`Sanidade: ${sanidade}`);
    alert("Vocês procuram por um tempo e descobrem uma loja de conveniencia onde podem se abrigar. Então os dois decidem ficar na loja");
    alert("Pelo fato de você ter a companhia de seu amigo, você não perdeu nenhuma sanidade");

    perguntarSeVoltarMenu();

    salvarCheckpoint("telefoneSudao");
    telefoneSudao();
}



function telefoneEtiopiaAlone() {
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

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
        progresso -= 5;
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
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

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
        progresso -= 5;
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
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

    let usarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (usarFone === "sim") {
        progresso += 10;
        alert(`Vida: ${progresso}`);
        alert("Você decide ligar para sua tia, que sempre cuidou de você.");
        alert("Sua tia diz que está em Israel e que há um abrigo onde você pode viver e ter uma chance de uma vida melhor.");
        alert("Com esperança renovada, você decide seguir para Israel.");
        salvarCheckpoint("goIsraelAlone");
        goIsraelAlone();
    } else if (usarFone === "nao") {
        progresso -= 5;
        alert(`Vida: ${progresso}`);
        alert("Você decide não usar o telefone e permanecer no Sudão.");
        alert("No Sudão, você enfrenta muitas dificuldades, trabalhando na loja de conveniência para sobreviver.");
        alert("Após um tempo, você descobre sobre um abrigo em Israel. Um abrigo famoso onde varios refugiados vão.");
        alert("Depois de ter descoberto isso, você decide ir para lá em busca de uma vida melhor.");
        salvarCheckpoint("goIsraelAlone");
        goIsraelAlone();
    } else {
        alert("Opção inválida, tente novamente.");
        telefoneSudaoAlone();
    }
}

function telefoneSudao() {
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

    let UsarFone = prompt("Vocês usam o telefone? (sim) (nao)");

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

function goSultão() {
    
}

function goIsrael(){

}

function goIsraelAlone(){
    
}

menuGame();