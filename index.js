let personagemEstado;
let character;
let inventarioEmocoes = {};
let progressoPersonagem = 50;
let checkpoint = null;
let treinamento = 0;
let continuarHistoria = 0;
let continuarConversa = 0;
let continuarNivel = true;

alert("Bem-vindo à história de Tachlowini Gabriyesos!");

// função inicial contendo o menu do jogo, junto com as opcoes para cada ação do jogo
function menuGame() {
    let continuar = true;
    while (continuar) {
        let menu = prompt("--------- MENU ---------\nSelecione uma opção:\n[1] História\n[2] Acessar progresso\n[3] Acessar inventário\n[4] Checkpoint\n[5] Treinamento\n[6] Sair do jogo");

        switch (menu) {
            case '1':
                if(continuarHistoria == 1){
                    alert("Você já começou a historia, tente acessar o checkpoint");
                } else {
                    historia();
                }
                break;
            case '2':
                alert("O progresso é a sua vida, ela aumenta ou diminui dependendo de suas escolhas. Sua vida inicial é 50");
                alert(`Progresso do personagem: ${progressoPersonagem}`);
                break;
            case '3':
                alert("Você acessou o inventário, nele são guardados itens coletados durante a história");
                alert("No inventario tambem é guardado a sanidade")
                alert("Sanidade é um fator muito importante, caso sua sanidade chegue a 0, algo ruim acontecerá. Sua sanidade inicial é 50")
                mostrarInventario();
                break;
            case '4':
                carregarCheckpoint();
                break;
            case '5':
                if(treinamento == 0){
                    alert("Você ainda não desbloqueiou o treinamento, tente outra coisa");
                } else {
                    treinamentoMenu();
                }
                break;
            case '6':
                continuar = false;
                alert("Obrigado por jogar!");
                break;
            default:
                alert("Opção inválida, tente novamente");
        }
    }
}

// função inicial contendo a historia do atleta Tachlowini e a opção de ir para as duas rotas do jogo. A função faz parte da função historia
function historia() {
    continuarHistoria = 1;
    alert("Seu nome é Tachlowini, atualmente possui 12 anos e mora na Eritreia, sua terra natal. Um país localizado na África.");
    alert("Como a Eritreia é um país com uma taxa de pobreza muito alta, você, depois de muito pensar, decide ir embora em busca de uma vida melhor.");
    alert("Você possui um amigo, seu único melhor amigo. Antes de sair, você precisa tomar uma decisão muito importante: chamar o seu amigo e ir embora com ele ou ir sozinho.");

    let irAmigo = prompt("Deseja ir até o amigo? (sim) (nao)");

    if (irAmigo === "sim") {
        armazenarProgressoPersonagem(10);
        adicionarAoInventario("Empatia", 10);
        alert("Você ganhou 10x Empatia");
        alert("Empatia será armazenada no inventário.");

        salvarCheckpoint("goFriend");
        perguntarSeVoltarMenu();
        goFriend();

    } else if (irAmigo === "nao") {
        armazenarProgressoPersonagem(-20);
        adicionarAoInventario("Antipatia", 10);
        alert("Você ganhou 10x Antipatia");
        alert("Antipatia será armazenada no inventário.");

        salvarCheckpoint("goAlone");
        perguntarSeVoltarMenu();
        goAlone();

    } else {
        alert("Opção inválida, tente novamente");
        historia();
    }
}

// função da rota com a escolha de ir com amigo, contem a escolha para novas rotas. A função faz parte da função historia
function goFriend() {
    alert("Você decidiu ir atrás de seu amigo, então você pega itens básicos e vai até a casa dele.");
    alert("Ao chegar na casa dele, você rapidamente o chama e o convida para ir com você. Ele prontamente responde que aceita e logo em seguida vão embora de seu país natal.");
    alert("Agora, os dois têm que decidir entre ir para a Etiópia ou para o Sudão, dois países vizinhos da Eritreia.");
    let irLocal = prompt("Para onde ir? (etiopia) (sudao)");

    if (irLocal === "etiopia") {
        salvarCheckpoint("goEtiopia");
        perguntarSeVoltarMenu();
        goEtiopia();
    } else if (irLocal === "sudao") {
        salvarCheckpoint("goSudao");
        perguntarSeVoltarMenu();
        goSudao();
    } else {
        alert("Opção inválida, tente novamente");
        goFriend();
    }
}

