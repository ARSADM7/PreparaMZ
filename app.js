// ===== PreparaMZ — CONFIG (edita aqui) =====
const CONFIG = {
  preco: "50 MT",
  // Coloca o teu número WhatsApp com indicativo, ex.: "25884XXXXXXX".
  // Enquanto estiver vazio, o botão de compra fica escondido.
  whatsapp: "258844744484",
  mensagemCompra: "Olá! Quero comprar o acesso ao PreparaMZ (exames resolvidos da 10ª classe) por 50 MT."
};

// Hashes SHA-256 dos códigos de desbloqueio (os códigos em claro ficam
// no ficheiro privado do dono — nunca neste ficheiro público).
const CODIGOS_HASH = ["450e4bc7f862fc0411c81fa53d0c409b82d85a990f0a6dc590e12c0123901e1c","280a06f3e1d22bee0e4e1b06b8a3616bbee2428885bb5966c7fc62f89b7c8dda","6acd36637bbfde3ebce2eb5cca8191c23ce15aeb8fe8a2879da4e442973425da","d4c0f6880c316ca568f17a4f99f8208d9a086f4fbb8679e6bbb6a0217d53e83f","241f5b2e3549111fa56a4e92f3c4bb60eb7233ceb589475573285f51b1e73f1c","bef8177e1b021ff56d192728e62fa3b8c5d605a8ac5d2af065a1ec0b0544695e","fadf26f96e035fc150f9c5fde73ee64c3bd840afabc0bc931d52c05b2487269c","946e91ce5cb591cbc751cba8849054b0459bbd37b1979e4a27cfc023578bf309","a7e02bb14e1ce20d94cee227de1b648a35f029eb37c5d540f28b0b383b2e675f","f18b598e4fc0b47c24cab0e10fbd6709d1714ffea4639b86da07f32ac7404140","864f22e76da55e248658e019a683905723116b36a1be90d374edf1ab6627d7d8","1a4c5954972cac1bf0b9aed573d96ece23d6ca69a193ba69dbf9f80df57d4880","2d6af3526ba55d1dbf5906c2e5afdef0b83cf8d84f52095419be9613f7c09343","e52f7c4c25997c83a354e253bf975cc8e8411ce47227effeed9fdff95add7baf","4c189ed507707d8fe5cd9c4504630b0ea452ae60d5c7ee18798ffb12df1e44b3","002ff779a4446b4cd2da5a0cce1d2baa7a6055b10c98c59c6c8fa6faafd56bee","2a9d6b7bd069790b56b53d911b2152ed4de4b0b0266ba72d06e9c331ec911430","3476feb2191fbbfef90cbe3a3031e345900e139ba7c014b253a4b476d71515be","5df8074039df607e0cbd71b0b87d210bf2f8a195cec49492d109065e20b66ec2","5aff4e9143dba20e3f483fdb8588d049468d03a84af2a26f2ba6174a7153eee6"];

const app = document.getElementById("app");
const CHAVE_ACESSO = "preparamz_acesso";

function temAcesso() { return localStorage.getItem(CHAVE_ACESSO) === "1"; }

function actualizarEstado() {
  const el = document.getElementById("estado-acesso");
  if (temAcesso()) { el.textContent = "✅ Acesso completo"; el.classList.add("liberto"); }
  else { el.textContent = "Modo grátis"; el.classList.remove("liberto"); }
}

async function sha256(texto) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function esc(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }


// ---------- Figuras (imagens) das perguntas ----------
function figuraHTML(e, p, tipo) {
  const mapa = (window.FIGURAS || {})[e.id];
  if (!mapa) return "";
  const f = mapa[p.numero];
  if (!f) return "";
  const svg = tipo === "resolucao" ? f.resolucao : f.enunciado;
  return svg ? `<div class="figura">${svg}</div>` : "";
}

// ---------- Vista inicial ----------
function vistaInicial() {
  actualizarEstado();
  const prontos = window.EXAMES.map(e => `
    <button class="cartao cartao-exame" onclick="abrirExame('${e.id}')">
      <span><span class="nome">${esc(e.disciplina)} ${e.ano} — ${esc(e.chamada)}</span><br>
      <span class="meta">${esc(e.classe)} · ${e.totalPerguntas} perguntas · ${esc(e.duracao)}</span></span>
      <span class="selo selo-pronto">Enunciado + Resolvido</span>
    </button>`).join("");
  const breve = window.EM_BREVE.map(e => `
    <div class="cartao cartao-exame" style="cursor:default">
      <span><span class="nome">${esc(e.disciplina)} ${e.ano} — ${esc(e.chamada)}</span><br>
      <span class="meta">${esc(e.classe)}</span></span>
      <span class="selo selo-breve">Em produção</span>
    </div>`).join("");
  const botaoCompra = CONFIG.whatsapp
    ? `<a class="botao whats" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemCompra)}" target="_blank" rel="noopener">💬 Comprar acesso no WhatsApp — ${CONFIG.preco}</a>`
    : "";
  app.innerHTML = `
    <section class="hero">
      <h1>Exames de Moçambique resolvidos passo a passo</h1>
      <p>O enunciado é <strong>grátis</strong>. A resolução completa, explicada pergunta por pergunta, desbloqueia com um código.</p>
      <span class="preco">Acesso completo: ${CONFIG.preco}</span>
      <div style="margin-top:.8rem">${botaoCompra}</div>
    </section>
    <h2 class="titulo-seccao">Matemática — 10ª Classe · pronto agora</h2>
    ${prontos}
    <h2 class="titulo-seccao">A caminho (2008–2025)</h2>
    ${breve}
    <p class="aviso">Novas resoluções entram todas as semanas, dos anos recentes para os mais antigos. Quem tem acesso completo recebe tudo sem pagar mais nesta época.</p>`;
}

