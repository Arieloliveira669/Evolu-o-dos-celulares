const eventos = [
  {
    ano: 1973, era: "inicio", etiqueta: "Anos 70",
    titulo: "A primeira ligação de um celular",
    resumo: "Em 3 de abril de 1973, o engenheiro Martin Cooper, da Motorola, ligou de uma rua de Nova York usando um protótipo portátil.",
    detalhes: "Cooper telefonou para Joel Engel, um rival que trabalhava na Bell Labs, empresa concorrente. O protótipo era tão grande e pesado que lembrava um tijolo, e a bateria durava muito pouco.",
    ficha: [["Fabricante", "Motorola"], ["Peso", "Cerca de 1,1 kg"], ["Tipo", "Protótipo (DynaTAC)"]],
    curiosidade: "A ideia por trás do celular era conectar pessoas, e não lugares, como faziam os telefones fixos."
  },
  {
    ano: 1983, era: "inicio", etiqueta: "Anos 80",
    titulo: "DynaTAC 8000X: o primeiro celular comercial",
    resumo: "Dez anos depois do protótipo, a Motorola coloca à venda o primeiro celular comercial do mundo.",
    detalhes: "Aprovado nos Estados Unidos em 1983, o aparelho custava cerca de US$ 3.995 e era símbolo de status. Tinha display de LED e teclado numérico, sem tela para fotos ou jogos.",
    ficha: [["Fabricante", "Motorola"], ["Peso", "Cerca de 800 g"], ["Conversa", "Cerca de 30 min"], ["Recarga", "Cerca de 10 horas"], ["Preço", "US$ 3.995"]],
    curiosidade: "Ficou conhecido como \"tijolão\" e apareceu em vários filmes e séries dos anos 1980."
  },
  {
    ano: 1989, era: "inicio", etiqueta: "Anos 80",
    titulo: "MicroTAC: o primeiro celular de abrir",
    resumo: "A Motorola lança um aparelho com tampa articulada (flip), bem menor que os anteriores.",
    detalhes: "A tampa dobrava sobre o teclado, protegendo os botões e reduzindo o tamanho do aparelho no bolso. O formato foi um grande passo rumo a celulares realmente portáteis.",
    ficha: [["Fabricante", "Motorola"], ["Peso", "Cerca de 350 g"], ["Formato", "Flip (de abrir)"]],
    curiosidade: "Esse modelo abriu caminho para os celulares de abrir que fizeram sucesso nos anos 1990 e 2000."
  },
  {
    ano: 1990, era: "inicio", etiqueta: "Brasil",
    titulo: "A telefonia celular chega ao Brasil",
    resumo: "Em 1990, o serviço de telefonia celular começou a operar no Rio de Janeiro.",
    detalhes: "No início, os aparelhos eram caros e poucas pessoas tinham acesso. Nos anos seguintes o serviço se expandiu para outras cidades e, com a chegada de novas operadoras e dos planos pré-pagos no fim da década de 1990, o celular se popularizou.",
    ficha: [["Local", "Rio de Janeiro"], ["Tecnologia", "Analógica"], ["Público inicial", "Poucos usuários"]],
    curiosidade: "A partir dos anos 2010, o Brasil passou a ter mais linhas de celular do que habitantes."
  },
  {
    ano: 1992, era: "anos90", etiqueta: "Anos 90",
    titulo: "O primeiro SMS",
    resumo: "Em 3 de dezembro de 1992, o engenheiro Neil Papworth enviou \"Merry Christmas\" a um celular no Reino Unido.",
    detalhes: "A mensagem foi digitada em um computador, porque os celulares da época ainda não tinham teclado preparado para escrever textos. Anos depois, o SMS virou uma das formas de comunicação mais usadas do mundo.",
    ficha: [["Remetente", "Neil Papworth"], ["Rede", "Vodafone (Reino Unido)"], ["Limite", "160 caracteres"]],
    curiosidade: "O limite de 160 caracteres foi definido depois de analisarem o tamanho de mensagens e cartões-postais comuns."
  },
  {
    ano: 1994, era: "anos90", etiqueta: "Anos 90",
    titulo: "IBM Simon: o primeiro smartphone",
    resumo: "Reunia telefone, agenda, e-mail e tela sensível ao toque em um único aparelho.",
    detalhes: "Vendido nos Estados Unidos pela BellSouth, o Simon tinha calendário, bloco de notas e enviava e-mails e faxes. Ficou pouco tempo à venda e vendeu cerca de 50 mil unidades, mas estava muito à frente do seu tempo.",
    ficha: [["Fabricante", "IBM"], ["Peso", "Cerca de 510 g"], ["Preço", "US$ 899 (com contrato)"], ["Tela", "Sensível ao toque"]],
    curiosidade: "O termo \"smartphone\" só se popularizou anos depois, mas o Simon é considerado o pioneiro."
  },
  {
    ano: 1996, era: "anos90", etiqueta: "Anos 90",
    titulo: "Motorola StarTAC: pequeno e desejado",
    resumo: "Um dos primeiros celulares realmente pequenos e leves, que cabia no bolso da camisa.",
    detalhes: "Com formato de abrir, o StarTAC virou objeto de desejo e inspirou o design de muitos modelos seguintes. Mostrou que o celular podia ser também um acessório de moda.",
    ficha: [["Fabricante", "Motorola"], ["Peso", "88 g"], ["Formato", "Flip (de abrir)"]],
    curiosidade: "Muita gente associa os celulares de abrir aos comunicadores da série Star Trek, que inspiraram engenheiros da época."
  },
  {
    ano: 1997, era: "anos90", etiqueta: "Anos 90",
    titulo: "Nokia 6110 e a Cobrinha",
    resumo: "O Nokia 6110 foi o primeiro aparelho a vir com o jogo Snake (Cobrinha) instalado.",
    detalhes: "O jogo foi criado pelo engenheiro Taneli Armanto e transformou o celular em uma pequena central de diversão. A Cobrinha acabou presente em centenas de milhões de aparelhos da Nokia.",
    ficha: [["Fabricante", "Nokia"], ["Peso", "Cerca de 137 g"], ["Destaque", "Jogo Snake"]],
    curiosidade: "Foi uma das primeiras vezes em que o celular passou a ser usado também para jogar."
  },
  {
    ano: 2000, era: "anos2000", etiqueta: "Anos 2000",
    titulo: "Celulares ganham câmera",
    resumo: "No Japão, o Sharp J-SH04 é considerado o primeiro celular comercial com câmera.",
    detalhes: "A câmera tinha resolução baixíssima, em torno de 0,1 megapixel, mas já permitia tirar fotos e enviá-las para outras pessoas. Foi o começo de uma mudança enorme na forma de registrar o dia a dia.",
    ficha: [["Fabricante", "Sharp"], ["Resolução", "Cerca de 0,11 MP"], ["Lançamento", "Japão"]],
    curiosidade: "Era possível enviar as fotos por mensagem, o que deu início à cultura de compartilhar imagens pelo celular."
  },
  {
    ano: 2000, era: "anos2000", etiqueta: "Anos 2000",
    titulo: "Nokia 3310: o inquebrável",
    resumo: "Famoso pela resistência, bateria de longa duração e o clássico jogo Snake II.",
    detalhes: "O 3310 tinha capas trocáveis, antena interna e toques personalizáveis. Vendeu cerca de 126 milhões de unidades e virou ícone da cultura pop, ganhando até uma versão relançada anos depois.",
    ficha: [["Fabricante", "Nokia"], ["Peso", "133 g"], ["Vendas", "Cerca de 126 milhões"], ["Tela", "Monocromática"]],
    curiosidade: "Até hoje a internet faz memes sobre a resistência do 3310."
  },
  {
    ano: 2003, era: "anos2000", etiqueta: "Anos 2000",
    titulo: "Nokia 1100: o mais vendido da história",
    resumo: "Simples, barato e resistente, foi pensado para mercados emergentes.",
    detalhes: "O aparelho tinha lanterna embutida e teclado à prova de poeira. Estima-se que tenha vendido cerca de 250 milhões de unidades, o que o coloca entre os eletrônicos de consumo mais vendidos de todos os tempos.",
    ficha: [["Fabricante", "Nokia"], ["Vendas", "Cerca de 250 milhões"], ["Destaque", "Lanterna embutida"]],
    curiosidade: "Muita gente usava o 1100 principalmente como lanterna de emergência."
  },
  {
    ano: 2004, era: "anos2000", etiqueta: "Anos 2000",
    titulo: "Motorola Razr V3: o celular fino",
    resumo: "Corpo de metal e espessura reduzida fizeram do Razr um símbolo de estilo.",
    detalhes: "Com teclado de metal e design muito fino para a época, o Razr V3 vendeu mais de 130 milhões de unidades e foi um dos celulares de abrir mais populares da história.",
    ficha: [["Fabricante", "Motorola"], ["Espessura", "Cerca de 14 mm"], ["Vendas", "Mais de 130 milhões"]],
    curiosidade: "Ele mostrou que design importava tanto quanto tecnologia na hora de escolher um celular."
  },
  {
    ano: 2007, era: "anos2000", etiqueta: "Anos 2000",
    titulo: "Chega o iPhone",
    resumo: "Em janeiro de 2007, a Apple apresenta um aparelho com tela multitoque e sem teclado físico.",
    detalhes: "O iPhone foi lançado nos Estados Unidos em junho de 2007. Juntava celular, iPod e navegador de internet em um só aparelho, com tela de 3,5 polegadas e câmera de 2 megapixels.",
    ficha: [["Fabricante", "Apple"], ["Tela", "3,5 polegadas"], ["Câmera", "2 MP"], ["Preço", "A partir de US$ 499"]],
    curiosidade: "No lançamento, o iPhone não aceitava aplicativos de terceiros. A App Store só chegou em 2008."
  },
  {
    ano: 2008, era: "anos2000", etiqueta: "Anos 2000",
    titulo: "Android entra em cena",
    resumo: "O HTC Dream foi o primeiro celular com o sistema Android, do Google.",
    detalhes: "Lançado em outubro de 2008, o aparelho tinha teclado físico deslizante e rodava a primeira versão do Android. Por ser um sistema aberto, passou a ser adotado por muitas fabricantes e acabou se tornando o mais usado do mundo.",
    ficha: [["Aparelho", "HTC Dream (T-Mobile G1)"], ["Sistema", "Android 1.0"], ["Teclado", "Físico deslizante"]],
    curiosidade: "Por muitos anos, as versões do Android receberam nomes de sobremesas em ordem alfabética, como Cupcake e Donut."
  },
  {
    ano: 2010, era: "atual", etiqueta: "2010+",
    titulo: "iPhone 4, Retina e a era da selfie",
    resumo: "A câmera frontal e a tela Retina mudaram a forma de fazer chamadas de vídeo e tirar fotos.",
    detalhes: "O iPhone 4 trouxe tela Retina de alta definição e câmera frontal com FaceTime. No mesmo ano nasceu o Instagram, e as selfies viraram febre mundial.",
    ficha: [["Fabricante", "Apple"], ["Tela", "Retina (326 ppi)"], ["Câmera traseira", "5 MP"]],
    curiosidade: "O Instagram chegou a 1 milhão de usuários em cerca de dois meses."
  },
  {
    ano: 2011, era: "atual", etiqueta: "2010+",
    titulo: "Galaxy Note e os celulares gigantes",
    resumo: "A Samsung lança um celular com tela de 5,3 polegadas e caneta S Pen.",
    detalhes: "Muitos acharam o aparelho grande demais, mas ele abriu um novo segmento. A mistura de celular com tablet ganhou o apelido de \"phablet\" e hoje telas grandes são o padrão.",
    ficha: [["Fabricante", "Samsung"], ["Tela", "5,3 polegadas"], ["Destaque", "Caneta S Pen"]],
    curiosidade: "Hoje é comum encontrar celulares com telas acima de 6 polegadas."
  },
  {
    ano: 2017, era: "atual", etiqueta: "2010+",
    titulo: "iPhone X: Face ID e tela sem bordas",
    resumo: "Sem botão home, o aparelho passou a ser desbloqueado pelo rosto.",
    detalhes: "O iPhone X trouxe tela OLED ocupando quase toda a frente e o reconhecimento facial Face ID. O desenho com recorte no topo da tela foi copiado por muitas outras fabricantes.",
    ficha: [["Fabricante", "Apple"], ["Tela", "OLED de 5,8 polegadas"], ["Desbloqueio", "Face ID"]],
    curiosidade: "O recorte no topo da tela ficou conhecido como \"notch\"."
  },
  {
    ano: 2019, era: "atual", etiqueta: "2010+",
    titulo: "Celulares dobráveis e a chegada do 5G",
    resumo: "Surgem os primeiros smartphones com tela dobrável e o 5G começa a operar comercialmente.",
    detalhes: "O Samsung Galaxy Fold chegou às lojas em setembro de 2019 com tela interna de 7,3 polegadas, e a Huawei também apresentou seu modelo dobrável. No mesmo ano, a Coreia do Sul lançou o 5G comercial.",
    ficha: [["Aparelho", "Samsung Galaxy Fold"], ["Tela interna", "7,3 polegadas"], ["Preço", "US$ 1.980"]],
    curiosidade: "Os primeiros exemplares enviados para análise tiveram problemas, e o lançamento chegou a ser adiado."
  },
  {
    ano: 2022, era: "atual", etiqueta: "2010+",
    titulo: "SOS por satélite no celular",
    resumo: "O iPhone 14 permite pedir ajuda de emergência mesmo sem sinal de celular ou Wi-Fi.",
    detalhes: "O recurso foi liberado em novembro de 2022, inicialmente nos Estados Unidos e no Canadá. O celular conecta-se diretamente a satélites para enviar mensagens de emergência.",
    ficha: [["Aparelho", "iPhone 14"], ["Recurso", "SOS via satélite"], ["Lançamento", "Novembro de 2022"]],
    curiosidade: "A tela mostra um guia para o usuário apontar o aparelho na direção certa do satélite."
  },
  {
    ano: 2024, era: "atual", etiqueta: "2010+",
    titulo: "A era da inteligência artificial",
    resumo: "Os celulares passam a trazer recursos de IA, como tradução em tempo real e busca inteligente.",
    detalhes: "A linha Galaxy S24 chegou em janeiro de 2024 com o Galaxy AI, e a Apple lançou o Apple Intelligence no fim do ano. Parte dos recursos funciona direto no aparelho, sem depender da internet.",
    ficha: [["Samsung", "Galaxy S24 (Galaxy AI)"], ["Apple", "Apple Intelligence"], ["Destaque", "Tradução e resumos"]],
    curiosidade: "A IA transformou o celular em um assistente capaz de traduzir uma conversa enquanto ela acontece."
  }
];