// função da rota com a escolha de ir sozinho, contem a mesmas escolha de novas rotas que o goFriend, mas sendo na rota sozinho. A função faz parte da função historia
function goAlone() {
    alert("Você decidiu não chamar seu amigo e ir sozinho. Então você prontamente pega suas coisas e vai embora de seu país natal.");
    alert("Agora, você precisa decidir entre ir para a Etiópia ou para o Sudão, dois países vizinhos da Eritreia.");

    let irLocal = prompt("Para onde ir? (etiopia) (sudao)");

    if (irLocal === "etiopia") {
        salvarCheckpoint("goEtiopiaAlone")
        perguntarSeVoltarMenu();
        goEtiopiaAlone();
    } else if (irLocal === "sudao") {
        salvarCheckpoint("goSudaoAlone")
        perguntarSeVoltarMenu();
        goSudaoAlone();
    } else {
        alert("Opção inválida, tente novamente");
        goAlone();
    }
}

// função da rota do local etiopia na rota sozinho. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function goEtiopiaAlone() {
    armazenarProgressoPersonagem(5);
    alert("Você decide ir embora para a Etiópia");
    alert("Você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Tudo isso sozinho");
    alert("Após muito tempo e sofrimento, você consegue finalmente chegar na Etiópia. Agora você decide se abrigar em uma loja de conveniência");
    adicionarAoInventario("Persistencia", 10)
    alert("Você ganhou 10x Persistencia");
    alert("Persistencia será armazenada no inventário.");
    alert("Como você passou muito tempo sozinho, você acabou perdendo 15x de sanidade");
    armazenarSanidade(-15);

    salvarCheckpoint("telefoneEtiopiaAlone");
    perguntarSeVoltarMenu();
    telefoneEtiopiaAlone();
}

// função da rota do local etiopia na rota junto com o amigo. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function goEtiopia() {
    armazenarProgressoPersonagem(10);
    alert("Você decide ir embora com seu amigo para a Etiópia");
    alert("Você caminha durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Graças ao seu amigo, você aguenta firmemente.");
    adicionarAoInventario("Persistencia", 5)
    alert("Você ganhou 5x Persistencia");
    alert("Persistencia será armazenada no inventário.");
    alert("Por essa experiencia dificil, você acaba perdendo 10x sanidade")
    armazenarSanidade(-10);

    alert("Após um longo período, você consegue finalmente chegar na Etiópia. Agora você decide procurar abrigo em uma loja de conveniência");
    alert("Pelo fato de você ter a companhia de seu amigo, você não perdeu nenhuma sanidade");

    salvarCheckpoint("telefoneEtiopia");
    perguntarSeVoltarMenu();
    telefoneEtiopia();
}

// função da rota do local sudao na rota sozinho. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function goSudaoAlone(){
    armazenarProgressoPersonagem(-10);
    alert("Você decide ir para o Sudão.");
    alert("Você caminha durante dias sob o sol escaldante, sobrevivendo com poucas migalhas de comida e evitando policiais.");
    alert("você precisa atravesar o deserto, durante dias e noites a pé.")
    alert("Finalmente, você chega ao Sudão, exausto e com sede.");
    adicionarAoInventario("resiliência", 10)
    alert("Você ganhou 10x resiliência");
    alert("resiliência será armazenada no inventário.");
    alert("Logo apos chegar no sudão, você decide procurar abrigo. Após caminhar por um tempo, você acha uma loja de conveniencia, então você entra nela.");
    alert("Pelo fato de você ter passado por tudo isso sozinho, você acabou perdendo 20x de sanidade.");
    armazenarSanidade(-20);
    
    salvarCheckpoint("telefoneSudaoAlone");
    perguntarSeVoltarMenu();
    telefoneSudaoAlone();
}

// função da rota do local sudao na rota junto com o amigo. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function goSudao() {
    armazenarProgressoPersonagem(-5);
    alert("Você e seu amigo decidem ir embora para o Sudão");
    alert("Vocês caminham durante dias no sol ardente, sobrevive comendo migalhas e fugindo de policiais. Com a ajuda do seu amigo, vocês conseguem aguentar.");
    alert("Após um longo período, vocês conseguem finalmente chegar no Sudão. Agora vocês decidem procurar abrigo");
    adicionarAoInventario("resiliência", 5)
    alert("Você ganhou 5x resiliência");
    alert("resiliência será armazenada no inventário.");
    alert("Por essa experiencia dificil, você acaba perdendo 10x sanidade")
    armazenarSanidade(-10);
    
    alert("Vocês procuram por um tempo e descobrem uma loja de conveniencia onde podem se abrigar. Então os dois decidem ficar na loja");
    alert("Pelo fato de você ter a companhia de seu amigo, você não perdeu nenhuma sanidade");

    salvarCheckpoint("telefoneSudao");
    perguntarSeVoltarMenu();
    telefoneSudao();
}

