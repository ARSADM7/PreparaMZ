// ===== PreparaMZ — CONFIG (edita aqui) =====
const CONFIG = {
  preco: "50 MT",
  // Coloca o teu número WhatsApp com indicativo, ex.: "25884XXXXXXX".
  // Enquanto estiver vazio, o botão de compra fica escondido.
  whatsapp: "258844744484",
  mensagemCompra: "Olá! Quero comprar o acesso ao PreparaMZ (exames resolvidos da 9ª e 10ª classes) por 50 MT."
};

// Versão visível da app (selo no rodapé, para distinguir a versão nova de
// cópias antigas em cache). TEM de coincidir com o CACHE em sw.js
// ("preparamz-v11") — os dois sobem sempre juntos.
const VERSAO_APP = "v15";

// Hashes SHA-256 dos códigos de desbloqueio (os códigos em claro ficam
// no ficheiro privado do dono — nunca neste ficheiro público).
const CODIGOS_HASH = ["b055d7a89cf4617a15e0bc6cf4a61bb08ef61967c27d045596e7dbcd3644e49b","280a06f3e1d22bee0e4e1b06b8a3616bbee2428885bb5966c7fc62f89b7c8dda","6acd36637bbfde3ebce2eb5cca8191c23ce15aeb8fe8a2879da4e442973425da","d4c0f6880c316ca568f17a4f99f8208d9a086f4fbb8679e6bbb6a0217d53e83f","241f5b2e3549111fa56a4e92f3c4bb60eb7233ceb589475573285f51b1e73f1c","bef8177e1b021ff56d192728e62fa3b8c5d605a8ac5d2af065a1ec0b0544695e","fadf26f96e035fc150f9c5fde73ee64c3bd840afabc0bc931d52c05b2487269c","946e91ce5cb591cbc751cba8849054b0459bbd37b1979e4a27cfc023578bf309","a7e02bb14e1ce20d94cee227de1b648a35f029eb37c5d540f28b0b383b2e675f","f18b598e4fc0b47c24cab0e10fbd6709d1714ffea4639b86da07f32ac7404140","864f22e76da55e248658e019a683905723116b36a1be90d374edf1ab6627d7d8","1a4c5954972cac1bf0b9aed573d96ece23d6ca69a193ba69dbf9f80df57d4880","2d6af3526ba55d1dbf5906c2e5afdef0b83cf8d84f52095419be9613f7c09343","e52f7c4c25997c83a354e253bf975cc8e8411ce47227effeed9fdff95add7baf","4c189ed507707d8fe5cd9c4504630b0ea452ae60d5c7ee18798ffb12df1e44b3","002ff779a4446b4cd2da5a0cce1d2baa7a6055b10c98c59c6c8fa6faafd56bee","2a9d6b7bd069790b56b53d911b2152ed4de4b0b0266ba72d06e9c331ec911430","3476feb2191fbbfef90cbe3a3031e345900e139ba7c014b253a4b476d71515be","5df8074039df607e0cbd71b0b87d210bf2f8a195cec49492d109065e20b66ec2","5aff4e9143dba20e3f483fdb8588d049468d03a84af2a26f2ba6174a7153eee6"];

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

// ---------- Notação matemática (frações empilhadas, expoentes/índices) ----------
// Os textos dos exames já trazem expoentes e índices em Unicode verdadeiro
// (x², 2ˣ, log₂, xᵥ, √, ∈, ∞) — ficam como estão; o formatador apenas agrupa
// cada sequência de expoente/índice num <span> (.expo/.ind) para a
// apresentação ser uniforme e a linha não esticar. As frações escritas com
// "/" passam a desenhar-se empilhadas (numerador sobre denominador, com
// linha), só com CSS próprio (.frac) — sem bibliotecas e sem rede.
// Conservador: só converte quando os dois lados são inequivocamente
// matemáticos — número, √…, π, letra isolada ou grupo entre parênteses.
// Texto corrido com "/" (ex.: "cateto oposto / hipotenusa", "INEC/MINEDH")
// NÃO converte: palavras de 2+ letras de qualquer dos lados ficam de fora,
// assim como anos, ordinais ("1ª chamada") e intervalos sem fração.
// A barra e os espaços originais ficam guardados num elemento invisível
// (.fsep) dentro da fração: o texto, sem a marcação nova, fica EXACTAMENTE
// igual ao original (verificado em teste-redesign/teste-notacao.js).

