/* --- DADOS DO USUÁRIO --- */
let currentUser = {
    name: "Estudante",
    cpf: "000.000.000-00"
};

/* --- BANCO DE QUESTÕES --- */
// Convertendo a lista fornecida para Objetos JS
const questionsDB = [
    {
        id: 1,
        title: "Questão 1 - Testes de Software",
        text: "Para validar parte por parte do sistema que está sendo codificado, um técnico em desenvolvimento de sistemas planejou realizar um teste que ele mesmo executaria. Ainda, nesse planejamento, ele também definiu que ficaria responsável por corrigir as falhas que viessem a ser indicadas pelo teste. Conforme essas informações, qual é o teste de software capaz de atender o proposto no planejamento desse técnico?",
        image: "",
        options: ["Carga.", "Unitário.", "Requisito.", "Regressão.", "Usabilidade."],
        correct: 1 // B
    },
    {
        id: 2,
        title: "Questão 2 - Documentação",
        text: "Um aluno do curso superior de Análise e Desenvolvimento de Sistemas precisa redigir uma monografia baseada na norma ABNT. Esta monografia deverá conter a documentação do protótipo a ser apresentado no final do curso para um docente orientador. --Contexto do(a) elaborador(a)--  Qual software para escritório o aluno deve utilizar?",
        image: "",
        options: ["Outlook.", "Editor de vídeo.", "Editor de textos.", "Planilha eletrônica.", "Apresentações digitais."],
        correct: 2 // C
    },
    {
        id: 3,
        title: "Questão 3 - Ferramentas de Desenvolvimento",
        text: "Um programador está trabalhando na implantação de um sistema web e precisa documentar todo o processo. Para isso, ele precisa utilizar aplicações e sistemas operacionais que facilitem esse processo. O programador deve utilizar aplicações e sistemas operacionais com a finalidade de",
        image: "",
        options: [
            "facilitar a organização e os documentos do processo de desenvolvimento do sistema web.",
            "facilitar a implementação de novas funcionalidades no sistema.",
            "reduzir o tempo de desenvolvimento do sistema web.",
            "estimular o desempenho do sistema web.",
            "garantir a segurança do sistema web."
        ],
        correct: 0 // A
    },
    {
        id: 4,
        title: "Questão 4 - IoT e Interoperabilidade",
        text: "Uma empresa está desenvolvendo uma solução de automação residencial que utiliza dispositivos IoT para monitorar e controlar vários aspectos da casa, como iluminação, temperatura e segurança. Para garantir a interoperabilidade dos dispositivos e a eficiência da comunicação entre eles, é importante selecionar os recursos e a linguagem de programação adequados. Com base na solução a ser desenvolvida, o recurso adequado a ser utilizado é:",
        image: "",
        options: [
            "Disponibilidade de recursos de rede.",
            "Interface de usuário dos dispositivos.",
            "Popularidade da linguagem de programação.",
            "Capacidade de processamento dos dispositivos.",
            "Compatibilidade de protocolos e formatos de dados."
        ],
        correct: 4 // E
    },
    {
        id: 5,
        title: "Questão 5 - Gestão de Projetos",
        text: "Um gerente de projetos em uma empresa de desenvolvimento de software está trabalhando com a implantação de um sistema de gestão de recursos humanos para uma organização de grande porte. O cronograma de implantação do sistema inclui várias etapas, como análise de requisitos, desenvolvimento, testes e treinamento de usuários. Durante o processo de implantação, é necessário criar uma regra de negócio específica relacionada ao cálculo de bônus dos funcionários, que deve ser considerada no cronograma de implantação do sistema. A referida regra deve ser:",
        image: "",
        options: [
            "Realizada no início do projeto e integrada ao cronograma, permitindo ajustes durante as etapas do projeto, se necessário.",
            "Delegada à equipe de desenvolvimento para tratamento independente do cronograma de implantação.",
            "Tratada ao longo do processo de implantação, quando for possível calcular o bônus do funcionário.",
            "Tratada como uma etapa independente no cronograma de implantação.",
            "Realizada apenas após a conclusão do cronograma de implantação."
        ],
        correct: 0 // A
    },
    {
        id: 6,
        title: "Questão 6 - Eletrônica",
        text: "Um programador está desenvolvendo um sistema para sua empresa que envolve a coleta de dados de sensores em um ambiente industrial. Para tal, ele precisa entender os fundamentos de eletrônica aplicada para desenvolver o sistema com tecnologia IoT utilizando um componente para amplificar um sinal analógico em circuito eletrônico. Qual componente eletrônico deve ser utilizado?",
        image: "",
        options: ["Transistor.", "Capacitor.", "Resistor.", "Diodo.", "Led."],
        correct: 0 // A
    },
    {
        id: 7,
        title: "Questão 7 - Engenharia de Requisitos",
        text: "Um analista de sistemas precisa estruturar um sistema de vendas online, avaliando os requisitos e as regras de negócios. No processo de elaboração desse sistema, o analista deve decidir se o requisito: 'O sistema deve permitir aos usuários salvar itens em uma lista de desejos para compra posterior' será adicionado ou não na modelagem do sistema. Na emissão do documento de levantamento de requisitos, esse analista de sistemas deve:",
        image: "",
        options: [
            "Excluir o requisito da modelagem do sistema, pois é uma funcionalidade acessória e pode complicar a interface do usuário.",
            "Incluir o requisito na modelagem do sistema, pois é uma funcionalidade importante para os usuários e pode aumentar as vendas.",
            "Adiar a decisão sobre o requisito até que seja feito mais pesquisas sobre o comportamento dos usuários e as tendências do mercado.",
            "Modificar o requisito para permitir que os usuários compartilhem suas listas de desejos com amigos, para aumentar o engajamento deles.",
            "Incluir o requisito na modelagem do sistema, mas limitar a quantidade de itens que os usuários podem adicionar à lista de desejos para evitar sobrecarregar o sistema."
        ],
        correct: 1 // B
    },
    {
        id: 8,
        title: "Questão 8 - Orientação a Objetos",
        text: "Uma equipe está usando o conceito de orientação a objeto para desenvolver um software. Eles precisam definir que a visibilidade de um atributo da classe PESSOA seja acessado apenas por métodos dessa classe ou qualquer método definido em subclasses de PESSOA. Com base nessas informações, qual visibilidade foi usada por essa equipe?",
        image: "",
        options: ["Pública (public).", "Estática (static).", "Privada (private).", "Pacote (package).", "Protegida (protected)."],
        correct: 4 // E
    },
    {
        id: 9,
        title: "Questão 9 - Arduino e C++",
        text: "Um estudante está aprendendo sobre linguagem de programação para integração IoT no curso de Desenvolvimento de Sistemas e, para teste, realizou a montagem de um circuito no microcontrolador Arduino Uno para acender um led na cor verde. Na programação, utilizou a linguagem C++ para definir que, ao iniciar o led, acenda por dois segundos e, em seguida, fique desligado por 5 segundos. Assim, reinicia o processo (loop), conforme demonstra a imagem desenvolvida no simulador Tinkercad. Os comandos ausentes no código fonte acima são, respectivamente:",
        image: "https://lh3.googleusercontent.com/d/16nrAMMZpGT0-qs4Z9diREgjiIvg5zYCC", // Link convertido para visualização direta
        options: [
            "INPUT, LOW, 2000, HIGH e 5000.",
            "INPUT, HIGH, 2000, LOW e 5000.",
            "OUTPUT, LOW, 2000, HIGH e 5000.",
            "OUTPUT, HIGH, 2000, LOW e 5000.",
            "OUTPUT, HIGH, 5000, LOW e 2000."
        ],
        correct: 2 // C
    },
    {
        id: 10,
        title: "Questão 10 - Engenharia de Software",
        text: "Uma equipe de desenvolvimento de sistemas concluiu uma versão preliminar de software e, após feedback dos usuários, o líder da equipe orientou que os desenvolvedores apliquem a técnica de refatoração de software, a partir das queixas dos usuários. A técnica recomendada pelo líder permite que o código produzido pela equipe:",
        image: "",
        options: [
            "Seja testado para garantir que ele não contenha erros.",
            "Seja reescrito usando um conjunto específico de regras.",
            "Seja convertido de uma linguagem de programação para outra.",
            "Combina diferentes partes do código do programa em uma única seção.",
            "Tenha sua estrutura interna melhorada sem alterar sua funcionalidade externa."
        ],
        correct: 4 // E
    },
    {
        id: 11,
        title: "Questão 11 - Banco de Dados",
        text: "Um programador recentemente contratado está implantando um novo sistema que utiliza uma base de dados existente na empresa. Ele verificou que alguns dados estão inconsistentes e com duplicidade, portanto precisa aplicar técnicas de manipulação de banco de dados para a implantação do novo sistema com o atual banco de dados. Visando a implantação do novo sistema e utilizando o atual ambiente de banco de dados, qual técnica é mais indicada dada a situação encontrada pelo programador?",
        image: "",
        options: ["Backup dos dados.", "Criptografia dos dados.", "Análise de desempenho.", "Normalização do banco de dados.", "Atualização do sistema operacional."],
        correct: 3 // D
    },
    {
        id: 12,
        title: "Questão 12 - Fundamentos IoT",
        text: "Durante as aulas sobre fundamentos de eletroeletrônica aplicada no desenvolvimento de sistemas, um aluno criou um projeto que contém uma rede de objetos físicos interconectados que são equipados com sensores, software e outras tecnologias avançadas integradas. Esses dispositivos são capazes de coletar e transmitir dados para outros dispositivos e sistemas por meio da internet, sem a necessidade de intervenção humana direta. O projeto criado pelo aluno engloba recursos de:",
        image: "",
        options: ["rede 5G.", "rede neural.", "hiperconvergência.", "cloud computing (computação em nuvem).", "IoT (Internet of Things, em português, Internet das Coisas)."],
        correct: 4 // E
    },
    {
        id: 13,
        title: "Questão 13 - Requisitos Funcionais",
        text: "Uma equipe de desenvolvedores de software estava criando um sistema de gerenciamento de estoque para uma grande loja de departamentos. A equipe enfrentou dificuldades em relação aos requisitos funcionais do sistema, pois estava recebendo feedbacks vagos e contraditórios dos clientes. Para resolver esse problema, a equipe se reuniu com os clientes para esclarecer os requisitos funcionais do sistema, criou uma lista detalhada das funcionalidades, diagramas e fluxogramas, e realizou testes de usabilidade para garantir que o sistema atendesse às necessidades dos clientes. Como resultado, a equipe conseguiu criar um sistema de gerenciamento de estoque que atendia plenamente às expectativas dos clientes da loja de departamentos, o que se traduziu em ganhos financeiros significativos para a empresa. A equipe enfrentou dificuldades porque o requisito funcional do sistema deve",
        image: "",
        options: [
            "responder às requisições em menos de 1 segundo.",
            "estar disponível 24 horas por dia, com disponibilidade de 99,9% do tempo.",
            "estar pronto para a integração de outros módulos de forma fácil, simples e funcional.",
            "enviar um alerta para o setor de compras quando o estoque de um produto estiver abaixo de uma quantidade configurável.",
            "operar os seus serviços na nuvem, de forma que também possa operar de forma offline em caso de falha de conexão, sincronizando os dados assim que a conexão for reestabelecida."
        ],
        correct: 3 // D
    },
    {
        id: 14,
        title: "Questão 14 - Estrutura de Dados (Pilha)",
        text: "Estrutura de dados do tipo pilha tem por característica efetuar as operações de inserção e remoção de elementos sempre em uma extremidade da estrutura chamada topo. Dessa forma, o primeiro elemento inserido, obrigatoriamente, será o último a ser removido da estrutura. Em uma estrutura de dados do tipo pilha, pode-se fazer as operações push() (empilha elemento) e pop() (desempilha elemento) para manipular seus elementos. Sendo assim, considere a sequência: 1. push(3); 2. push(9); 3. pop(); 4. push(5); 5. push(8); 6. pop(); 7. pop(); 8. push(1); 9. pop(). Ao efetuar essa sequência de operações em uma pilha vazia, qual o elemento que estará no topo da estrutura ao final?",
        image: "",
        options: ["1", "3", "5", "8", "9"],
        correct: 1 // B
    },
    {
        id: 15,
        title: "Questão 15 - Teste de Mesa",
        text: "Um técnico em desenvolvimento de sistemas criou um teste de mesa para validar as saídas da variável 'n' utilizando o algoritmo e a tabela abaixo. Ao depurar esse código, qual é a sequência esperada pelo desenvolvedor para a variável 'n'?",
        image: "https://lh3.googleusercontent.com/d/1paUYokPm8S1vOYvKkCXAnKLuGlQIcw_j",
        options: ["0, 1, 2, 3, 4, 5", "0, 1, 1, 2, 3, 5", "0, 0, 0, 1, 1, 2", "0, 1, 1, 1, 2, 3", "1, 2, 3, 4, 5, 6"],
        correct: 1 // B
    },
    {
        id: 16,
        title: "Questão 16 - SQL",
        text: "Um técnico é desenvolvedor de um sistema de gestão de clientes para uma grande empresa que possui filiais em diversas cidades do Brasil. Foi solicitado a ele a criação de uma consulta SQL que retorne todos os clientes com idade maior ou igual a 18 anos e que morem na cidade de São Paulo, para que a equipe de vendas possa enviar promoções especiais para esses clientes. Importante considerar que o técnico possui acesso total ao banco de dados e que a tabela 'clientes', a qual possui os registros objetivados nessa busca, possuem os campos 'id', 'nome', 'idade' e 'cidade'. O comando que deve ser utilizado para obter a consulta de acordo com os parâmetros é",
        image: "",
        options: [
            "SELECT * FROM clientes WHERE idade > 18 AND cidade = 'São Paulo';",
            "SELECT * FROM clientes WHERE idade >= 18 OR cidade = 'São Paulo';",
            "SELECT * FROM clientes WHERE idade >= 18 AND cidade = 'São Paulo';",
            "SELECT * FROM clientes WHERE idade > 18 OR cidade LIKE '%São Paulo%';",
            "SELECT * FROM clientes WHERE idade >= 18 AND cidade LIKE '%São Paulo%';"
        ],
        correct: 2 // C
    },
    {
        id: 17,
        title: "Questão 17 - Automação de Escritório",
        text: "Um gerente de projetos reuniu sua equipe e designou que cada um trabalhasse em uma estratégia de marketing para divulgação de uma nova tecnologia. Um técnico ficou responsável por enviar um texto de boas-vindas a todos os clientes que a empresa já possui. Porém, 200 desses clientes não utilizam tecnologias como e-mail ou redes sociais. Assim, o técnico precisa automatizar a criação desse texto para os 200 clientes utilizando um editor de textos. O recurso a ser utilizado para automatizar esse processo é",
        image: "",
        options: ["controle de alterações.", "criação de mala direta.", "formatação de parágrafos.", "formatação de capitulação.", "criação de referência cruzada."],
        correct: 1 // B
    },
    {
        id: 18,
        title: "Questão 18 - DDL SQL",
        text: "Um programador, ao trabalhar com banco de dados, necessita atualizar o nome da tabela saep_antigo para saep_novo, utilizando scripts SQL através do SGBD (sistema gerenciador de banco de dados) MySQL Workbench. O script SQL executado pelo programador foi",
        image: "",
        options: [
            "alter table saep_antigo rename to saep_novo;",
            "alter table saep_antigo rename to 'saep_novo';",
            "update table saep_antigo rename to saep_novo;",
            "update table saep_antigo set nome = saep_novo;",
            "update table saep_antigo set nome = 'saep_novo';"
        ],
        correct: 0 // A
    },
    {
        id: 19,
        title: "Questão 19 - Linguagem para IoT",
        text: "Uma empresa desenvolvedora de soluções IoT está criando um novo projeto de integração IoT para monitoramento de estoques em tempo real. É necessário identificar os recursos e a linguagem de programação adequados, levando em consideração a conectividade de hardware e software. A tecnologia usada para a integração IoT do novo projeto é",
        image: "",
        options: ["CSS.", "HTML.", "Python.", "Portugol.", "Assembler."],
        correct: 2 // C
    },
    {
        id: 20,
        title: "Questão 20 - Protocolo MQTT",
        text: "Um desenvolvedor foi alocado para um projeto de automatização de temperatura dos três ambientes da empresa que trabalha. Foram instalados sensores de temperatura adicionais nos ambientes do administrativo (Adm), financeiro (Fin) e recursos humanos (Rh) utilizando o protocolo MQTT. Os dados das temperaturas (Temp) desses dispositivos são publicadas em um dashboard na TV instalada no ambiente do setor de recursos humanos. A gerente do setor de RH identificou que o setor administrativo não está mais informando a temperatura do ambiente no dashboard. O desenvolvedor analisou as conexões do hardware e está tudo correto. Agora, será necessário identificar se os comandos do protocolo MQTT no broker estão corretos. O comando que publica o dado 'temperatura' no broker para o setor que está com falha é:",
        image: "",
        options: ["PUBLISH Temp=21°C em Adm", "PUBLISH Temp=21°C em Rh", "UNSUBSCRIBE tópico Adm", "SUBSCRIBE tópico Adm", "SUBSCRIBE tópico Rh"],
        correct: 0 // A
    },
    {
        id: 21,
        title: "Questão 21 - Linguagem de Programação",
        text: "Um desenvolvedor de software foi encarregado de criar um sistema IoT para uma empresa de automação residencial e industrial. Para o desenvolvimento, ele escolheu uma linguagem de programação com recursos adequados para implementar o sistema, levando em consideração a conectividade de hardware e software, a robótica e os microcontroladores envolvidos no projeto. Considerando os requisitos e as características do projeto, o programador escolheu uma linguagem de programação:",
        image: "",
        options: [
            "de baixo nível para melhor controle sobre o hardware.",
            "voltada para desenvolvimento web e aplicações móveis.",
            "baseada em blocos gráficos para facilitar o desenvolvimento.",
            "específica para processamento de texto e manipulação de dados.",
            "de alto nível com suporte a bibliotecas específicas para IoT e microcontroladores."
        ],
        correct: 4 // E
    },
    {
        id: 22,
        title: "Questão 22 - Modelagem de Dados",
        text: "Nas aulas de desenvolvimento de sistemas, um aluno recebeu uma tarefa que consiste na criação de uma aplicação web para o controle de produtos. O primeiro passo é o planejamento do banco de dados onde os dados serão armazenados de forma otimizada, tendo em vista as questões a seguir: entrevistas com as pessoas envolvidas no processo; validação dos dados com o cliente; performance; futuras manutenções. A primeira etapa para realizar essa tarefa é fazer:",
        image: "",
        options: ["um projeto físico.", "um projeto lógico.", "análise de requisitos.", "um projeto conceitual.", "modelo de entidade-relacionamento."],
        correct: 2 // C
    },
    {
        id: 23,
        title: "Questão 23 - Algoritmos e Matrizes",
        text: "Um algoritmo foi elaborado para receber dados de quatro pessoas e cada pessoa informará seu nome, sua cidade e seu endereço de e-mail. A cada execução do algoritmo, todos os dados de uma pessoa serão coletados para então se coletar os dados da próxima pessoa. O seguinte algoritmo será usado para exibir em tela os dados coletados: para (inteiro i = 0; i < 3; i++) { para (inteiro j = 0; j < 2; j++) { escreva(matriz[i][j]); } } Para exibir todo o conjunto de informações de acordo com o algoritmo proposto, o vetor deve ser declarado em pseudocódigo como:",
        image: "",
        options: ["pessoas: vetor[12] de caracter.", "pessoas: vetor[3][3] de caracter.", "pessoas: vetor[3][4] de caracter.", "pessoas: vetor[4][3] de caracter.", "pessoas: vetor[1][12] de caracter."],
        correct: 3 // D
    },
    {
        id: 24,
        title: "Questão 24 - Classes Abstratas",
        text: "Considere o trecho de código a seguir. public abstract class CL { public abstract void metodoME(); } Para que uma chamada ao metodoME deste código seja realizada, o metodoME deve:",
        image: "",
        options: [
            "receber parâmetro.",
            "ter visibilidade pública.",
            "ser implementado em uma subclasse CL.",
            "ser uma função avulsa definida fora do contexto de uma classe.",
            "ser chamado diretamente, sem uma instância de CL ou de suas subclasses."
        ],
        correct: 2 // C
    },
    {
        id: 25,
        title: "Questão 25 - UML",
        text: "Uma empresa de desenvolvimento aceitou implementar um projeto de um sistema de gestão escolar, o qual tem várias regras de negócios e stakeholders. O diagrama de classes foi utilizado para descrever os atributos, as operações e as relações entre objetos. Para representar um objeto no diagrama UML a empresa deve utilizar um",
        image: "",
        options: ["triângulo.", "retângulo.", "paralelogramo.", "losango sem preenchimento.", "losango com preenchimento preto."],
        correct: 1 // B
    },
    {
        id: 26,
        title: "Questão 26 - Funcionalidade IoT",
        text: "Está sendo desenvolvido um sistema de automação residencial que usa vários dispositivos IoT e uma linguagem de programação estruturada. Algumas funcionalidades de um sistema IoT são indispensáveis para seu funcionamento e outras complementam a sua usabilidade. O recurso necessário para o sistema funcionar é",
        image: "",
        options: [
            "um módulo para jogar jogos em rede com os dispositivos IoT.",
            "um programa que exibe gráficos 3D da temperatura ambiente.",
            "um conjunto de funções para enviar e receber dados através da rede.",
            "um algoritmo para encontrar o menor caminho entre dois dispositivos.",
            "uma função para tocar uma música quando uma pessoa ingressa no ambiente."
        ],
        correct: 2 // C
    },
    {
        id: 27,
        title: "Questão 27 - Estrutura de Dados (Fila)",
        text: "Um programador está desenvolvendo um sistema para uma empresa que precisa criar uma lista de pedidos a ser produzidos pela ordem em que foram criados. Cada pedido possui um identificador: data do pedido, data da entrega, cliente e descrição. As ações que o programador deve realizar para desenvolver a tarefa, na ordem correta, são",
        image: "",
        options: [
            "criar uma fila contendo os atributos do pedido e armazená-la como método de uma classe.",
            "criar uma fila contendo apenas as datas do pedido e armazenar os pedidos em um registro.",
            "criar uma pilha contendo os atributos do pedido e armazená-la como atributo de uma classe ou registro.",
            "criar uma classe ou registro que possua atributos do pedido e empilhar os objetos de pedidos em uma estrutura de dados do tipo pilha.",
            "criar uma classe ou registro que possua os atributos do pedido e enfileirar os objetos de pedidos em uma estrutura de dados do tipo fila."
        ],
        correct: 4 // E
    },
    {
        id: 28,
        title: "Questão 28 - Tipos de Teste",
        text: "Uma equipe de desenvolvimento de software está se preparando para aplicar procedimentos de teste a fim de garantir que o sistema atenda aos requisitos de carga especificados. Eles estão discutindo os diferentes tipos de teste que podem ser aplicados no projeto. Para garantir que o sistema atenda aos requisitos de desempenho, o tipo de teste adequado é de",
        image: "",
        options: ["unidade.", "estresse.", "regressão.", "aceitação.", "integração."],
        correct: 1 // B
    },
    {
        id: 29,
        title: "Questão 29 - Integração de Sistemas",
        text: "Um hospital precisa integrar dois sistemas diferentes para que eles possam trocar informações entre si e diminuir o trabalho de enfermeiros e médicos. Para isso, foi necessário utilizar uma linguagem de programação para fazer essa integração de forma eficiente e segura. Essa integração foi realizada por meio de",
        image: "",
        options: [
            "utilização de APIs e microserviços.",
            "configuração de ambiente de trabalho.",
            "modelagem de sistemas utilizando UML.",
            "modelagem conceitual de banco de dados.",
            "criação de interfaces gráficas com protótipos conceituais."
        ],
        correct: 0 // A
    },
    {
        id: 30,
        title: "Questão 30 - Pseudocódigo",
        text: "Um programador júnior está desenvolvendo o pseudocódigo abaixo. De acordo com o pseudocódigo, qual o impresso pela linha escreval(a) e escreval(b)?",
        image: "https://lh3.googleusercontent.com/d/1qPq6s_Uem7nGKBclIKx2FiERrGnSLqxn",
        options: ["1 e 0", "4 e 10", "9 e 10", "10 e 12", "12 e 10"],
        correct: 2 // C
    },
    {
        id: 31,
        title: "Questão 31 - IoT e Grandezas",
        text: "Um estudante do curso de desenvolvimento de sistemas recebeu o desafio de montar um protótipo de automação com Arduino (IoT) para medir a temperatura e a umidade relativa do ar de um laboratório de metrologia. Os fundamentos de eletroeletrônica aplicada no desenvolvimento de sistemas são importantes para a realização do desafio proposto. A grandeza utilizada na montagem deste protótipo é",
        image: "",
        options: ["Corrente elétrica.", "Comprimento.", "Temperatura.", "Velocidade.", "Massa."],
        correct: 2 // C
    }
];

