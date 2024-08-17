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
                treinamentoMenu();
                if(treinamento = true){
                    alert("Você ainda não desbloqueiou o treinamento, tente outra opção");
                } else if (treinamento = false){
                    treinamentoMenu();
                }
                break;
            case "7":
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

    if (UsarFone === "sim") {
        progresso += 5;
        alert(`Vida: ${progresso}`);
        alert("Vocês decidem utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhes fala que ela está em Israel e que vocês podem ir para lá. Ela diz que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        alert("Após ouvir o que ela disse, vocês com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        salvarCheckpoint("goIsraelSudao");
        goIsrael();
    } else if (UsarFone === "nao") {
        progresso -= 5;
        alert(`Vida: ${progresso}`);
        alert("Você decide não usar o telefone e permanecer no Sudão com o seu amigo.");
        alert("No Sudão, vocês dois enfrentam muitas dificuldades, trabalhando na loja de conveniência para sobreviver.");
        alert("Após um tempo, você descobre sobre um abrigo em Israel. Um abrigo famoso onde varios refugiados vão.");
        alert("Depois de ter descoberto isso, você vai falar coom o seu amigo e decidem que irão para lá em busca de uma vida melhor.");
        salvarCheckpoint("goIsrael");
        goIsrael();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneSudao();
    }
}

function goIsrael() {
    progresso += 15;
    alert(`Vida: ${progresso}`);
    alert("Você e seu amigo finalmente chegam em Israel");
    alert("Agora, vocês dois podem se hospedar no abrigo que sua tia falou");

    alert("Vocês agora finalmente podem descansar, mas esse descanso nao dura muito. Como vocês dois sao refugiados menores de idade e sem nenhum parente ou responsavel, vocês são classificados como requerente de asilo e são enviados para um centro de detensão.");
    alert("Lá, vocês dois são analisados clinicamente e são inscrito no Hadassah Neurim Youth Village, um internato para jovens em risco ao norte de Tel Aviv.");
    alert("Nesse internato, vocês demoram um tempo para poder se adaptar, mas com o seu amigo, no final da tudo certo.");
    alert("Lá, você descobre um programa de corrida diregido pelo professor Alemayu Faloro. Você fica realmente interessado nesse curso e decide que irá tenta-lo.");
    alert("Vocês dois passam bastante tempo nesse internato até termina-lo, agora vocês sao oficialmente residentes de israel.");
    alert("Durante todo esse tempo, você se apaixonou ainda mais com atletismo e decidiu que irá fazer isso profissionalmente");
    alert("O seu amigo tambem nao ficou para tras e decidiu que irá seguir no ramo de arte. Por fim vocês dão um abraço um no outro e seguem rumos diferentes.");
    alert("Agora você vai começar a treinar profissionalmente com o seu professor");

    salvarCheckpoint("treinamentoMenu");

    perguntarSeVoltarMenu();
    treinamentoMenu();
}

function goIsraelAlone() {
    progresso += 10;
    alert(`Vida: ${progresso}`);
    alert("Você finalmente chega em Israel");
    alert("Agora, você pode se hospedar no abrigo que sua tia falou");

    alert("Você agora finalmente pode descansar, mas esse descanso nao dura muito. Como você é refugiado menore de idade e sem nenhum parente ou responsavel, você é classificado como requerente de asilo e é enviado para um centro de detensão.");
    alert("Lá, você é analisado clinicamente e inscrito no Hadassah Neurim Youth Village, um internato para jovens em risco ao norte de Tel Aviv.");
    alert("Nesse internato, você demora bastante tempo para poder se adaptar, sem o seu amgio tudo fica mais dificil. Por causa disso você acabou perdendo 10x sanidade");
    sanidade -= 10;
    alert(`Sanidade: ${sanidade}`);
    alert("Depois de muita luta para se encaixar lá, você acaba descobrindo um programa de corrida diregido pelo professor Alemayu Faloro. Você fica realmente interessado nesse curso e decide que irá tenta-lo.");
    alert("Você passa bastante tempo nesse internato até termina-lo, agora você é oficialmente residentes de israel.");
    alert("Durante todo esse tempo, você se apaixonou ainda mais com atletismo e decidiu que irá fazer isso profissionalmente");
    alert("Agora você vai começar a treinar profissionalmente com o seu professor");

    salvarCheckpoint("treinamentoMenu");
    
    perguntarSeVoltarMenu();
    treinamentoMenu();
}