/* ELEMENTOS */
const lista = document.getElementById("lista");
const filtros = document.querySelectorAll(".filtro");
const busca = document.getElementById("busca");
const vazio = document.getElementById("vazio");
const contagem = document.getElementById("contagem");
const botaoExpandir = document.getElementById("expandir");
const botaoTema = document.getElementById("tema");
const menu = document.getElementById("menu");
const botaoMenu = document.getElementById("menu-btn");
const barra = document.getElementById("progresso");
const botaoTopo = document.getElementById("topo");

let eraAtual = "todos";

/* CRIAR OS CARDS */
function criarCard(e) {
  const ficha = e.ficha
    .map(([nome, valor]) => `<li><strong>${nome}</strong>${valor}</li>`)
    .join("");

  return `
    <article class="post reveal" data-era="${e.era}">
      <span class="ano">${e.ano}</span>
      <span class="era-tag">${e.etiqueta}</span>
      <h3>${e.titulo}</h3>
      <p>${e.resumo}</p>
      <div class="extra">
        <p>${e.detalhes}</p>
        <ul class="ficha">${ficha}</ul>
        <p class="curiosidade">💡 <strong>Curiosidade:</strong> ${e.curiosidade}</p>
      </div>
      <button class="ler-mais">Ler mais</button>
      <button class="curtir">❤️ <span>0</span></button>
    </article>`;
}