// função da rota do local etiopia na rota sozinho com a opção de nova rota telefone. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function telefoneEtiopiaAlone() {
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

    let UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        armazenarProgressoPersonagem(5);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em Israel e que você pode ir para lá. Ela diz que lá existe um abrigo onde você pode viver e ter a chance de conseguir uma vida melhor");
        adicionarAoInventario("esperança", 15)
        alert("Você ganhou 15x esperança");
        alert("esperança será armazenada no inventário.");
        alert("Após ouvir o que ela disse, você com os olhos cheios de esperança decide ir para Israel, em busca de algo melhor");
        
        salvarCheckpoint("goIsraelAlone");
        perguntarSeVoltarMenu();
        goIsraelAlone();
    } else if (UsarFone === "nao") {
        armazenarProgressoPersonagem(-5);
        alert("Você decidiu não usar o telefone e ficar na Etiópia, na loja de conveniência");
        alert("Na Etiópia, você passa por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, você descobre com o dono da loja que existe um local em Israel que você pode ficar e possivelmente ter uma chance de viver uma vida melhor");
        adicionarAoInventario("esperança", 10)
        alert("Você ganhou 10x esperança");
        alert("esperança será armazenada no inventário.");
        alert("Após descobrir isso, você com os olhos cheios de esperança decide ir para Israel, em busca de algo melhor");
        
        salvarCheckpoint("goIsraelAlone");
        perguntarSeVoltarMenu();
        goIsraelAlone();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneEtiopiaAlone();
    }
}

// função da rota do local etiopia na rota junto com amigo com a opção de nova rota telefone. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function telefoneEtiopia() {
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

    let UsarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        armazenarProgressoPersonagem(5);
        alert("Você decide utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhe fala que ela está em Israel e que você e seu amigo podem ir para lá. Ela diz que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        adicionarAoInventario("esperança", 10)
        alert("Você ganhou 10x esperança");
        alert("esperança será armazenada no inventário.");
        alert("Após ouvir o que ela disse, vocês dois com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        
        salvarCheckpoint("goIsrael");
        perguntarSeVoltarMenu();
        goIsrael();
    } else if (UsarFone === "nao") {
        armazenarProgressoPersonagem(-5);
        alert("Você decidiu não usar o telefone e ficar na Etiópia, na loja de conveniência");
        alert("Na Etiópia, você e seu amigo passam por muitas dificuldades, tendo que trabalhar na loja de conveniência durante horas e horas apenas para não morrer de fome");
        alert("Após exaustivos dias, você descobre com o dono da loja que existe um local em Israel onde vocês dois podem ficar e possivelmente ter uma chance de viver uma vida melhor");
        adicionarAoInventario("esperança", 5)
        alert("Você ganhou 5x esperança");
        alert("esperança será armazenada no inventário.");
        alert("Após descobrir isso, vocês dois com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        
        salvarCheckpoint("goIsrael");
        perguntarSeVoltarMenu();
        goIsrael();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneEtiopia();
    }
}

// função da rota do local sudao na rota sozinho com a opção de nova rota telefone. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function telefoneSudaoAlone(){
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

    let usarFone = prompt("Você usa o telefone? (sim) (nao)");

    if (usarFone === "sim") {
        armazenarProgressoPersonagem(5);
        alert("Você decide ligar para sua tia, que sempre cuidou de você.");
        alert("Sua tia diz que está em Israel e que há um abrigo onde você pode viver e ter uma chance de uma vida melhor.");
        adicionarAoInventario("otimismo", 15)
        alert("Você ganhou 15x otimismo");
        alert("otimismo será armazenado no inventário.");
        alert("Com esperança renovada, você decide seguir para Israel.");
        
        salvarCheckpoint("goIsraelAlone");
        perguntarSeVoltarMenu();
        goIsraelAlone();
    } else if (usarFone === "nao") {
        armazenarProgressoPersonagem(-5);
        alert("Você decide não usar o telefone e permanecer no Sudão.");
        alert("No Sudão, você enfrenta muitas dificuldades, trabalhando na loja de conveniência para sobreviver.");
        alert("Após um tempo, você descobre sobre um abrigo em Israel. Um abrigo famoso onde varios refugiados vão.");
        adicionarAoInventario("otimismo", 10)
        alert("Você ganhou 10x otimismo");
        alert("otimismo será armazenado no inventário.");
        alert("Depois de ter descoberto isso, você decide ir para lá em busca de uma vida melhor.");
        
        salvarCheckpoint("goIsraelAlone");
        perguntarSeVoltarMenu();
        goIsraelAlone();
    } else {
        alert("Opção inválida, tente novamente.");
        telefoneSudaoAlone();
    }
}

