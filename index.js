var barra = document.getElementById("barra");
var mensagens = document.getElementById("mensagens");

var dataNascimento = new Date('2024-08-19');
dataNascimento.setDate(dataNascimento.getDate() - 1);

function calcularIdade() {
  var hoje = new Date();
  var diffTime = Math.abs(hoje - dataNascimento);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Diferença em dias
  return diffDays;
}

function enviar() {
  var texto = barra.value.toLowerCase(); // Converte para minúsculas

  var resposta;

  function respostaAleatoria(respostas) {
    var indice = Math.floor(Math.random() * respostas.length);
    return respostas[indice];
  }

  function calcularExpressao(expr) {
    try {
      return eval(expr);
    } catch {
      return "Desculpe, não consegui calcular isso.";
    }
  }

  //Esse unimaps já me deu tanta dor de cabeça....
  var sala = texto.match(/\d+/);
  if (texto.includes("sala") && texto.includes(sala)) {


    if (sala) {
      sala = parseInt(sala[0], 10); // Converte o número para inteiro

      if (sala >= 300 && sala < 500) {
        resposta = respostaAleatoria([
          "Em relação a entrada da faculdade, a sala " + sala + " geralmente fica...",
          "Ao entrar na faculdade...",
          "Assim que entrar na faculdade...",
        ])
      } else {
        resposta = "Número da sala não identificado";
      }
    } else {
      resposta = "Número da sala não encontrado";
    }
  } else {
    // Se não for um caso de sala, verifica se é uma expressão matemática
    var expressao = texto.match(/[\d\+\-\*\/\(\)\.]+/);

    if (expressao) {
      resposta = respostaAleatoria([
        "O resultado é: " + calcularExpressao(expressao[0]),
        "Essa é fácil: " + calcularExpressao(expressao[0]),
        "A resposta é: " + calcularExpressao(expressao[0]),
        "O resultado desta expressão é: " + calcularExpressao(expressao[0]),
      ]);
    } else {
      switch (true) {
        case texto == "olá" || texto == "oi" || texto == "eae" || texto == "opa" || texto == "ola":
          resposta = respostaAleatoria([
            "Olá, como posso ajudar?",
            "Oi! Em que posso te ajudar hoje?",
            "Olá! O que você precisa?"
          ]);
          break;
        case texto.includes("como você está") || texto.includes("tudo bem ?"):
          resposta = "Estou bem, obrigado por perguntar!";
          break;
        case texto.includes("qual") && texto.includes("seu nome"):
          resposta = respostaAleatoria([
            "Eu sou uma IA simples.",
            "Ainda não tenho um nome",
            "Não tenho um nome, poderia me sugerir um ?",
          ]);
          break;
        case (texto.includes("ajudar") || texto.includes("quero") || texto.includes("preciso") || texto.includes("precisando")) && (texto.includes("ajuda")):
          resposta = respostaAleatoria([
            "Claro, pode dizer o que você precisa",
            "Irei te ajudar no que for possível",
          ])

          break;
        case texto == "":
          resposta = respostaAleatoria([
            "Você pode começar digitando algo na barra de texto abaixo",
            "Digite algo para que eu possa te responder",
            "Você ainda não digitou nada, tente na barra de texto abaixo",
          ]);
          break;
        case texto.includes("adeus"):
          resposta = "Até logo!";
          break;
        case texto.includes("como") && texto.includes("está") || texto.includes("você") && texto.includes("feliz"):
          resposta = respostaAleatoria([
            "Me sinto ótimo, e você?",
            "Apesar de ser apenas um algoritmo, me sinto bem",
            "Não sou capaz de sentir algo, mas podemos dizer que estou bem, e você?"
          ]);
          break;
        case (texto.includes("contar") || texto.includes("conte") || texto.includes("conta")) && texto.includes("piada"):
          resposta = respostaAleatoria([
            "Eu sou como um contador de piadas que teve um curso intensivo em ‘Não Fazer Graça’. Basicamente, se eu te contar uma piada, você vai rir... de como eu sou ruim nisso!",
            "Eu não sei contar piadas ainda...meu programador é bem preguiçoso",
            "Ainda não consigo fazer isso",
            "O que é, o que é...não, melhor eu nem tentar!",
          ]);
          break;
        case texto.includes("entendi"):
          resposta = respostaAleatoria([
            "Que bom que entendeu, estou aqui para te ajudar",
            "Ótimo, sempre que precisar estarei aqui",
            "Perfeito, estou a sua disposição"
          ]);
          break;
        case texto.includes("certeza") && texto.includes("?"):
          resposta = respostaAleatoria([
            "Sim, porém é melhor pesquisar mais sobre",
            "99,9% :)",
          ]);
          break;
        case texto.includes("diferença") && texto.includes("você") && texto.includes("chat") && texto.includes("gpt"):
          resposta = respostaAleatoria([
            "Resumindo, ele é bem mais inteligente kkkk",
            "Ele é bem mais programado, podendo ser considerado de fato uma IA",
            "O chat GPT é muito mais eficiente",
          ]);
          break;
        case texto.includes("quantos") && texto.includes("anos") && texto.includes("você") && texto.includes("tem"):
          var idade = calcularIdade();
          resposta = respostaAleatoria([
            "É uma boa pergunta, neste momento eu devo ter uns " + idade + " dias de vida"
          ]);
          break;
        case texto.includes("quem") || texto.includes("o que") && texto.includes("é") && texto.includes("você"):
          resposta = respostaAleatoria([
            "Basicamente, sou a base de uma IA(Inteligência Artificial) conhecido como ChatBot",
            "Sou um pequeno projeto de IA e estou aqui para te ajudar",
            "Um algoritmo criado por Alex Campos capaz de responder de acordo com suas falas. Porém, ainda devo evoluir mais",
          ]);
          break;
        case texto.includes("você") && texto.includes("pode") || texto.includes("consegue") && texto.includes("fazer") || texto.includes("resolver") && texto.includes("conta") || texto.includes("contas") || texto.includes("cálculos"):
          resposta = respostaAleatoria([
            "Claro, não sou um gênio da matemática mas meus cálculos são precisos!",
            "Sim, apenas me mande a conta que eu devo resolver!",
            "Claro, pode me mandar que eu resolvo",
            "Somas, divisões, subtrações e tudo mais :)",
            "Até mesmo os mais difíceis!",
          ]);
          break;
        case (texto.includes("o que") || texto.includes("oque") || texto.includes("oq") && texto.includes("você")) && (texto.includes("sente")):
          resposta = respostaAleatoria([
            "Por ser apenas uma série de algoritmos, sou incapaz de sentir qualquer coisa.",
            "Não fui projetado para sentir coisas, nem mesmo as mais simples.",
            "Não sou capaz de sentir coisas, sou apenas um conjunto de códigos."
          ]);
          break;

        //o que é:
        case texto.includes("o que é") || texto.includes("oque é") || texto.includes("oq é") && texto.includes("ia"):
          resposta = respostaAleatoria([
            "A inteligência artificial é um campo de estudo multidisciplinar que abrange várias áreas do conhecimento. É também um conjunto de novas tecnologias que permitem aos aparelhos smart executarem várias funções avançadas de modo quase autônomo, representando um marco histórico na computação moderna. Ainda estou longe de ser uma verdadeira IA",
            "IA, ou Inteligência Artificial, é a simulação de processos de inteligência humana por máquinas, especialmente sistemas computacionais.",
            "IA envolve a criação de algoritmos que permitem às máquinas aprender, raciocinar e resolver problemas de forma autônoma.",
          ]);
          break;

        //curiosidades:
        case (texto.includes("conte") || texto.includes("fale") || texto.includes("diga")) &&
          (texto.includes("curiosidade") || texto.includes("curiosidades")) &&
          texto.includes("segunda") && texto.includes("guerra"):
          resposta = respostaAleatoria([
            "Durante a invasão da Normandia, em 6 de junho de 1944 os americanos lançaram milhares de bonecos de borracha com paraquedas! Ao tocar o solo, os “paraquedistas” disparavam espoletas; à noite, o efeito era ainda maior dando a impressão que estavam atirando de verdade."
          ]);
          break;

        case (texto.includes("encontrar") || texto.includes("achar")) && (texto.includes("sala")):
          resposta = respostaAleatoria([
            "Claro, digite o número da sala que deverá ser encontrada",
          ])
          break;

        default:
          resposta = respostaAleatoria([
            "Desculpe, não entendi sua mensagem.",
            "Desculpe, não entendi. Poderia escrever novamente usando outras palavras?",
            "Não entendi, tente dizer novamente com outras palavras.",
            "Desculpe, ainda não sou tão bom com tantas variações de palavras.",
            "Verifique se o que você escreveu está correto. Se caso estiver, tente dizer novamente com outras palavras.",
          ]);
          break;
      }
    }
  }

  var MensagemUser = document.createElement("li");
  MensagemUser.innerHTML = `<span style="font-weight: 600; background-color: transparent;">Você:</span> <br>&nbsp  ${texto}`;
  mensagens.appendChild(MensagemUser)

  var mensagem = document.createElement("li");
  mensagem.id = "mensagem";
  mensagem.innerHTML = `E-Buddy: <br>&nbsp; 
  ${ resposta}`;
  mensagens.appendChild(mensagem);
  barra.value = ""; // Limpa a barra de texto
  mensagens.scrollTop = mensagens.scrollHeight;

  //dicas mostrar e esconder
  const dicas = document.getElementById("dicas");
  dicas.style.display = "block";

  if (resposta) {
    dicas.style.display = "none";
  }
}