lista.innerHTML = eventos.map(criarCard).join("");
const posts = document.querySelectorAll(".post");

/* TEMA (salvo no navegador) */
function aplicarTema(escuro) {
  document.body.classList.toggle("escuro", escuro);
  botaoTema.textContent = escuro ? "☀️" : "🌙";
}

try {
  aplicarTema(localStorage.getItem("tema") === "escuro");
} catch (e) {
  aplicarTema(false);
}

botaoTema.addEventListener("click", () => {
  const escuro = !document.body.classList.contains("escuro");
  aplicarTema(escuro);
  try {
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  } catch (e) {}
});

/* MENU MOBILE */
botaoMenu.addEventListener("click", () => menu.classList.toggle("aberto"));
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});

/* BARRA DE PROGRESSO E BOTÃO TOPO */
window.addEventListener("scroll", () => {
  const altura = document.documentElement.scrollHeight - window.innerHeight;
  const percentual = altura > 0 ? (window.scrollY / altura) * 100 : 0;
  barra.style.width = percentual + "%";
  botaoTopo.hidden = window.scrollY < 400;
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* CONTADORES ANIMADOS */
document.querySelectorAll("[data-alvo]").forEach((el) => {
  const alvo = Number(el.dataset.alvo);
  let atual = 0;
  const passo = Math.max(1, Math.ceil(alvo / 40));
  const timer = setInterval(() => {
    atual += passo;
    if (atual >= alvo) {
      atual = alvo;
      clearInterval(timer);
    }
    el.textContent = atual;
  }, 40);
});

/* ANIMAÇÃO AO ROLAR */
const observador = new IntersectionObserver(
  (itens) => {
    itens.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("visivel");
        observador.unobserve(item.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observador.observe(el));

/* BUSCA E FILTRO */
function atualizarLista() {
  const termo = busca.value.toLowerCase().trim();
  let visiveis = 0;

  posts.forEach((post) => {
    const texto = post.textContent.toLowerCase();
    const eraOk = eraAtual === "todos" || post.dataset.era === eraAtual;
    const buscaOk = texto.includes(termo);

    if (eraOk && buscaOk) {
      post.style.display = "block";
      visiveis++;
    } else {
      post.style.display = "none";
    }
  });

  vazio.hidden = visiveis > 0;
  contagem.textContent = `Mostrando ${visiveis} de ${posts.length} marcos`;
}

filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtros.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    eraAtual = botao.dataset.era;
    atualizarLista();
  });
});