// função da rota do local sudao na rota sozinho com a opção de nova rota telefone. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function telefoneSudao() {
    alert("Na loja de conveniência, você acha um telefone atras do balcão. Você tem a possibilidade de usar telefone para contatar um parente");

    let UsarFone = prompt("Vocês usam o telefone? (sim) (nao)");

    if (UsarFone === "sim") {
        armazenarProgressoPersonagem(5);
        alert("Vocês decidem utilizar o telefone e ligar para sua tia, uma pessoa muito amada que sempre cuidou de você");
        alert("Ao ligar, sua tia lhes fala que ela está em Israel e que vocês podem ir para lá. Ela diz que lá existe um abrigo onde vocês podem viver e ter a chance de conseguir uma vida melhor");
        adicionarAoInventario("otimismo", 10)
        alert("Você ganhou 10x otimismo");
        alert("otimismo será armazenado no inventário.");
        alert("Após ouvir o que ela disse, vocês com os olhos cheios de esperança decidem ir para Israel, em busca de algo melhor");
        
        salvarCheckpoint("goIsraelSudao");
        perguntarSeVoltarMenu();
        goIsrael();
    } else if (UsarFone === "nao") {
        armazenarProgressoPersonagem(-5);
        alert("Você decide não usar o telefone e permanecer no Sudão com o seu amigo.");
        alert("No Sudão, vocês dois enfrentam muitas dificuldades, trabalhando na loja de conveniência para sobreviver.");
        alert("Após um tempo, você descobre sobre um abrigo em Israel. Um abrigo famoso onde varios refugiados vão.");
        adicionarAoInventario("otimismo", 5)
        alert("Você ganhou 5x otimismo");
        alert("otimismo será armazenado no inventário.");
        alert("Depois de ter descoberto isso, você vai falar coom o seu amigo e decidem que irão para lá em busca de uma vida melhor.");
        
        salvarCheckpoint("goIsrael");
        perguntarSeVoltarMenu();
        goIsrael();
    } else {
        alert("Opção inválida, tente novamente");
        telefoneSudao();
    }
}

// função da rota do local israel na rota junto com  amigo. Leva para a função treinamentoMenu. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function goIsrael() {
    armazenarProgressoPersonagem(5);
    alert("Você e seu amigo finalmente chegam em Israel");
    alert("Agora, vocês dois podem se hospedar no abrigo que sua tia falou");

    alert("Vocês agora finalmente podem descansar, mas esse descanso nao dura muito. Como vocês dois sao refugiados menores de idade e sem nenhum parente ou responsavel, vocês são classificados como requerente de asilo e são enviados para um centro de detensão.");
    alert("Lá, vocês dois são analisados clinicamente e são inscrito no Hadassah Neurim Youth Village, um internato para jovens em risco ao norte de Tel Aviv.");
    alert("Nesse internato, vocês demoram um tempo para poder se adaptar, mas com o seu amigo, no final da tudo certo.");
    alert("Lá, você descobre um programa de corrida diregido pelo professor Alemayu Faloro. Você fica realmente interessado nesse curso e decide que irá tenta-lo.");
    adicionarAoInventario("entusiasmo", 10)
    alert("Você ganhou 10x entusiasmo");
    alert("entusiasmo será armazenado no inventário.");
    alert("Vocês dois passam bastante tempo nesse internato até termina-lo, agora vocês sao oficialmente residentes de israel.");
    alert("Durante todo esse tempo, você se apaixonou ainda mais com atletismo e decidiu que irá fazer isso profissionalmente");
    alert("O seu amigo tambem nao ficou para tras e decidiu que irá seguir no ramo de arte. Por fim vocês dão um abraço um no outro e seguem rumos diferentes.");
    alert("Agora você vai começar a treinar profissionalmente com o seu professor");

    salvarCheckpoint("treinamentoMenu");
    perguntarSeVoltarMenu();
    treinamentoMenu();
}