function treinamentoMenu(){
    treinamento = false;

    class Character {
        constructor(name) {
            this.name = name;
            this.level = 1;
            this.experience = 0;
            this.skills = {};
        }
    
        addSkill(skillName) {
            if (!this.skills[skillName]) {
                this.skills[skillName] = 1;
            }
        }
    
        trainSkill(skillName, exp) {
            if (this.skills[skillName]) {
                this.skills[skillName] += exp;
                this.experience += exp;
                this.checkLevelUp();
                alert(`${this.name} treinou ${skillName} e ganhou ${exp} pontos de experiência.`);
            } else {
                alert(`${skillName} não existe no conjunto de habilidades do personagem.`);
            }
        }
    
        checkLevelUp() {
            let requiredExp = this.level * 100;
            if (this.experience >= requiredExp) {
                this.level++;
                this.experience -= requiredExp;
                console.log(`${this.name} subiu para o nível ${this.level}!`);
            }
        }
    }
    
    function chooseTrainingOption(character) {
        let trainingOption = prompt("Escolha uma habilidade para treinar: (1) Corpo, (2) Mente, (3) Corrida, (4) Pulo, (5) Dormir");
        let expGained = Math.floor(Math.random() * 50) + 10; 
    
        switch (trainingOption) {
            case '1':
                character.addSkill("Corpo");
                character.trainSkill("Corpo", expGained);
                break;
            case '2':
                character.addSkill("Mente");
                character.trainSkill("Mente", expGained);
                break;
            case '3':
                character.addSkill("Corrida");
                character.trainSkill("Corrida", expGained);
                break;
            case '4':
                character.addSkill("Pulo");
                character.trainSkill("Pulo", expGained);
                break;
            case '5':
                break;
            default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
    
    function updateCharacterInfo() {
        document.getElementById('characterInfo').innerText = `
            Nome: ${character.name}
            Nível: ${character.level}
            Experiência: ${character.experience}
            Habilidades: ${JSON.stringify(character.skills)}
        `;
    }

    updateCharacterInfo();
    const character = new Character("Atleta");
    
    chooseTrainingOption(character);
    
    alert(character);
    
    perguntarSeVoltarMenu();
    treinamentoMenu();
}

function treinamentoMenu() {

    class Character {
        constructor(nome) {
            this.nome = nome;
            this.nivel = 1;
            this.experienciaParaNivel = 0;
            this.habilidades = {}; 
            this.fatiga = 0;
        }
    
        adicionarHabilidade(habilidadeNome) {
            if (!(habilidadeNome in this.habilidades)) {
                this.habilidades[habilidadeNome] = { nivel: 1, experiencia: 0 };
            }
        }
    
        trainarHabilidade(habilidadeNome, exp) {
            if (this.fatiga >= 80) {
                alert(`${this.nome} está muito cansado para treinar. Descanse antes de treinar.`);
                return;
            }
            
            if (this.habilidades[habilidadeNome]) {
                let habilidadeExp = exp * 0.5; 
                let nivelExp = exp * 1; 

                this.habilidades[habilidadeNome].experiencia += habilidadeExp;
                this.experienciaParaNivel += nivelExp;
                this.fatiga += 10;

                this.checarHabilidadeNivelAumento(habilidadeNome);
                this.checarNivelAumento();
                
                alert(`${this.nome} treinou ${habilidadeNome} e ganhou ${habilidadeExp} pontos de experiência em habilidades e ${nivelExp} pontos de experiência para o nível.`);
            } 
        }
    
        checarNivelAumento() {
            let ExpNecessario = this.nivel * 100;
            if (this.experienciaParaNivel >= ExpNecessario) {
                this.nivel++;
                this.experienciaParaNivel -= ExpNecessario;
                this.aumentarSkillExpMultiplicador();
                
                alert(`${this.nome} subiu para o nível ${this.nivel}!`);
            }
        }

        aumentarSkillExpMultiplicador() {
            for (let habilidade in this.habilidades) {
                this.habilidades[habilidade].multiplicadorExp = (this.habilidades[habilidade].multiplicadorExp || 1) * 1.2;
            }
        }

        checarHabilidadeNivelAumento(habilidadeNome) {
            let NecessarioHabilidadeExp = this.habilidades[habilidadeNome].nivel * 50;
            if (this.habilidades[habilidadeNome].experiencia >= NecessarioHabilidadeExp) {
                this.habilidades[habilidadeNome].nivel++;
                this.habilidades[habilidadeNome].experiencia -= NecessariHabilidadeExp;
                alert(`${this.nome} subiu de nível na habilidade ${habilidadeNome}!`);
            }
        }
    
        descansar() {
            this.fatiga = Math.max(0, this.fatiga - 50);
            alert(`${this.nome} descansou e agora está com ${this.fatiga} de cansaço.`);
        }

        obterResumoHabilidades() {
            let resumo = "Habilidades:\n";
            for (let habilidade in this.habilidades) {
                resumo += `${habilidade} - Nível: ${this.habilidades[habilidade].nivel}, Experiência: ${this.habilidades[habilidade].experiencia}\n`;
            }
            return resumo;
        }

        atualizarInformacoes() {
            alert(`Informações do Personagem:\nNome: ${this.nome}\nNível: ${this.nivel}\nExperiência para Nível: ${this.experienciaParaNivel}\n${this.obterResumoHabilidades()}Cansaço: ${this.fatiga}`);
        }
    }

    const character = new Character("Tachlowini");

    function escolherOpcaoTreinamento(character) {
        let continuar = true;
        
        while (continuar) {
            let OpcaoTreinamento = prompt("Escolha uma habilidade para treinar: (1) Corpo, (2) Mente, (3) Corrida, (4) Pulo, (5) Dormir, (6) sair");
            let expGanho = Math.floor(Math.random() * 20) + 10; 
    
            switch (OpcaoTreinamento) {
                case '1':
                    character.adicionarHabilidade("Corpo");
                    character.trainarHabilidade("Corpo", expGanho);
                    break;
                case '2':
                    character.adicionarHabilidade("Mente");
                    character.trainarHabilidade("Mente", expGanho);
                    break;
                case '3':
                    character.adicionarHabilidade("Corrida");
                    character.trainarHabilidade("Corrida", expGanho);
                    break;
                case '4':
                    character.adicionarHabilidade("Pulo");
                    character.trainarHabilidade("Pulo", expGanho);
                    break;
                case '5':
                    character.descansar();
                    break;
                case '6':
                    continuar = false;
                    alert("Você parou de treinar");
                    break;
                default:
                    alert("Opção inválida. Por favor, escolha uma opção válida.");
            }
            character.atualizarInformacoes();
        }
    }
    escolherOpcaoTreinamento(character);
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