busca.addEventListener("input", atualizarLista);

/* LER MAIS E CURTIR */
posts.forEach((post) => {
  const extra = post.querySelector(".extra");
  const botaoLer = post.querySelector(".ler-mais");
  const botaoCurtir = post.querySelector(".curtir");
  const contador = botaoCurtir.querySelector("span");

  botaoLer.addEventListener("click", () => {
    const aberto = extra.classList.toggle("aberto");
    botaoLer.textContent = aberto ? "Ler menos" : "Ler mais";
  });

  botaoCurtir.addEventListener("click", () => {
    const curtido = botaoCurtir.classList.toggle("curtido");
    const total = Number(contador.textContent);
    contador.textContent = curtido ? total + 1 : total - 1;
  });
});

/* EXPANDIR / RECOLHER TODOS */
let tudoAberto = false;
botaoExpandir.addEventListener("click", () => {
  tudoAberto = !tudoAberto;
  posts.forEach((post) => {
    post.querySelector(".extra").classList.toggle("aberto", tudoAberto);
    post.querySelector(".ler-mais").textContent = tudoAberto ? "Ler menos" : "Ler mais";
  });
  botaoExpandir.textContent = tudoAberto ? "Recolher todos" : "Expandir todos";
});

/* ANO NO RODAPÉ */
document.getElementById("ano-atual").textContent = new Date().getFullYear();