// função da rota do local israel na rota sozinho. Leva para a função treinamentoMenu. Contem funções de armazenar o progresso, adicionar emoções ao inventario, salvar checkpoint, opção de voltar ao menu do jogo e a proxima função seguindo a historia. A função faz parte da função historia
function goIsraelAlone() {
    armazenarProgressoPersonagem(5);
    alert("Você finalmente chega em Israel");
    alert("Agora, você pode se hospedar no abrigo que sua tia falou");

    alert("Você agora finalmente pode descansar, mas esse descanso nao dura muito. Como você é refugiado menore de idade e sem nenhum parente ou responsavel, você é classificado como requerente de asilo e é enviado para um centro de detensão.");
    alert("Lá, você é analisado clinicamente e inscrito no Hadassah Neurim Youth Village, um internato para jovens em risco ao norte de Tel Aviv.");
    alert("Nesse internato, você demora bastante tempo para poder se adaptar, sem o seu amgio tudo fica mais dificil. Por causa disso você acabou perdendo 10x sanidade");
    armazenarSanidade(-10);
    alert("Depois de muita luta para se encaixar lá, você acaba descobrindo um programa de corrida diregido pelo professor Alemayu Faloro. Você fica realmente interessado nesse curso e decide que irá tenta-lo.");
    adicionarAoInventario("entusiasmo", 5)
    alert("Você ganhou 10x entusiasmo");
    alert("entusiasmo será armazenado no inventário.");
    alert("Você passa bastante tempo nesse internato até termina-lo, agora você é oficialmente residentes de israel.");
    alert("Durante todo esse tempo, você se apaixonou ainda mais com atletismo e decidiu que irá fazer isso profissionalmente");
    alert("Agora você vai começar a treinar profissionalmente com o seu professor");

    salvarCheckpoint("treinamentoMenu");
    perguntarSeVoltarMenu();
    treinamentoMenu();
}