/* --- ESTADO DA APLICAÇÃO --- */
let userAnswers = {}; 
let currentQuestionIndex = 0;
let examTimerInterval = null; 

/* --- NAVEGAÇÃO GERAL --- */
function goToScreen(screenId) {
    if (screenId !== 'exam-screen') {
        stopTimer();
    }
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    if(screenId === 'exam-screen') {
        updateExamHeader();
        initExam();
    }
}

/* --- LOGIN E CADASTRO --- */
function handleLogin(event) {
    event.preventDefault();
    currentUser.cpf = document.getElementById('user').value;
    currentUser.name = "Kauan Duarte Flauzino"; 
    goToScreen('selection-screen');
}

function handleRegister(event) {
    event.preventDefault();
    currentUser.name = document.getElementById('reg-nome').value;
    currentUser.cpf = document.getElementById('reg-cpf').value;
    alert('Cadastro realizado com sucesso!');
    goToScreen('selection-screen');
}

function getCensoredCpf(rawCpf) {
    const cleanCpf = rawCpf.replace(/\D/g, '');
    if (cleanCpf.length < 3) return rawCpf;
    return `${cleanCpf.substring(0, 3)}.***.***-**`;
}

function updateExamHeader() {
    const displayCpf = getCensoredCpf(currentUser.cpf);
    document.getElementById('header-user-data').innerHTML = 
        `${currentUser.name} (${displayCpf}) | Estudante | <a href="#" onclick="goToScreen('selection-screen')" style="color:#555;">Sair</a>`;
}