const SUP_CHARS = "⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ˣʸ";
const SUB_CHARS = "₀₁₂₃₄₅₆₇₈₉ₓᵥₐₑₒₔₕₖₗₘₙₚₛₜ";

function _ehDigito(c) { return !!c && c >= "0" && c <= "9"; }
function _ehLetra(c) { return !!c && ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || "ÁÀÂÃÉÊÍÓÔÕÚÇáàâãéêíóôõúç".includes(c)); }

function _grupoParenteses(s, i) {
  if (s[i] !== "(") return null;
  let prof = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === "(") prof++;
    else if (s[j] === ")") { prof--; if (prof === 0) return { fim: j + 1, texto: s.slice(i, j + 1) }; }
  }
  return null;
}

// Termo matemático simples: 12 · 0,44 · 10√3 · √3 · π · 270° · x · x² · 3m
function _termo(s, i) {
  let j = i, unidades = 0;
  while (j < s.length) {
    const c = s[j];
    if (_ehDigito(c)) {
      while (j < s.length && _ehDigito(s[j])) j++;
      if ((s[j] === "," || s[j] === ".") && _ehDigito(s[j + 1])) {
        j++;
        while (j < s.length && _ehDigito(s[j])) j++;
      }
      unidades++;
    } else if (c === "√") {
      let k = j + 1;
      if (k < s.length && _ehDigito(s[k])) { while (k < s.length && _ehDigito(s[k])) k++; j = k; }
      else if (k < s.length && _ehLetra(s[k])) { j = k + 1; }
      else break;
      unidades++;
    } else if (c === "π" || c === "°") {
      j++; unidades++;
    } else if (_ehLetra(c)) {
      j++;
      while (j < s.length && (SUP_CHARS.includes(s[j]) || SUB_CHARS.includes(s[j]))) j++;
      unidades++;
    } else break;
  }
  if (!unidades) return null;
  const texto = s.slice(i, j);
  return { fim: j, texto, palavra: /^[A-Za-zÀ-ÿ]+$/.test(texto) && texto.length > 1 };
}

// Operando de uma fração: [sinal] (grupo entre parênteses | termo)
function _operando(s, i) {
  let j = i, sinal = "";
  if (s[j] === "−" || s[j] === "-" || s[j] === "±") { sinal = s[j]; j++; }
  const g = _grupoParenteses(s, j);
  if (g) return { fim: g.fim, texto: sinal + g.texto, palavra: false };
  const t = _termo(s, j);
  if (t) return { fim: t.fim, texto: sinal + t.texto, palavra: t.palavra };
  return null;
}

function _operandoValido(op) { return !!op && !op.palavra; }

function fmtMat(s) {
  if (!s) return s;
  let out = "", i = 0;
  while (i < s.length) {
    const c = s[i];
    const antes = i > 0 ? s[i - 1] : "";
    const podeComecar = i === 0 || !(_ehDigito(antes) || _ehLetra(antes) || antes === "/");
    if (podeComecar && (_ehDigito(c) || _ehLetra(c) || c === "√" || c === "π" || c === "(" || c === "−" || c === "±")) {
      const num = _operando(s, i);
      if (_operandoValido(num)) {
        let j = num.fim;
        while (s[j] === " ") j++;
        if (s[j] === "/") {
          let k = j + 1;
          while (s[k] === " ") k++;
          const den = _operando(s, k);
          if (_operandoValido(den)) {
            out += `<span class="frac"><span class="fnum">${fmtMat(num.texto)}</span><span class="fsep">${s.slice(num.fim, k)}</span><span class="fden">${fmtMat(den.texto)}</span></span>`;
            i = den.fim;
            continue;
          }
        }
      }
    }
    if (SUP_CHARS.includes(c)) {
      let j = i;
      while (j < s.length && SUP_CHARS.includes(s[j])) j++;
      out += `<span class="expo">${s.slice(i, j)}</span>`;
      i = j;
      continue;
    }
    if (SUB_CHARS.includes(c)) {
      let j = i;
      while (j < s.length && SUB_CHARS.includes(s[j])) j++;
      out += `<span class="ind">${s.slice(i, j)}</span>`;
      i = j;
      continue;
    }
    out += c;
    i++;
  }
  return out;
}