// função com todo o sistema de treinamento. Contem o menu com as opções de treinamento e todas as funções que fazem o menu funcionar
function treinamentoMenu() {
    treinamento = 1;

    // Modelo do personagem Tachlowini. É o local onde fica armazedado todas as informações e dados sobre o personagem
    class Character {
        constructor(nome, nivel = 1, experienciaParaNivel = 0, habilidades = {}, fatiga = 0) {
            this.nome = nome;
            this.nivel = nivel;
            this.experienciaParaNivel = experienciaParaNivel;
            this.habilidades = habilidades;
            this.fatiga = fatiga;
        }
    
        // função para criar as habilidades do personagem 
        adicionarHabilidade(habilidadeNome) {
            if (!(habilidadeNome in this.habilidades)) {
                this.habilidades[habilidadeNome] = { nivel: 1, experiencia: 0 };
            }
        }
        
        // função para treinar as habilidades. A funçao verifica se o personagem nao esta fadigado, define a quantidade de experiencia as habilidades e nivel recebe, adiciona experiencia as habilidades, alem de fadiga ao personagem e verifica se a habilidade subiu de nivel 
        trainarHabilidade(habilidadeNome, exp) {
            if (this.fatiga >= 100) {
                alert(`${this.nome} está muito cansado para treinar. Descanse antes de treinar.`);
                return;
            }
            
            if (this.habilidades[habilidadeNome]) {
                let habilidadeExp = exp * 1; 
                let nivelExp = exp * 2; 

                this.habilidades[habilidadeNome].experiencia += habilidadeExp;
                this.experienciaParaNivel += nivelExp;
                this.fatiga += 10;

                this.checarHabilidadeNivelAumento(habilidadeNome);
                this.checarNivelAumento();
                
                alert(`${this.nome} treinou ${habilidadeNome} e ganhou ${habilidadeExp} pontos de experiência em habilidades e ${nivelExp} pontos de experiência para o nível.`);
            } 
        }
        
        // função que verifica se o personagem subiu de nivel
        checarNivelAumento() {
            let ExpNecessario = this.nivel * 100;
            if (this.experienciaParaNivel >= ExpNecessario) {
                this.nivel++;
                this.experienciaParaNivel -= ExpNecessario;
                this.aumentarSkillExpMultiplicador();
                
                alert(`${this.nome} subiu para o nível ${this.nivel}!`);
            }
        }
        
        // função que verifica se o nivel da habilidade aumento, caso a habilidade tenha a quantidade de experiencia suficiente, ira aumentar o nivel da habilidade e a quantidade de exp para o proximo nivel
        checarHabilidadeNivelAumento(habilidadeNome) {
            let NecessarioHabilidadeExp = this.habilidades[habilidadeNome].nivel * 50;
            
            if (this.habilidades[habilidadeNome].experiencia >= NecessarioHabilidadeExp) {
                this.habilidades[habilidadeNome].nivel++;
                this.habilidades[habilidadeNome].experiencia -= NecessarioHabilidadeExp;
                
                alert(`${this.nome} subiu de nível na habilidade ${habilidadeNome}!`);
            }
        }
        
        // função para diminuir a quantidade de fadiga do personagem
        descansar() {
            this.fatiga = Math.max(0, this.fatiga - 50);
            alert(`${this.nome} descansou e agora está com ${this.fatiga} de cansaço.`);
        }

        // função que contem todas as habilidades criadas do personagem, junto com o nivel e a quantidade de exp delas
        obterResumoHabilidades() {
            let resumo = "Habilidades:\n";
            for (let habilidade in this.habilidades) {
                resumo += `${habilidade} - Nível: ${this.habilidades[habilidade].nivel}, Experiência: ${this.habilidades[habilidade].experiencia}\n`;
            }
            return resumo;
        }

        // função que contem todas as informacoes do personagem. A função inclue o nome, nivel, quantidade de experiencia do nivel, todas as habilidades e o cansaço do personagem
        atualizarInformacoes() {
            alert(`Informações do Personagem:\nNome: ${this.nome}\nNível: ${this.nivel}\nExperiência para Nível: ${this.experienciaParaNivel}\n${this.obterResumoHabilidades()}Cansaço: ${this.fatiga}`);
        }
    }
    
    // Condicional para armazenar as informações e dados do personagem, para que nao resetem caso a função treinamentoMenu seja acessada novamente. Tambem cria o modelo Character caso ainda nao tenha sido criado 
    if (personagemEstado) {
        character = new Character(
            personagemEstado.nome,
            personagemEstado.nivel,
            personagemEstado.experienciaParaNivel,
            personagemEstado.habilidades,
            personagemEstado.fatiga
        );
    } else {
        character = new Character("Tachlowini");
    }

    // função com o menu de treinamento. Possui todas as opções para treinar, criando as habilidades e treinando-as caso sejam selecionadas alem de atualizar as informações do character. Tambem define a variavel personagemEstado aos dados do Character
    function escolherOpcaoTreinamento(character) {
        let continuarTreinamento = true;
        while(continuarTreinamento){
            let OpcaoTreinamento = prompt("Escolha uma habilidade para treinar:\n (1) Força\n (2) Mentalidade\n (3) Resistencia\n (4) Corrida\n (5) Salto\n (6) Dormir ");
            let expGanho = Math.floor(Math.random() * 50) + 20; 

            switch (OpcaoTreinamento) {
                case '1':
                    character.adicionarHabilidade("Força");
                    character.trainarHabilidade("Força", expGanho);
                    break;
                case '2':
                    character.adicionarHabilidade("Mentalidade");
                    character.trainarHabilidade("Mentalidade", expGanho);
                    break;
                case '3':
                    character.adicionarHabilidade("Resistencia");
                    character.trainarHabilidade("Resistencia", expGanho);
                    break;
                case '4':
                    character.adicionarHabilidade("Corrida");
                    character.trainarHabilidade("Corrida", expGanho);
                    break;
                case '5':
                    character.adicionarHabilidade("Salto");
                    character.trainarHabilidade("Salto", expGanho);
                    break;
                case '6':
                    character.descansar();
                    break;
                default:
                    alert("Opção inválida. Tente novamente");
            }
            character.atualizarInformacoes();
            
            // Condicional para a rota conversa e conversa2 dependendo do nivel do personagem
            if (character.nivel == 5 && continuarNivel) {
                continuarTreinamento = false;
                conversa();
            }
            
            else if (character.nivel == 10) {
                continuarTreinamento = false;
                conversa2();
            }
            
            personagemEstado = {
                nome: character.nome,
                nivel: character.nivel,
                experienciaParaNivel: character.experienciaParaNivel,
                habilidades: character.habilidades,
                fatiga: character.fatiga,
            };
        }
    }
    escolherOpcaoTreinamento(character);
}