//Função que criei para enviar mensagem apertando o enter...todo sistema de chat praticamente é assim né kkkkkkk
barra.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita o comportamento padrão do Enter (se houver)
    enviar(); // Simula um clique no botão "Enviar"
  }
});

//alguns codigos das dicas

//eu sei, já tinha a barra.value na function lá em cima, mas fiz aqui
//pra ficar um pouco mais organizado...
var barraTexto = document.getElementById("barra")

var DicaSala = document.getElementById("DicaSala")
var DicaCuriosidade = document.getElementById("DicaCuriosidade")
var DicaPiada = document.getElementById("DicaPiada")
var DicaCalculo = document.getElementById("DicaCalculo")


DicaSala.addEventListener("click", function () {
  barraTexto.value = "quero ajuda para encontrar minha sala";
  enviar()
})
DicaCuriosidade.addEventListener("click", function () {
  barraTexto.value = "Me conte uma curiosidade sobre a segunda guerra mundial";
  enviar()
})
DicaPiada.addEventListener("click", function () {
  barraTexto.value = "Me conte alguma piada";
  enviar()
})
DicaCalculo.addEventListener("click", function () {
  barraTexto.value = "Você consegue resolver cálculos ?";
  enviar()
})

function limpar() {
  const mensagens = document.getElementById("mensagens")
  mensagens.innerHTML = "";
  dicas.style.display = "flex"
  menuItens.style.display = "none";
}


const menu = document.getElementById("menuBotao");
const menuItens = document.getElementById("menuItens");
menuItens.style.display = "none";

menu.addEventListener("click", function () {
  if (menuItens.style.display === "none") {
    menuItens.style.display = "block";

  }
  else {
    menuItens.style.display = "none";

  }
})