atualizarLista();
/* ===== PARTE 3 ===== */

/* GRÁFICO DE PESO (barras animadas ao aparecer) */
const grafico = document.getElementById("grafico");
const linhasPeso = grafico.querySelectorAll(".barra-linha");
const pesoMaximo = 800;

const obsGrafico = new IntersectionObserver(
  (itens) => {
    itens.forEach((item) => {
      if (item.isIntersecting) {
        linhasPeso.forEach((linha) => {
          const peso = Number(linha.dataset.peso);
          linha.querySelector(".barra").style.width = (peso / pesoMaximo) * 100 + "%";
        });
        obsGrafico.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);

obsGrafico.observe(grafico);

/* QUIZ */
const perguntas = [
  {
    pergunta: "Quem fez a primeira ligação de um celular, em 1973?",
    opcoes: ["Steve Jobs", "Martin Cooper", "Neil Papworth", "Bill Gates"],
    correta: 1,
    explicacao: "Martin Cooper, da Motorola, ligou de uma rua de Nova York."
  },
  {
    pergunta: "Qual aparelho é considerado o primeiro smartphone?",
    opcoes: ["iPhone", "Nokia 3310", "IBM Simon", "Razr V3"],
    correta: 2,
    explicacao: "O IBM Simon, de 1994, tinha tela sensível ao toque, agenda e e-mail."
  },
  {
    pergunta: "Em que ano foi enviado o primeiro SMS?",
    opcoes: ["1985", "1992", "2000", "1975"],
    correta: 1,
    explicacao: "Em 1992, Neil Papworth enviou \"Merry Christmas\"."
  },
  {
    pergunta: "Qual jogo veio instalado no Nokia 6110?",
    opcoes: ["Tetris", "Pong", "Snake", "Mario"],
    correta: 2,
    explicacao: "O Snake (Cobrinha) fez sucesso em centenas de milhões de aparelhos."
  },
  {
    pergunta: "Em que ano o iPhone original foi lançado?",
    opcoes: ["2003", "2005", "2007", "2010"],
    correta: 2,
    explicacao: "Foi apresentado em janeiro de 2007 e lançado em junho do mesmo ano."
  },
  {
    pergunta: "Qual foi o primeiro celular com Android?",
    opcoes: ["HTC Dream", "Galaxy S", "Moto G", "Pixel"],
    correta: 0,
    explicacao: "O HTC Dream foi lançado em outubro de 2008."
  },
  {
    pergunta: "Qual aparelho é apontado como um dos mais vendidos da história?",
    opcoes: ["Nokia 1100", "DynaTAC 8000X", "IBM Simon", "Galaxy Fold"],
    correta: 0,
    explicacao: "Estima-se cerca de 250 milhões de unidades vendidas."
  },
  {
    pergunta: "Em qual cidade a telefonia celular começou no Brasil, em 1990?",
    opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    correta: 2,
    explicacao: "O serviço começou no Rio de Janeiro e depois se expandiu."
  }
];

const quizCaixa = document.getElementById("quiz-caixa");
const quizFinal = document.getElementById("quiz-final");
const quizProgresso = document.getElementById("quiz-progresso");
const quizPontos = document.getElementById("quiz-pontos");
const quizBarra = document.getElementById("quiz-barra-interna");
const quizPergunta = document.getElementById("quiz-pergunta");
const quizOpcoes = document.getElementById("quiz-opcoes");
const quizFeedback = document.getElementById("quiz-feedback");
const quizProxima = document.getElementById("quiz-proxima");
const quizResultado = document.getElementById("quiz-resultado");
const quizRecorde = document.getElementById("quiz-recorde");
const quizReiniciar = document.getElementById("quiz-reiniciar");

let indice = 0;
let pontos = 0;

function mostrarPergunta() {
  const atual = perguntas[indice];
  quizProgresso.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  quizPontos.textContent = `Pontos: ${pontos}`;
  quizBarra.style.width = (indice / perguntas.length) * 100 + "%";
  quizPergunta.textContent = atual.pergunta;
  quizFeedback.textContent = "";
  quizProxima.hidden = true;
  quizOpcoes.innerHTML = "";

  atual.opcoes.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = texto;
    botao.addEventListener("click", () => responder(i));
    quizOpcoes.appendChild(botao);
  });
}

function responder(escolhida) {
  const atual = perguntas[indice];
  const botoes = quizOpcoes.querySelectorAll(".opcao");

  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === atual.correta) b.classList.add("certa");
  });

  if (escolhida === atual.correta) {
    pontos++;
    quizFeedback.textContent = "✅ Correto! " + atual.explicacao;
  } else {
    botoes[escolhida].classList.add("errada");
    quizFeedback.textContent = "❌ Errou. " + atual.explicacao;
  }

  quizPontos.textContent = `Pontos: ${pontos}`;
  quizProxima.textContent = indice === perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
  quizProxima.hidden = false;
}

function mostrarResultado() {
  quizCaixa.hidden = true;
  quizFinal.hidden = false;

  let mensagem = "Que tal rever a linha do tempo e tentar de novo?";
  if (pontos >= 7) mensagem = "Excelente! Você manja de celulares! 🏆";
  else if (pontos >= 4) mensagem = "Muito bem! Quase lá! 👏";

  quizResultado.textContent = `Você acertou ${pontos} de ${perguntas.length}. ${mensagem}`;

  let recorde = pontos;
  try {
    const salvo = Number(localStorage.getItem("recordeQuiz")) || 0;
    recorde = Math.max(salvo, pontos);
    localStorage.setItem("recordeQuiz", recorde);
  } catch (e) {}

  quizRecorde.textContent = `Seu recorde: ${recorde} de ${perguntas.length}`;
}

quizProxima.addEventListener("click", () => {
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

quizReiniciar.addEventListener("click", () => {
  indice = 0;
  pontos = 0;
  quizFinal.hidden = true;
  quizCaixa.hidden = false;
  mostrarPergunta();
});

mostrarPergunta();