// função da rota do personagem nivel 5 apos o treinamento. Contem a rota olimpiadas ou a opção de voltar a treinar
function conversa() {   
    continuarNivel = false;
    let resposta;
    alert("Depois de muito treinamento, seu professor vem falar com você.");
    alert("Professor: Tachlowini, tenho algo para te falar");
    resposta = prompt ("Oque você responde? (1) fala: Olá professor, tudo certo? oque você deseja falar comigo?\n (2) fala: Eai professor, oque você quer falar?\n (3) fala: Diga sor.");

    switch (resposta) {
        case '1':
            alert("Tachlowini: Olá professor, tudo certo? oque você deseja falar comigo?");
            alert("Professor: parece que todo esse treinamento deu resultado. Acho que nao tenho mais nada que posso ensina-lo");
            alert("Tachlowini: Oque?? você está falando serio?");
            alert("Professor: sim, agora você esta apto a ir competir nas olimpiadas");
            alert("Tachlowini: Finalmente, depois de tanto esforço e treinamento, eu estou finalmente pronto");
            alert("Professor: as olimpiadas irão começar em breve, é a hora perfeita. Oque você me diz?");
            resposta = prompt ("Professor: você deseja ir as olimpiadas? (sim) (nao)");
            if (resposta == "sim") {
                alert("Professor: então está decidido, você irá competir nas olimpiadas para atletismo");
                alert("Tachlowini: Estou tão animado, mal posso esperar!");
                adicionarAoInventario("Alegria", 10)
                alert("Você ganhou 10x alegria");
                alert("Alegria será armazenada no inventário.");

                salvarCheckpoint("olimpiadas");
                perguntarSeVoltarMenu();
                olimpiadas();
            } else if (resposta == "nao") {
                alert("Professor: entendo, você sente que ainda não está pronto");
                alert("Tachlowini: sim, sinto que ainda tenho muito oque melhorar até poder ir para as olimpiadas");
                alert("Professor: está tudo bem, então vá e continue treinando até você não aguentar mais!");
                alert("Você decide voltar a treinar");
                treinamentoMenu();
            } else {
                alert("Opção inválida. Tente novamente")
                conversa();
            }
            break;
        case '2':
            alert("Tachlowini: Eai professor, oque você quer falar?");
            alert("Professor: parece que todo esse treinamento deu resultado. Acho que nao tenho mais nada que posso ensina-lo");
            alert("Tachlowini: Oque?? você está falando serio?");
            alert("Professor: sim, agora você esta apto a ir competir nas olimpiadas");
            alert("Tachlowini: Finalmente, depois de tanto esforço e treinamento, eu estou finalmente pronto");
            alert("Professor: as olimpiadas irao começar em breve, é a hora perfeita. Oque você me diz?");
            resposta = prompt ("Professor: você deseja ir as olimpiadas? (sim) (nao)");
            if (resposta == "sim") {
                alert("Professor: então está decidido, você irá competir nas olimpiadas para atletismo");
                alert("Tachlowini: Estou tão animado, mal posso esperar!");
                adicionarAoInventario("Alegria", 10)
                alert("Você ganhou 10x alegria");
                alert("Alegria será armazenada no inventário.");

                salvarCheckpoint("olimpiadas");
                perguntarSeVoltarMenu();
                olimpiadas();
            } else if (resposta == "nao") {
                alert("Professor: entendo, você sente que ainda não está pronto");
                alert("Tachlowini: sim, sinto que ainda tenho muito oque melhorar até poder ir para as olimpiadas");
                alert("Professor: está tudo bem, então vá e continue treinando até você não aguentar mais!");
                alert("Você decide voltar a treinar");
                treinamentoMenu();
            } else {
                alert("Opção inválida. Tente novamente");
                conversa();
            }
            break;
        case '3':
            alert("Tachlowini: Diga sor");
            alert("Professor: parece que todo esse treinamento deu resultado. Acho que nao tenho mais nada que posso ensina-lo");
            alert("Tachlowini: Oque?? você está falando serio?");
            alert("Professor: sim, agora você esta apto a ir competir nas olimpiadas");
            alert("Tachlowini: Finalmente, depois de tanto esforço e treinamento, eu estou finalmente pronto");
            alert("Professor: as olimpiadas irao começar em breve, é a hora perfeita. Oque você me diz?");
            resposta = prompt ("Professor: você deseja ir as olimpiadas? (sim) (nao)");
            if (resposta == "sim") {
                alert("Professor: então está decidido, você irá competir nas olimpiadas para atletismo");
                alert("Tachlowini: Estou tão animado, mal posso esperar!");
                adicionarAoInventario("Alegria", 10)
                alert("Você ganhou 10x alegria");
                alert("Alegria será armazenada no inventário.");

                salvarCheckpoint("olimpiadas");
                perguntarSeVoltarMenu();
                olimpiadas();
            } else if (resposta == "nao") {
                alert("Professor: entendo, você sente que ainda não está pronto");
                alert("Tachlowini: sim, sinto que ainda tenho muito oque melhorar até poder ir para as olimpiadas");
                alert("Professor: está tudo bem, então vá e continue treinando até você não aguentar mais!");
                alert("Você decide voltar a treinar");
                treinamentoMenu();
            } else {
                alert("Opção inválida. Tente novamente")
                conversa();
            }
            break;
        default:
            alert("Opção inválida, tente novamente");
    }  
}

