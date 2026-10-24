// ============================================================
// PreparaMZ — figuras (imagens) das perguntas, em SVG desenhado
// pela equipa PreparaMZ. Chave: id do exame → número da pergunta
// → { enunciado, resolucao } (qualquer um pode faltar).
// ============================================================

window.FIGURAS = {
  "mat-10-2025-1": {
    "1": {
      enunciado: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Venn com três conjuntos">
  <rect x="8" y="8" width="284" height="214" rx="10" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="20" y="30" font-size="13" fill="#334155">300 pessoas</text>
  <circle cx="115" cy="95" r="52" fill="rgba(11,122,62,0.10)" stroke="#0b7a3e" stroke-width="1.6"/>
  <circle cx="185" cy="95" r="52" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="150" cy="148" r="52" fill="rgba(217,119,6,0.10)" stroke="#d97706" stroke-width="1.6"/>
  <text x="76" y="62" font-size="15" font-weight="bold" fill="#0b7a3e">F</text>
  <text x="216" y="62" font-size="15" font-weight="bold" fill="#2563eb">L</text>
  <text x="144" y="208" font-size="15" font-weight="bold" fill="#d97706">C</text>
  <text x="150" y="228" font-size="11" fill="#64748b" text-anchor="middle"></text>
</svg>`,
      resolucao: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Venn preenchido">
  <rect x="8" y="8" width="284" height="214" rx="10" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="284" y="30" font-size="12.5" fill="#b91c1c" text-anchor="end">nenhum: 30</text>
  <circle cx="115" cy="95" r="52" fill="rgba(11,122,62,0.10)" stroke="#0b7a3e" stroke-width="1.6"/>
  <circle cx="185" cy="95" r="52" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="150" cy="148" r="52" fill="rgba(217,119,6,0.10)" stroke="#d97706" stroke-width="1.6"/>
  <text x="76" y="62" font-size="15" font-weight="bold" fill="#0b7a3e">F</text>
  <text x="216" y="62" font-size="15" font-weight="bold" fill="#2563eb">L</text>
  <text x="144" y="208" font-size="15" font-weight="bold" fill="#d97706">C</text>
  <g font-size="13.5" font-weight="bold" fill="#14532d" text-anchor="middle">
    <text x="150" y="127">90</text>
    <text x="150" y="86">45</text>
    <text x="117" y="143">30</text>
    <text x="185" y="143">15</text>
    <text x="82" y="106">45</text>
    <text x="218" y="106">30</text>
    <text x="150" y="184">15</text>
  </g>
</svg>`
    },
    "3": {
      enunciado: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gráfico da função">
  <line x1="165" y1="8" x2="165" y2="206" stroke="#334155" stroke-width="1.4"/>
  <line x1="14" y1="105" x2="292" y2="105" stroke="#334155" stroke-width="1.4"/>
  <text x="172" y="18" font-size="13" fill="#334155">y</text>
  <text x="282" y="98" font-size="13" fill="#334155">x</text>
  <line x1="14" y1="131" x2="292" y2="131" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="6 4"/>
  <text x="238" y="126" font-size="12" fill="#dc2626">y = −1</text>
  <path d="M81,17 C100,22 120,45 137,63 C152,79 158,92 165,105 C175,118 190,124 221,127 C245,129 265,130 288,130.5" fill="none" stroke="#0b7a3e" stroke-width="2.4"/>
  <circle cx="109" cy="27" r="3.6" fill="#0b7a3e"/>
  <text x="76" y="22" font-size="12" fill="#14532d">(−2, 3)</text>
  <circle cx="165" cy="105" r="3.6" fill="#0b7a3e"/>
  <text x="150" y="98" font-size="12" fill="#14532d">0</text>
</svg>`
    },
    "4": {
      resolucao: `<svg viewBox="0 0 260 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Esboço da parábola">
  <line x1="10" y1="55" x2="250" y2="55" stroke="#334155" stroke-width="1.4"/>
  <line x1="30" y1="8" x2="30" y2="202" stroke="#334155" stroke-width="1.4"/>
  <text x="240" y="48" font-size="13" fill="#334155">x</text>
  <text x="36" y="18" font-size="13" fill="#334155">y</text>
  <path d="M30,165 C45,120 60,85 74,77 C85,70 90,66 96,66 C102,66 107,70 118,77 C132,85 147,120 162,165" fill="none" stroke="#0b7a3e" stroke-width="2.4"/>
  <circle cx="96" cy="66" r="3.6" fill="#b91c1c"/>
  <text x="104" y="60" font-size="12" fill="#b91c1c">V(3, −1)</text>
  <circle cx="30" cy="165" r="3.6" fill="#0b7a3e"/>
  <text x="38" y="182" font-size="12" fill="#14532d">(0, −10)</text>
  <text x="196" y="190" font-size="12.5" fill="#14532d">f(x) = −x² + 6x − 10</text>
</svg>`
    },
    "5": {
      enunciado: `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triângulo rectângulo">
  <polygon points="70,40 70,175 240,175" fill="rgba(11,122,62,0.07)" stroke="#14532d" stroke-width="2"/>
  <polyline points="70,161 84,161 84,175" fill="none" stroke="#14532d" stroke-width="1.6"/>
  <path d="M206,175 A34,34 0 0 1 214,148" fill="none" stroke="#b91c1c" stroke-width="1.6"/>
  <text x="188" y="168" font-size="13" fill="#b91c1c">60°</text>
  <text x="8" y="112" font-size="13.5" fill="#14532d">5 cm</text>
  <text x="150" y="96" font-size="13.5" fill="#14532d">h = ?</text>
  <text x="58" y="34" font-size="13" fill="#334155">A</text>
  <text x="58" y="192" font-size="13" fill="#334155">B</text>
  <text x="246" y="192" font-size="13" fill="#334155">C</text>
</svg>`
    }
  },
  "mat-10-2024-1": {
    "7": {
      enunciado: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectângulo com diagonal">
  <rect x="55" y="45" width="190" height="110" fill="rgba(11,122,62,0.06)" stroke="#14532d" stroke-width="2"/>
  <line x1="55" y1="155" x2="245" y2="45" stroke="#0b7a3e" stroke-width="2.2"/>
  <polyline points="55,57 67,57 67,45" fill="none" stroke="#14532d" stroke-width="1.5"/>
  <path d="M85,155 A30,30 0 0 0 77,132" fill="none" stroke="#b91c1c" stroke-width="1.6"/>
  <text x="93" y="149" font-size="14" fill="#b91c1c">x</text>
  <text x="150" y="36" font-size="13.5" fill="#14532d" text-anchor="middle">DC = y</text>
  <text x="168" y="92" font-size="13.5" fill="#14532d">AC = 2y</text>
  <text x="44" y="172" font-size="13" fill="#334155">A</text>
  <text x="248" y="172" font-size="13" fill="#334155">B</text>
  <text x="248" y="40" font-size="13" fill="#334155">C</text>
  <text x="42" y="40" font-size="13" fill="#334155">D</text>
</svg>`
    },
    "8": {
      resolucao: `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gráfico de g(x) igual a logaritmo de base 2">
  <line x1="10" y1="140" x2="292" y2="140" stroke="#334155" stroke-width="1.4"/>
  <line x1="45" y1="8" x2="45" y2="202" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="6 4"/>
  <text x="282" y="133" font-size="13" fill="#334155">x</text>
  <text x="52" y="18" font-size="13" fill="#334155">y</text>
  <text x="14" y="196" font-size="11" fill="#dc2626">x = 0</text>
  <path d="M58,170 C64,152 68,146 72,140 C82,126 90,116 99,110 C118,96 135,86 153,80 C190,66 225,56 261,50" fill="none" stroke="#0b7a3e" stroke-width="2.4"/>
  <g fill="#0b7a3e">
    <circle cx="58" cy="170" r="3.4"/><circle cx="72" cy="140" r="3.4"/><circle cx="99" cy="110" r="3.4"/><circle cx="153" cy="80" r="3.4"/><circle cx="261" cy="50" r="3.4"/>
  </g>
  <g font-size="11" fill="#14532d">
    <text x="30" y="186">(½, −1)</text>
    <text x="76" y="152">(1, 0)</text>
    <text x="102" y="124">(2, 1)</text>
    <text x="156" y="94">(4, 2)</text>
    <text x="238" y="40">(8, 3)</text>
  </g>
</svg>`
    },
    "9": {
      enunciado: `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parábola da função quadrática">
  <line x1="8" y1="95" x2="292" y2="95" stroke="#334155" stroke-width="1.4"/>
  <line x1="150" y1="8" x2="150" y2="202" stroke="#334155" stroke-width="1.4"/>
  <text x="282" y="88" font-size="13" fill="#334155">x</text>
  <text x="157" y="18" font-size="13" fill="#334155">y</text>
  <path d="M14,155 C30,110 38,100 48,95 C60,88 72,78 82,75 C92,78 104,88 116,95 C128,100 140,115 150,155" fill="none" stroke="#0b7a3e" stroke-width="2.4"/>
  <g fill="#b91c1c">
    <circle cx="48" cy="95" r="3.4"/><circle cx="116" cy="95" r="3.4"/><circle cx="82" cy="75" r="3.4"/>
  </g>
  <circle cx="150" cy="155" r="3.4" fill="#0b7a3e"/>
  <g font-size="12" fill="#14532d">
    <text x="30" y="86">−3</text>
    <text x="110" y="86">−1</text>
    <text x="88" y="66">vértice (−2, 1)</text>
    <text x="157" y="168">(0, −3)</text>
  </g>
</svg>`
    }
  },
  "mat-10-2023-1": {
    "2": {
      enunciado: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Venn com três conjuntos: Matemática, Português e Inglês">
  <rect x="8" y="8" width="284" height="214" rx="10" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="20" y="30" font-size="13" fill="#334155">U = ?</text>
  <circle cx="115" cy="95" r="52" fill="rgba(11,122,62,0.10)" stroke="#0b7a3e" stroke-width="1.6"/>
  <circle cx="185" cy="95" r="52" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="150" cy="148" r="52" fill="rgba(217,119,6,0.10)" stroke="#d97706" stroke-width="1.6"/>
  <text x="76" y="62" font-size="15" font-weight="bold" fill="#0b7a3e">M</text>
  <text x="216" y="62" font-size="15" font-weight="bold" fill="#2563eb">P</text>
  <text x="144" y="208" font-size="15" font-weight="bold" fill="#d97706">I</text>
  <g font-size="13.5" font-weight="bold" fill="#14532d" text-anchor="middle">
    <text x="150" y="127">1030</text>
    <text x="150" y="86">198</text>
    <text x="113" y="143">155</text>
    <text x="187" y="143">120</text>
    <text x="82" y="106">90</text>
    <text x="218" y="106">85</text>
    <text x="150" y="184">52</text>
  </g>
</svg>`,
      resolucao: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Venn preenchido com o total da escola">
  <rect x="8" y="8" width="284" height="214" rx="10" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="20" y="30" font-size="13" fill="#334155">U = ?</text>
  <text x="284" y="30" font-size="12.5" fill="#b91c1c" text-anchor="end">U = 1730</text>
  <circle cx="115" cy="95" r="52" fill="rgba(11,122,62,0.10)" stroke="#0b7a3e" stroke-width="1.6"/>
  <circle cx="185" cy="95" r="52" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="150" cy="148" r="52" fill="rgba(217,119,6,0.10)" stroke="#d97706" stroke-width="1.6"/>
  <text x="76" y="62" font-size="15" font-weight="bold" fill="#0b7a3e">M</text>
  <text x="216" y="62" font-size="15" font-weight="bold" fill="#2563eb">P</text>
  <text x="144" y="208" font-size="15" font-weight="bold" fill="#d97706">I</text>
  <g font-size="13.5" font-weight="bold" fill="#14532d" text-anchor="middle">
    <text x="150" y="127">1030</text>
    <text x="150" y="86">198</text>
    <text x="113" y="143">155</text>
    <text x="187" y="143">120</text>
    <text x="82" y="106">90</text>
    <text x="218" y="106">85</text>
    <text x="150" y="184">52</text>
  </g>
</svg>`
    },
    "10": {
      enunciado: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gráfico da função g de x: parábola com vértice em 2, 1">
  <line x1="75" y1="12" x2="75" y2="228" stroke="#334155" stroke-width="1.4"/>
  <line x1="12" y1="185" x2="292" y2="185" stroke="#334155" stroke-width="1.4"/>
  <text x="282" y="178" font-size="13" fill="#334155">x</text>
  <text x="82" y="22" font-size="13" fill="#334155">y</text>
  <path d="M58,45 Q110,168 151,164 Q192,168 244,45" fill="none" stroke="#0b7a3e" stroke-width="2.4"/>
  <line x1="75" y1="80" x2="227" y2="80" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="4 4"/>
  <line x1="227" y1="80" x2="227" y2="185" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="4 4"/>
  <line x1="75" y1="164" x2="151" y2="164" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="4 4"/>
  <line x1="151" y1="164" x2="151" y2="185" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="4 4"/>
  <g fill="#b91c1c">
    <circle cx="75" cy="80" r="3.4"/><circle cx="151" cy="164" r="3.4"/><circle cx="227" cy="80" r="3.4"/>
  </g>
  <g font-size="12" fill="#14532d">
    <text x="58" y="84">5</text>
    <text x="58" y="168">1</text>
    <text x="50" y="210">−1</text>
    <text x="30" y="200">−1</text>
    <text x="64" y="200">0</text>
    <text x="146" y="200">2</text>
    <text x="222" y="200">4</text>
    <text x="160" y="150">V(2, 1)</text>
  </g>
</svg>`
    }
  }
};