function fmt(s) { return fmtMat(esc(s)); }


// ---------- Figuras (imagens) das perguntas ----------
function figuraHTML(e, p, tipo) {
  const mapa = (window.FIGURAS || {})[e.id];
  if (!mapa) return "";
  const f = mapa[p.numero];
  if (!f) return "";
  const svg = tipo === "resolucao" ? f.resolucao : f.enunciado;
  return svg ? `<div class="figura">${svg}</div>` : "";
}

// ---------- Visualizador interno de PDF (interfaces 3 e 7) ----------
// Incorporação nativa do URL do mozexames: o servidor não bloqueia frames.
// O PDF só é pedido ao servidor quando esta vista é desenhada (lazy).
// Se o navegador/Android não mostrar o PDF dentro da página, o botão
// "Abrir PDF" fica sempre visível como recurso.
function visorPDF(url, titulo, fecharFn) {
  return `<div class="visor">
    <div class="visor-barra"><span class="visor-titulo">📄 ${esc(titulo)}</span><button class="botao secundario pequeno" onclick="${fecharFn}">✕ Fechar</button></div>
    <iframe src="${url}" title="${esc(titulo)}" loading="lazy"></iframe>
    <div class="visor-nota">
      <p>Se o documento não aparecer aqui dentro — alguns telemóveis Android abrem PDFs de outra forma — usa este botão:</p>
      <a class="botao" href="${url}" target="_blank" rel="noopener">📄 Abrir PDF</a>
    </div>
  </div>`;
}

// ---------- Vista inicial ----------
function cartaoProntoHTML(e) {
  return `
    <button class="cartao cartao-exame" onclick="abrirExame('${e.id}')">
      <span><span class="nome">${esc(e.disciplina)} ${e.ano} — ${esc(e.chamada)}</span><br>
      <span class="meta">${esc(e.classe)} · ${e.totalPerguntas} perguntas · ${esc(e.duracao)}</span></span>
      <span class="selo selo-pronto">Enunciado + Resolvido</span>
    </button>`;
}