/* --- LÓGICA DO TIMER --- */
function startTimer(durationMinutes) {
    let timer = durationMinutes * 60; 
    const timerDisplay = document.querySelector('.timer-value');

    stopTimer();

    examTimerInterval = setInterval(function () {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        const h = hours < 10 ? "0" + hours : hours;
        const m = minutes < 10 ? "0" + minutes : minutes;
        const s = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${h}h ${m}m ${s}s`;

        if (--timer < 0) {
            stopTimer();
            alert("O tempo da prova acabou! Suas respostas serão enviadas.");
            finishExam(true);
        }
    }, 1000);
}

function stopTimer() {
    if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
    }
}

/* --- LÓGICA DA PROVA --- */
function initExam() {
    currentQuestionIndex = 0;
    userAnswers = {}; 
    renderSidebar();
    loadQuestion(0);
    startTimer(120); // 2 horas de prova
}

function loadQuestion(index) {
    if(index < 0 || index >= questionsDB.length) return;
    
    currentQuestionIndex = index;
    const q = questionsDB[index];

    // Atualiza Títulos
    document.getElementById('q-title-bar').innerText = q.title;
    document.getElementById('q-enunciado-text').innerText = q.text;

    // Atualiza Imagem (substituindo a área de código)
    const codeContainer = document.getElementById('q-code-area');
    
    // Se tiver imagem, exibe
    if (q.image && q.image.trim() !== "") {
        codeContainer.style.display = 'block';
        codeContainer.className = 'q-image-container'; // Muda a classe CSS para estilo de imagem
        codeContainer.innerHTML = `<img src="${q.image}" alt="Imagem da Questão" class="q-image" onerror="this.style.display='none'; this.parentElement.innerHTML='(Imagem não carregada. Verifique conexão)'">`;
    } 
    // Se tiver código (legado) ou nada, esconde
    else if (q.code) {
         codeContainer.style.display = 'block';
         codeContainer.className = 'code-container';
         codeContainer.innerHTML = q.code;
    } else {
        codeContainer.style.display = 'none';
        codeContainer.innerHTML = '';
    }

    // Renderiza as 5 Opções
    const letters = ['a', 'b', 'c', 'd', 'e'];
    const optionsHTML = q.options.map((opt, i) => {
        const isChecked = userAnswers[index] === i ? 'checked' : '';
        const letter = letters[i] || '?';
        return `
            <label class="option-row" onclick="selectAnswer(${index}, ${i})">
                <input type="radio" name="q_current" ${isChecked}>
                <span class="custom-radio">${letter}</span>
                <span class="option-text">${opt}</span>
            </label>
        `;
    }).join('');
    
    document.getElementById('options-area').innerHTML = optionsHTML;
    updateSidebarActive();
}

function selectAnswer(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    const inputs = document.querySelectorAll('input[name="q_current"]');
    if(inputs[optIndex]) inputs[optIndex].checked = true;
    renderSidebar(); 
}

function nextQuestion() {
    if (currentQuestionIndex < questionsDB.length - 1) loadQuestion(currentQuestionIndex + 1);
}

function prevQuestion() {
    if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
}

function renderSidebar() {
    const grid = document.getElementById('qGrid');
    grid.innerHTML = '';
    questionsDB.forEach((q, i) => {
        const div = document.createElement('div');
        div.classList.add('q-circle');
        div.innerText = i + 1;
        if (userAnswers[i] !== undefined) div.classList.add('answered');
        div.onclick = () => loadQuestion(i);
        grid.appendChild(div);
    });
    updateSidebarActive();
}

function updateSidebarActive() {
    document.querySelectorAll('.q-circle').forEach((c, i) => {
        if (i === currentQuestionIndex) c.classList.add('active');
        else c.classList.remove('active');
    });
}

/* --- FINALIZAÇÃO --- */
function finishExam(forceFinish = false) {
    if (!forceFinish) {
        if(!confirm("Tem certeza que deseja finalizar a prova?")) return;
    }

    stopTimer();

    const total = questionsDB.length;
    let correctCount = 0;
    let resultsHTML = '';

    questionsDB.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        
        if (isCorrect) correctCount++;

        const statusClass = isCorrect ? 'correct' : 'wrong';
        const badgeClass = isCorrect ? 'bg-green' : 'bg-red';
        const badgeText = isCorrect ? 'Correta' : 'Incorreta';
        const userText = userAnswer !== undefined ? q.options[userAnswer] : "Não respondida";

        // Pega a letra da resposta correta
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const correctLetter = letters[q.correct];

        resultsHTML += `
            <div class="result-item ${statusClass}">
                <div>
                    <strong>Questão ${index + 1}</strong><br>
                    <small>Sua resposta: ${userText}</small>
                    ${!isCorrect ? `<br><small style="color:var(--primary-blue)">Gabarito: <b>${correctLetter}</b></small>` : ''}
                </div>
                <span class="status-badge ${badgeClass}">${badgeText}</span>
            </div>
        `;
    });

    const percentage = Math.round((correctCount / total) * 100);

    document.getElementById('score-text').innerText = `${percentage}%`;
    document.getElementById('score-circle').style.background = `conic-gradient(var(--primary-blue) ${percentage}%, #ddd ${percentage}% 100%)`;
    document.getElementById('detailed-results').innerHTML = resultsHTML;

    goToScreen('result-screen');
}