// função da rota do personagem nivel 10 apos o treinamento. Contem a rota olimpiadas
function conversa2() {
    alert("Você para o seu treinamento e sente que agora está realmente pronto para as olimpíadas.")
    alert("Você vai correndo para falar com seu professor. Ao chegar nele, você diz:")
    alert("Tachlowini: Professor! eu acho que agora estou pronto para ir para as olimpiadas")
    alert("Professor: Finalmente! então oque você está esperando? vamos!")
    adicionarAoInventario("Alegria", 10)
    alert("Você ganhou 10x alegria");
    alert("Alegria será armazenada no inventário.");
    
    salvarCheckpoint("olimpiadas");
    perguntarSeVoltarMenu();
    olimpiadas();
}

// função da rota olimpiada. Contem as ultimas falas alem das informações finais do personagem
function olimpiadas() {
    alert("Então você e seu professor começam uma jornada para conseguir ser admitido nas olimpiadas");
    alert("Você vai em diversas competições, enfrentando cada um que passa em seu camigo, corre até não aguentar mais");
    alert("Depois de muito sofrimento, depois de muita batalha, tendo que sobreviver comendo migualhas, fugindo de policiais, tendo que andar descalço na areia quente do deserto e ser obrigado a ver coisas imaginaveis");
    alert("Acumulando diversos tipos de emoções diferentes e aguentando psicologicamente");
    mostrarInventario();
    alert("Aprimorando suas habilidades");
    character.atualizarInformacoes();
    progressoPersonagem = 100;
    alert(`Chegando no pico da sua vida: ${progressoPersonagem}`);
    alert("Você finalmente chega no seu destino, o seu maior sonho");
    alert("Os Jogos Olimpicos!")
    alert("fim. Muito obrigado por jogar!")
    menuGame();
}

// função para adicionar emoções ao inventario. A funçao ira verificar se ja possui um item no inventario, caso ja tenha o item, a função ira apenas acresentar uma quantidade a ele, caso o item nao exista, a função ira criar uma nova entrada para o item junto da quantidade expecificada
function adicionarAoInventario(item, quantidade) {
    if (inventarioEmocoes[item]) {
        inventarioEmocoes[item] += quantidade;
    } else {
        inventarioEmocoes[item] = quantidade;
    }
}

// função para exibir o conteudo do inventario. A função ira criar uma lista de string com todos os itens do inventarioEmocoes junto com suas quantidades
function mostrarInventario() {
        let itens = "Itens no inventário:\n";
        for (let item in inventarioEmocoes) {
            itens += `${item}: ${inventarioEmocoes[item]}\n`;
        }
        alert(itens);
}

// função para armazenar o item sanidade dentro do inventario das emoções
function armazenarSanidade(quantidade) {
    const item = "Sanidade";
    if (inventarioEmocoes[item]) {
        inventarioEmocoes[item] += quantidade;
    } else {
        inventarioEmocoes[item] = quantidade;
    }   
    alert(`Sanidade atualizada: ${quantidade}`)
} armazenarSanidade(50);

// função para salvar o progresso da historia em determinados momentos caso o jogador decida ir para o menu
function salvarCheckpoint(ponto) {
    checkpoint = ponto;
    alert(`Checkpoint salvo: ${checkpoint}`);
}

// função para carregar o checkpoints salvos. A funçao verifica se o checkpoint tem algo salvo, caso nao tenha ira informar, caso tenha a condicional ira verificar se a string corresponde com o nome de uma função global, se corresponder, ira executar a função
function carregarCheckpoint() {
    if (checkpoint) {
        alert(`Carregando checkpoint: ${checkpoint}`);
        if (typeof window[checkpoint] === "function") {
            window[checkpoint]();
        } 
    } else {
        alert("Nenhum checkpoint salvo!")
    }   
}   

// função para perguntar ao jogador se ele deseja voltar ao menu do jogo. Contem a condicional para a resposta do usuario
function perguntarSeVoltarMenu() {
    let opcao = prompt("Deseja retornar ao menu? (sim) (nao)");
    if (opcao === "sim") {
        menuGame();
    } else if (opcao === "nao") {
        alert("Continuando a história...");
    } 
}

// função para armazenar o progresso ao decorrer do jogo
function armazenarProgressoPersonagem(valor) {
    alert(`Progresso atualizado: ${valor}`);
    progressoPersonagem += valor;
    alert(`Progresso do personagem: ${progressoPersonagem}`);
}

menuGame();