// ---------- Vista de um exame ----------
let exameActual = null;
let abaActual = "enunciado";

function abrirExame(id) {
  exameActual = window.EXAMES.find(e => e.id === id);
  abaActual = "enunciado";
  desenharExame();
  window.scrollTo(0, 0);
}

function mudarAba(aba) { abaActual = aba; desenharExame(); }

function desenharExame() {
  actualizarEstado();
  const e = exameActual;
  let corpo = "";
  if (abaActual === "enunciado") {
    corpo = e.perguntas.map(p => `
      <article class="pergunta">
        <div class="cab"><span class="num">Pergunta ${p.numero}</span>${p.cotacao ? `<span class="cot">Cotação: ${esc(p.cotacao)} valores</span>` : ""}</div>
        <div class="enunciado">${esc(p.enunciado)}</div>${figuraHTML(e, p, "enunciado")}
      </article>`).join("") +
      `<p class="aviso">Fonte: ${esc(e.fonteEnunciado)}. Duração: ${esc(e.duracao)}.</p>`;
  } else {
    const livre = temAcesso();
    corpo = e.perguntas.map((p, i) => {
      const amostra = i === 0; // primeira pergunta resolvida é grátis
      const visivel = livre || amostra;
      const resolucao = visivel ? `
        ${figuraHTML(e, p, "resolucao")}
        <ol class="passos">${p.passos.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        <div class="resposta">Resposta: ${esc(p.resposta)}</div>` : `
        <div class="blur"><ol class="passos"><li>Resolução passo a passo desta pergunta…</li><li>Explicação completa com todos os cálculos…</li></ol>
        <div class="resposta">Resposta: …</div></div>`;
      return `<article class="pergunta">
        <div class="cab"><span class="num">Pergunta ${p.numero} — resolução</span>${amostra && !livre ? '<span class="amostra">AMOSTRA GRÁTIS</span>' : ""}</div>
        <div class="enunciado">${esc(p.enunciado)}</div>${figuraHTML(e, p, "enunciado")}
        ${resolucao}
      </article>`;
    }).join("");
    if (!livre) corpo = caixaCodigo() + corpo;
  }
  app.innerHTML = `
    <button class="voltar" onclick="vistaInicial()">← Todos os exames</button>
    <section class="hero">
      <h1>${esc(e.disciplina)} ${e.ano} — ${esc(e.chamada)}</h1>
      <p>${esc(e.classe)} · Exame Final · ${esc(e.duracao)} · ${e.totalPerguntas} perguntas</p>
    </section>
    <div class="abas">
      <button class="aba ${abaActual === "enunciado" ? "activa" : ""}" onclick="mudarAba('enunciado')">📄 Por resolver (grátis)</button>
      <button class="aba ${abaActual === "resolvido" ? "activa" : ""}" onclick="mudarAba('resolvido')">✅ Resolvido (${CONFIG.preco})</button>
    </div>
    ${corpo}`;
}

function caixaCodigo() {
  const botaoCompra = CONFIG.whatsapp
    ? `<a class="botao whats" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemCompra)}" target="_blank" rel="noopener">💬 Comprar código no WhatsApp — ${CONFIG.preco}</a><br>` : "";
  return `<div class="caixa-codigo">
    <strong>🔒 Resoluções completas bloqueadas</strong>
    <p>A pergunta 1 está aberta como amostra. Para abrir todas, compra o código (${CONFIG.preco}, transferência M-Pesa/e-Mola) e escreve-o aqui:</p>
    ${botaoCompra}
    <input id="input-codigo" placeholder="PMZ10-XXXXXX" autocomplete="off">
    <button class="botao" onclick="tentarDesbloquear()">Desbloquear</button>
    <p id="msg-codigo"></p>
  </div>`;
}

async function tentarDesbloquear() {
  const campo = document.getElementById("input-codigo");
  const msg = document.getElementById("msg-codigo");
  const codigo = campo.value.trim().toUpperCase();
  if (!codigo) { msg.innerHTML = '<span class="msg-erro">Escreve o código primeiro.</span>'; return; }
  const h = await sha256(codigo);
  if (CODIGOS_HASH.includes(h)) {
    localStorage.setItem(CHAVE_ACESSO, "1");
    desenharExame();
  } else {
    msg.innerHTML = '<span class="msg-erro">Código inválido. Confere as letras e tenta de novo.</span>';
  }
}

// PWA: service worker (offline)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

vistaInicial();