function vistaInicial() {
  actualizarEstado();
  // Exames prontos agrupados por classe (10ª primeiro, depois 9ª, …),
  // preservando a ordem de window.EXAMES dentro de cada grupo.
  const gruposProntos = [];
  for (const e of window.EXAMES) {
    let g = gruposProntos.find(x => x.classe === e.classe);
    if (!g) { g = { classe: e.classe, exames: [] }; gruposProntos.push(g); }
    g.exames.push(e);
  }
  const prontos = gruposProntos.map(g => `
    <h2 class="titulo-seccao">${esc(g.classe)} — exames resolvidos · pronto agora</h2>
    ${g.exames.map(cartaoProntoHTML).join("")}`).join("");
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
    <section class="faixa">
      <h1>Exames de Moçambique resolvidos passo a passo</h1>
      <span class="preco">Acesso completo: ${CONFIG.preco}</span>
    </section>
    ${prontos}
    <section class="cartao cartao-compra">
      <h2>🔓 Acesso completo — ${CONFIG.preco}</h2>
      <p>O enunciado de cada exame é <strong>grátis</strong>. Com o acesso completo desbloqueias, com um código, a resolução passo a passo de <strong>todos os exames</strong> — e o acesso fica guardado neste telemóvel.</p>
      ${botaoCompra ? `<div style="margin-top:.8rem">${botaoCompra}</div>` : ""}
    </section>
    <h2 class="titulo-seccao">Arquivo de exames originais (PDF oficial)</h2>
    <p class="aviso">Folhas de exame verdadeiras, digitalizadas (INEC/MINEDH), via arquivo público mozexames.com — 9ª e 10ª classes, todas as disciplinas, 2000–2025 (${totalArquivo()} exames verificados). São os enunciados oficiais, grátis. Escolhe a classe e a disciplina; toca num exame para leres o PDF sem sair da app.</p>
    <div id="arquivo"></div>
    <h2 class="titulo-seccao">A caminho (2008–2025)</h2>
    ${breve}
    <p class="aviso">Novas resoluções entram todas as semanas, dos anos recentes para os mais antigos. Quem tem acesso completo recebe tudo sem pagar mais nesta época.</p>`;
  desenharArquivo();
}

// ---------- Arquivo de originais: filtros Classe → Disciplina → anos ----------
// Dados em data/arquivo.js (window.ARQUIVO). Só se desenha a lista da
// disciplina seleccionada — nunca as centenas de itens de uma vez.
let arqClasse = "10";
let arqDisciplina = "Matemática";

function totalArquivo() {
  const A = window.ARQUIVO || {};
  let n = 0;
  for (const c of Object.values(A)) for (const l of Object.values(c)) n += l.length;
  return n;
}

function totalClasse(c) {
  const A = (window.ARQUIVO || {})[c] || {};
  return Object.values(A).reduce((s, l) => s + l.length, 0);
}

function desenharArquivo() {
  const caixa = document.getElementById("arquivo");
  if (!caixa) return;
  const A = window.ARQUIVO || {};
  const disciplinas = Object.keys(A[arqClasse] || {});
  if (!disciplinas.includes(arqDisciplina)) arqDisciplina = disciplinas[0];
  const lista = (A[arqClasse] || {})[arqDisciplina] || [];
  const classes = ["10", "9"].map(c => `
    <button class="aba ${arqClasse === c ? "activa" : ""}" onclick="arqEscolherClasse('${c}')">${c}ª Classe · ${totalClasse(c)}</button>`).join("");
  const chips = disciplinas.map(d => `
    <button class="chip ${arqDisciplina === d ? "activa" : ""}" onclick="arqEscolherDisciplina('${esc(d)}')">${esc(d)} · ${(A[arqClasse][d] || []).length}</button>`).join("");
  const nota9 = arqClasse === "9"
    ? `<p class="aviso">O arquivo público só tem, por agora, exames da 9ª classe de 2025 — é o ano em que o exame nacional da 9ª aparece neste arquivo.</p>` : "";
  const itens = lista.map((x, i) => `
    <button class="cartao cartao-exame" onclick="abrirArquivoItem('${arqClasse}','${esc(arqDisciplina)}',${i})"><span><span class="nome">${esc(arqDisciplina)} ${x[0]} — ${esc(x[1])}</span><br><span class="meta">${arqClasse}ª Classe · exame original</span></span><span class="selo selo-pronto">Ver original</span></button>`).join("");
  caixa.innerHTML = `
    <div class="abas">${classes}</div>
    <div class="chips">${chips}</div>
    ${nota9}
    ${itens}`;
}

function arqEscolherClasse(c) {
  arqClasse = c;
  const disciplinas = Object.keys((window.ARQUIVO || {})[c] || {});
  // Ao trocar de classe, preferir Matemática quando existir.
  arqDisciplina = disciplinas.includes("Matemática") ? "Matemática" : disciplinas[0];
  desenharArquivo();
}

function arqEscolherDisciplina(d) {
  arqDisciplina = d;
  desenharArquivo();
}

function urlArquivo(uuid) { return "https://storage.mozexames.com/papers/" + uuid + "/question.pdf"; }

// ---------- Arquivo: original aberto dentro da app (interface 7) ----------
function abrirArquivoItem(classe, disciplina, i) {
  const lista = ((window.ARQUIVO || {})[classe] || {})[disciplina] || [];
  const x = lista[i];
  if (!x) return;
  arqClasse = classe; arqDisciplina = disciplina; // o ✕/voltar repõe estes filtros
  actualizarEstado();
  const titulo = `${disciplina} ${x[0]} — ${x[1]}`;
  app.innerHTML = `
    <button class="voltar" onclick="vistaInicial()">← Arquivo de originais</button>
    <section class="hero">
      <h1>Exame original — ${esc(titulo)}</h1>
      <p>${classe}ª Classe · folha de exame oficial digitalizada (INEC/MINEDH), via arquivo público mozexames.com.</p>
    </section>
    ${visorPDF(urlArquivo(x[2]), titulo, "vistaInicial()")}
    <p class="aviso">O original é o documento oficial (enunciado), tal como foi digitalizado. Alguns destes exames já têm resolução passo a passo do PreparaMZ — vê os exames prontos no topo desta página.</p>`;
  window.scrollTo(0, 0);
}

// Compatibilidade: índice na lista de Matemática 10ª (window.ORIGINAIS).
function abrirOriginalArquivo(i) {
  const o = (window.ORIGINAIS || [])[i];
  if (!o) return;
  const lista = ((window.ARQUIVO || {})["10"] || {})["Matemática"] || [];
  const j = lista.findIndex(x => x[0] === o.ano && x[1] === o.epoca);
  if (j >= 0) abrirArquivoItem("10", "Matemática", j);
}

function iconeDisciplina(d) {
  return { "Matemática": "🧮", "Física": "🔭", "Química": "🧪", "Biologia": "🌿", "Geografia": "🌍", "História": "🏛️", "Português": "📖", "Inglês": "🔤" }[d] || "📚";
}

// ---------- Vista de um exame (interface 2) ----------
let exameActual = null;
let abaActual = "perguntas";
let originalAberto = false;
let perguntaActual = 0;

// ---------- Retomar: última posição de estudo (exame/separador/pergunta) ----------
const CHAVE_RETOMAR = "preparamz_retomar";

function guardarRetomar() {
  if (!exameActual) return;
  try {
    localStorage.setItem(CHAVE_RETOMAR, JSON.stringify({ exame: exameActual.id, aba: abaActual, pergunta: perguntaActual }));
  } catch (e) { /* armazenamento indisponível: a app continua sem retomar */ }
}

function lerRetomar() {
  try { return JSON.parse(localStorage.getItem(CHAVE_RETOMAR) || "null"); }
  catch (e) { return null; }
}

function abrirExame(id) {
  exameActual = window.EXAMES.find(e => e.id === id);
  abaActual = "perguntas";
  perguntaActual = 0;
  originalAberto = false;
  const salvo = lerRetomar();
  if (salvo && salvo.exame === id) {
    if (["perguntas", "original", "resolvido"].includes(salvo.aba)) abaActual = salvo.aba;
    if (Number.isInteger(salvo.pergunta)) {
      perguntaActual = Math.max(0, Math.min(salvo.pergunta, exameActual.perguntas.length - 1));
    }
  }
  guardarRetomar();
  desenharExame();
  window.scrollTo(0, 0);
}

function mudarAba(aba) {
  abaActual = aba;
  if (aba !== "original") originalAberto = false;
  guardarRetomar();
  desenharExame();
}

// ---------- Navegação pergunta a pergunta ----------
function irPergunta(i) {
  if (!exameActual) return;
  perguntaActual = Math.max(0, Math.min(i, exameActual.perguntas.length - 1));
  guardarRetomar();
  desenharExame();
}

function perguntaAnterior() { irPergunta(perguntaActual - 1); }
function perguntaProxima() { irPergunta(perguntaActual + 1); }

function progressoHTML(rotulo, feitos, total) {
  const pct = total > 0 ? Math.round(feitos / total * 100) : 0;
  return `<div class="progresso"><div class="prog-cab"><span>${rotulo}</span><span>${feitos} de ${total}</span></div><div class="barra"><span style="width:${pct}%"></span></div></div>`;
}

// Índice compacto 1–10 para saltar para qualquer pergunta.
// Na Resolução sem acesso, as bloqueadas mostram cadeado e a P1 marca a amostra.
function indiceHTML(e, modo, livre) {
  const botoes = e.perguntas.map((p, i) => {
    const bloqueada = modo === "resolvido" && !livre && i > 0;
    const amostra = modo === "resolvido" && !livre && i === 0;
    const cls = ["indice-num", i === perguntaActual ? "activa" : "", bloqueada ? "bloqueada" : "", amostra ? "amostra-num" : ""].join(" ");
    const extra = bloqueada ? ' <span class="cadeado">🔒</span>' : "";
    const titulo = bloqueada ? `Pergunta ${p.numero} — resolução bloqueada` : (amostra ? `Pergunta ${p.numero} — amostra grátis` : `Pergunta ${p.numero}`);
    return `<button class="${cls}" onclick="irPergunta(${i})" title="${titulo}" aria-label="${titulo}">${p.numero}${extra}</button>`;
  }).join("");
  return `<nav class="indice" aria-label="Índice de perguntas">${botoes}</nav>`;
}

function navegacaoHTML(e) {
  const primeiro = perguntaActual === 0;
  const ultimo = perguntaActual === e.perguntas.length - 1;
  return `<div class="nav-perguntas">
    <button class="botao secundario" onclick="perguntaAnterior()" ${primeiro ? "disabled" : ""}>← Anterior</button>
    <span class="posicao">Pergunta ${perguntaActual + 1} de ${e.totalPerguntas}</span>
    <button class="botao" onclick="perguntaProxima()" ${ultimo ? "disabled" : ""}>Próxima →</button>
  </div>`;
}

function perguntaFocadaHTML(e) {
  const p = e.perguntas[perguntaActual];
  return `<article class="pergunta">
        <div class="cab"><span class="num">Pergunta ${p.numero}</span>${p.cotacao ? `<span class="cot">Cotação: ${esc(p.cotacao)} valores</span>` : ""}</div>
        <div class="enunciado">${fmt(p.enunciado)}</div>${figuraHTML(e, p, "enunciado")}
      </article>`;
}

function resolucaoFocadaHTML(e, livre) {
  const p = e.perguntas[perguntaActual];
  const amostra = perguntaActual === 0; // primeira pergunta resolvida é grátis
  const visivel = livre || amostra;
  let corpoResolucao;
  if (visivel) {
    corpoResolucao = `
        ${figuraHTML(e, p, "resolucao")}
        <ol class="passos">${p.passos.map(s => `<li>${fmt(s)}</li>`).join("")}</ol>
        <div class="resposta">Resposta: ${fmt(p.resposta)}</div>`;
  } else {
    // Desbloqueio no sítio certo: painel dentro da própria pergunta bloqueada.
    corpoResolucao = caixaCodigo();
  }
  return `<article class="pergunta">
        <div class="cab"><span class="num">Pergunta ${p.numero} — resolução</span>${amostra && !livre ? '<span class="amostra">AMOSTRA GRÁTIS</span>' : ""}</div>
        <div class="enunciado">${fmt(p.enunciado)}</div>${figuraHTML(e, p, "enunciado")}
        ${corpoResolucao}
      </article>`;
}

function desenharExame() {
  actualizarEstado();
  const e = exameActual;
  let corpo = "";
  if (abaActual === "perguntas") {
    corpo = progressoHTML("Posição no exame", perguntaActual + 1, e.totalPerguntas)
      + `<div class="barra-accao"><button class="botao" onclick="imprimirPDF('enunciado')">📄 Guardar enunciado em PDF (grátis)</button></div>`
      + indiceHTML(e, "perguntas", true)
      + perguntaFocadaHTML(e)
      + navegacaoHTML(e)
      + `<p class="aviso">Fonte: ${esc(e.fonteEnunciado)}. Duração: ${esc(e.duracao)}.</p>`;
  } else if (abaActual === "original") {
    if (!e.originalPdf) {
      corpo = `<div class="visor-vazio"><h3>Enunciado original</h3><p>O PDF oficial deste exame ainda não está disponível na app.</p></div>`;
    } else if (!originalAberto) {
      corpo = `<div class="visor-vazio">
        <div class="cadeado-icone">📄</div>
        <h3>Enunciado original (PDF oficial)</h3>
        <p>Folha de exame oficial digitalizada (INEC/MINEDH), servida pelo arquivo mozexames.com. O documento carrega apenas quando tocares no botão — assim poupas dados e a página abre depressa.</p>
        <button class="botao" onclick="originalAberto=true;desenharExame()">📄 Ver enunciado original</button>
        <p class="aviso">Fonte: ${esc(e.fonteEnunciado)}.</p>
      </div>`;
    } else {
      corpo = visorPDF(e.originalPdf, `${e.disciplina} ${e.ano} — ${e.chamada} · enunciado original`, "originalAberto=false;desenharExame()");
    }
  } else { // resolução
    const livre = temAcesso();
    if (!livre) {
      corpo = progressoHTML("Posição no exame", perguntaActual + 1, e.totalPerguntas)
        + indiceHTML(e, "resolvido", false)
        + resolucaoFocadaHTML(e, false)
        + navegacaoHTML(e);
    } else {
      corpo = progressoHTML("Posição no exame", perguntaActual + 1, e.totalPerguntas)
        + `<div class="barra-accao"><button class="botao" onclick="vistaDocumentoResolucao()">📖 Ver resolução em documento</button><button class="botao secundario" onclick="imprimirPDF('resolvido')">📄 Guardar resolução em PDF</button></div>`
        + indiceHTML(e, "resolvido", true)
        + resolucaoFocadaHTML(e, true)
        + navegacaoHTML(e);
    }
  }
  app.innerHTML = `
    <button class="voltar" onclick="vistaInicial()">← Todos os exames</button>
    <section class="cartao cabecalho-exame">
      <div class="linha-exame">
        <div class="icone-exame">${iconeDisciplina(e.disciplina)}</div>
        <div>
          <h1>${esc(e.disciplina)} ${e.ano}</h1>
          <p class="meta">${esc(e.classe)} · ${esc(e.chamada)}</p>
          <span class="selo selo-oficial">Exame oficial</span>
        </div>
      </div>
      <p class="meta-exame">${e.totalPerguntas} perguntas · Duração: ${esc(e.duracao)} · ${esc(e.tipo || "Exame Final")}</p>
    </section>
    <div class="abas">
      <button class="aba ${abaActual === "perguntas" ? "activa" : ""}" onclick="mudarAba('perguntas')">Perguntas</button>
      <button class="aba ${abaActual === "original" ? "activa" : ""}" onclick="mudarAba('original')">Enunciado original</button>
      <button class="aba ${abaActual === "resolvido" ? "activa" : ""}" onclick="mudarAba('resolvido')">Resolução</button>
    </div>
    ${corpo}`;
}

function caixaCodigo() {
  const botaoCompra = CONFIG.whatsapp
    ? `<a class="botao amarelo grande" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemCompra)}" target="_blank" rel="noopener">🪙 ${CONFIG.preco} &nbsp;·&nbsp; Desbloquear resolução</a>` : "";
  return `<div class="caixa-codigo">
    <div class="cadeado-icone">🔒</div>
    <strong class="titulo-bloqueio">Resolução bloqueada</strong>
    <p>Os ${CONFIG.preco} desbloqueiam <strong>todas as resoluções de todos os exames</strong>, e o acesso fica guardado neste telemóvel. A pergunta 1 deste exame está aberta como amostra grátis.</p>
    ${botaoCompra}
    <ul class="vantagens">
      <li>✔️ Pagamento seguro por transferência (M-Pesa/e-Mola)</li>
      <li>✔️ Acesso imediato com o código</li>
      <li>✔️ Válido para todos os exames desta época</li>
    </ul>
    <p>Já tens o código? Escreve-o aqui:</p>
    <input id="input-codigo" placeholder="PMZ10-XXXXXX" autocomplete="off">
    <button class="botao" onclick="tentarDesbloquear()">Desbloquear</button>
    <p id="msg-codigo"></p>
    <p class="aviso">Após o pagamento e o desbloqueio, a resolução fica disponível nesta página e podes aceder sempre que quiseres neste telemóvel.</p>
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


// ---------- Documento (vista em ecrã + imprimir/guardar em PDF) ----------
function documentoHTML(tipo) {
  const e = exameActual;
  const titulo = `${e.disciplina} ${e.ano} — ${e.chamada}`;
  const subtitulo = tipo === "resolvido" ? "Resolução passo a passo" : "Enunciado (por resolver)";
  const meta = `${e.classe} · ${e.tipo || "Exame Final"}${e.duracao ? " · " + e.duracao : ""} · ${e.totalPerguntas} perguntas`;
  const partes = e.perguntas.map(p => {
    const cab = `<h3>Pergunta ${p.numero}${p.cotacao ? ` <span class="pcot">(Cotação: ${esc(p.cotacao)} valores)</span>` : ""}</h3>`;
    const enun = `<p class="penun">${fmt(p.enunciado)}</p>` + figuraHTML(e, p, "enunciado");
    if (tipo === "enunciado") return `<div class="pq">${cab}${enun}</div>`;
    const passos = p.passos.map(x => `<li>${fmt(x)}</li>`).join("");
    return `<div class="pq">${cab}${enun}${figuraHTML(e, p, "resolucao")}<ol>${passos}</ol><p class="presp"><strong>Resposta:</strong> ${fmt(p.resposta)}</p></div>`;
  }).join("");
  return `<div class="pdoc">
      <div class="pmarca">📚 PreparaMZ — Exames Resolvidos de Moçambique</div>
      <h1>${esc(titulo)}</h1>
      <p class="psub">${subtitulo}</p>
      <p class="pmeta">${esc(meta)}</p>
      ${partes}
      <p class="pfoot">Enunciado: exame oficial (INEC/MINEDH). Resoluções: equipa PreparaMZ. · PreparaMZ — acesso completo por ${CONFIG.preco} no WhatsApp.</p>
    </div>`;
}

// Vista de documento da resolução dentro da app (interface 5) — só com acesso.
function vistaDocumentoResolucao() {
  if (!exameActual || !temAcesso()) return;
  actualizarEstado();
  const e = exameActual;
  app.innerHTML = `
    <button class="voltar" onclick="desenharExame()">← Voltar ao exame</button>
    <section class="hero">
      <h1>Resolução — ${esc(e.disciplina)} ${e.ano} · ${esc(e.chamada)}</h1>
      <p>Documento completo, página a página, dentro da app. Os originais oficiais ficam separados, no separador "Enunciado original".</p>
    </section>
    <div class="barra-accao"><button class="botao" onclick="imprimirPDF('resolvido')">📄 Guardar resolução em PDF</button></div>
    <div class="doc">${documentoHTML("resolvido")}</div>`;
  window.scrollTo(0, 0);
}

function imprimirPDF(tipo) {
  const e = exameActual;
  if (!e) return;
  if (tipo === "resolvido" && !temAcesso()) return;
  document.getElementById("print-area").innerHTML = documentoHTML(tipo);
  window.print();
}

// PWA: service worker (offline)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// Selo de versão no rodapé (visível também na página inicial)
const elVersao = document.getElementById("versao-app");
if (elVersao) elVersao.textContent = "PreparaMZ · " + VERSAO_APP;

vistaInicial();
