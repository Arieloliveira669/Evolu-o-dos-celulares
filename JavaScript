const posts = document.querySelectorAll(".post");
const filtros = document.querySelectorAll(".filtro");
const busca = document.getElementById("busca");
const vazio = document.getElementById("vazio");
const botaoTema = document.getElementById("tema");
const menu = document.getElementById("menu");
const botaoMenu = document.getElementById("menu-btn");
const barra = document.getElementById("progresso");
const botaoTopo = document.getElementById("topo");

let eraAtual = "todos";

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

/* ANO NO RODAPÉ */
document.getElementById("ano-atual").textContent = new Date().getFullYear();
